
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import ALRT from './components/ALRT';
import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";






function App() {
  const[mode,setMode]= useState(`light`);
  const[Alert,setAlert]=useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    } ,3000)
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils: Dark mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      document.title="TextUtils: Light mode";
    }
  }
  return (
    <>
      {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <ALRT alert={Alert}/>
    <div className="container">

    {/* <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/"> */}
      <TextForm showAlert={showAlert} title="Enter text to analyze below" /> 
    {/* </Route>
    </Switch> */}
    </div> 
      {/* </Router> */}
      <About/>
    
    </> 
  );
}

export default App;
