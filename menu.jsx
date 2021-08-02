 import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom';
import Profile from './profile';
import About from './about';
import Users from './users';
import Landing from './landing';
import '../App.css';

const menu = () => {
    return (
        <>
        <Router>
            <div>
                <nav className = "navigation">
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                        <li>
                            <Link to='/users'>Users</Link>
                        </li>
                    </ul>
                </nav>

<Switch>
    <Route path='/profile'>
<Profile/>
    </Route>
    <Route path='/about'>
<About/>
    </Route>
    <Route path='/users'>
       <Users/> 
        </Route>  
        <Route path='/'>
            <Landing/>
            </Route>  
</Switch>
            </div>
        </Router>
        </>
    )
}
export default menu;