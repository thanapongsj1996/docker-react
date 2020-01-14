import React from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'

import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/profile" component={Profile} />
      </div>
    </BrowserRouter>
  )

}

export default App