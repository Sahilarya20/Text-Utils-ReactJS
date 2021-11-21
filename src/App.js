// import React from 'react'

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";



// let name="Aryaa";

const App = () => {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  

  
  
  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode=()=>{
    if(mode==='light'){setMode('dark');
  document.body.style.backgroundColor='#1b0a2f';
  showAlert("Dark Mode has been Enabled","success");
}
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been Enabled","success");
    }

  }
  return  <>
        <Router>
        <Navbar title="TextUtilss" mode={mode} toggleMode={toggleMode}  />
        <Alert alert={alert}/>
        <div className="container my-3">
          
        <Switch>
          <Route exact path="/about">
            <About />
            </Route>
          <Route exact path="/">
          <TextForm showAl={ showAlert} heading=" Enter the text to analyze " mode={mode} />
          </Route>
        </Switch>
        </div>

        </Router>
  </>
  
};
export default App
