// A react component sample

import React from 'react';
import InviteForm from './InviteForm';
import './Invite.scss';

const Invite = ({ hideModal, t, currentUser, dialCode }) => {
  return (
    <div>
      <InviteForm
        hideModal={hideModal}
        currentUser={currentUser}
        onSubmit={values => console.log(values)}
        inviteLink={'https://www.google.com/'}
        handleCopy={() => console.log('copied')}
        initialValues={{
          oneTime: false,
          phone: dialCode
        }}
        t={t}
      />
    </div>
  );
};

export default Invite;
