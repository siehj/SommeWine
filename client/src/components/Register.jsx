import React from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Input, Form, FormGroup, Label } from 'reactstrap';
import '../../dist/ComponentCss/register.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currScreen: this.props.location.pathname.slice(1),
      error: [],
      username: '',
      password: ''
    }
    this.updateField = this.updateField.bind(this);
    this.changeScreen = this.changeScreen.bind(this);
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
      .then(({ data }) => {
        if (typeof data === 'string') this.setState({ error: data });
        else {
          sessionStorage.setItem('auth', data.username)
          this.props.history.push(`/dashboard/${data.username}`);
        }
      })
      .catch(err => console.log)
  }

  changeScreen(value) {
    this.setState({ currScreen: value });
  }

  render() {
    return (
      <div id="register" className="text-center" >
        {this.state.currScreen === 'login' ? <h1>Login</h1> : <h1>Sign Up</h1>}
        <div className="form">
          <Label> Username: </Label> <input onChange={this.updateField} type="text" name="username" />
          <Label> Password: </Label> <input onChange={this.updateField} type="password" name="password" size="sm" />
          <button className="btn" onClick={this.register} > {this.state.currScreen === 'login' ? 'Login' : 'Sign Up' } </button>
        </div>
        { this.state.error.length ? <em className="registerError" >**{this.state.error}**</em> : null }
          <div>
            I need to { this.state.currScreen === 'login' ? <Link to='/signup' onClick={() => this.changeScreen('signup')} >Sign Up</Link> : <Link to='/login' onClick={() => this.changeScreen('login')} >Login</Link> }.
          </div>
            <Link to="/" >Cancel</Link>
      </div>
    )
  }
}

export default Register;