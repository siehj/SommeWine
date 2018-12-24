import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import auth from '../../service/auth.js';
import { Route, Switch, Link, History, BrowserRouter, Router, Redirect } from 'react-router-dom';
import LandingPage from './components/Landing.jsx';
import Dashboard from './components/Dashboard.jsx';
import Register from './components/Register.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import LandingModal from './components/LandingModal.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoggedIn: false,
      username: '',
      password: '',
      query: '',
      wines: [],
      additional: {
        types: [],
        notes: [],
        regions: []
      },
      previousQ: '', 
      getStarted: false
      // modalStatus: false  
    }
    // this.toggleBtns = this.toggleBtns.bind(this);'
  }

  componentDidMount() {
    // auth.persistUser().then(({ data }) => console.log(data));
    // $.ajax({
    //   url: '/items',
    //   success: (data) => {
    //     this.setState({
    //       items: data
    //     })
    //   },
    //   error: (err) => {
    //     console.log('err', err);
    //   }
    // });
  }

  getUserFavorites() {
    $.get('/db/favorites', favs => {
      this.setState({ [userData.favs] : favs});
    })
  }

  logout() {
    this.setState({ isLoggedIn: false })
  }

  getQuery(e) {
    if (e.target.name === 'query') {
      this.setState({query: e.target.value});
    } else {
      // this is to add if not added to the object's array, or remove if already in the array. 
      // mimics the checked and unchecked nature of the boxes.
      if(!this.state.additional[e.target.name].includes(e.target.value)) {
        this.state.additional[e.target.name].push(e.target.value);
      } else {
        this.state.additional[e.target.name].splice(this.state.additional[e.target.name].indexOf(e.target.value), 1);
      }
    }
  }


  // toggleBtns() {
  //   this.setState({ getStarted: !this.state.getStarted });
  // }

  check() {
    axios.get(`/auth?user=${username}`)
      .then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={Register} /> 
          <Route exact path="/signup" component={Register} /> 
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/dashboard/*" component={Dashboard} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Redirect to='/' />
        </Switch>
      </div>
    )
  }
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
