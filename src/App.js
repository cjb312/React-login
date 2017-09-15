import React, { Component } from "react";
//material ui import and inject plugin
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

//idk github says this is required for it
injectTapEventPlugin();

class App extends Component {
  state = {
    fields: {}
  };

  //updating values
  onChange = updatedValue => {
    this.setState({
      //if you already have props as an object, and you want to pass it in JSX, 
      //you can use ... as a spread operator to pass the whole props object
      fields: {
        //keeping the original values that are in the fields
        ...this.state.fields,
        //updating values that were input into the fields
        ...updatedValue
      }
    });
  };

  render() {
    return (
      //required so components can use mui
      <MuiThemeProvider>
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;