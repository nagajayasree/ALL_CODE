import React, { Component } from 'react';
import './SideBar.css'
import logo from './sclogo.png';
// import { browserHistory } from 'react-router';

class SideNav extends Component {
    render() { 
        return (
            <>
            <div className='sidenav'>
                <div>
                    <img className="logo" src={logo}></img>
                </div>
                <div className='content'>
                    <a href="feed">Feed</a>
                    <a href="videos">Videos</a>
                    <p href="about">About</p>
                    <small className="copyright">Copyright 2020</small>
                </div>
                </div> 
            <div>
                {this.props.children}
            </div>
            </>
        );
    }
}

export default SideNav;