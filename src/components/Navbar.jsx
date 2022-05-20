import React from 'react';
// import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Link} from 'react-router-dom';

 export function Navbar(props){
    return (
        <div className="mb-20">
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" id="navbar-designation" href="#"><span>Upper</span>Case</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mr-10">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            {/*<li className="nav-item mr-10">
                                <a className="nav-link " href="/about">About</a>
    </li>*/}
                        </ul>
                        {/*<form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>*/}
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`}  htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
       </div>
    );
}