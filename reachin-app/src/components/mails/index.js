


import { useEffect,useState } from "react";
import { LiaRedoAltSolid } from "react-icons/lia";
import {IoSearchOutline} from 'react-icons/io5'
import {LineWave} from 'react-loader-spinner'
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";

import './index.css'

const processConst = {
    initial:"INITIAL",
    success:"SUCCESS",
    failure:"FAILURE",
    inProgress:"IN-PROGRESS"
}



const MailsBar = ()=>{

    const [apiResponse,setApiResponse] = useState({
        status:processConst.initial,
        resData:null,
        errorMsg:null,
        dataLength: null
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
            errorMsg:null,
            dataLength: null
        })
        const response = await fetch(url,options)
        const responseData = await response.json()
        if(response.ok){

            
            setApiResponse({
                status:processConst.success,
                resData:responseData,
                errorMsg:null,
                dataLength: responseData.data.length
            })
     
        }
        else{
            setApiResponse({
                status:processConst.failure,
                resData:null,
                errorMsg:responseData.error_msg,
                dataLength:null
            })
        }
        

        
        }
        getMailsData()
    },[])

    const getuserStatus = ()=>{
        let randomColor = ""
        let statusText = ""
        let randomIndex = Math.floor(Math.random()*4)
       
        if (randomIndex === 0){
            statusText = "Intrested"
            randomColor = "#57E0A6"
        }else if(randomIndex === 1){
            statusText = "Closed"
            randomColor = "#626FE6"
        }else if(randomIndex === 2){
            statusText = "Meeting Booked"
            randomColor = '#9C62E6'
        }else if(randomIndex === 3){
            statusText="Meeting Completed"
            randomColor = "#E6D162"
        }        
        return {randomColor,statusText}

    }

    const renderSuccessView = ()=>{
        const {resData,dataLength} = apiResponse
        const {data} = resData
        const iconColor = '#ffffff'
        const iconSize = 20
       
        
        return (
            <>
            <div className='filter-and-retry'>
                <div className='custom-inbox-options'>
                    <select className='mails-selection'>
                        <option className='option'>All Inbox(s)</option>
                        <option className='option'>Unread mails</option>
                        <option className='option'>Sent mails</option>
                    </select>
                </div>
                <div className='retry-icon'>
                    <LiaRedoAltSolid size={15} color={"#ffffff"}/>
                </div>
            </div>
            <p className='selected-mails'><span className='selected-mails-count'>{`2/${dataLength}`}</span> inboxes selected</p>
            <div className="search-container">
                <button data-testid="searchButton" aria-label="Save" className="search-icon-button" type="button">
                    <IoSearchOutline size={25} color={"#ffffff"}/>
                </button>
                <input placeholder="Search" className="search-input" type="search"/>
                                
            </div>
            <div className='reply-count-and-arrival-selector'>
                <p className='replies-count'><span className='count-span'>{`${dataLength}`}</span> New Replies</p>
                <select className="select-input">
                    <option className="option">Newest</option>
                    <option className="option">last week</option>
                    <option className="option">last month</option>
                </select>
            </div>
            <hr className='h-line'/>
                {data.map(eachMail=>{
                const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

                const date = new Date(eachMail.createdAt);
                let month = months[date.getMonth()];
                const day = date.getDay()
            
                const {randomColor,statusText} = getuserStatus()
                    return (
                    <ul className="mails-list">
                    <li className="list-item" key = {eachMail.id}>
                    <div className="head-and-date">
                    <h1 className="mail-id">{eachMail.fromEmail}</h1>
                    <span className="date-tag">{month} {day}</span>
                    </div>
                    <p className="subject-para">{eachMail.subject}</p>
                    <div className="status-tags-container">
                        <div className="campaign-name" style={{color:randomColor}}><GoDotFill color={randomColor}/> {statusText}</div>
                        <div className="campaign-name"><IoIosSend color={iconColor} size={iconSize} /> Campaign Name</div>
                    </div>
                    <hr className="h-line"/>
                </li>
                </ul>)})}
            </>
        )
    }

    const loaderView = ()=>{
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

    
    return (

        <div className='mails-container'>
            
            {apiView()}
        </div>
                    
    )
}
export default MailsBar