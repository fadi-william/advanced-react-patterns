import * as React from "react";
import { Unsubscribe } from "redux";

// Get the redux store.
import store from "../../dataFlow/store";

// Import the redux actions.
import * as Actions from "../../dataFlow/actions";

interface ITogglerProps {
  on: boolean;
  toggle: (toggleStatus: boolean) => void;
}

interface IToggle {
  getTogglerProps(): ITogglerProps;
}

// The props interface.
interface IAdvancedToggleProps {
  isToggleChecked?: boolean;
  onToggle?: (toggleStatus: boolean) => void;
  onReset?: (toggleStatus: boolean) => void;
  render: (IToggle) => JSX.Element;
}

// The state interface.
interface IAdvancedToggleState {
  isToggleChecked?: boolean;
}

const compose = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

class AdvancedToggle extends React.Component<
  IAdvancedToggleProps,
  IAdvancedToggleState
> {
  private static defaultProps = {
    onToggle: () => {}
  };

  constructor(props) {
    super(props);
    this.state = {
      isToggleChecked: false
    };
  }

  private unsubscribe: Unsubscribe;

  handleToggleClick = async () => {
    if (this.isOnControlled()) {
      this.props.onToggle(!this.props.isToggleChecked);
    } else {
      await store.dispatch(Actions.toggleState(!this.state.isToggleChecked));
      this.props.onToggle(this.state.isToggleChecked);
    }
  };

  isOnControlled = () => {
    console.log(this.props.isToggleChecked);
    return this.props.isToggleChecked !== undefined;
  };

  getTogglerProps = ({ toggle, ...props }: any = {}) => {
    return {
      on: this.isOnControlled()
        ? this.props.isToggleChecked
        : this.state.isToggleChecked,
      toggle: compose(toggle, this.handleToggleClick),
      ...props
    };
  };

  reset = () => {
    if (this.isOnControlled()) {
      this.props.onReset(!this.props.isToggleChecked);
    } else {
      // Reset the redux store.
      store.dispatch(Actions.clearState());
    }
  };

  public componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState().toggle);
    });
  }

  public componentWillUnmount() {
    this.unsubscribe();
  }

  public render() {
    return this.props.render({
      getTogglerProps: this.getTogglerProps,
      reset: this.reset
    });
  }
}

export default AdvancedToggle;
