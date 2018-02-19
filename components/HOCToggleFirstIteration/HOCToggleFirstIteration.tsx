import * as PropTypes from "prop-types";
import * as React from "react";

// Import external components.
import Switch from "../Switch/Switch";

const TOGGLE_CONTEXT = "__toggle__";

export interface ICompoundChildrenProps {
    on?: boolean;
    toggle?: () => void;
    children?: React.ReactElement<any>;
}

// Create a higher order component for the toggle.
const withToggle = (Component: React.StatelessComponent<ICompoundChildrenProps>) => {
    const Wrapper: React.StatelessComponent<ICompoundChildrenProps> = (props, context) => {
        const toggleContext = context[TOGGLE_CONTEXT];
        return <Component {...toggleContext} {...props} />;
    };

    Wrapper.contextTypes = {
        [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
    };

    return Wrapper;
};

const ToggleOn: React.StatelessComponent<ICompoundChildrenProps> = withToggle(({ children, on }) => {
    return on ? children : null;
});

const ToggleOff: React.StatelessComponent<ICompoundChildrenProps> = withToggle(({ children, on }) => {
    return on ? null : children;
});

const ToggleButton: React.StatelessComponent<ICompoundChildrenProps> = withToggle(({ on, toggle, ...props}) => {
    return <Switch on={on} toggle={toggle} {...props} />;
});

interface IFCTWHOCProps {
    onToggle?: (toggleStatus: boolean) => void;
}

interface IFCTWHOCState {
    on?: boolean;
    toggle?: (toggleStatus: boolean) => void;
}

class FexibleCompoundToggleWithHOC extends React.Component<IFCTWHOCProps, IFCTWHOCState> {

    public static On = ToggleOn;
    public static Off = ToggleOff;
    public static Button = ToggleButton;
    public static withToggle = withToggle;

    private static defaultProps = {
        onToggle: () => {},
    };

    private static childContextTypes = {
        [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            on: false,
        };
    }

    handleToggleClick = () => {
        this.setState(({on}) => ({on: !on}), () => {
            this.props.onToggle(this.state.on);
        });
    }

    public getChildContext() {
        return {
            [TOGGLE_CONTEXT]: {
                on: this.state.on,
                toggle: this.handleToggleClick,
            },
        };
    }

    public render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

export default FexibleCompoundToggleWithHOC;
