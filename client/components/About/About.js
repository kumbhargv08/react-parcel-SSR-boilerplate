import React, { Component } from 'react';
import './About.css';
import Header from '../Header/Header';

class About extends Component {

  render() {
    return (
      <div className="About">
        <Header/>
        <p>
            About Page
        </p>
      </div>
    );
  }
}

export default About;