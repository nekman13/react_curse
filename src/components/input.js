import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "inputText": "",
        }
    }

    render() {
        return (
            <div>
                <input onChange={event => {
                    this.setState({"inputText": event.target.value})
                }}/>
                <h2>{this.state.inputText}</h2>
            </div>
        )
    }
}

export default Input;