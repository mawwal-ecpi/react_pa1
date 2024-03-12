import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter
    } from "react-router-dom";
    import Home from "./Home";
    import Stuff from "./Stuff";
    import CCI from "./CCI";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>PA1 Example Webpage</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/Stuff">Stuff</NavLink></li>
                    <li><NavLink to="/CCI">Custom Component Image</NavLink></li>
                </ul>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/Stuff" element={<Stuff />}/>
                        <Route path="/CCI" element={<CCI />}/>
                    </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;