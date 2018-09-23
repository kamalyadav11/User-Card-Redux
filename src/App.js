import React, { Component } from "react";
import { createStore } from "redux";
import kamal from "./images/kamal.jpg";
import reducers from "./reducers/index";
import "./App.css";

const initialState = {
  name: "Kamal Yadav",
  description: "Software Engineer, Entrepreneur, Traveller",
  likes: "Pizza, Butter Chicken, and Gol Gappe",
  location: "In your Heart"
};
const store = createStore(reducers, initialState);

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="User__img">
          <img src={kamal} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {store.getState().description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {store.getState().likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{store.getState().name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{store.getState().location}</span>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
