import * as React from "react";

// An update blocker component.
class UpdateBlocker extends React.Component {

    // Normally, this is usually used for optimization purposes.
    public shouldComponentUpdate() {
        return false;
    }

    public render() {
        return this.props.children;
    }
}

export default UpdateBlocker;
