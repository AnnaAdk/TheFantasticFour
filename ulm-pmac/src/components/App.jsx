import React, {useState} from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import AccountCreation from "./AccountCreation";



const createAccountStyle = {
  position: "absolute",
  left: "50%", 
  top: "25%",
};

function App() {

  const[credentials, setCredentials] = useState('');
  const [showLogin, setShowLogin] = useState(true);
  const [showAccountCreation, setShowAccountCreation] = useState(false);

  const handleLogin = async (e, cwid, password) => {
    e.preventDefault();
    const getCredentials = await (await fetch("http://localhost:3000/accounts/" + cwid.cwid)).json();
    setShowLogin(!(getCredentials.Password === password.password)) // include validation logic here
    setShowAccountCreation(() => false);
    setCredentials(getCredentials);

};
  function logOut(e) {
    e.preventDefault();
    setShowLogin(() => true);
    setShowAccountCreation(() => false);
  
  };

  function handleClick(e)
  {
    e.preventDefault();
    setShowAccountCreation(() => true);
    setShowLogin(() => false);
  };

  return(
    <>
      {!showAccountCreation && showLogin && <div><Login onSubmit={(e, cwid, password) => handleLogin(e, cwid, password)}/></div>}
      {!showAccountCreation && !showLogin && <Dashboard {...credentials} />}
      {showAccountCreation && !showLogin && <AccountCreation />}
      {!showAccountCreation && showLogin && <div ><br /><center style={{position: "absolute", left: "50%", top: "50%"}}>Need an account?<br />
      <button onClick={(e) => handleClick(e)}>Create Account</button></center></div>}
    </>

  );
};

export default App;

