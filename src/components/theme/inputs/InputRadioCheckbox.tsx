
const InputRadioCheckbox = (props) => {
    const handleChange = e => {
        if(props.onchange){
            props.onchange(e.target.checked);
        }
    }
    return (
        <div className={"form-group "+(props.type && props.type == 'switch' ? 'form-switch' : '')+(props.className ? ' '+props.className : '')}>
            <input onChange={handleChange} type={props.type ? (props.type == 'switch' ? 'checkbox': props.type) : "radio"} 
                className={"form-check-input "+(props.className ? props.className : '')}  
                value={props.value} 
                id={props.id} 
                name={props.name} 
                checked={props.checked} 
                disabled={props.disabled}
            />
        </div>
    )
}

export default InputRadioCheckbox;