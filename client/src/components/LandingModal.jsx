import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from 'react-router-dom';

class LandingModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div  >
        <Modal isOpen={this.state.modal} >
        <em>HI</em>
          {/* <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
                login/signIn
                Google
              </ModalBody> */}
        </Modal>
      </div>
    )
  }
}

export default LandingModal;