import React from 'react';
import { CgProfile } from "react-icons/cg";
import '../styles/MessageList.css';

export default function MessageList({item}) {
    return (
        <div className="messagebox">
            <div className="msgHeader">
                <div>
                    <CgProfile className="dpicon"/>
                </div>
                <div>
                    <span className="username">Username</span>
                </div>
            </div>
            <div className="messageContent">
                {
                    item.text? <p>{item.text}</p> : <></>
                }
            </div>
            {
                item.gif? <div className="gifdiv"><img className="gifpreview" src={item.gif} alt="gif" /></div> : <></>
            }
        </div>
    )
}
