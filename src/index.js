import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from 'react-redux'
import store from "./store"

import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage/HomePage"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={Header} />
            <Route component={Navbar} />
            <Route path="" component={HomePage} />
            <Route component={Footer} />
        </BrowserRouter>
    </Provider>, document.getElementById("root")
);
