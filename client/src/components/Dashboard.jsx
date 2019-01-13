import React from 'react';
import { Route, Redirect, Link, Switch } from 'react-router-dom';
import { Button, Container, Row, Col } from 'reactstrap';
import '../../dist/ComponentCss/dashboard.css';
import axios from 'axios';
import Routes from './DashComponents/ComponentRoutes.jsx';


class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curr: 'Profile',
      tabs: ['Search', 'Cellar', 'Profile'],
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
    let stateObj = { username: sessionStorage.getItem('auth') }
    history.replaceState(stateObj, 'user url', `/dashboard/${sessionStorage.getItem('auth')}`);
    this.setState({ user: sessionStorage.getItem('auth') });

  }

  changeTab(tabName) {
    this.setState({ curr: tabName }); //() => history.pushState({ tab: `${tabName}`}, 'change tabs', `/dashboard/${this.state.user}/${tabName}`)
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
              <Button className="btns" onClick={this.logout} >Logout</Button>
            </Link>
          </div>
          <div id="dashboardTitle" >
            <em >SommeWine</em>
          </div>
          <h3 className="welcome" >Welcome back <em>{this.state.user}</em>,</h3>
          <div className="tabs">
          {
            this.state.tabs.map(tab => <a className="tabBtn" value={tab} key={tab} onClick={() => this.changeTab(tab)} >{tab}</a>)
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