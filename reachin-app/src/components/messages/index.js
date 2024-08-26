import { GoDotFill } from "react-icons/go";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useEffect,useState } from "react";
import { MdOutlineReply } from "react-icons/md";
import { IoIosClose } from "react-icons/io";



import {LineWave} from 'react-loader-spinner'
import './index.css'


const processConst = {
    initial:"INITIAL",
    success:"SUCCESS",
    failure:"FAILURE",
    inProgress:"IN-PROGRESS"
}


const Messages = ()=>{

    const [apiResponse,setApiResponse] = useState({
        status:processConst.initial,
        resData:null,
        errorMsg:null,
        
    })


    


    useEffect(()=>{
        const getMailsData = async ()=>{
            const url = "https://hiring.reachinbox.xyz/api/v1/onebox/list"
        const options = {
            
            headers:{
                Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoidmVua2F0N3NvZnRjeUBnbWFpbC5jb20iLCJpZCI6MTE3MSwiZmlyc3ROYW1lIjoiVmVua2F0IiwibGFzdE5hbWUiOiJUZWRsYXB1In0sImlhdCI6MTcyNDUxNzAyMiwiZXhwIjoxNzU2MDUzMDIyfQ.UoI9ew6bHMCiRs1t89rnOZ9BfbAingKrl6W4QrcWyNQ`
            }
        }
        setApiResponse({
            status:processConst.inProgress,
            resData:null,
            errorMsg:null

        })
        const response = await fetch(url,options)
        const responseData = await response.json()
        if(response.ok){

            
            setApiResponse({
                status:processConst.success,
                resData:responseData,
                errorMsg:null
            })
     
        }
        else{
            setApiResponse({
                status:processConst.failure,
                resData:null,
                errorMsg:responseData.error_msg
            })
        }
        
        }
        getMailsData()
    },[])


    const apiView = ()=>{
        const {status} = apiResponse
        switch(status){
            case processConst.success:
                return renderSuccessView()
            case processConst.failure:
                return null 
            case processConst.inProgress:
                return loaderView()
            default:
                return null
        }
    }



    const renderSuccessView= ()=>{
        const {resData} = apiResponse
        const {data} = resData
        const userName = data[0].fromName
        const userEmail = data[0].fromEmail

        return (
            <>

<div className='message-header'>
            <div>
                <h1 className='name-heading'>{userName}</h1>
                <p className='message-email'>{userEmail}</p>
            </div>
            <div className='message-dropdowns'>
                <div className='active-select'>
                <GoDotFill color={"#E6D162"}/>
                <select className="select-input">
                    <option className="option">Meeting Completed</option>
                </select>
                </div>
                <div className="select-input2">
                <select className="select-input">
                    <option className="option">Move</option>
                </select>
                </div>
                
                <div className="select-input3">
                    <HiOutlineDotsHorizontal color={"#ffffff"}/>
                </div>
            </div>

            </div>
            <hr className="h-line"/>
            <div className="message-display-container">
            <div className="line-day-line">
                <hr className="h-line2"/>
                <span className="status-day">Today</span>
                <hr className="h-line2"/>
            </div>

                <div className="message-card">
                <div className="message-head-containeer">
                <h1 className="message-heading">New product Launch</h1>
                <p className="time-and-date">{'20 june 2022 : 9:16AM'}</p>
                </div>
                <p className="from-mail-id">from : {'jeanne@iclound.com cc : lennon.j@mail.com'}</p>
                <p className="to-mail-id">to : lennon.j@mail.com</p>
                <br/>
                <p className="hi-name">HI {'{FIRST_NAME},'}</p>
                <br/>
                <p className="paragraph">{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}</p>
                
            </div>
            </div>
            </>
            
        )
    }

    const loaderView = ()=>{
        console.log(2)
        return (
            <div className="loader-container">
                <LineWave
                    visible={true}
                    height="100"
                    width="100"
                    color="#ffffff"
                    ariaLabel="line-wave-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    firstLineColor=""
                    middleLineColor=""
                    lastLineColor=""
                />
            </div>
        )
    }


    return ( 

        <div className='message-container'>
            
            {apiView()}
            
            
                    <div className="replay-button-container">
                    <MdOutlineReply size={24} color={'#ffffff'}/> 
                    <button type="button" className="reply-button">
                        Replay
                    </button>
                    </div>
        

        </div>
    )
}

export default Messages