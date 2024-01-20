import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer>
        <p>&copy; {new Date().getFullYear()} Spot Saver</p>
      </footer>
    );
  }
}

export default Footer;

