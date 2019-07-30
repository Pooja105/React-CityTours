import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import TourList from './Components/TourList/index';
class App extends Component {
  render() {
    return (
      <main>
       <NavBar />
       <TourList />
      </main>
    );
  }
}

export default App;
