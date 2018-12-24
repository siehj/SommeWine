import React from 'react';
import '../../dist/ComponentCss/dashboard.css';
import Routes from './DashComponents/ComponentRoutes.jsx';
import { Route, Redirect, Link, Switch } from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import { Button, Container, Row, Col } from 'reactstrap';


class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curr: 'Search',
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

  changeTab(e) {
    this.setState({ curr: e.target.value }, () => console.log(this.state.curr));
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
                // if (tab !== this.state.curr) {
                  return <a className="tabBtn" value={tab} key={tab} size="md" onClick={this.changeTab.bind(this)} >{tab}</a>
                // }
                // return <a key={tab}>{tab}</a>
                })
              }
            </div>
        </div>
      <div className="main" >
        <Routes component={this.state.curr} /> 
        {/* <Switch>
          <Route path="/search" component={Search} />
          <Route path="/favorite" component={Favorites} />
          <Route path="/profile" component={Profile} /> 
        </Switch> */}
        {/* {this.state.curr === 'Search' ? <Search addFav={this.addFavorite.bind(this)} 
        prev={this.props.prev} q={this.props.q} close={this.closeAdvMenu.bind(this)} 
        searchResults={this.props.searchResults} advMenu={this.showAdvMenu.bind(this)} 
        showAdv={this.state.showAdv} query={this.props.query} search={this.props.search} /> : ('')}
        {this.state.curr === 'Favorites' ? <Favorites/> : ('')}
        {this.state.curr === 'Profile' ? <Profile/> : ('')} */}
        
      </div>
    </div>
    )
  }
}

export default Dashboard;