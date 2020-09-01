import React from "react";
import FoodIndex from "../foods/FoodIndex";
import logo from "../assets/ff-logo.png"
import {Route, Switch} from 'react-router-dom';


const Body = (props) => {

  return (
    <div>
      <header className="App-header">
        <br/>
        <img src={logo} alt="" className="logo"/>
        <br/>
        <div className="page">
          This is a place to post food that you have made or want to make. You
          can also post food that you have purchased from a restaurant that you
          want to show off or would like to try and make. You can show your
          skills in the kitchen or just share some yummy recipes. Well, what are
          you waiting for? <br/> GET YOUR FRIENDZY ON!!!
        </div>
        <br/>
        <FoodIndex token={props.token} />
      </header>
        <footer style={{backgroundColor: "rgb(255, 204, 0)"}}>© 2020 Website Created By Gabriel Francis</footer>
      <Switch>
            <Route exact path="/home">Home</Route>
        </Switch>
    </div>
    
  );
};

export default Body;
