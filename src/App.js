import React, { Component } from 'react'
import "./App.css";
import News from "./Components/News";
import Navbar from "./Components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  state={
    progress:15 
  }
  setProgress=(progress)=>
  {
    this.setState({
      progress:progress,
    })
  }
  render() {
    return (
      <div>
      <Router>
        <Navbar />
         <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        <Switch>
        
          <Route exact  path="/general">
             <News setProgress={this.setProgress} key="general"  pageSize={9} category={"general"} />
            
          </Route>
          <Route exact  path="/Sports">
            <News setProgress={this.setProgress} key="sports" pageSize={9} category={"sports"} />
           
          </Route>
          <Route exact  path="/Entertainment">
            <News setProgress={this.setProgress} key="entertainment" pageSize={9} category={"entertainment"} />
      
          </Route>
        
          <Route exact  path="/Health">
            <News setProgress={this.setProgress} key="health" pageSize={9} category={"health"} />
          </Route>
          <Route exact  path="/Technology">
            <News setProgress={this.setProgress} key="technology" pageSize={9} category={"technology"} />
          </Route>
        </Switch>
      </Router>
      </div>
    )
  }
}
