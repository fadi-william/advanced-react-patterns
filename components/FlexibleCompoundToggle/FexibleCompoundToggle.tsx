import * as PropTypes from "prop-types";
import * as React from "react";

// Import external components.
import Switch from "../Switch/Switch";

const TOGGLE_CONTEXT = "__toggle__";

interface IToggleContext {
    on: boolean;
    toggle: () => void;
}

interface ICompoundChildrenProps {
    on?: boolean;
    toggle?: () => void;
    children?: React.ReactElement<any>;
}

const ToggleOn: React.StatelessComponent<ICompoundChildrenProps> = 
    ({ children }, context: IToggleContext) => {
        const { on } = context[TOGGLE_CONTEXT];
        return on ? children : null;
    };

ToggleOn.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

const ToggleOff: React.StatelessComponent<ICompoundChildrenProps> = ({ children }, context: IToggleContext) => {
    const { on } = context[TOGGLE_CONTEXT];
    return on ? null : children;
};

ToggleOff.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

const ToggleButton: React.StatelessComponent<ICompoundChildrenProps> = (props, context: IToggleContext) => {
    const { on, toggle } = context[TOGGLE_CONTEXT];
    return <Switch on={on} toggle={toggle} {...props} />;
};

ToggleButton.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired,
};

interface IFlexibleCompundProps {
    onToggle?: (toggleStatus: boolean) => void;
}

interface IFlexibleCompundState {
    on?: boolean;
    toggle?: (toggleStatus: boolean) => void;
}

class FexibleCompoundToggle extends React.Component<IFlexibleCompundProps, IFlexibleCompundState> {

    public static On = ToggleOn;
    public static Off = ToggleOff;
    public static Button = ToggleButton;

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

    getChildContext = () => {
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

export default FexibleCompoundToggle;
