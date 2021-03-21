import React from 'react'
import './App.css';
import IntrotoBlogpost from './IntrotoBlogpost'
import ResearchandLearning from './ResearchandLearning'
import Git from './Git'
import UnitTesting from './UnitTesting'
import TypeScript from './TypeScript'
import NPM from './NPM'
import Svelte from './Svelte'
import FunctionsCallbacksPromises from './FunctionsCallbacksPromises'
import ReactPost from './ReactPost'
import TopNavigation from './TopNavigation'
import Header from './Header'


function App() {
  return (
    <div className="App">
    <Header/>
    <TopNavigation/>
    <ReactPost/>
    <FunctionsCallbacksPromises/>
    <Svelte/>
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
