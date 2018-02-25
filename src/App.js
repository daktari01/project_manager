import React, { Component } from 'react';
import Projects from './Components/Projects'
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        title: 'Business Website',
        category: 'Web Design'
      },
      {
        title: 'Social App',
        category: 'Mobile Development'
      },
      {
        title: 'Ecommerce Shoppping Cart',
        category: 'Web Development'
      }
    ]});
  }
  render() {
    return (
      <div className="App">
        <h2>My App</h2>
        <Projects projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
