import * as React from "react";

// The props interface.
interface IAdvancedToggleProps {
  defaultOn: boolean;
  onToggle: (toggleStatus: boolean) => void;
  onReset: (toggleStatus: boolean) => void;
  render: (IToggle) => JSX.Element;
}

// The state interface.
interface IAdvancedToggleState {
  isToggleChecked: boolean;
}

const compose = (...fns) => (...args) => fns.forEach(fn => fn && fn(...args));

class AdvancedToggle extends React.Component<
  IAdvancedToggleProps,
  IAdvancedToggleState
> {
  private static defaultProps = {
    defaultOn: false,
    onToggle: () => {}
  };

  private initialState: IAdvancedToggleState;

  constructor(props) {
    super(props);
    this.initialState = {
      isToggleChecked: this.props.defaultOn
    };

    this.state = this.initialState;
  }

  handleToggleClick = () => {
    this.setState(
      ({ isToggleChecked }) => ({ isToggleChecked: !isToggleChecked }),
      () => {
        this.props.onToggle(this.state.isToggleChecked);
      }
    );
  };

  getTogglerProps = ({ toggle, ...props }: any = {}) => {
    return {
      on: this.state.isToggleChecked,
      toggle: compose(toggle, this.handleToggleClick),
      ...props
    };
  };

  reset = () => {
    this.setState(this.initialState, () => {
      this.props.onReset(this.state.isToggleChecked);
    });
  };

  public render() {
    return this.props.render({
      getTogglerProps: this.getTogglerProps,
      reset: this.reset
    });
  }
}

export default AdvancedToggle;
