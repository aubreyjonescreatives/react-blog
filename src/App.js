import React from 'react'
import './App.css';
import IntrotoBlogpost from './IntrotoBlogpost'
import ResearchandLearning from './ResearchandLearning'
import Git from './Git'
import UnitTesting from './UnitTesting'
import TypeScript from './TypeScript'
import NPM from './NPM'
import TopNavigation from './TopNavigation'
import Header from './Header'
import HeroImage from './HeroImage'

function App() {
  return (
    <div className="App">
    <Header/>
    <TopNavigation/>
    <NPM/>
    <TypeScript/>
    <UnitTesting/>
    <Git/>
    <ResearchandLearning/>
    <IntrotoBlogpost/>
    </div>
  );
}

export default App;
