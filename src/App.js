import React from 'react';
import { useState } from 'react';
import './App.css';
import { Form } from './components/form';
import { Navbar } from './components/Navbar';
import {Alert} from './components/Alert';
// import {About} from './components/about';
import { Footer } from './components/footer';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  //  {alert message function}
  const showalert=(message, type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 1500);

  }
  // toggle button
  const togglemode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#141619';
      showalert(" dark mode is enabled", "success");// function pass to above showalert
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert(" light mode is enabled", "success");
    }
  }
  return (
    
     <>
        
            {/*<Router>*/}
            
                <Navbar mode={mode} togglemode={togglemode}/> 
                <Alert alert={alert}/>
              
                

                {/*<Switch>
                  <Route path="/about">
                    <About />
                  </Route>*/}  
                {/*<Route path="/">*/}
                    <Form mode={mode} showalert={showalert}/>
                { /* </Route>
                </Switch>*/}
                {/*<About/>*/}
             <Footer/>
                
            {/*</Router>*/}
      
    </>
      
    
  );
}

export default App;
