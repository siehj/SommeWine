import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Dashboard from './components/Dashboard.jsx';
import Register from './components/Register.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoggedIn: true,
      username: 'Sieh',
      password: '',
      query: '',
      wines: [],
      additional: {
        types: [],
        notes: [],
        regions: []
      }   
    }
  }

  componentDidMount() {
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

  handleRegister(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  register() {
    // $.ajax({
    //   url: '/db/register',
    //   method: 'POST',
    //   data: {
    //     username: this.state.username,
    //     password: this.state.password
    //   },
    //   success: () => {
    //     this.setState({ isLoggedIn: true });
    //   },
    //   error: (console.log)
    // })
    this.setState({ isLoggedIn: true })
  }

  logout() {
    this.setState({ isLoggedIn: false })
  }

  getQuery(e) {
    // console.log(e.target.name);
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

  handleSearch() {
    //should be a get but works better as a post for the purposes of this...
    let option = { query: this.state.query, additional: this.state.additional}
    $.post('/api/wines', option, (list) => {
      // this.setState()
      console.log(list);
    })
  }

  render() {
    return (<div>
      <h1>SommeWine</h1>
      {this.state.isLoggedIn ?
        <Dashboard username={this.state.username} query={this.getQuery.bind(this)} search={this.handleSearch.bind(this)} />
        :
        <Register un={this.state.username} pw={this.state.password} change={this.handleRegister.bind(this)} register={this.register.bind(this)} />}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
