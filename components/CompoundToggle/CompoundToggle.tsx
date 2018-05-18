import * as React from "react";

// Import external components.
import Switch from "../Switch/Switch";

interface ICompoundChildrenProps {
  on?: boolean;
  toggle?: () => void;
  children?: React.ReactElement<any>;
}

const ToggleOn = ({ on, children }: ICompoundChildrenProps) => {
  return on ? children : null;
};

const ToggleOff = ({ on, children }: ICompoundChildrenProps) => {
  return on ? null : children;
};

const ToggleButton = ({ on, toggle }: ICompoundChildrenProps) => {
  return <Switch on={on} toggle={toggle} />;
};

interface ICompoundToggleProps {
  onToggle?: (toggleStatus: boolean) => void;
}

interface ICompoundToggleState {
  on?: boolean;
  toggle?: (toggleStatus: boolean) => void;
}

class CompoundToggle extends React.Component<
  ICompoundToggleProps,
  ICompoundToggleState
> {
  public static On = ToggleOn;
  public static Off = ToggleOff;
  public static Button = ToggleButton;

  private static defaultProps = {
    onToggle: () => {}
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

  public render() {
    const { on } = this.state;
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(
        child as React.ReactElement<ICompoundChildrenProps | any>,
        {
          on: this.state.on,
          toggle: this.handleToggleClick
        }
      )
    );

    return <div>{children}</div>;
  }
}

export default CompoundToggle;
