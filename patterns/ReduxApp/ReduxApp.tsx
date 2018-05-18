import * as React from "react";

// Import external components.
import MyInput from "../../components/ReduxApp/components/MyInput/MyInput";
import StatePrinter from "../../components/ReduxApp/components/StatePrinter/StatePrinter";
import Switch from "../../components/ReduxApp/components/Switch/Switch";
import ToggleProvider from "../../components/ReduxApp/providers/ToggleProvider";
import UpdateBlocker from "../../components/UpdateBlocker/UpdateBlocker";

class ReduxApp extends React.Component {
  public render() {
    return (
      <ToggleProvider defaultOn={true}>
        <UpdateBlocker>
          <MyInput />
          <Switch />
          <StatePrinter />
        </UpdateBlocker>
      </ToggleProvider>
    );
  }
}

export default ReduxApp;
