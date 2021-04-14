import './App.css';
import Navbar from "./components/Navbar";
import About from "./components/About";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import React from "react"

class App extends React.Component{
  state= {
    views: 0,
    likes: 0,
  };

  render(){
    return (
      <div className="App">
        < Navbar />
        < About views={this.state.views}/>
        < Project />
        < Contact />
      </div>
    );
  }
}

export default App
