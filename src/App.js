import React from 'react'
import './App.css';
import IntrotoBlogpost from './IntrotoBlogpost'
import ResearchandLearning from './ResearchandLearning'
import Git from './Git'
import UnitTesting from './UnitTesting'
import TypeScript from './TypeScript'
import TopNavigation from './TopNavigation'
import Header from './Header'
import HeroImage from './HeroImage'

function App() {
  return (
    <div className="App">
    <Header/>
    <TopNavigation/>
    <HeroImage/>
    <TypeScript/>
    <UnitTesting/>
    <Git/>
    <ResearchandLearning/>
    <IntrotoBlogpost/>
    </div>
  );
}

export default App;
