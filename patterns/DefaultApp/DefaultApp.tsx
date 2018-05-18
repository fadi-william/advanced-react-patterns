import * as React from "react";

// Import the toggle component.
import DefaultToggle from "../../components/DefaultToggle/DefaultToggle";

class DefaultApp extends React.Component {
  onToggle = (toggleStatus: boolean) => {
    console.log(`The 'Default' toggle status is ${toggleStatus}`);
  };

  public render() {
    return <DefaultToggle onToggle={this.onToggle} />;
  }
}

export default DefaultApp;
