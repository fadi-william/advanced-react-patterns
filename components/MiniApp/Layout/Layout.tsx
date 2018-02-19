import * as React from "react";

// Import external components.
import Article from "../Article/Article";
import Header from "../Header/Header";

class Layout extends React.Component {

    public render() {
        return (
            <div>
                <Header />
                <Article />
            </div>
        );
    }
}

export default Layout;
