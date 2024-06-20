import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import User from './components/User'
import { generatePath } from "react-router";


function App() {
  

const path =generatePath("/user/:id/:entity(posts|comments)", {
  id: 1,
  entity: "posts"
});
console.log(path); // user/1/posts


  return (
    <>
      <Router>
        <Switch>
            <Route exact path="/" component={Home}>
            </Route>
          <Route strict path="/about" component={About}>
            
          </Route>
          <Route path="/dashboard" component={Dashboard}>
            
          </Route>
          <Route path="/user" component={User}>
            
          </Route>
         
         
          
         </Switch>
      </Router>
      
    </>
  )
}

export default App
