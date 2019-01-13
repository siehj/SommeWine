import React from 'react';
import axios from 'axios';
import { Col } from 'reactstrap';

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
  }

  componentDidMount() {
    console.log('getting..')
    axios.post('/db/profile')
      .then(({ data }) => this.setState({ userData : data }));
  }

  getPreferences() {
    axios.post('/db/profilePreferences')
      .then(({ data }) => console.log(data))
  }

  render() {
    return (
      <Col>
        <div>
          <h2 className="tabTitle">Profile</h2>
        </div>
        <div className="userData" >
          User Data
        </div>
        <div className="userPreferences" >
          Preferences
        </div>
      </Col>
    )
  }
}

export default Profile;