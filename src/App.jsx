import React from 'react';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import logo from '../public/banner.png';
import Invite from './core/features/invite/components/Invite';
import Login from './core/features/auth/Login';
import './App.scss';
import { user } from './core/features/auth/auth';
import i18n from './i18n';
import HelpLightningClient from './core/HelpLightningClient';

function App() {
  const currentUser = useSelector(user);
  const [showInviteModal, setShowInviteModal] = React.useState(true);

  const onInviteUserClick = () => {
    setShowInviteModal(true);
  }

  const closeInviteModal = () => {
    setShowInviteModal(false);
  }

  const invite = (values, onSuccess, onFailure) => {
    onSuccess();
    closeInviteModal();
  }

  const client = new HelpLightningClient(
    host,
    apikey,
    token,
    refreshToken,
    logoutHandler
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Helplightning Components
        </p>
        { currentUser?.token
          ? (
          <Modal show={showInviteModal} onHide={closeInviteModal}>
            <Modal.Header closeButton>
              <Modal.Title>My Help Space</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Invite
                client={client}
                onClose={closeInviteModal}
                onSubmit={invite}
                t={i18n.t}
              />
            </Modal.Body>
          </Modal>) : <Login t={i18n.t}/>
        }
      </header>
    </div>
  );
}

export default App;
