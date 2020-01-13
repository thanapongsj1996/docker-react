import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg'
import '../App.css'

const Home = () => {
    return (
        <div style={{ textAlign: "center", marginTop: 100 }}>
            <img src={logo} className="App-logo" />
            <h2>HOME PAGE</h2>
            <Link to="/profile">
                Click to see my profile !
            </Link>
        </div>
    )
}

export default Home