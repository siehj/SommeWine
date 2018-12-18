import React from 'react';
import { Route, Link, History, BrowserRouter as Router } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currScreen: 'Login',
      
    }
  }

  handleChange() {
    if(this.state.currScreen === 'Login') {
      this.setState({ currScreen : 'Sign Up' });
    } else {
      this.setState({ currScreen : 'Login' });
    }
  }

  render() {
    return (
      <div id="register">
        {this.state.currScreen === 'Login' ? <h1>Login</h1> : <h1>Sign Up</h1>}
        <form>
          Username: <input onChange={this.props.change} type="text" name="username"/>
          Password: <input onChange={this.props.change} type="password" name="password" />
          <input type="button" value={this.state.currScreen} onClick={this.props.register}/>
          <br/>
          <div>
            I need to <a onClick={this.handleChange.bind(this)}> { this.state.currScreen === 'Login' ? "Sign Up" : "Login"}</a>.
          </div>
            <Link to="/" >Cancel</Link>
        </form>
      </div>
    )
  }
}

export default Register;