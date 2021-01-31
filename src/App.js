import React from 'react'
import './App.css';
import IntrotoBlogpost from './IntrotoBlogpost'
import ResearchandLearning from './ResearchandLearning'
import Git from './Git'
import TopNavigation from './TopNavigation'
import Header from './Header'
import HeroImage from './HeroImage'

function App() {
  return (
    <div className="App">
    <Header/>
    <TopNavigation/>
    <HeroImage/>
    <Git/>
    <ResearchandLearning/>
    <IntrotoBlogpost/>
    </div>
  );
}

export default App;
