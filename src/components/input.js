import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: "",
        }

    }


    render() {
        return (
            <div>
                <input onChange={event => this.setState({userData: event.target.value})}/>
                <h2>{this.state.userData}</h2>
            </div>
        )
    };

}

export default Input;