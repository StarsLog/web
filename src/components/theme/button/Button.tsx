const Button = (props) => {
    const handleClick = e => {
        if(props.onclick){
            props.onclick(e);
        }
    }

    return (
        <button onClick={handleClick} title={props?.title} type={props.submit ? "submit" : "button"} className={'btn btn-' + props.type + (props.size ? ' btn-'+props.size:'') + (props.className ? ' '+props.className:'')} disabled={props.disabled} >
            {props.icon ? <div className='icon'>{props.icon}</div> : ''}
            {props.text ? <div className={'d-inline-block ' + (props.icon ? (props.size && props.size == 'lg' ? 'ms-4':'ms-2') : '')}>{props.text}</div> : ''}
        </button>
    )
}

export default Button;