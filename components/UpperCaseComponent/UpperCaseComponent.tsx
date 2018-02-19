import * as React from "react";

// The component interface.
interface IUpperCaseComponent {
    handleChange(event);
}

// The state interface.
interface IUpperCaseComponentState {
    lowerValue: string;
    upperValue: string;
}

class UpperCaseComponent extends React.Component<{}, IUpperCaseComponentState> implements IUpperCaseComponent {

    private button: HTMLButtonElement;

    constructor(props) {
        super(props);

        this.state = {
            lowerValue: "",
            upperValue: "",
        };
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            lowerValue: event.target.value.toLowerCase(),
            upperValue: event.target.value.toUpperCase(),
        });
    }

    public render() {
        const { upperValue, lowerValue } = this.state;

        return (
            <div>
                <h1>Upper value</h1>
                <input type="text" value={upperValue} onChange={(e) => this.handleChange(e)} />
                <hr/>
                <h1>Lower value</h1>
                <input type="text" value={lowerValue} onChange={(e) => this.handleChange(e)} />
            </div>
        );
    }
}

export default UpperCaseComponent;
