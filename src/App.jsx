import React from 'react';
import { Modal } from 'react-bootstrap';
import Invite from './core/features/invite/components/Invite';
import './App.scss';
import i18n from './i18n';
import HelpLightningClient from './core/HelpLightningClient';

function App() {
  const [showInviteModal, setShowInviteModal] = React.useState(true);

  const closeInviteModal = () => {
    setShowInviteModal(false);
  };

  const invite = (_, onSuccess) => {
    onSuccess();
    closeInviteModal();
  };

  const onLinkCopyToClipboard = () => {};

  const onInvitationSuccess = () => {};

  const apiKey = window.environment?.API_KEY || '';
  const host = window.environment?.GALDR_URL || '';

  const client = new HelpLightningClient(
    host,
    apiKey,
    'TOKEN_XXX',
    'REFRESH_TOKEN_YYY',
    closeInviteModal,
  );

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Helplightning Components
        </p>
        <Modal show={showInviteModal} onHide={closeInviteModal}>
          <Modal.Header closeButton>
            <Modal.Title>My Help Space</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Invite
              client={client}
              onCancel={closeInviteModal}
              onSubmit={invite}
              t={i18n.t}
              oneTimeEnabled
              initialOneTime
              enableCopyLink
              onLinkCopyToClipboard={onLinkCopyToClipboard}
              onInvitationSent={onInvitationSuccess}
            />
          </Modal.Body>
        </Modal>
      </header>
    </div>
  );
}

export default App;
