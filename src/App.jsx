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
import { meetInviteEmail, string255NotRequired } from './app/helpers/formValidators';

const inviteValidators = {
  email: meetInviteEmail,
  message: string255NotRequired,
  name: string255NotRequired
}

function App() {
  const currentUser = useSelector(user);
  const [showInviteModal, setShowInviteModal] = React.useState(false);
  const [link, setLink] = React.useState('');

  const onInviteUserClick = () => {
    setShowInviteModal(true);
  }

  const closeInviteModal = () => {
    setShowInviteModal(false);
  }

  const generateLink = (oneTimeUse) => {
    oneTimeUse ? setLink('https://helplightning.com/meet/code?xyz') : setLink('https://helplightning.com/meet/expert');
  }

  const invite = (values, onSuccess, onFailure) => {
    console.log('Inviting user', values);
    onSuccess();
    closeInviteModal();
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
                onClose={closeInviteModal}
                onSubmit={invite}
                currentUser={currentUser}
                generateLink={generateLink}
                inviteLink={link}
                validators={inviteValidators}
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
