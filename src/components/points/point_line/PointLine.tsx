import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import call2API from "../../../app/api";
import { useUser } from "../../../app/login";
import InputText from '../../theme/inputs/InputText';
import Select from '../../theme/select/Select';


const categoryOptions = [
  {
    id: 1,
    name: 'Mining',
    icon: 'las la-gem',
  },{
    id: 2,
    name: 'Freight Goods',
    icon: 'las la-balance-scale',
  },{
    id: 3,
    name: 'Pirates',
    icon: 'las la-skull-crossbones',
  },{
    id: 4,
    name: 'Derelict',
    icon: 'las la-life-ring',
  },{
    id: 5,
    name: 'Mission',
    icon: 'las la-scroll',
  },{
    id: 6,
    name: 'Repair',
    icon: 'las la-tools',
  },{
    id: 7,
    name: 'Refuel',
    icon: 'las la-charging-station',
  },{
    id: 8,
    name: 'ASOP Terminal',
    icon: 'las la-plane-departure',
  },{
    id: 9,
    name: 'Satellite',
    icon: 'las la-satellite',
  },{
    id: 10,
    name: 'Clinic',
    icon: 'las la-star-of-life',
  }
  
]

const PointLine = ({icon, setSidebarOpen}) => {

    const [name, setName] = useState(icon.name);
    const [category, setCategory] = useState(icon.category);
    const [isPublic, setPublic] = useState(parseInt(icon.public) === 1 ? true : false);
    const [openedDropdown, setOpenedDropdown] = useState(false);
    const [visible, setVisible] = useState(true);
    const userSession = useUser()
    
    const handleCenterClick = () => {
      window.dispatchEvent(new CustomEvent('searchCenterObject',{detail:{id:`${icon.id}`}}))
      setSidebarOpen(false);
    }
    
    const handleIconData = (type,value) => {
      setName(value);
      //tmpIconData[type] = value;
    }

    const handleCategoryData = (value) => {
      setCategory(value);
    }

    const handleDeletePoint = (e) => {
      if(userSession.loggedIn){
        e.preventDefault();
        e.stopPropagation();
        setVisible(false);

        call2API(data => {

        }, 'DELETE', `tracker/${icon.id}`, userSession.jwt)
        
      }
    }

    const handleMakePublic = (e) => {
      if(userSession.loggedIn){
        e.preventDefault();
        e.stopPropagation();

        call2API(data => {
          setPublic(!isPublic);
          //location.reload();
        },'POST', `tracker/${icon.id}`, userSession.jwt, JSON.stringify({
          public: !isPublic
        }))
        
      }
    }

    const handleSetPin = (e) => {
      if(userSession.loggedIn){
        e.preventDefault();
        e.stopPropagation();
        setVisible(false);
        setSidebarOpen(false);
        call2API(data => {
          window.dispatchEvent(new CustomEvent('refreshDistance'))
        },'POST','me','',JSON.stringify({
            pinned: icon.id
        }))
        
      }
    }

    const handleOpenedDropdown = (openStatus) => {
      if(!openStatus && openedDropdown && visible && userSession.loggedIn){
        //Process one time name & category modification
        if(userSession.id_user == parseInt(icon.id_user)){
          call2API(data => {

          }, 'POST', `tracker/${icon.id}`, userSession.jwt, JSON.stringify({
            name: name,
            category: category
          }))
        }
      }
      setOpenedDropdown(openStatus);
    }
  
    const options = [];

    categoryOptions.forEach((cat) => {
      options.push({
        value: cat.id,
        label: <span dangerouslySetInnerHTML={{ __html: `<i class="${cat.icon}"></i> ${cat.name}` }} /> 
      })
    })
     
  
    return (
      <>
      {visible ?
        <div className="row mb-1 route-point" data-icon-id={icon.id}>
          <div className="col-3">
            <i className="las la-map-marker locator-point" title="Go to" onClick={()=>handleCenterClick()}></i>
            <span className="route-poi-icon"></span><span className="route-date">{icon.locatorTime}</span>
          </div>
          <div className="col-7">
            <div className="category-label">{category > 0 ? <><span>POI: </span><i className={`${categoryOptions[category-1].icon}`}></i> {categoryOptions[category-1].name}</> : ''}</div>
            <div className="name-label"><span>Name: </span>{name}</div>
          </div>
          <div className="col-2 route-config">
            {userSession.loggedIn ? 
              <Dropdown onToggle={(e) => handleOpenedDropdown(e)}>
                <Dropdown.Toggle variant="primary" id={`point-settings-${icon.id}`} className={'btn-sm'}>
                  <i className='las la-cog'/>
                </Dropdown.Toggle>
                <Dropdown.Menu className='p-2'>
                  {userSession.id_user == parseInt(icon.id_user) ? 
                    <>
                    <div className='mb-2'>
                      <InputText defaultValue={name} label={'Name'} onchange={(e) => handleIconData('name',e)}/>
                    </div>
                    <div className='mb-2'>
                      <Select onchange={(e) => handleCategoryData(e)} instanceId={`selector-poi-${icon.id}`} options={options} defaultValue={options[parseInt(category)-1]} label={'POI Type'}/>
                    </div>
                    <Dropdown.Item href="#" onClick={(e) => handleMakePublic(e)}>{isPublic ? <><i className="las la-lock"></i> Set Private</> : <><i className="las la-unlock"></i> Make public</>}</Dropdown.Item>
                    <Dropdown.Item href="#" onClick={(e) => handleDeletePoint(e)} className='text-danger'><i className="lar la-trash-alt"></i> Remove</Dropdown.Item>
                    </>
                  :
                  ''}
                  <Dropdown.Item href="#" onClick={(e) => handleSetPin(e)} ><i className="las la-thumbtack"></i> Pin to Distance</Dropdown.Item>
                  <Dropdown.Item href="#"><i className="las la-qrcode"></i> Share QR</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            :''
            }
          </div>
        </div>
      :
      ''
      }
      </>
      
    )
  }

  export default PointLine;