import React, { Component } from 'react';
import { IoArrowBackOutline } from "react-icons/io5";
import { debounce } from 'lodash';
import '../styles/Gif.css';


export default class Gif extends Component {
    constructor(props){
        super(props);
        this.state={
            searchfield: "",
            list: [],
            view :false
        }
    }

    onchange=debounce((e)=>{
        this.setState({searchfield: e.target.value});
        fetch(`https://api.giphy.com/v1/gifs/search?&q=${this.state.searchfield}&api_key=9uIaA8YuTg6HPyX1zB5YdAiomUv9mMhk&q=&limit=25&offset=0&rating=g&lang=en`)
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            let arr=response.data.map((item,i)=>{
                return item.images.original.url;
            })
            this.setState({list : arr});
        })
    },500);

    componentDidMount(){
        fetch("https://api.giphy.com/v1/gifs/trending?api_key=9uIaA8YuTg6HPyX1zB5YdAiomUv9mMhk&limit=25&rating=g")
        .then((response)=>{
            return response.json();
        })
        .then((response)=>{
            let arr=response.data.map((item,i)=>{
                return item.images.original.url;
            })
            this.setState({list : arr});
        })
    }

    render() {
        const {onclick,onselect,closegif}=this.props;
        return (
            <div className="gifmain">
                <div className="rowflex">
                    <IoArrowBackOutline className="backarrow" onClick={onclick}/>
                    <h3>Choose a GIF</h3>
                </div>
                <div className="search">
                    <input className="searchinput" onChange={this.onchange} placeholder="      Search   &#x1F50E;&#xFE0E;"/>
                </div>
                <div className="gifcontainer">{
                    this.state.list? this.state.list.map((item,i)=>{
                        return <img className="giftiles" key={i} src={item} alt="gif" onClick={()=>{onselect(item); closegif();}} />
                    })
                    : <></>
                }</div>
            </div>
        )
    }
}
