import { Component } from 'react';
import './Header.css'
import logoImage from '../public/ss_smaller_logo.png'

class Header extends Component {
  render() {

    return (
      <header className="gradient-bg p-4 header">
        <nav className="flex items-center justify-between">
          {/* <h1 className="text-white text-lg font-semibold">Spot Saver</h1> */}
          <img src={logoImage} alt="logo" className="logo-img" />
        </nav>
      </header>
    );
  }
}

export default Header;
