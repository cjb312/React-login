import React from "react";
//importing the textfield for material ui
import TextField from 'material-ui/TextField';
//importing raised button
import RaisedButton from "material-ui/RaisedButton";

//exporting component so it can render
export default class Form extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: ""
  };

//change function to target the e.target.value which is what the user types
  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //onSubmit = function onSubmit(e){}
  onSubmit = e => {
    //stops page from auto refreshing which is default setting on the submit button click
    e.preventDefault();
    this.setState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: ""
    });
    this.props.onChange({
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: ""
    });
  };

//updating state of the input fields within the sign up form 
//onChange function passes event back that is entered. targeting value to update state
//
  render() {
    return (
      <form>

        <TextField
          name="firstname"
          hintText="First name"
          floatingLabelText="First name"
          value={this.state.firstname}
          onChange={e => this.change(e)}
          floatingLabelFixed
          />
        <br />

        <TextField
          name="lastname"
          hintText="Last Name"
          floatingLabelText="Last Name"
          value={this.state.lastname}
          onChange={e => this.change(e)}
          floatingLabelFixed
          />
        <br />

        <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
          floatingLabelFixed
          />
        <br />

        <TextField
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          value={this.state.email}
          onChange={e => this.change(e)}
          type="email"
          floatingLabelFixed
          />
        <br /> 

        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          type="password"
          floatingLabelFixed
          />
        <br />

        <RaisedButton label="Sign Up" onClick={e => this.onSubmit(e)} primary />
        <br />

          Already a member?
          <br />
          
          <TextField
          name="username"
          hintText="Username"
          floatingLabelText="Username"
          value={this.state.username}
          onChange={e => this.change(e)}
          floatingLabelFixed
          />
        <br />

          <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange={e => this.change(e)}
          type="password"
          floatingLabelFixed
          />
        <br />

        <RaisedButton label="login" onClick={e => this.onLogin(e)} primary />


      </form>
    );
  }
}