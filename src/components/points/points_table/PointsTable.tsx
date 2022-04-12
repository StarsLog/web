import { useState } from "react";
import PointLine from "../point_line/PointLine";

const PointsTable = ({data, setSidebarOpen}) => {
    const [show, setShow] = useState(false);
  
    const handleShow = () => {
      setShow(show?false:true);
    }
  
    const icons = [];
    data.icons.forEach((icon, k) => {
      icons.push(<PointLine key={k} icon={icon} setSidebarOpen={setSidebarOpen}/>)
    })

    return(
      <div className="route-card mb-2 card">
        <div className="card-body">
            <span onClick={()=> handleShow()} className="title" aria-expanded="false">{data.locationDate == 'public' ? 'Public Points' : data.locationDate}<span className="badge rounded-pill bg-warning text-dark float-end">{icons.length}</span></span>
            <div className={`collapse route-card-content ${show ? 'show': ''}`} id={`route-${data.locationDate}`}>
                {icons}
            </div>
        </div>
      </div>
    )
  }

export default PointsTable;