import React from 'react';
import Info from "./components/info";
import Header from "./components/header";
import Input from "./components/input";
import logo from "./img/logo.jpg"

class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="Шапочка сайта"/>
                <Info/>
                <Input/>
                <img src={logo} alt="Логотип" width="200"/>
            </div>
        )
    };

}

export default App;
