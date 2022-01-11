import React, { useState } from "react";
import './App.css';
import Retreive from './Retreive';
import Navbar from './Navbar'
import Footer from './Footer'
import Movie from './Movie'
import SignupClass from './SignUp'
import LoginClass from './Login'
import { LanguageContext } from "./context/languageContext";
import {Route,Switch, BrowserRouter as Router} from "react-router-dom";

function App() {
  const [contextLang, setContextLang] = useState("en");
  return (
    <>
   <LanguageContext.Provider value={{ contextLang, setContextLang }}>
        <Router>
          <Navbar />
          <Switch>
          <Route path={"/"} exact component={Retreive} />
            <Route path={"/movie"} exact component={Retreive} />
            
            <Route path={"/movie/:id"} exact component={Movie} />
            <Route path={"/signup"} exact component={SignupClass} />
            <Route path={"/login"} exact component={LoginClass} />
          </Switch>
          <Footer />
        </Router>
        </LanguageContext.Provider>
    </>
  );
}

export default App;
