import * as React from "react";
import Highlight from "react-highlight";

// Import the component styles.
import "./StatePrinter.scss";

// Import highlightJs styles.
import "../../../../node_modules/highlight.js/styles/atelier-cave-light.css";

// Import external components.
import { ConnectedToggle } from "../../providers/ToggleProvider";

interface IStatePrinterProps {
    on: boolean;
    toggle: (event) => void;
}

// The state printer component.
class StatePrinter extends React.Component {

    public render() {

        const renderComponent = (props: IStatePrinterProps) => {
            const currentState = JSON.stringify({
                state: props.on,
            }, undefined, 2);
            return (
                <div>
                    <Highlight className="State-printer js">
                        {currentState}
                    </Highlight>
                </div>
            );
        };

        return (<ConnectedToggle render={renderComponent} />);
    }
}

export default StatePrinter;
