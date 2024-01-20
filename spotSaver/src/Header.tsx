import { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {

    return (
      <header className="gradient-bg p-4 header">
        <nav className="flex items-center justify-between">
          <h1 className="text-white text-lg font-semibold">Spot Saver</h1>
        </nav>
      </header>
    );
  }
}

export default Header;
