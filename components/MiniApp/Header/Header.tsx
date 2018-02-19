import * as React from "react";

// Import the component styles.
import "./Header.scss";

// Import the external interfaces.
import { ITogglerProps } from "../../AdvancedToggleControlled/AdvancedToggleControlled";
import { INavigationItem } from "../Navigation/Navigation";

// Import external components.
import Switch from "../../../components/Switch/Switch";
import Navigation from "../Navigation/Navigation";
import { ConnectedToggle } from "../Providers/ToggleProvider";

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    public render() {

        // Create the different navigation items.
        const navigationItems = [];

        const renderComponent = (props: ITogglerProps) => {

            const isEmojiEnabled = props.on;

            if (!isEmojiEnabled) {
                // Here, for simplicty.
                // We set the home page as the active page.
                // We won't the onClick of the list items to change the default state
                // for simplicity.
                navigationItems.push({
                    isActive: true,
                    title: "Home",
                });

                navigationItems.push(
                    {
                        isActive: false,
                        title: "About",
                    },
                );

                navigationItems.push(
                    {
                        isActive: false,
                        title: "Blog",
                    },
                );
            } else {
                navigationItems.push({
                    isActive: true,
                    title: "🏘",
                });

                navigationItems.push(
                    {
                        isActive: false,
                        title: "📰",
                    },
                );

                navigationItems.push(
                    {
                        isActive: false,
                        title: "✏",
                    },
                );
            }

            return (
                <div>
                    <nav className="Header">
                        <div className="Left-nav">
                            <Navigation navigationItems={navigationItems}/>
                        </div>
                        <ul>
                            <span>{`${props.on ? "🦄" : "Enable Emoji"}`}</span>
                            <Switch on={props.on} toggle={props.toggle} />
                        </ul>
                    </nav>
                </div>
            );
        };

        return (
            <ConnectedToggle render={renderComponent} />
        );
    }
}

export default Header;
