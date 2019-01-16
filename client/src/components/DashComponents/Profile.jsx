import React from 'react';
import axios from 'axios';
import './../../../dist/ComponentCss/profile.css';
import { Col } from 'reactstrap';
import UserProfile from './ProfileComponents/UserProfileData.jsx';
import UserPreferences from './ProfileComponents/UserPreferences.jsx';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editUser: false,
      editPreferences: false,
      userData: {},
      userPreferences : [],
      allPreferences: {},
      updatedPrefs: [],
      updatedUserInfo: {}
    };

    this.save = this.save.bind(this);
    this.toggle = this.toggle.bind(this);
    this.getUserPrefs = this.getUserPrefs.bind(this);
    this.getPreferences = this.getPreferences.bind(this);
    this.getUserProfile = this.getUserProfile.bind(this);
    this.updateUserProfile = this.updateUserProfile.bind(this);
    this.updatePreferences = this.updatePreferences.bind(this);
  }

  componentDidMount() {
    axios.post('/db/profile')
      .then(({ data }) => this.setState({ userData : data }))
      .then(() => this.getPreferences())
      .then(() => this.getUserPrefs())
  }

  getUserPrefs () {
    axios.post('/db/userPrefs')
    .then(({ data }) => this.setState({ userPreferences : data }))
  }

  getUserProfile() {
    axios.post('/db/profile')
      .then(({ data }) => this.setState({ userData : data }))
  }

  getPreferences() {
    axios.post('/db/profilePreferences')
      .then(({ data }) => this.setState({ allPreferences : data }))
  }

  updatePreferences(e) {
    let update = this.state.updatedPrefs;
    update.includes(e.target.title) ? 
      update.splice(update.indexOf(e.target.title), 1) : update.push(e.target.title);

    this.setState({ updatedPrefs : update })
  }

  updateUserProfile(userData) {
    console.log(userData);
  }

  toggle(area) {
    this.setState({ [area] : !this.state[area] });
  }

  save(e) {
    console.log(this.state.updatedPrefs)
    this.toggle(e.target.title)
    if (e.target.title === 'editPreferences') {
      axios.post('/db/editPreferences', { newPreferences: this.state.updatedPrefs })
        .then(() => this.getUserPrefs())
        .then(() => this.setState({ updatedPrefs : [] }))
    } else {
      console.log(e.target.title);
      console.log(this.state); 

    }
  }

  render() {
    return (
      <Col id="Profile" >
        <div>
          <h2 className="tabTitle">Profile</h2>
        </div>
        <div className="userData" >
          { Object.keys(this.state.userData).length ?
           <UserProfile user={this.state.userData} edit={this.state.editUser} update={this.updateProfile} toggle={this.toggle} save={this.save} /> : null
          }
        </div>
        <div className="userPreferences" >
          <UserPreferences 
            userPrefs={this.state.userPreferences}
            prefs={this.state.allPreferences} 
            edit={this.state.editPreferences} 
            update={this.updatePreferences} 
            toggle={this.toggle} 
            save={this.save}
          />
        </div>
      </Col>
    )
  }
}

export default Profile;