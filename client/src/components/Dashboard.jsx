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
      curr: 'Search',
      tabs: ['Search', 'Cellar', 'Profile'],
      showAdv: false,
      user: '',
      profile: {},
      allPrefs : {},
      userPrefs: [],
      userFavs: [],
      faveChecker: [],
      userTasteList: [],
      tasteListChecker: []
    }
    this.logout = this.logout.bind(this);
    this.changeTab = this.changeTab.bind(this);
    this.getUserPrefs = this.getUserPrefs.bind(this);
    this.getAllAppData = this.getAllAppData.bind(this);
    this.getPreferences = this.getPreferences.bind(this);
    this.getUserProfile = this.getUserProfile.bind(this);
    this.getUserTasteList = this.getUserTasteList.bind(this);
    this.getUserFavorites = this.getUserFavorites.bind(this);
  }

  componentDidMount() {
    // if user is accessing the url /dashboard directly but their cookie still exists, then this will add the username to the url
    let stateObj = { username: sessionStorage.getItem('auth') };
    history.replaceState(stateObj, 'user url', `/dashboard/${sessionStorage.getItem('auth')}`);
    this.setState({ user: sessionStorage.getItem('auth') });
    this.getAllAppData();
  }

  changeTab(tabName) {
    this.setState({ curr: tabName }); //() => history.pushState({ tab: `${tabName}`}, 'change tabs', `/dashboard/${this.state.user}/${tabName}`)
    this.setState({ showAdv: false });
    this.getAllAppData();
  }
 
  getAllAppData() {
    this.getUserProfile();
    this.getUserPrefs();
    this.getPreferences();
    this.getUserTasteList();
    this.getUserFavorites();
  }

  getUserFavorites() {
    axios.post('/db/getUserFavorites')
      .then(({ data }) => this.setState({ userFavs : data.allFavorites, faveChecker : data.namesOnly }));
  }

  getUserTasteList() {
    axios.post('/db/getUserTasteList')
      .then(({ data }) => this.setState({ userTasteList: data.allTasteList , tasteListChecker: data.namesOnly }));
  }

  getUserPrefs () {
    axios.post('/db/userPrefs')
    .then(({ data }) => this.setState({ userPrefs : data }));
  }

  getUserProfile() {
    axios.post('/db/profile')
      .then(({ data }) => this.setState({ profile : data }));
  }

  getPreferences() {
    axios.post('/db/profilePreferences')
      .then(({ data }) => this.setState({ allPrefs : data }));
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
        <Routes component={this.state.curr} favorites={this.state.userFavs} getFav={this.getUserFavorites} checker={this.state.faveChecker} 
          allPrefs={this.state.allPrefs} userPrefs={this.state.userPrefs} userProfile={this.state.profile} getUserPrefs={this.getUserPrefs} tasteList={this.state.userTasteList}
          getUserProfile={this.getUserProfile} getPreferences={this.getPreferences} getTasteList={this.getUserTasteList} tasteListChecker={this.state.tasteListChecker}
        /> 
      </div>
    </div>
    )
  }
}

export default Dashboard;