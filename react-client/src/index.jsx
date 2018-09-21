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
    this.setState({query: e.target.value});
  }

  handleSearch() {
    let option = {query: this.state.query}
    $.get('/api/wines', option, (list) => {
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
