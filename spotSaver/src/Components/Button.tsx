import React, { ReactNode, Component} from 'react';

interface ButtonProps {
  children: ReactNode;
}

class Button extends Component<ButtonProps> {
  render() {

    return (
      <button
        className="bg-[#ff3131] hover:bg-[#f96262] text-white font-bold py-2 px-4 rounded">
        {this.props.children}
      </button>
    );
  }
}

export default Button;
