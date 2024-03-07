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
  
  const [showLogin, setShowLogin] = useState(true);
  const [showAccountCreation, setShowAccountCreation] = useState(false);

  function handleLogin(e, cwid, password) {
    e.preventDefault();
    setShowLogin(() => false); // include validation logic here
    setShowAccountCreation(() => false);
    console.log(cwid); // these two lines are to validate that this page recieves the for data
    console.log(password);
};

  function handleClick(e)
  {
    e.preventDefault();
    setShowAccountCreation(() => true);
    setShowLogin(() => false);
  }

  return(
    <>
      {!showAccountCreation && showLogin && <div style={{}}><Login onSubmit={(e, cwid, password) => handleLogin(e, cwid, password)}/></div>}
      {!showAccountCreation && !showLogin && <Dashboard />}
      {showAccountCreation && !showLogin && <AccountCreation />}
      {!showAccountCreation && showLogin && <div ><br /><center style={{position: "absolute", left: "50%", top: "50%"}}>Need an account?<br />
      <button onClick={(e) => handleClick(e)}>Create Account</button></center></div>}
    </>

  );
};

export default App;

