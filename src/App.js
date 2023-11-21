
import './App.css';

import React from 'react';
import {action,orginals,comedy,horror} from './url'

import NavBar from './components/navBar/navBar';
import Banner from './components/Banner/banner';
import RowPost from './components/rowPost/rowPost';

function App() {
  return (
    <div className="App">
     <NavBar/>
      
      <Banner/>
    <RowPost url={orginals} title='Netflix orginals'/>
      <RowPost url={action}  title='Action' isSmall />
      <RowPost url={comedy}  title='Comedy Movies' isSmall />
      <RowPost url={horror}  title='Horror Movies' isSmall />
    </div>
  );
}

export default App;
