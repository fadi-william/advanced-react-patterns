import * as PropTypes from "prop-types";
import * as React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";

// Import external components.
import Switch from "../Switch/Switch";
import ImportedToggleButton from "../ToggleButton/ToggleButton";

// Import the toggle button interface.
import { IButtonProps } from "../Button/Button";
import IToggleButton from "../ToggleButton/ToggleButton";

const TOGGLE_CONTEXT = "__toggle__";

export interface ICompoundChildrenProps {
  tog?: {
    on: boolean;
    // We change toggle to onClick... If it wasn't namespaced... There will be a collision
    // with the button props!
    onClick: () => void;
  };
  children?: React.ReactElement<any>;
  innerRef?: React.Ref<IToggleButton>;
}

interface IWrappedHOC<T> extends React.StatelessComponent<T> {
  // It is always there... But... It is initialized after being wrapped.
  WrappedComponent?: React.StatelessComponent<any>;
  ToggleMessage?: IWrappedHOC<T>;
}

// Create a higher order component for the toggle.
export const withToggle = (
  Component: React.StatelessComponent<ICompoundChildrenProps>
) => {
  const Wrapper: IWrappedHOC<ICompoundChildrenProps> = (props, context) => {
    const toggleContext = context[TOGGLE_CONTEXT];
    return <Component tog={toggleContext} {...props} />;
  };

  Wrapper.contextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  };

  Wrapper.displayName = `withToggle(${Component.displayName ||
    Component.name})`;

  // When we test our higher order components. We will need to access the underlying
  // component.
  Wrapper.WrappedComponent = Component;

  return Wrapper;
};

const ToggleOn: React.StatelessComponent<ICompoundChildrenProps> = withToggle(
  ({ children, tog }) => {
    return tog.on ? children : null;
  }
);

const ToggleOff: React.StatelessComponent<ICompoundChildrenProps> = withToggle(
  ({ children, tog }) => {
    return tog.on ? null : children;
  }
);

const ToggleButton: React.StatelessComponent<
  ICompoundChildrenProps
> = withToggle(({ tog, ...props }) => {
  return <Switch on={tog.on} toggle={tog.onClick} {...props} />;
});

interface ITCTWHOCProps {
  onToggle?: (toggleStatus: boolean) => void;
}

interface ITCTWHOCState {
  on?: boolean;
  toggle?: (toggleStatus: boolean) => void;
}

class FexibleCompoundToggleWithHOC extends React.Component<
  ITCTWHOCProps,
  ITCTWHOCState
> {
  public static On = withToggle(ToggleOn);
  public static Off = withToggle(ToggleOff);
  public static Button = withToggle(ToggleButton);
  public static withToggle = withToggle;

  private static defaultProps = {
    onToggle: () => {}
  };

  private static childContextTypes = {
    [TOGGLE_CONTEXT]: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }

  handleToggleClick = () => {
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );
  };

  getChildContext = () => {
    return {
      [TOGGLE_CONTEXT]: {
        on: this.state.on,
        onClick: this.handleToggleClick
      }
    };
  };

  public render() {
    return <div>{this.props.children}</div>;
  }
}

export default FexibleCompoundToggleWithHOC;
