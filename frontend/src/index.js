import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from './Root';
import App from './components/App';

import { injectGlobal } from 'styled-components';
import reset from 'styled-reset';

import registerServiceWorker from './registerServiceWorker';

import Landing from './components/Landing.js';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import GameList from './components/GameList';
import Settings from './components/Settings';
import CreateGame from './components/CreateGame';
import CreateRoundCard from './components/CreateRoundCard';

// InjectGlobal is akin to a index.css
injectGlobal` 
 /* css reset */
    ${reset}; 

    *{
        box-sizing: border-box;
    }

    html, body {
     margin: 0;
     padding: 0;
     font-family: sans-serif;
     background: #2c3e50;  /* fallback for old browsers */
     background: -webkit-linear-gradient(to right, #3498db, #2c3e50);  /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(to right, #3498db, #2c3e50); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
     font-size: 62.5% /* when using rem, you must set font size to this number globally*/
    }

`

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <App>
                <Route path='/' exact component={Landing} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/sign-in' component={SignIn} />
                <Route path='/games' component={GameList} />
                <Route path='/settings' component={Settings} />
                <Route path='/create-game/:id' component={CreateGame} />
                <Route path='/create-round/:id' component={CreateRoundCard} />
            </App>    
        </BrowserRouter>
    </Root>
, document.getElementById('root'));
registerServiceWorker();
