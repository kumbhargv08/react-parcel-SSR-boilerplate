import React, { Component } from 'react';
import './App.css';
import Product from '../Products/Product'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React-Parcel-SSR-Demo</h1>
        </header>
        <p className="App-intro">
          Welcome
        </p>
        <Product/>
      </div>
    );
  }
}

export default App;
