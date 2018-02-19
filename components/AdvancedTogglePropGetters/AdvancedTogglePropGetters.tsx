import * as React from "react";

// The props interface.
interface IAdvancedToggleProps {
    onToggle: (toggleStatus: boolean) => void;
    render: (IToggle) => JSX.Element;
}

// The state interface.
interface IAdvancedToggleState {
    isToggleChecked: boolean;
}

const compose = (...fns) => (...args) => fns.forEach((fn) => fn && fn(...args));

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

    getTogglerProps = ({toggle, ...props}: any = {}) => {
        return {
            on: this.state.isToggleChecked,
            toggle: compose(toggle, this.handleToggleClick),
            ...props,
        };
    }

    public render() {
        return this.props.render({
            getTogglerProps: this.getTogglerProps,
        });
    }
}

export default AdvancedToggle;
