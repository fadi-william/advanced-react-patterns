import * as React from "react";

// Import the component style.
import "./ToggleButton.scss";

// Import the toggle HOC factory.
import { withToggle } from "../HOCToggleThirdIteration/HOCToggleThirdIteration";

// The props interface.
interface IToggleButtonProps {
    on: boolean;
    toggle: () => void;
}

class ToggleButton extends React.Component<IToggleButtonProps> {

    public static ToggleMessage = withToggle(
        ({tog: {on}}) => on ? <div>"Warning: the button is toggled on"</div> : null,
    );

    private static defaultProps = {
        on: false,
        toggle: () => {},
    };

    private button: HTMLButtonElement;

    focus = () => {
        this.button.focus();
    }

    public render() {
        const { on, toggle } = this.props;

        const ButtonState = (props) => {
            if (props.on) {
                return (<div>On</div>);
            } else {
                return (<div>Off</div>);
            }
        };

        return (
            <button
                    onClick={toggle}
                    className="Button"
                    ref={(button) => (this.button = button)}
                    aria-expanded={on}
            >
                <ButtonState on={on} />
            </button>
        );
    }
}

export default ToggleButton;
