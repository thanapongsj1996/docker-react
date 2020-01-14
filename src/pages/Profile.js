import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg'
import '../App.css'

const Profile = () => {
    return (
        <div style={{ textAlign: "center", marginTop: 100 }}>
            <img src={logo} className="App-logo" alt="logo" />
            <p><h3>My name is Thanapong Somjai</h3></p><br />
            <small>Now I'm learning about ReactJS + Docker CI/CD</small><br />
            <small>This website was deployed by TravisCI + Github + AWS</small>
            <br /><br />
            <Link to="/">
                Back to Home !
            </Link>
        </div>
    )
}

export default Profile