import * as React from "react";

// Import the component styles.
import "./Navigation.scss";

export interface INavigationItem {
    title: string;
    isActive: boolean;
}

// The component's props interface.
interface INavigationProps {
    navigationItems: INavigationItem[];
}

class Navigation extends React.Component<INavigationProps> {

    public render() {
        const { navigationItems } = this.props;

        const navItemsJSX = navigationItems.map((navItem) => (
        <li key={navItem.title}>
            <a href="#" className={`${navItem.isActive ? "active" : ""}`}>{navItem.title}</a>
        </li>));

        return (
            <ul className={`Navigation`}>
                {navItemsJSX}
            </ul>
        );
    }
}

export default Navigation;
