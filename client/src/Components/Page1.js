import React,{useState} from "react";
import {uploadFeed} from "../api/auth"
function Page1(){
    const [feedTxt, setFeed] = useState("");

    const handleFeedChange=(e)=>{
        setFeed(e.target.value)
    }

    const submit=()=>{
        const data = {feedTxt};
        uploadFeed(data)
            .then(response => {
                alert(response.data.message)
            })
            .catch(err => {
                console.log("SignIn Error", err);
            })
    }

    return (
        <div className="login">
            <div className="img-div">
            <img className="user-image" src='images/ic_user.svg' alt="user icon" width="60%"/>
            </div>
            <h1 className="welcome">Welcome!</h1>
            <div className="form-control">
                <input type="text"  name="feed" id="feed" placeholder="Enter some text" value={feedTxt} onChange={handleFeedChange} required />
                <button type="button" className="button" onClick={submit}>Post</button>
            </div>
        </div>
    )
}

export default Page1;