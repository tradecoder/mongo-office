import React, {useState} from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "jquery/dist/jquery.js";
import "../App.css";

export default function UserLogin(){
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    function onChangeUsername(e){
        setUsername(e.target.value);
    }
    function onChangePassword(e){
        setPassword(e.target.value);
    }


    function onSubmitUserLogin(e){
        e.preventDefault();
      
        axios.get(`http://localhost:5000/mongo-office/accounts/login/${username}/${password}`)
        .then((data)=>{
            if(data.data.length>0){
                window.location=`/mongo-office/${data.data}`
            }else{window.alert('incorrect information!')}
        })
        .catch(err=>window.alert(err))
                
    }

    return(
        <div className="body-part">
            <form onSubmit={onSubmitUserLogin}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" onChange={onChangeUsername} placeholder="username" requireed/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={onChangePassword} placeholder="password" required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </div>
    );
}