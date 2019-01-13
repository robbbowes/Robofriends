import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  };

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });
    return (
      <div className='tc'>
        <h1 className='f1 sega-styling'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        {filteredRobots.length > 0 ? <CardList robots={filteredRobots} /> : <h2 className='sega-styling'>No matching robots found</h2>}
      </div>
    );
  }
};

export default App;