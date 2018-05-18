import * as React from "react";

// Import the component style.
import "./Switch.scss";

// The props interface.
interface ISwitchProps {
  on: boolean;
  toggle: (event) => void;
}

class Switch extends React.Component<ISwitchProps, {}> {
  private static defaultProps = {
    on: false,
    toggle: () => {}
  };

  public render() {
    const { on, toggle } = this.props;

    return (
      <label className="switch">
        <input type="checkbox" checked={on} onChange={toggle} />
        <span className="slider round" />
      </label>
    );
  }
}

export default Switch;
