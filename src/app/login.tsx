import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { getCookie, removeCookie, setCookie } from 'typescript-cookie'
import jwt from 'jsonwebtoken';
import call2API from './api';

export const initialUser = () => {
   return {loggedIn: false, id_user: 0, email: null, api_token: null, enabled: true, jwt: null, distance:{}}
}

export function useUser({
    redirectTo = "",
    redirectIfFound = false,
    redirectNoNickname = false,
    secure = false,
  } = {}) {
    const user = getUserLogged()
    //const user = useSelector((state:any) => state.session.value)
    const router = useRouter();
    useEffect(() => {
      // if no redirect needed, just return (example: already on /dashboard)
      // if user data not yet there (fetch in progress, logged in or not) then don't do anything yet
      if (!user) return;

      if (
        // If redirectTo is set, redirect if the user was not found.
        (redirectTo && !redirectIfFound && !redirectNoNickname && !user?.loggedIn) ||
        // If redirectIfFound is also set, redirect if the user was found
        (redirectIfFound && user?.loggedIn) ||
        // If redirectNoNickname is also set, redirect if the user don't have nickname
        (redirectNoNickname && user?.loggedIn && !user?.email)
      ) {
        if(router.pathname.toString().indexOf(redirectTo) == -1){
            router.push(redirectTo);
        }
      }
      if(secure && !user?.loggedIn){
          router.push('/');
      }
    }, [user, redirectIfFound, redirectTo]);
  
    return user;
}

export const getUserLogged = () => {
    const user = initialUser();
    if (typeof window !== 'undefined') {
        const jwtCookie = getCookie('jwt');
        if (typeof jwtCookie !== 'undefined' && jwtCookie.length) {
            const data = jwt.decode(jwtCookie);
            if(data.enabled){
                user.loggedIn = true;
                user.id_user = data.uid;
                user.email = data.email;
                user.api_token = data.api_token;
                user.enabled = data.enabled;
                user.jwt =  jwtCookie;
            } 
        }       
          
    }
    return user;
}

export const sendLogin = (formData, setInvalidResponse, handleSetUser) => {
    try{
        call2API( data => {
            if(data.error){
                if(data.messages.error == 'email_not_found'){
                    setInvalidResponse('email_not_found');
                }else if(data.messages.error == 'wrong_password'){
                    setInvalidResponse('wrong_password');
                }else{
                    setInvalidResponse(data.messages.error);
                }
            }else if(data.jwt){
                const jwtToken = jwt.decode(data.jwt);
                setCookie('jwt', data.jwt, { expires: new Date(jwtToken.exp * 1000) })
                const user = getUserLogged();
                handleSetUser(user);
                window.dispatchEvent(new CustomEvent('loadMapLocators',{detail:{force:1}}))   
            }else{
                setInvalidResponse('error_submitting_data');
            }
        }, 'POST', 'login', '',JSON.stringify({
            email: formData.email,
            password: formData.password
        }))      
    }catch(err){
        console.log('error', err)
    }
}

export const sendLogout = (handleSetUser) => {
    removeCookie('jwt');
    handleSetUser(getUserLogged());
    window.dispatchEvent(new CustomEvent('loadMapLocators',{detail:{force:1}}))
}