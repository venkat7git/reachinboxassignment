import {useState} from 'react'
import { GoDotFill } from "react-icons/go";


import { MdOutlineLightMode } from "react-icons/md";
import { AiOutlineMoon } from "react-icons/ai";

import './index.css'

const Header = ()=>{
    const [isDarkTheme,setDarkMode] = useState(true)

    
    const onChangeTheme = ()=>{
        setDarkMode(prevState => !prevState)
    }

    return (
        <div className="main-header">
     
                <h1 className="header-text">Onebox</h1>
                <div className="head-right-end-container">
                {isDarkTheme?(<button onClick={onChangeTheme} className="theme-button">
                <GoDotFill color={'#888686'} size={34}/>
                <MdOutlineLightMode className="icon" color={'#FFD83C'} size={18}/>
                
                </button>):(<button onClick={onChangeTheme} className="theme-button">

                <AiOutlineMoon className="icon2" color={'#FFD83C'} size={24}/>
                <GoDotFill color={'#888686'} size={34}/>
                </button>)}
                
                
                
                


                <select className="select-input">
                    <option className="option">Tim's Workspace</option>
                </select>
                </div>
                
            
        </div>
    )
}

export default Header