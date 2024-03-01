import React, {useState}from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return(
    <>
      <BrowserRouter>
        <Switch>
          <Route path="./">
            <Dashboard/>
          </Route>

        </Switch>
      </BrowserRouter>
    </>

  );
}

export default App;

