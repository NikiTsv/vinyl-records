import React from 'react';
import logo from './record-logo.png';
import './App.css';
import Layout from './components/layout';
import Footer from './components/footer';
import { Route, Switch } from 'react-router-dom';
import RecordsContainer from './containers/Records';
import LoginContainer from './containers/Login';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component = {LoginContainer}/>
                <Route path="/records" component = {RecordsContainer}/>
                <Route path="/create" component = {RecordsContainer}/>
                <Route path="/edit" component = {RecordsContainer}/>
            </Switch>
        </Layout>
    );
}

export default App;
