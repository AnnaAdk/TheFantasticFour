import React, {useState} from 'react';
import App from './App';

const loginStyle = {
position: "absolute",
left: "50%", 
top: "25%",
};


function Login(props) {
    var show = props.show;

    function handleLogin(e) {
        e.preventDefault();
        console.log(e.target.CWID.value);
        props.show = false;
    }

    return (
    <center>
        <form onSubmit={e => handleLogin(e)} style={{...loginStyle}}>
            <div style={{fontSize:"18pt"}}>
                Campus Wide ID:<br />
                <input type="text" name="CWID"></input><br />
                Password:<br />
                <input type="password" name="password"></input>
            </div>
            <input type="submit" value="Login" /><br />
            <input type="reset" value="clear"/>
        </form>
    </center>
  );
}

export default Login;