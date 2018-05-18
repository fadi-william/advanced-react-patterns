import * as React from "react";

// Import the advanced toggle component.
import AdvancedToggle from "../../components/AdvancedToggleControlled/AdvancedToggleControlled";

// Import the switch component.
import Switch from "../../components/Switch/Switch";

// Define an interface for this app component.
interface IPropGettersWithRenderPropsAppState {
  isToggleChecked: boolean;
  clickCount: number;
}

class PropGettersWithRenderPropsApp extends React.Component<
  {},
  IPropGettersWithRenderPropsAppState
> {
  private initialState: IPropGettersWithRenderPropsAppState;

  constructor(props) {
    super(props);

    // Setting an initial state.
    this.initialState = {
      clickCount: 0,
      isToggleChecked: false
    };

    this.state = this.initialState;
  }

  onToggle = (toggleStatus: boolean) => {
    const { clickCount } = this.state;

    this.setState({
      clickCount: clickCount + 1,
      isToggleChecked: clickCount > 3 ? false : toggleStatus
    });
  };

  onReset = (toggleStatus: boolean) => {
    console.log(`The 'Advanced' toggle was reset to ${toggleStatus}`);

    // Reset the initial state.
    this.setState(this.initialState);
  };

  public render() {
    const { clickCount, isToggleChecked } = this.state;

    const render = ({ getTogglerProps, reset }) => {
      return (
        <div>
          <Switch {...getTogglerProps()} />
          <hr />
          {clickCount < 4 && <p>Click count: {clickCount}</p>}
          {clickCount > 3 && (
            <div>
              <p>Whoa! You've clicked too much!</p>
              <button onClick={() => reset()}>Reset</button>
            </div>
          )}
        </div>
      );
    };

    return (
      <AdvancedToggle
        isToggleChecked={isToggleChecked}
        onToggle={this.onToggle}
        onReset={this.onReset}
        render={render}
      />
    );
  }
}

export default PropGettersWithRenderPropsApp;
