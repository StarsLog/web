import { useState } from 'react';
import { BsEye, BsEyeSlash } from "react-icons/bs";

const InputPassword = (props) => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = (e) => {
      e.preventDefault();
      e.stopPropagation();
      setPasswordShown(passwordShown ? false : true);
    };

    const handleChange = e => {
        if(props.onchange){
            props.onchange(e.target.value);
        }
    }
  
    return (
        <>
            <div className='form-floating input-group sc-input'>
                {props.start_icon ? <span className="input-icon">{props.start_icon}</span> : ''}
                <input onChange={handleChange} type={passwordShown ? "text" : "password"} className={"form-control "+(props.invalid?'is-invalid':'')} placeholder={props.label}></input>
                <label>{props.label}</label>
                <div className="invalid-feedback">
                  {props.invalid}
                </div>
                <span className="input-icon pe-auto" id="basic-addon1" onClick={(e) => togglePasswordVisiblity(e)}>{passwordShown ? <BsEyeSlash/> : <BsEye/> }</span>
                
            </div>
            {props.help_text ? <div className='assistive-text'>{props.help_text}</div> : ''}
        </>
    )
}

export default InputPassword;