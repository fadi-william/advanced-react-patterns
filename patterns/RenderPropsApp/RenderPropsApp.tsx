import * as React from "react";

// Import the advanced toggle component.
import AdvancedToggle from "../../components/AdvancedToggle/AdvancedToggle";

// Import a button toggle.
import ToggleButton from "../../components/ToggleButton/ToggleButton";

// Import the switch component.
import Switch from "../../components/Switch/Switch";

const render = ({ togglerProps }) => {
  return (
    <div>
      <Switch on={togglerProps.on} toggle={togglerProps.toggle} />
      <hr />
      <ToggleButton {...togglerProps} />
    </div>
  );
};

class RenderPropsApp extends React.Component {
  onToggle = (toggleStatus: boolean) => {
    console.log(`The 'Advanced' toggle status is ${toggleStatus}`);
  };

  public render() {
    return <AdvancedToggle onToggle={this.onToggle} render={render} />;
  }
}

export default RenderPropsApp;
