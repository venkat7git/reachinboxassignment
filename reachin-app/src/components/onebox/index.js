import { Component } from 'react'
import Header from '../header'
import Sidebar from '../sidebar'
import MailsBar from '../mails';
import Messages from '../messages';
import './index.css'


const Onebox =()=>{
    return (
        <div className="main-container">
            <Sidebar />
            <div className='main-content-container'>
                <Header />
                <div className='content-container-content'>
                    <MailsBar />
                    <Messages />
                </div>
            </div>
        </div>
        )
   }


export default Onebox