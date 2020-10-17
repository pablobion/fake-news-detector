import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Login from "../pages/login";
import Detector from "../pages/detector";
import About from "../pages/about/";
import Groups from "../pages/groups/";
import Page404 from "../pages/404/";

const authorization = localStorage.getItem("qwert");

function routes() {
    return (
        <Switch>
            {authorization && (
                <>
                    <Route path="/login" exact component={Login} /> {/* Desbugando hide refresh */}
                    <Route path="/lostaccount" exact component={Login} /> {/* Desbugando hide refresh */}
                    <Route path="/createaccount" exact component={Login} /> {/* Desbugando hide refresh */}
                    <Route path="/detector" exact component={Detector} />
                    <Route path="/about" exact component={About} />
                    <Route path="/groups" exact component={Groups} />
                    <Route path="*" component={Page404} />
                </>
            )}
            {!authorization && (
                <>
                    <Redirect to="/login" />
                    <Route path="/login" exact component={Login} /> {/* Desbugando hide refresh */}
                </>
            )}
        </Switch>
    );
}

export default routes;
