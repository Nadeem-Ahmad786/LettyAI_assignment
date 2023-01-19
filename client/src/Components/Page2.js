import React,{useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

import {getFeed} from "../api/auth"
function Page2(){
    const [feedTxt, setFeed] = useState("");
    const {feedId} = useParams()
console.log(feedId)
useEffect(()=>{
    loadFeed();
},[])
    const loadFeed=()=>{
        getFeed(feedId)
            .then(response => {
                console.log(response.data)
                setFeed(response.data.feed)
            })
            .catch(err => {
                console.log("Load feed Error", err);
            })
    }

    return (
        <div className="login">
            <div className="img-div">
            <img className="user-image" src='images/ic_user.svg' alt="user icon" width="60%"/>
            </div>
            <h1 className="welcome">Welcome!</h1>
            <div className="form-control">
                {feedTxt}
            </div>
        </div>
    )
}

export default Page2;