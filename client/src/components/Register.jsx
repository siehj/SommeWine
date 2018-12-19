import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currScreen: this.props.location.pathname.slice(1),
      error: ''
    }
  }

  render() {
    return (
      <div id="register">
        {this.state.currScreen === 'login' ? <h1>Login</h1> : <h1>Sign Up</h1>}
        <form>
          Username: <input onChange={this.props.change} type="text" name="username"/>
          Password: <input onChange={this.props.change} type="password" name="password" />
          <input type="button" value={this.state.currScreen === 'login' ? 'Login' : 'Sign Up' }  onClick={this.props.register}/>
          <br/>
          <div>
            I need to { this.state.currScreen === 'login' ? <Link to='/signup'>Sign Up</Link> : <Link to='/login'>Login</Link> }.
          </div>
            <Link to="/" >Cancel</Link>
        </form>
      </div>
    )
  }
}

export default Register;