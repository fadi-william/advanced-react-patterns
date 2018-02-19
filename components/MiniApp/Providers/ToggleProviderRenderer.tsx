import * as PropTypes from "prop-types";
import * as React from "react";

// Import the external interfaces.
import { ITogglerProps } from "../../AdvancedToggleControlled/AdvancedToggleControlled";

// Import external components.
import ToggleProvider from "./ToggleProvider";
import { toggleProviderContextName } from "./ToggleProviderConstants";

// The component's props interface.
interface IToggleProviderRendererProps {
    togglerProps: ITogglerProps;
    children: React.ReactNode;
}

class ToggleProviderRenderer extends React.Component<IToggleProviderRendererProps> {

    public static contextName = toggleProviderContextName;

    public static childContextTypes = {
        [ToggleProviderRenderer.contextName]: PropTypes.object.isRequired,
    };

    public getChildContext() {
        return {
            [ToggleProviderRenderer.contextName]: this.props.togglerProps,
        };
    }

    public render() {
        return this.props.children;
    }
}

export default ToggleProviderRenderer;
