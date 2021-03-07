import React from 'react';
import './App.css';

// import Home from './components/Home/Home';
// import Info from './components/Info/Info';

import Application from './components/Application/Application'

import UserProvider from "./components/Providers/UserProvider";

function App() {
  return(
    <div>
    <UserProvider>
      <Application />
    </UserProvider>
    </div>
  );
}

export default App;
