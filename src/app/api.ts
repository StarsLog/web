import { getCookie } from "typescript-cookie";
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const call2API = (callback, method = 'GET', path = '/', jwt = '', body: any = '' ) => {
    const jwtCookie = getCookie('jwt');
    let options:any = {
        method: method
    }
    let headers:any = {
        'Content-Type': 'application/json',
    }
    if (typeof jwtCookie !== 'undefined' && jwtCookie.length) {
        headers = {
            ...headers,
            'Authorization': `Bearer ${jwtCookie}`
        }
    }

    if(body.length){
        options = {
            ...options,
            body: body
        }
    }

    options = {
        ...options,
        headers: headers
    }

    fetch(
        `${publicRuntimeConfig.API_ENDPOINT}/${path}`,
        options
    )
    .then(response => response.json())
    .then(data => {
        callback(data);
    })
}

export default call2API