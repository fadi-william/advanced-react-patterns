import * as React from "react";

// Import some styles.
import "./FlexibleCompoundApp.scss";

// Import the toggle component.
import FlexibleCompoundToggle from "../../components/FlexibleCompoundToggle/FexibleCompoundToggle";

class FlexibleCompoundApp extends React.Component {
  onToggle = (toggleStatus: boolean) => {
    console.log(`The 'Flexible Compound' toggle status is ${toggleStatus}`);
  };

  public render() {
    return (
      <FlexibleCompoundToggle onToggle={this.onToggle}>
        <div>
          <FlexibleCompoundToggle.On>
            <div className="text">The toggle button is On</div>
          </FlexibleCompoundToggle.On>
        </div>
        <FlexibleCompoundToggle.Off>
          <div className="text">The toggle button is Off</div>
        </FlexibleCompoundToggle.Off>
        <FlexibleCompoundToggle.Button />
      </FlexibleCompoundToggle>
    );
  }
}

export default FlexibleCompoundApp;
