import React, {useState, useEffect} from "react";
import NavBar from './Home/Navbar';
import "./App.css";
import Auth from './Auth/Auth'
import Home from './Home/Home';
import Loading from './Loading/Loading';
import {BrowserRouter as Router} from 'react-router-dom'; 

function App() {
  const [sessionToken, setSessionToken] = useState("");
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token"));
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
  };
  

  const protectedViews = () => {
    return localStorage.getItem("token") === sessionToken ? (
      <Router>
      <Home token={sessionToken} />
      </Router>
    ) : ( 
      !showLoading ? <Auth updateToken={updateToken} showLoading={showLoading} setShowLoading={setShowLoading}/> : <Loading/>
      
      );
  };

  return (
    <div className="App">
      <NavBar clickLogout={clearToken} /> 
      {protectedViews()}
    </div>
  );
}


export default App;
