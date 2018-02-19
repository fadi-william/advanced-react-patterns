import * as React from "react";

// Import the switch component.
import Switch from "../Switch/Switch";

// The props interface.
interface IAdvancedToggleProps {
    onToggle: (toggleStatus: boolean) => void;
    render: (IToggle) => JSX.Element;
}

// The state interface.
interface IAdvancedToggleState {
    isToggleChecked: boolean;
}

class AdvancedToggle extends React.Component<IAdvancedToggleProps, IAdvancedToggleState> {

    private static defaultProps = {
        onToggle: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            isToggleChecked: false,
        };
    }

    handleToggleClick = () => {
        this.setState(({isToggleChecked}) => ({isToggleChecked: !isToggleChecked}), () => {
            this.props.onToggle(this.state.isToggleChecked);
        });
    }

    public render() {
        return this.props.render({
            togglerProps: {
                on: this.state.isToggleChecked,
                toggle: this.handleToggleClick,
            },
        });
    }
}

export default AdvancedToggle;
