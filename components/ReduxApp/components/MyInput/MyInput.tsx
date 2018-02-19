import * as React from "react";
import { Unsubscribe } from "redux";

// Get the redux store.
import store from "../../dataFlow/store";

// Import the redux actions.
import * as Actions from "../../dataFlow/actions";

// Import external components.
import { ConnectedToggle } from "../../providers/ToggleProvider";

// Import input styles.
import "./MyInput.scss";

interface IMyInputProps {
    on: boolean;
    toggle: (event) => void;
}

class MyInput extends React.Component {

    private input: HTMLInputElement;
    private unsubscribe: Unsubscribe;

    onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // We will implement it soon.
        if (event.target.value === "false") {
            store.dispatch(Actions.toggleState(false));
        }

        if (event.target.value === "true") {
            store.dispatch(Actions.toggleState(true));
        }
    }

    public componentDidMount() {
        this.input.value = store.getState().toggle.isToggleChecked;
        this.unsubscribe = store.subscribe(() => {
            this.input.value = store.getState().toggle.isToggleChecked;
        });
    }

    public componentWillUnmount() {
        this.unsubscribe();
    }

    public render() {
        const renderComponent = (props: IMyInputProps) => (
            <input
                ref={(input) => this.input = input}
                placeholder="Enter the current state"
                className="My-input"
                onChange={this.onInputChange}
            />
        );

        return (<ConnectedToggle render={renderComponent} />);
    }
}

export default MyInput;
