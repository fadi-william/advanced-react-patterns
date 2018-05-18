import * as React from "react";

// Import the component style.
import "./Button.scss";

// The props interface.
export interface IButtonProps {
  event: string;
  // We are using onClick for as the prop name to demonstrate collision between props.
  onClick: (event) => void;
}

class Button extends React.Component<IButtonProps> {
  private static defaultProps = {
    event: "",
    onClick: () => {}
  };

  public render() {
    const { onClick, event } = this.props;

    return (
      <button onClick={onClick} className="Button">
        The {event} event
      </button>
    );
  }
}

export default Button;
