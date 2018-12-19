import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../dist/ComponentCss/register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currScreen: this.props.location.pathname.slice(1),
      error: '',
      username: '',
      password: ''
    }
    this.updateField = this.updateField.bind(this);
    this.register = this.register.bind(this);
  }

  updateField(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  register() {
    axios.post('/db/register', {
        intent: this.state.currScreen,
        username: this.state.username,
        password: this.state.password
      })
      .then(() => console.log('register'))
      .catch(err => console.log)

    // this.setState({ isLoggedIn: true })
  }

  render() {
    return (
      <div id="register" className="text-center" >
        <div className="form" >
        {this.state.currScreen === 'login' ? <h1>Login</h1> : <h1>Sign Up</h1>}
          Username: <input onChange={this.updateField} type="text" name="username"/>
          Password: <input onChange={this.updateField} type="password" name="password" />
          <button className="btn" onClick={this.props.register} > {this.state.currScreen === 'login' ? 'Login' : 'Sign Up' } </button>
        </div>
          <div>
            I need to { this.state.currScreen === 'login' ? <Link to='/signup'>Sign Up</Link> : <Link to='/login'>Login</Link> }.
          </div>
            <Link to="/" >Cancel</Link>
      </div>
    )
  }
}

export default Register;