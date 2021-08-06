import React, { Component } from 'react';
import CreatePost from './components/CreatePost';
import './styles/App.css';
import MessageList from './components/MessageList';

export default class App extends Component {
    constructor(){
        super();
        this.state={
            list : []
        }
    }

    postMessage=(text,url)=>{
        let item={text: text,gif: url};
        let List=this.state.list;
        if(!text && !url){
            console.log("null");
        }
        else{
            List.unshift(item);
            this.setState({list : List});
        }
    }

    render() {
        return (
            <div className="main">
                <CreatePost postMessage={this.postMessage} />
                <div className="messages">
                    {
                        this.state.list? this.state.list.map((item,i)=>{
                            return <MessageList key={i} item={item} idx={i} />
                        })
                        : <></>
                    }
                </div>
            </div>
        )
    };
}
