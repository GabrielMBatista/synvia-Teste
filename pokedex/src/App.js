import GlobalState from './globalStates/GlobalState';
import Home from './home/Home';
import React from 'react'
import './App.css';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <GlobalState>
      <NavBar/>
        <Home />
    </GlobalState>
  )
}

export default App;
