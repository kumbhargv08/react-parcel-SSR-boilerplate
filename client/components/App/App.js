import React, { Component } from 'react';
import './App.css';
import Product from '../Products/Product';
import Header from '../Header/Header';

class App extends Component {

  render() {
    return (
      <div className="App">
       <Header/>
        <p className="App-intro">
          Welcome
        </p>
        <Product/>
      </div>
    );
  }
}

export default App;
