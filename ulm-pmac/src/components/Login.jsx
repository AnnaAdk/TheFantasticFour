import React, {useState, useRef, useEffect} from 'react';
import App from './App';

const loginStyle = {
position: "absolute",
left: "50%", 
top: "25%",
};


function Login({onSubmit}) {

    const [cwid, setCwid] = useState('');
    const [password, setPassword] = useState('');
    
    return (
    <center>
        <form onSubmit={e => onSubmit(e, {cwid}, {password})} style={{...loginStyle}}>
            <div style={{fontSize:"18pt"}}>
                Campus Wide ID:<br />
                <input value={cwid} onChange={(e) => setCwid(e.target.value)} type="text" name="CWID"></input><br />
                Password:<br />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password"></input>
            </div>
            <input type="submit" value="Login" /><br />
            <input type="reset" value="clear"/>
        </form>
    </center>
  );
}

export default Login;