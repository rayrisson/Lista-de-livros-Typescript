import React from "react"
import { Provider } from "react-redux";
import List from "../../components/List";
import Search from "../../components/Search";
import store from "../../store";
import "./style.css"
import HomeProps from "./Home.types";

const Home = ({title}:HomeProps) => {
    return (
        <div className="Home">
            <h1>{title}</h1>
            <Provider store={store}>
                <Search/>
                <List/>
            </Provider>
        </div>
    )
}

export default Home;