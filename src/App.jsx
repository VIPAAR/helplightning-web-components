import React from 'react';
import { useSelector } from 'react-redux';
import logo from './logo.png';
import ContactsView from './features/contacts/components/ContactsView';
import { Modal } from 'react-bootstrap';
import Invite from './features/invite/components/Invite';
import Login from './features/auth/Login';
import './App.scss';
import { user } from './features/auth/auth';
import i18n from './i18n';

function App() {
  const currentUser = useSelector(user);
  const [showInviteModal, setShowInviteModal] = React.useState(false);

  const onInviteUserClick = () => {
    setShowInviteModal(true);
  }

  const closeInviteModal = () => {
    setShowInviteModal(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Helplightning Contacts
        </p>
        { currentUser?.token ?
          <ContactsView
            currentUser={currentUser}
            callContact={console.log}
            callGroup={console.log}
            onInviteUserClick={onInviteUserClick}
            showModal={console.log}
            t={i18n.t}
          /> :
          <Login t={i18n.t}/>
        }
        { currentUser?.token ?
          <Modal show={showInviteModal} onHide={closeInviteModal}>
            <Modal.Header closeButton>
              <Modal.Title>My Help Space</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Invite
                cancel={closeInviteModal}
                currentUser={currentUser}
                t={i18n.t}
              />
            </Modal.Body>
          </Modal> : null
        }
      </header>
    </div>
  );
}

export default App;
