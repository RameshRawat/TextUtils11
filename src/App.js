
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import React, {useState} from 'react'
import Alert from './components/Alert'  
// import { Switch, Route } from "react-router-dom";
// import { BrowserRouter ,Routes,Route } from 'react-router-dom';
// import { Switch } from 'react-router-dom'

// import {Link} from 'react-route-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route
  
  
} from "react-router-dom";

function App(){
  const[mode, setMode]=useState('dark');//whether dark mode is enable or not
  const[alert, setAlert]= useState(null);

  const showAlert=(message,type)=>{
       setAlert({
         msg:message,
         type:type
       })
       setTimeout(()=>{
         setAlert(null);

       },1500)

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("dark mode has been enable","success");
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enable","success");
    }
  }

  return(<>
  <Router>
  
     <Navbar title="TextUtils11" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
     

     <Alert alert={alert} />

   <div className="container my-3">
<Switch>
          <Route path="/about">
          
           <About />
           {/* {console.log("yy")} */}
          </Route>
          
          <Route path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
   
          </Route>
          </Switch>
   </div>
   </Router>
   </> )
}

export default App;


