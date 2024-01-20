import React, { ReactNode, Component} from 'react';

interface ButtonProps {
  // onClick: () => void;
  children: ReactNode;
  // disabled?: boolean;
  // type?: 'button' | 'submit' | 'reset';
  className?: string;
}

class Button extends Component<ButtonProps> {
  render() {

    const { children, className = '' } = this.props;
    return (
      <button
        // onClick={onClick}
        className={`bg-[#ff3131] hover:bg-[#f96262] text-white font-bold py-2 px-4 rounded ${className}`}>
        {children}
      </button>
    );
  }
}

export default Button;
