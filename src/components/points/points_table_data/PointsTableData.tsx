import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import call2API from "../../../app/api";
import { useUser } from "../../../app/login";
import PointsTable from "../points_table/PointsTable";

const PointsTableData = ({setSidebarOpen}) => {
    const [fetching, setFetching] = useState(true);
    const [pointsTables,setPointsTables] = useState([])
    const user = useSelector((state:any) => { return state.session.value; })
    const userSession = useUser()

    
    useEffect(() => {
      call2API(data => {
        let datePoints = {
          public: []
        }
        if(data.length){
          let tmpPointTables = [];
          data.forEach((location, key) => {
            const dateLog = new Date(location.date_add);
            const locationDate = dateLog.getFullYear()+'-'+(dateLog.getMonth()+1).toString().padStart(2,'0')+'-'+dateLog.getDate().toString().padStart(2,'0');
            location.locatorTime = dateLog.getHours().toString().padStart(2,'0')+':'+dateLog.getMinutes().toString().padStart(2,'0')+':'+dateLog.getSeconds().toString().padStart(2,'0');
            if(!datePoints.hasOwnProperty(locationDate)){
              datePoints[locationDate] = []
            }
            if(!userSession.loggedIn){
              datePoints.public.push(location);
            }else{
              if(userSession.id_user != parseInt(location.id_user)){
                datePoints.public.push(location);
              }else{
                if(parseInt(location.public)){
                  datePoints.public.push(location);
                }
                datePoints[locationDate].push(location);
              } 
            }
          })
          Object.entries(datePoints).forEach(([locationDate, icons]) => {
            if(datePoints[locationDate].length){
              tmpPointTables.push(<PointsTable key={locationDate} data={{locationDate: locationDate, icons:icons}} setSidebarOpen={setSidebarOpen}/>)
            }
          })
          setPointsTables(tmpPointTables);    
        }
        setFetching(false);
      },'GET','tracker',userSession.jwt)
    }, [user]);
  
    if(fetching){
      return <></>;
    }else{
      return <>{pointsTables}</>;
    }
    
  }

  export default PointsTableData