// A react component sample

import React from 'react';
import InviteForm from './InviteForm';
import './Invite.scss';

const Invite = ({ invite, onClose, generateLink ,t, currentUser, initialValues, validators, inviteLink, onCopyToClipboard }) => {
  const [sent, setSent] = React.useState(false)

  const onSubmit = (values) => {
    setSent(true)
    invite(values, onInvitationSuccess, onInvitationFailure)
  }

  const onInvitationSuccess = () => {
    // TODO: reset form
  }
  const onInvitationFailure = () => {
    setSent(false)
  }

  const handleCopy = () => {
    inviteLink && navigator.clipboard.writeText(inviteLink)
    onCopyToClipboard && onCopyToClipboard()
  }

  return (
    <div>
      <InviteForm
        onClose={onClose}
        currentUser={currentUser}
        onSubmit={onSubmit}
        generateLink={generateLink}
        inviteLink={inviteLink}
        handleCopy={handleCopy}
        initialValues={initialValues}
        validators={validators}
        sent={sent}
        t={t}
      />
    </div>
  );
};

export default Invite;
