import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "No clicked",
        }

        this.headerClick = this.headerClick.bind(this)
    }

    render() {
        return (
            <div>
                <header className="header" onClick={this.headerClick}>{this.props.title}</header>
                <h3>{this.state.text === "No clicked" ? "No" : "Yes"}</h3>
            </div>
        )
    };

    headerClick() {
        this.setState({text: "Clicked"})
        console.log('headerClick')
    };
}

export default Header;
