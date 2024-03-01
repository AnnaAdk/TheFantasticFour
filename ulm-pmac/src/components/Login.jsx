import React, {useState} from 'react';
import App from './App';
import PropTypes from 'prop-types';

const loginStyle = {
position: "absolute",
left: "50%", 
top: "25%",
};

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}


export default function Login({setToken}) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }

    return (
    <center>
        <form  onSubmit={handleSubmit} style={{...loginStyle}}>
            <div style={{fontSize:"18pt"}}>
                Campus Wide ID:<br />
                <input type="text" name="CWID" onChange={e => setUsername(e.target.value)}></input><br />
                Password:<br />
                <input type="password" name="password" onChange={e => setPassword(e.tartget.value)}></input>
            </div>
            <input type="submit" value="Login" /><br />
            <input type="reset" value="clear"/>
        </form>
    </center>
  );
}

Login.PropTypes = {
    setToken: PropTypes.func.isRequired
}
