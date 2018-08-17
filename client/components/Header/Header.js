import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    return (
        <header className="App-header">
          <h1 className="App-title">Welcome to React-Parcel-SSR-Demo</h1>
          <table>
            <tr>
              <td><Link to='/'>Home</Link></td>
              <td><Link to='/about'>About</Link></td>
            </tr>
          </table>
        </header>
    );
  }
}

export default Header;
