import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import './css/props.css';


//screens
import Header from './screens/header';
import Sidebar from './screens/sidebar';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <Header />
        
    </div>
  );
}

export default App;
