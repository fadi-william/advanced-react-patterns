import * as React from "react";

// Import the advanced toggle component.
import AdvancedToggle from "../../components/AdvancedToggleWithStateInitializer/AdvancedToggleWithStateInitializer";

// Import the switch component.
import Switch from "../../components/Switch/Switch";

const render = ({ getTogglerProps, reset }) => {
  return (
    <div>
      <Switch {...getTogglerProps()} />
      <hr />
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

class PropGettersWithRenderPropsApp extends React.Component {
  onToggle = (toggleStatus: boolean) => {
    console.log(`The 'Advanced' toggle status is ${toggleStatus}`);
  };

  onReset = (toggleStatus: boolean) => {
    console.log(`The 'Advanced' toggle was reset to ${toggleStatus}`);
  };

  public render() {
    return (
      <AdvancedToggle
        defaultOn={true}
        onToggle={this.onToggle}
        onReset={this.onReset}
        render={render}
      />
    );
  }
}

export default PropGettersWithRenderPropsApp;
