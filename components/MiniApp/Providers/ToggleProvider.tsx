import * as PropTypes from "prop-types";
import * as React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

// Import the external components.
import AdvancedToggle from "../../AdvancedToggleControlled/AdvancedToggleControlled";
import { toggleProviderContextName } from "./ToggleProviderConstants";
import ToggleProviderRenderer from "./ToggleProviderRenderer";

class ToggleProvider extends React.Component {
  public static contextName = toggleProviderContextName;

  public render() {
    const { children, ...remainingProps } = this.props;

    const renderComponent = ({ getTogglerProps }) => {
      return (
        <ToggleProviderRenderer
          togglerProps={getTogglerProps()}
          children={children}
        />
      );
    };

    return <AdvancedToggle {...remainingProps} render={renderComponent} />;
  }
}

export const ConnectedToggle: React.StatelessComponent<any> = (
  props,
  context
) => {
  return props.render(context[ToggleProvider.contextName]);
};
ConnectedToggle.contextTypes = {
  [ToggleProvider.contextName]: PropTypes.object.isRequired
};

interface IWrappedHOC<T> extends React.StatelessComponent<T> {
  // It is always there... But... It is initialized after being wrapped.
  WrappedComponent?: React.StatelessComponent<any>;
}

// Adding higher order component support.
// Create a higher order component for the toggle.
// Export the factory arrow function.
export const withToggle = Component => {
  const Wrapper: IWrappedHOC<any> = (props, context) => {
    const renderFn = togglerProps => <Component {...togglerProps} />;
    return <ConnectedToggle render={renderFn} />;
  };

  Wrapper.displayName = `withToggle(${Component.displayName ||
    Component.name})`;

  // When we test our higher order components. We will need to access the underlying
  // component.
  Wrapper.WrappedComponent = Component;

  // Use hoist non-react for static members.
  return hoistNonReactStatics(Wrapper, Component);
};

export default ToggleProvider;
