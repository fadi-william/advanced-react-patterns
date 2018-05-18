import * as React from "react";

// Import the switch component.
import Switch from "../Switch/Switch";

// The props interface.
interface IDToggleProps {
  onToggle?: (toggleStatus: boolean) => void;
}

// The state interface.
interface IDToggleState {
  isToggleChecked: boolean;
}

class DefaultToggle extends React.Component<IDToggleProps, IDToggleState> {
  private static defaultProps = {
    onToggle: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      isToggleChecked: false
    };
  }

  handleToggleClick = () => {
    this.setState(
      ({ isToggleChecked }) => ({ isToggleChecked: !isToggleChecked }),
      () => {
        this.props.onToggle(this.state.isToggleChecked);
      }
    );
  };

  public render() {
    const { isToggleChecked } = this.state;

    return <Switch on={isToggleChecked} toggle={this.handleToggleClick} />;
  }
}

export default DefaultToggle;
