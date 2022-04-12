import { useEffect, useState } from "react";
import call2API from "../../app/api";
import { useUser } from "../../app/login";

const DistanceMeter = () => {

    const [distance, setDistance] = useState('0');
    const [origin,setOrigin] = useState({x:0,y:0,z:0})
    const [target,setTarget] = useState({x:0,y:0,z:0, data: { name: '', id_tracker: 0}})
    const [refresh, setRefresh] = useState(0)
    const [check, setCheck] = useState(0)
    const [opened, setOpened] = useState(true);

    const userSession = useUser()

    useEffect(() => {
        if(userSession.loggedIn){
            getDistance();
        }
    },[refresh])

    useEffect(() => {
        const id = setInterval(() => {
            if(userSession.loggedIn && target?.data?.id_tracker){
                getDistance();
            }
            setCheck(check + 1)
        }, 5000);
        return () => clearInterval(id);
    }, [check])

    const handleCenterClick = (id) => {
        window.dispatchEvent(new CustomEvent('searchCenterObject',{detail:{id:`${id}`}}))
    }

    const handleUnpin = () => {
        call2API(data => {
            setRefresh(refresh+1)
        },'POST','me','',JSON.stringify({
            pinned: 0
        }))
    }
    if(typeof window !== 'undefined'){
        window.addEventListener('refreshDistance', (event) => setRefresh(refresh+1))
    }

    const getDistance = () => {
        call2API(data => {
            setDistance((data.distance / 1000).toFixed(2))
            if(data.origin.x != origin.x || data.origin.y != origin.y || data.origin.z != origin.z){
                window.dispatchEvent(new CustomEvent('printCurrentPosition'))
            }
            setOrigin(data.origin);
            setTarget(data.target);
        },'GET','tracker/distance')
    }

    
    return(
        <div className={`distance-meter ${!opened ? 'closed' : ''}`}>
            <div onClick={() => setOpened(!opened)} className='opener fs-1'>{opened ? <i className="las la-caret-left"></i> : <i className="las la-caret-right"></i>}</div>
            {userSession.loggedIn ?
            <>
                <div><span className="label">Distance:</span> <span className="distance">{distance}</span> kms</div>
                <div><span className="label">Current position:</span>
                    <ul>
                        <li><span className="x">X</span>  {origin?.x}</li>
                        <li><span className="y">Y</span>  {origin?.y}</li>
                        <li><span className="z">Z</span>  {origin?.z}</li>
                        <li onClick={() => handleCenterClick('current_location')} className="clickable"><i className="las la-map-marker" title="Go to"></i> Go to position</li>
                    </ul>
                </div>
                {target?.data?.id_tracker ?
                <div><span className="label">Target position:</span>
                    <ul>
                        <li><span className="x">X</span>  {target?.x}</li>
                        <li><span className="y">Y</span>  {target?.y}</li>
                        <li><span className="z">Z</span>  {target?.z}</li>
                        <li onClick={() => handleCenterClick(target?.data?.id_tracker)} className="clickable"><i className="las la-map-marker" title="Go to"></i> Go to position ({target?.data?.name})</li>
                        <li onClick={() => handleUnpin()} className="clickable"><i className="las la-unlink" title="Remove target"></i> Remove target</li>
                    </ul>
                </div>
                : '' }
            </>
            : <>
                <div><span className="label">Distance:</span> <span className="distance">0</span> kms</div>
                <div>To use the Distance Meter you must log-in</div>
            </>
            }
        </div>
    )
}

export default DistanceMeter;