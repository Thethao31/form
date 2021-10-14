import React from 'react';
import Form from './components/Form'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'


function App() {
    return(
        <div>
            <Header/>
            {/* <Switch>
                <Link to='/form'>form</Link>
            </Switch> */}
            <Route path="/form" component={Form}/>
        </div>
    )
}

export default App