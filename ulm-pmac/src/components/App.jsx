import React, {useState}from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  
  const [showLogin, setShowLogin] = useState(true);

  function handleLogin(e, cwid, password) {
    e.preventDefault();
    setShowLogin(() => false); // include validation logic here
    console.log(cwid); // these two lines are to validate that this page recieves the for data
    console.log(password);
};

  return(
    <>
      {showLogin && <Login onSubmit={(e, cwid, password) => handleLogin(e, cwid, password)}/>}
      {!showLogin && <Dashboard />}
    </>

  );
}

export default App;

