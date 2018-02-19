import * as React from "react";

// Import the component style.
import "./Switch.scss";

// Import external components.
import { ConnectedToggle } from "../../providers/ToggleProvider";

// The props interface.
interface ISwitchProps {
    on: boolean;
    toggle: (event) => void;
}

class Switch extends React.Component {

    public render() {

        const renderComponent = (props: ISwitchProps) => (
            <label className="switch">
              <input type="checkbox" checked={props.on} onChange={props.toggle} />
              <span className="slider round" />
            </label>
        );

        return (<ConnectedToggle render={renderComponent} />);
    }
}

export default Switch;
