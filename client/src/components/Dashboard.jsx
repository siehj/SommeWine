import React from 'react';
import '../../dist/ComponentCss/dashboard.css';
// import Search from './Search.jsx';
// import Favorites from './Favorites.jsx';
import Profile from './Profile.jsx';
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
  }

  componentDidMount() {
    // if user is accessing the url /dashboard directly but their cookie still exists, then this will add the username to the url
    let stateObj = { username: localStorage.getItem('auth') }
    history.replaceState(stateObj, 'user url', `/dashboard/${localStorage.getItem('auth')}`);
    this.setState({ user: localStorage.getItem('auth') })
    // history.push(`/dashboard/${localStorage.getItem('auth')}`);
    // axios.get('/server/session')
    // $.get('/db/userData', {username: this.props.username}, (data) => {
      // console.log(data);
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
    this.setState({ curr: e.target.value });
    this.setState({ showAdv: false });
  }

  showAdvMenu() {
    this.setState({ showAdv: true });
  }

  closeAdvMenu() {
    this.setState({ showAdv: false });
  }

  render() {
    return (
      <div id="dashboard">
      <div className="nav">
      {/* <Container> */}
        <Row>
          <Col className="text-center" xs="12" sm="12" md="12" lg="12" ><em>SommeWine</em></Col>
        </Row>
        {/* <h1>SommeWine</h1> */}
        {/* <Row  ><h2>Welcome back {this.props.username},</h2></Row> */}
        <Row>
          <Col className="text-left" xs="11" sm="11" md="11" lg="11" xl="11" >
            <h3>Welcome back {this.state.user},</h3>
          </Col>
          <Col xs="1" sm="1" md="1" lg="1" >
            <Button size="sm" >Logout</Button>
          </Col>
        </Row>
        {/* <input type="button" value="Logout"/> */}
        {/* <Row>
          <Col>
            <div className="tabs">
            {this.state.tabs.map((tab) => {
              if (tab !== this.state.curr) {
                return (
                  <Button className="t" value={tab} key={tab} size="sm" onClick={this.changeTab.bind(this)} >{tab}</Button>
                )}
              })
            }
            </div>
          </Col>
        </Row> */}
        {/* </Container>   */}
      </div>
      <div className="main" >
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