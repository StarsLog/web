const InputText = (props) => {

    const handleChange = e => {
        if(props.onchange){
            props.onchange(e.target.value);
        }
    }

    return (
        <>
            <div className={`input-group sc-input ${props?.notFloat ? '' : 'form-floating'}`}>
                {props.start_icon ? <span className="input-icon">{props.start_icon}</span> : ''}
                <input onChange={handleChange} type={(props.type? props.type:'text')} className={"form-control "+(props.invalid?'is-invalid':'')} defaultValue={props.defaultValue} readOnly={props.readOnly} placeholder={props?.notFloat ? props?.placeholder : props?.label} disabled={props.disabled} required={props.required}></input>
                {props?.label && 
                    <label>{props.label}</label>
                }
                <div className="invalid-feedback">
                  {props.invalid}
                </div>
                {props.end_icon ? <span className="input-icon">{props.end_icon}</span> : ''}
            </div>
            {props.help_text ? <div className='assistive-text'>{props.help_text}</div> : ''}
            
        </>
    )
}

export default InputText;