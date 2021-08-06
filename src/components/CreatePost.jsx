import React, { Component } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FcCalendar } from "react-icons/fc";
import { FaUserTag } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { RiFileGifFill } from "react-icons/ri";
import '../styles/CreatePost.css';

import Gif from './Gif';



export default class CreatePost extends Component {

    constructor(props){
        super(props);
        this.state={
            gifview: false,
            input:"",
            gif:""
        }
    }
    onGifTabClick=()=>{
        this.setState({gifview: true})
    }
    onArrowClick=()=>{
        this.setState({gifview: false});
    }
    onchange=(e)=>{
        this.setState({input: e.target.value})
    }

    onselect=(url)=>{
        this.setState({gif: url});
    }

    onSubmit=()=>{
        this.props.postMessage(this.state.input,this.state.gif);
        this.setState({input:"",gif:""});
    }

    render() {
        return (
            <div id="createpost">
                {
                    this.state.gifview? <Gif onclick={this.onArrowClick} onselect={this.onselect} closegif={this.onArrowClick}/>
                    :<>
                        <div className="head">
                            <h3>Create Post</h3>
                            <AiFillCloseCircle className="close" />
                        </div>
                        <div className="profile" >
                            <CgProfile className="profile_pic"/>
                            <b id="user">Username</b>
                        </div>
                        <div className="input">
                            <textarea className="textArea" value={this.state.input} onChange={this.onchange} placeholder="What's on your mind?"/>
                        </div>
                        <div className="gifDiv">{
                            this.state.gif? <img className="gifimg" src={this.state.gif} alt="gif" /> :<></>
                        }</div>
                        <div className="row">
                            <div className="tag"><FaUserTag className="color_skyblue icon"/> Tag Friends</div>
                            <div className="tag"><IoLocationSharp className="color_red icon"/> Check in</div>
                        </div>
                        <div className="row">
                            <div className="tag" onClick={this.onGifTabClick}><RiFileGifFill className="color_purple icon"/> GIF</div>
                            <div className="tag"><FcCalendar className="icon"/> Tag Event</div>
                        </div>
                        <div className="row-end">
                            <select className="select">
                                <option>Only Me</option>
                                <option>Public</option>
                                <option>Prvate</option>
                            </select>
                            <button className="btn" onClick={this.onSubmit} >Post</button>
                        </div>
                    </>
                }
            </div>
        )
    }
}