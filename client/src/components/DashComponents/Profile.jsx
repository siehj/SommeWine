import React from 'react';
import axios from 'axios';
import './../../../dist/ComponentCss/profile.css';
import { Col } from 'reactstrap';
import UserProfile from './ProfileComponents/UserProfileData.jsx';
import userPreferences from './ProfileComponents/UserPreferences.jsx';
import UserPreferences from './ProfileComponents/UserPreferences.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editUser: false,
      editPreferences: false,
      userData: {},
      userPreferences : [],
      allPreferences: []
    };
    this.getPreferences = this.getPreferences.bind(this);
  }

  componentDidMount() {
    axios.post('/db/profile')
      .then(({ data }) => this.setState({ userData : data }))
      .then(() => this.getPreferences());
  }

  getPreferences() {
    axios.post('/db/profilePreferences')
      .then(({ data }) => this.setState({ allPreferences : data }))
  }

  render() {
    return (
      <Col id="Profile" >
        <div>
          <h2 className="tabTitle">Profile</h2>
        </div>
        <div className="userData" >
          { Object.keys(this.state.userData).length ?
           <UserProfile user={this.state.userData} edit={this.state.editUser} /> : null
          }
        </div>
        <div className="userPreferences" >
          <UserPreferences prefs={this.state.allPreferences} edit={this.state.editPreferences} />
        </div>
      </Col>
    )
  }
}

export default Profile;