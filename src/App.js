import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
//import axios from 'axios';
import Repolist from './components/Repolist';

import 'antd/dist/antd.css';


function App() {  
  return (
    <Router>
      <div className="App">
        <Repolist />
      </div>
    </Router>
  );  
}

export default App;
