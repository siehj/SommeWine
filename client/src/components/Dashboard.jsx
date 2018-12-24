import React from 'react';
import '../../dist/ComponentCss/dashboard.css';
import Routes from './DashComponents/ComponentRoutes.jsx';
import Search from './DashComponents/Search.jsx';
import Favorites from './DashComponents/Favorites.jsx';
import Profile from './DashComponents/Profile.jsx';
import { Route, Redirect, Link, Switch } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import { Button, Container, Row, Col } from 'reactstrap';


class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curr: 'Profile',
      tabs: ['Search', 'Favorites', 'Profile'],
      showAdv: false,
      user: '',
      userData: {
        favs: [],
        prefs: [],
        profile: []
      },
    }
    this.logout = this.logout.bind(this);
    this.changeTab = this.changeTab.bind(this);
  }

  componentDidMount() {
    // if user is accessing the url /dashboard directly but their cookie still exists, then this will add the username to the url
    // console.log(sessionStorage)
    let stateObj = { username: sessionStorage.getItem('auth') }
    history.replaceState(stateObj, 'user url', `/dashboard/${sessionStorage.getItem('auth')}`);
    this.setState({ user: sessionStorage.getItem('auth') });

    // $.get('/db/userData', {username: this.props.username}, (data) => {
    //   console.log(data);
    // })
  }

  addFavorite(e) {
    $.ajax({
      url: "/db/favs",
      method: "POST",
      data: JSON.parse(e.target.name),
      success: () => {
        // alert(`${e.target.name} has been saved`);
      }, 
      error: () => {

      }
    })
  } 

  showData() {

  }

  changeTab(tabName) {
    this.setState({ curr: tabName });
    this.setState({ showAdv: false });
  }

  showAdvMenu() {
    this.setState({ showAdv: true });
  }

  closeAdvMenu() {
    this.setState({ showAdv: false });
  }

  logout() {
    sessionStorage.removeItem('auth');
    axios.post('/logout').then(() => console.log("Thank you for using SommeWine"));
  }

  render() {
    return (
      <div id="dashboard">
        <div id="nav">
          <div className="logoutDiv" >
            <Link to="/">
              <Button onClick={this.logout} >Logout</Button>
            </Link>
          </div>
          <div id="dashboardTitle" >
            <em >SommeWine</em>
          </div>
          <h3 className="welcome" >Welcome back <em>{this.state.user}</em>,</h3>
            <div className="tabs">
              {this.state.tabs.map((tab) => {
                  return <a className="tabBtn" value={tab} key={tab} onClick={() => this.changeTab(tab)} >{tab}</a>
                })
              }
            </div>
        </div>
      <div id="main" >
        <Routes component={this.state.curr} /> 
      </div>
    </div>
    )
  }
}

export default Dashboard;