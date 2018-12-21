import React from 'react';
import axios from 'axios';
import Dashboard from './Dashboard.jsx';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../../service/auth.js';

const ProtectedRoute = (props) => {
  // console.log(localStorage)
  // console.log(localStorage.getItem('auth'));
  let username = props.location.pathname.split('/')[2];
  
  return <Route render={() => auth.authCheck() ? <Dashboard/> : <Redirect to="/" /> } />
  // async () => 
  // await console.log(axios.get(`/auth?user=${username}`)
  // .then(({ data }) => { 
  //   return data 
  // }) )
  // res ? <Route render={Dashboard} /> : <Redirect to="/" />
  // <Route render={() => auth.authCheck((res => console.log(res) ))  } /> 
  // return <div>HI</div>
};

// class ProtectedRoute extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       username: this.props.location.pathname.split('/')[2]
//     };
//     this.check = this.check.bind(this);
//   }

//   async check() {
//       await axios.get(`/auth?user=${this.state.username}`, ({ data }) => console.log(data))
//         // .then(({ data }) => {
//         //   console.log(data);
//         //   // data ? resolve(data) : resolve(data)
//         //   // this.setState({ loading : false }, () => data)
//         //   return data;
//         // });

//     // return authenticated;
//   }

//   componentDidMount() {
//   //  this.setState({ loading : false })
//     // this.check();
//     console.log(localStorage.getItem('auth'))
//   }

//   render() {
//     // this.state.loading? <div>Loading...</div> : new Promise((resolve, reject) => this.check() ? resolve(<div>yes</div>): resolve(<div>no</div>))
//     return <div>ahhh</div>
//   }
// }

export default ProtectedRoute;

