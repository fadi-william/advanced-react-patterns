import * as React from "react";

// Import an external toggle component with its styles.
import Toggle from "react-toggle";
import "react-toggle/style.css";

// Import a button.
import Button, { IButtonProps } from "../../components/Button/Button";

// Import some styles.
import "./HOCAppSecondIteration.scss";

// Import the toggle component.
import HOCToggleSecondIteration, {
  ICompoundChildrenProps
} from "../../components/HOCToggleSecondIteration/HOCToggleSecondIteration";

interface IMyEventComponentProps {
  event: string;
  onClick: (e: React.SyntheticEvent<string>) => void;
}

class HOCAppSecondIteration extends React.Component {
  onToggle = (toggleStatus: boolean) => {
    console.log(
      `The 'Flexible Compound with HOC namespacing' toggle status is ${toggleStatus}`
    );
  };

  public render() {
    // Use an external toggle to better demonstrate the purpose of higher order components.
    const ImportedToggle: React.StatelessComponent<ICompoundChildrenProps> = ({
      tog
    }) => <Toggle checked={tog.on} onChange={tog.onClick} />;

    const ToggleComponent: React.StatelessComponent<
      ICompoundChildrenProps
    > = HOCToggleSecondIteration.withToggle(ImportedToggle);
    // If you want to change the display name of the react component in the dev-tools;
    // set the value of the component's displayName.
    ToggleComponent.displayName = "MyCustomImportedToggle";

    const EventComponent = props => {
      const { onClick, tog } = props;
      const event = props.event;
      return tog.on ? <Button event={event} onClick={onClick} /> : null;
    };

    const MyEventComponent: React.StatelessComponent<
      ICompoundChildrenProps & IMyEventComponentProps
    > = HOCToggleSecondIteration.withToggle(EventComponent);

    return (
      <HOCToggleSecondIteration onToggle={this.onToggle}>
        <HOCToggleSecondIteration.On>
          <div className="blockDisplay">The toggle button is On</div>
        </HOCToggleSecondIteration.On>
        <HOCToggleSecondIteration.Off>
          <div className="blockDisplay">The toggle button is Off</div>
        </HOCToggleSecondIteration.Off>
        <div className="blockDisplay">
          <HOCToggleSecondIteration.Button />
        </div>
        <ToggleComponent />
        <MyEventComponent event="toggle" onClick={e => alert(e.type)} />
      </HOCToggleSecondIteration>
    );
  }
}

export default HOCAppSecondIteration;
