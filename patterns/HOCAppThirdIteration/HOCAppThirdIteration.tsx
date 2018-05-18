import * as React from "react";

// Import a button toggle.
import ToggleButton from "../../components/ToggleButton/ToggleButton";

// Import some styles.
import "./HOCAppThirdIteration.scss";

// Import the toggle component.
import HOCToggleThirdIteration, {
  ICompoundChildrenProps
} from "../../components/HOCToggleThirdIteration/HOCToggleThirdIteration";

// My custom button's interface.
interface IMyCustomButton extends ToggleButton {
  children: ToggleButton;
}

class HOCAppThirdIteration extends React.Component {
  private buttonToggle: ToggleButton;

  onToggle = (toggleStatus: boolean) => {
    console.log(
      `The 'Flexible Compound with HOC namespacing' toggle status is ${toggleStatus}`
    );

    // Focus the toggle button if the state is on.
    if (toggleStatus) {
      this.buttonToggle.focus();
    }
  };

  public render() {
    // Use an external toggle to better demonstrate the purpose of higher order components.
    const MyCustomButtonComponent = ({ tog: { on, onClick }, innerRef }) => (
      <ToggleButton on={on} toggle={onClick} ref={innerRef} />
    );

    const ToggleComponent = HOCToggleThirdIteration.withToggle(
      ({ tog: { on, onClick }, innerRef }) => (
        <ToggleButton on={on} toggle={onClick} ref={innerRef} />
      )
    );
    ToggleComponent.ToggleMessage = ToggleButton.ToggleMessage;
    // If you want to change the display name of the react component in the dev-tools;
    // set the value of the component's displayName.
    ToggleComponent.displayName = "MyButtonToggle";

    return (
      <HOCToggleThirdIteration onToggle={this.onToggle}>
        <HOCToggleThirdIteration.On>
          <div className="blockDisplay">The toggle button is On</div>
        </HOCToggleThirdIteration.On>
        <HOCToggleThirdIteration.Off>
          <div className="blockDisplay">The toggle button is Off</div>
        </HOCToggleThirdIteration.Off>
        <div className="blockDisplay">
          <HOCToggleThirdIteration.Button />
        </div>
        <ToggleComponent
          innerRef={buttonToggle => (this.buttonToggle = buttonToggle)}
        />
        <ToggleComponent.ToggleMessage />
      </HOCToggleThirdIteration>
    );
  }
}

export default HOCAppThirdIteration;
