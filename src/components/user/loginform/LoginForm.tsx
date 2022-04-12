import { useState } from 'react';
import validator from 'validator';
import { useDispatch } from 'react-redux';
import { FaUserAstronaut } from 'react-icons/fa';
import InputText from '../../theme/inputs/InputText';
import InputPassword from '../../theme/inputs/InputPassword';
import Button from '../../theme/button/Button';
import {initialUser, sendLogin, sendLogout, useUser } from '../../../app/login';
import { setSession } from '../../../store/session/sessionSlice';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SwitchOnlyDistance from '../switch_only_distance/SwitchOnlyDistance';

const LoginForm = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState(initialUser());
    const [formData,setFormData] = useState({email: '',password: '', invalid: false})
    const [invalidPassword,setInvalidPassword] = useState('');
    const [invalidEmail,setInvalidEmail] = useState('');
    const [invalidResponse, setInvalidResponse] = useState('');
    const [copied, setCopied] = useState(false);
    

    const handleFormData = (field,value) => {
        const tmpFormData = formData;
        tmpFormData[field] = value;
        setFormData(tmpFormData);
    }

    const validateForm = () => {
        const tmpFormData = formData;
        setInvalidPassword('');
        setInvalidEmail('');
        setInvalidResponse('');
        tmpFormData.invalid = false;
        if(!validator.isEmail(tmpFormData.email)){
            setInvalidEmail('email_not_valid');
            tmpFormData.invalid = true;
        }
        if(!validator.isLength(tmpFormData.password,{min:6, max: 25})){
            console.log(tmpFormData.password.length);
            setInvalidPassword('password_not_meet_length');
            tmpFormData.invalid = true;
        }
        setFormData(tmpFormData);
        return !tmpFormData.invalid;
    }

    const userSession = useUser();

    const handleSetUser = (user) => {
        setUser(user)
        dispatch(setSession(user));
    }

    const sendLoginForm = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(validateForm()){
            sendLogin(formData,setInvalidResponse,handleSetUser);
        }
    }

    const preventClose = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const makeLogout = (e) => {
        sendLogout(handleSetUser)
    }

    return (
        <div className="dropdown login">
            <a className="dropdown-toggle login-icon" href="#" id="loginDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {userSession.loggedIn ? <><FaUserAstronaut/></> :  <><FaUserAstronaut/></>}
            </a>
            <div className="dropdown-menu login-menu" aria-labelledby="loginDropdown">
                {userSession.loggedIn ?
                <>
                    <div className='mb-2'>
                        Email: {userSession.email}
                    </div>
                    <div className='mb-2'>
                        API Token (click to copy): {copied ? <span style={{color: 'red'}}>Copied</span> : null}
                        <CopyToClipboard text={userSession.api_token}
                            onCopy={() => setCopied(true)}>
                            <span className='text-break d-block cursor-copy api-token' onClick={(e) => preventClose(e)}>{userSession.api_token}</span>
                        </CopyToClipboard>
                        
                    </div>
                    <SwitchOnlyDistance />
                    <Button type="primary" text={`Logout`} className="w-100 mt-3" onclick={(e) => makeLogout(e)} />
                </>
                :
                <>
                    <div className='mb-2'>
                        <InputText type="email" label={'Email'} onchange={(e) => { handleFormData('email',e)}} invalid={invalidEmail}/>
                    </div>
                    <div className='mb-2'>
                        <InputPassword label="Password"  onchange={(e) => { handleFormData('password',e)}} invalid={invalidPassword} />
                    </div>
                    {invalidResponse ? <div className='alert alert-danger'>{invalidResponse}</div>: ''} 
                    <Button type="primary" text={`Login`} className="w-100" onclick={(e) => sendLoginForm(e)} />
                </>
                }
            </div>
        </div>
    )
}

export default LoginForm