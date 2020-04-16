import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import Welcome from '../Pages/Welcome/Welcome';

import './App.scss';

const App = () => {
    const newUser = true;

    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route exact path='/'>
                        {newUser && <Redirect to='/welcome'/>}
                    </Route>
                    <Route exact path='/welcome' component={Welcome}/>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
