import React, { Component } from "react";
import { connect } from "react-redux";
import kamal from "./images/kamal.jpg";
import "./App.css";

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
            <span className="faint">I am</span> a{" "}
            {this.props.user[0].description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {this.props.user[0].likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{this.props.user[0].name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{this.props.user[0].location}</span>
          </p>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(App);
