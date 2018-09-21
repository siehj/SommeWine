import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoggedIn: false
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

  render () {
    return (<div>
      <h1>SommeWine</h1>
      {this.state.isLoggedIn ? <Dashboard/> : <Register status={this.state.isLoggedIn}/>}
      // <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
