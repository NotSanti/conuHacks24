import { Component } from 'react';
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>&copy; Spot Saver {new Date().getFullYear()} </p>
      </footer>
    );
  }
}

export default Footer;

