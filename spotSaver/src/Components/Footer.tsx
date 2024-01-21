import { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="fixed bg-white bottom-0 w-full text-red-500 p-4 text-center z-10">
        <p>&copy; Spot Saver {new Date().getFullYear()} </p>
      </footer>
    );
  }
}

export default Footer;

