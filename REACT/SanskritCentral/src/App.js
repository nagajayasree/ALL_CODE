import React from 'react';
import './index.css';
import './App.css';
import SideNav from './Components/SideBar';
import {BrowserRouter,Route} from 'react-router-dom';
import VidList from './Components/vidList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SideNav />
        <VidList />
        {/* <BrowserRouter>
        <Route path='/' component={SideNav}/>
        <Route path='/:Feed' component={Feed}/>
        </BrowserRouter> */}
      </header>
    </div>
  );
}

export default App;