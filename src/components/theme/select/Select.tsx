import { useState } from 'react';
import {default as ReactSelect} from 'react-select';

const Select = (props) => {
    const [floatLabel, setFloatLabel] = useState(props?.defaultValue ? props.defaultValue : false);

    const handleOnChange = (e) => {
        setFloatLabel(e.value ? true : false);
        if(props.onchange){
            props.onchange(e.value);
        }
    }

    return (
        <div className='form-floating custom-select sc-input'>
            <ReactSelect instanceId={props.instanceId} classNamePrefix="custom-select" options={props.options} defaultValue={props?.defaultValue ? props.defaultValue : ''} placeholder="" isSearchable={false} onChange={handleOnChange} />
            <label className={floatLabel ? "floating" : ""}>{props.label}</label>
        </div>
    )
}

export default Select;