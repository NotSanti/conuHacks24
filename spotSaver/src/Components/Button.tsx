import { ReactNode, Component, MouseEvent} from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  hoverClassName?: string;
  onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
  imageSrc?: boolean;
}

interface ButtonState {
  isHovered: boolean;
}

class Button extends Component<ButtonProps, ButtonState> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleClick = () => {
   console.log();
  }

  handleMouseEnter = (event: MouseEvent<HTMLButtonElement>) => {
    this.setState({ isHovered: true });
    if (this.props.onMouseEnter) {
      this.props.onMouseEnter(event);
    }
  };

  handleMouseLeave = (event: MouseEvent<HTMLButtonElement>) => {
    this.setState({ isHovered: false });
    if (this.props.onMouseLeave) {
      this.props.onMouseLeave(event);
    }
  };

  render() {
    const { children, className = '', hoverClassName = '', imageSrc } = this.props;
    const { isHovered } = this.state;

    const buttonImgSrc = imageSrc ? (isHovered ? '/search_no_bg.png' : '/search_no_bg_white.png') : '';
    const buttonText = imageSrc ? (isHovered ? 'Search' : children) : children;

    return (
      <button
        className={`custom-button ${isHovered ? hoverClassName : ''} font-bold py-2 px-4 rounded ${className}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleClick}>
        {imageSrc ? (
          <img
            src={buttonImgSrc}
            className="mr-2 w-6 h-6"
            alt="Search Icon"
          />
          ) : null}
        {buttonText}
      </button>
    );
  }
}

export default Button;
