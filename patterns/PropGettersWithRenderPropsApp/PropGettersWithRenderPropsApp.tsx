import * as React from "react";

// Import the advanced toggle component.
import AdvancedToggle from "../../components/AdvancedTogglePropGetters/AdvancedTogglePropGetters";

// Import a button toggle.
import ToggleButton from "../../components/ToggleButton/ToggleButton";

// Import the switch component.
import Switch from "../../components/Switch/Switch";

const render = ({ getTogglerProps, on }) => {
    return (
        <div>
            <Switch {...getTogglerProps()} />
            <hr />
            <ToggleButton {...getTogglerProps({toggle: () => alert("hi")})} />
        </div>
    );
};

class PropGettersWithRenderProps extends React.Component {

   onToggle = (toggleStatus: boolean) => {
        console.log(`The 'Advanced' toggle status is ${toggleStatus}`);
    }

    public render() {
        return (
            <AdvancedToggle onToggle={this.onToggle} render={render} />
        );
    }
}

export default PropGettersWithRenderProps;
