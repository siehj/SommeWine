import React from 'react';
import Search from './Search.jsx';
import Favorites from './Favorites.jsx';
import Profile from './Profile.jsx';
import $ from 'jquery';


class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curr: 'Search',
      tabs: ['Search', 'Favorites', 'Profile'],
      showAdv: false,
      userData: {
        favs: [],
        prefs: [],
        profile: []
      }
    }
  }

  componentDidMount() {
  
    $.get('/db/userData', {username: this.props.username}, (data) => {
      console.log(data);
    })
  }

  changeTab(e) {
    this.setState({ curr: e.target.value });
    this.setState({ showAdv: false });
  }

  showAdvMenu() {
    this.setState({showAdv: true});
  }

  closeAdvMenu() {
    this.setState({ showAdv: false });
  }

  render() {
    return (
      <div id="dashboard">
      <div className="nav">
        <h2>Welcome back {this.props.username},</h2>
        <input type="button" value="Logout"/>
        <br/>
        <div className="tabs">
        {this.state.tabs.map((tab) => {
          if (tab !== this.state.curr) {
            return (<button className="t" value={tab} key={tab} onClick={this.changeTab.bind(this)} >{tab}</button>)
          }
        })
      }
      </div>
      </div>
      <div className="main" >
        {this.state.curr === 'Search' ? <Search close={this.closeAdvMenu.bind(this)} advMenu={this.showAdvMenu.bind(this)} showAdv={this.state.showAdv} query={this.props.query} search={this.props.search} /> : ('')}
        {this.state.curr === 'Favorites' ? <Favorites/> : ('')}
        {this.state.curr === 'Profile' ? <Profile/> : ('')}
      </div>
    </div>
    )
  }
}

export default Dashboard;