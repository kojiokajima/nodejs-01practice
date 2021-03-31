import React from 'react'
import { Switch, Route } from "react-router-dom";
import { Home, Signup } from "./components/index";

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path="(/)?" component={Home} />
                <Route path="/signup" component={Signup} />
            </Switch>
        </>
    )
}

export default Router