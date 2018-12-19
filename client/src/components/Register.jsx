import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Input, Form, FormGroup, Label } from 'reactstrap';
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
        {this.state.currScreen === 'login' ? <h1>Login</h1> : <h1>Sign Up</h1>}
        <Form >
          <Label> Username: </Label> <input onChange={this.updateField} type="text" name="username" />
          <Label> Password: </Label> <input onChange={this.updateField} type="password" name="password" size="sm" />
          <button className="btn" onClick={this.register} > {this.state.currScreen === 'login' ? 'Login' : 'Sign Up' } </button>
        </Form>
          <div>
            I need to { this.state.currScreen === 'login' ? <Link to='/signup'>Sign Up</Link> : <Link to='/login'>Login</Link> }.
          </div>
            <Link to="/" >Cancel</Link>
      </div>
    )
  }
}

export default Register;