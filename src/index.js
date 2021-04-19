import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import About from './About/About';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';
import {Route,Link,BrowserRouter as Router, NavLink,Switch} from 'react-router-dom';

const routing = (
    <Router>
        <div className='App'>
            <h1>React Router Example</h1>

            <ul>
                <li> <NavLink to='/' exact activeStyle={{color:'#ff0000'}}> Home </NavLink>  </li>
                <li> <NavLink to='/about' exact activeStyle={{color:'#ff0000'}}> About </NavLink>  </li>
                <li> <NavLink to='/contact' exact activeStyle={{color:'#ff0000'}}> Contact </NavLink> </li>
            </ul>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NotFound}/>
        </Switch>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
