import React, { Component } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { connect } from "react-redux";
import { startFetch } from "./actions/index.js"
import { fetchSmurfs } from "./actions/index.js"

class App extends Component {

  componentDidMount() {
    startFetch()
    fetchSmurfs()
  }


  render() {
    return (
      <div className="App">
        <Header />
        {console.log(this.state)}
        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchSmurfs, startFetch })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.