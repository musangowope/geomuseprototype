import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './components/HomepageComponents/HomePage';
import Callback from './Callback/Callback';
import Geomuse from './components/GeomuseComponents/Geomuse'
import Playlist from './components/GeomuseComponents/Playlist'


import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();
const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}

export const makeMainRoutes = () => {
    return (
        <BrowserRouter history={history} component={App}>
            <div>
                <Route path="/" exact={true} render={(props) => <App auth={auth} {...props} />} />
                <Route path="/home" render={(props) => (<HomePage auth={auth} {...props} />)}/>
                <Route path="/geomuse" render={(props) => (<Geomuse auth={auth} {...props} />)}/>
                <Route path="/playlist" render={() => <Playlist />} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }}/>
            </div>
        </BrowserRouter>
    );
}
