import * as PropTypes from "prop-types";
import * as React from "react";
import * as ReactBroadcast from "react-broadcast";

import hoistNonReactStatics from "hoist-non-react-statics";

// Import the external components.
import AdvancedToggle from "../components/AdvancedToggle/AdvancedToggle";

class ToggleProvider extends React.Component {

    public static channel = "__toggle_channel__";

    public render() {
        const {children, ...remainingProps} = this.props;

        const renderComponent = ({ getTogglerProps }) => {

            return (
                <ReactBroadcast.Broadcast channel={ToggleProvider.channel} value={...getTogglerProps()}>
                    {children}
                </ReactBroadcast.Broadcast>
            );
        };

        return (
            <AdvancedToggle
                    {...remainingProps}
                    render={renderComponent}
            />
        );
    }
}

export const ConnectedToggle: React.StatelessComponent<any> = (props, context) => {
    return (
        <ReactBroadcast.Subscriber channel={ToggleProvider.channel}>
            {(togglerProps) => props.render(togglerProps)}
        </ReactBroadcast.Subscriber>
    );
};

interface IWrappedHOC<T> extends React.StatelessComponent<T> {
    // It is always there... But... It is initialized after being wrapped.
    WrappedComponent?: React.StatelessComponent<any>;
}

// Adding higher order component support.
// Create a higher order component for the toggle.
// Export the factory arrow function.
export const withToggle = (Component) => {
    const Wrapper: IWrappedHOC<any> = (props, context) => {
        const renderFn = (togglerProps) => (
            <Component {...togglerProps} />
        );
        return <ConnectedToggle render={renderFn} />;
    };

    Wrapper.displayName = `withToggle(${Component.displayName || Component.name})`;

    // When we test our higher order components. We will need to access the underlying
    // component.
    Wrapper.WrappedComponent = Component;

    // Use hoist non-react for static members.
    return hoistNonReactStatics(Wrapper, Component);
};

export default ToggleProvider;
