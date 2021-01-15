import React from 'react'
import './App.css';
import IntrotoBlogpost from './IntrotoBlogpost'
import TopNavigation from './TopNavigation'
import Header from './Header'
import HeroImage from './HeroImage'

function App() {
  return (
    <div className="App">
    <Header/>
    <TopNavigation/>
    <HeroImage/>
    <IntrotoBlogpost/>
    </div>
  );
}

export default App;
