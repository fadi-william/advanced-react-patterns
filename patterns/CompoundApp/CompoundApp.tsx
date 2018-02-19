import * as React from "react";

// Import some styles.
import "./CompoundApp.scss";

// Import the toggle component.
import CompoundToggle from "../../components/CompoundToggle/CompoundToggle";

class CompoundApp extends React.Component {

    onToggle = (toggleStatus: boolean) => {
        console.log(`The 'Compound' toggle status is ${toggleStatus}`);
    }

    public render() {
        return (
            <CompoundToggle onToggle={this.onToggle}>
                <CompoundToggle.On>
                    <div className="text">The toggle button is On</div>
                </CompoundToggle.On>
                <CompoundToggle.Off>
                    <div className="text">The toggle button is Off</div>
                </CompoundToggle.Off>
                <CompoundToggle.Button />
            </CompoundToggle>
        );
    }
}

export default CompoundApp;
