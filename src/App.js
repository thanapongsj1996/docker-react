import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thanapong Somjai (BOY)
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// import React from 'react'
// import Home from './pages/Home'
// import Profile from './pages/Profile'

// import { BrowserRouter, Route } from 'react-router-dom'

// const App = () => {

//   return (
//     <BrowserRouter>
//       <div>
//         <Route exact={true} path="/" component={Home} />
//         <Route exact={true} path="/profile" component={Profile} />
//       </div>
//     </BrowserRouter>
//   )

// }

// export default App