

import { useHistory,withRouter } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
import { MdPersonSearch } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { MdViewList } from "react-icons/md";
import { FaInbox } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";


import './index.css'

const Sidebar = () => {
const history = useHistory();
    
  const iconColor = '#ffffff'
  const iconSize = 25
const onCickInbox = ()=>{
    history.replace("/onebox")
}
const onClickHome = ()=>{
  history.replace("/")
}
 

  return (
    <div className="sidebar-container">
      <div className="mail-icon-container">
        <img
          className="mail-icon"
          src="https://res.cloudinary.com/dbb5puzve/image/upload/v1724491535/Logo_holder_gpfxm5.png"
          alt="mail"
        />
      </div>
      <div className="sidebar-icons-container">
        <button onClick={onClickHome} type="button" className="icon-button">
            <AiFillHome color={iconColor} size={iconSize}/>
        </button>
        <button type="button" className="icon-button">
        <MdPersonSearch color={iconColor} size={iconSize} />
        </button>
        <button type="button" className="icon-button">
        <MdEmail color={iconColor} size={iconSize}/>
        </button>
        <button type="button" className="icon-button">
        <IoIosSend color={iconColor} size={iconSize} />
        </button>
        <button type="button" className="icon-button">
        <MdViewList color={iconColor} size={iconSize} />
        </button>
     
        <button onClick={onCickInbox} type="button" className="icon-button">
        <FaInbox color={iconColor} size={iconSize} />
        </button>
    
        

        <button type="button" className="icon-button">
        <MdBarChart color={iconColor} size={iconSize} />
        </button>
      </div>
      <div className="circle">
            <p class="circle-inner">AY</p>
        </div>
    </div>
  )
}

export default withRouter(Sidebar)
