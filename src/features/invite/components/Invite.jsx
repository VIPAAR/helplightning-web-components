// A react component sample

import React from 'react';
import InviteForm from './InviteForm';
import './Invite.scss';

const Invite = ({ invite, cancel, t, currentUser, initialValues, validators, inviteLink, onCopyToClipboard }) => {
  const [sent, setSent] = React.useState(false)

  const onSubmit = (values) => {
    setSent(true)
    invite(values, onInvitationSuccess, onInvitationFailure)
    if (values.oneTime !== undefined) {
      setOneTime(values.oneTime)
    }
  }

  const setOneTime = (value) => {
    localStorage.setItem('hl-meetInvite-oneTime', JSON.stringify(value))
  }
  const getOneTime = () => {
    return localStorage.getItem('hl-meetInvite-oneTime') !== 'false'
  }

  const onInvitationFailure = () => {}
  const onInvitationSuccess = () => {}

  const handleCopy = () => {
    inviteLink && navigator.clipboard.writeText(inviteLink)
    onCopyToClipboard && onCopyToClipboard()
  }

  return (
    <div>
      <InviteForm
        onCancel={cancel}
        currentUser={currentUser}
        onSubmit={onSubmit}
        inviteLink={inviteLink}
        handleCopy={handleCopy}
        initialValues={{
          oneTime: getOneTime(),
          ...initialValues
        }}
        validators={validators}
        sent={sent}
        t={t}
      />
    </div>
  );
};

export default Invite;
