import * as React from "react";

// Import external components.
import UpdateBlocker from "../../UpdateBlocker/UpdateBlocker";
import Article from "../Article/ArticleWithBroadcast";
import Header from "../Header/HeaderWithBroadcast";

class Layout extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        {/* We are using an update blocker for demonstration purposes only! */}
        <UpdateBlocker>
          <Article />
        </UpdateBlocker>
      </div>
    );
  }
}

export default Layout;
