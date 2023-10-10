import React from 'react';
import Info from "./components/info";
import Header from "./components/header";
import Input from "./components/input";
import logo from "./img/logo.jpg";


class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="Шапочка сайта"/>
                <Info/>
                <Input/>
                <img alt="Логотип" width="400" src={logo}/>
            </div>
        )
    };

}

export default App;
