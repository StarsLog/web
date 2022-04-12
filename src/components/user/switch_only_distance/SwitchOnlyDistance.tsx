import { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import call2API from "../../../app/api";

const SwitchOnlyDistance = () => {
    const [switchStatus, setSwitchStatus] = useState(false);

    const handleClickSwitch = (e) => {
        e.preventDefault();
        e.stopPropagation();
        call2API(data => {

        },'POST','me','',JSON.stringify({
            only_distance: !switchStatus
        }))
        setSwitchStatus(!switchStatus)
       
    }

    useEffect(() => {
        call2API(data => {
            setSwitchStatus(data.only_distance)
        },'GET','me')
    },[])
    return (
        <div className='' onClick={ (e) => handleClickSwitch(e)}>
            <img style={{width:'32px'}}src={`/images/switch_${switchStatus ? 'on' : 'off'}.png`} /> Save only current position
            <OverlayTrigger
                delay={{ hide: 50, show: 100 }}
                overlay={(props) => (
                <Tooltip {...props}>
                    If off, each call to save location, makes also a record on your flight log (usefull to create flight routes)
                </Tooltip>
                )}
                placement="left"
            ><i className="las la-question-circle"></i>
            </OverlayTrigger>
            
        </div>
    )
}

export default SwitchOnlyDistance;