// A react component sample

import React from 'react';
import InviteForm from './InviteForm';
import defaultTrans from '../../defaultTrans';
import './Invite.scss';

const Invite = ({ invite, onClose, generateLink ,t, currentUser, initialValues, validators, inviteLink, enableCopyLink, onLinkCopyToClipboard }) => {
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
    onLinkCopyToClipboard && onLinkCopyToClipboard()
  }

  return (
    <div>
      <InviteForm
        onClose={onClose}
        currentUser={currentUser}
        onSubmit={onSubmit}
        generateLink={generateLink}
        inviteLink={inviteLink}
        handleCopy={enableCopyLink ? handleCopy : null}
        initialValues={initialValues}
        validators={validators}
        sent={sent}
        t={t}
      />
    </div>
  );
};

Invite.defaultProps = {
  t: defaultTrans
}

export default Invite;
