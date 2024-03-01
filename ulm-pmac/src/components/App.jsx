import React, {useState}from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App(props) {
  
  const [showLogin, setShowLogin] = useState(true)

  return(
    <>
      {showLogin && <Login show={showLogin}/>}
      {!showLogin && <Dashboard />}
    </>

  );
}

export default App;

