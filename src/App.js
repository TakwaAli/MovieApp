import logo from './logo.svg';
import './App.css';
import './index.css'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LoginComponent from './components/loginComponent';
import HomeComponent from './components/homecomponent';
import SignComponent from './components/signComponent';
import Navbar from './components/navComponent';
import NotFound from './components/notfoundComponent';
import ShowCardComponent from './components/showCardComponent';
import FavoriteComponent from './components/FavoriteComponent';
import { useSelector } from 'react-redux';
import { LangContext } from './Context/LangContext';
import { useState } from 'react';
 
function App() {
  const theme = useSelector((state) => state.theme)
  /* const [contextlang,setcontextlang]=useState("English") */
  return (

    <div className={ `App ${theme == "light"?"light " : "dark"} `}>
     {/*   <LangContext.Provider value={{contextlang,setcontextlang}}></LangContext.Provider> */}
       <BrowserRouter> 
        <Navbar></Navbar>
        <Switch> 
          <Route exact  path={"/"} component={HomeComponent} />
          <Route exact path={"/login"} component={LoginComponent} /> 
          <Route exact path={"/signup"} component={SignComponent} />
          <Route exact path={"/view/:id"} component={ShowCardComponent} />
          <Route exact path={"/addtofav"} component={FavoriteComponent} />
          <Route exact path={"*"} component={NotFound} />

        </Switch> 
      </BrowserRouter>
       
    
    </div>
  );
}

export default App;
