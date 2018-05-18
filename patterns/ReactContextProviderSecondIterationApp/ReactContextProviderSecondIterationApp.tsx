import * as React from "react";

// Import external components.
import Layout from "../../components/MiniApp/Layout/LayoutWithUpdateBlocker";
import ToggleProvider from "../../components/MiniApp/Providers/ToggleProviderWithBroadcast";

class ReactContextProviderApp extends React.Component {
  onToggleEmoji = (toggleStatus: boolean) => {
    console.log(
      `The emoji is actually ${toggleStatus ? "enabled" : "disabled"}`
    );
  };

  public render() {
    return (
      <ToggleProvider>
        <Layout />
      </ToggleProvider>
    );
  }
}

export default ReactContextProviderApp;
