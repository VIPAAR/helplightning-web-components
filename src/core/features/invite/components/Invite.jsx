import React, { useState, useEffect } from 'react'; // eslint-disable-line
import PropTypes from 'prop-types'; // eslint-disable-line
import InviteForm from './InviteForm';
import { dialCode, formatPhoneNumber, emptyPhone } from '../helpers/phoneNumber';
import { meetInviteEmail, dialCodePhoneNumber, string255NotRequired } from '../helpers/formValidators';
import './Invite.scss';

function Invite({
  client,
  onClose,
  t,
  oneTimeEnabled,
  initialOneTime,
  enableCopyLink,
  onLinkCopyToClipboard,
  onInvitationSent,
}) {
  const [sent, setSent] = useState(false);

  const initialValues = {
    phone: dialCode() ? `+${dialCode()} ` : '',
    oneTime: initialOneTime,
  };

  const validators = {
    email: meetInviteEmail(t),
    phone: dialCodePhoneNumber(t),
    message: string255NotRequired(t),
    name: string255NotRequired(t),
  };

  const [inviteLinkObj, setInviteLinkObj] = useState({ inviteLink: '', signature: '' });

  const generateLink = (isOtuLink = true) => {
    const linkType = isOtuLink ? 'otu' : 'mhs';

    client.getSessionLink(linkType).then(({ data: { signature, link } }) => {
      setInviteLinkObj({ inviteLink: link, signature });
    }).catch(() => {
      setInviteLinkObj({ inviteLink: '', signature: '' });
    });
  };
  useEffect(() => {
    generateLink(initialOneTime).then(({ data: { signature, link } }) => {
      setInviteLinkObj({ inviteLink: link, signature });
    }).catch(() => {
      setInviteLinkObj({ inviteLink: '', signature: '' });
    });
  }, []);

  const onInvitationSuccess = () => {
    // TODO: reset form
  };
  const onInvitationFailure = () => {
    setSent(false);
  };

  const onSubmit = (values) => {
    setSent(true);
    const formattedPhone = formatPhoneNumber(values.phone);
    const fields = {
      ...values,
      phone: emptyPhone(formattedPhone) ? null : formattedPhone,
    };
    const { inviteLink, signature } = inviteLinkObj;

    client.inviteToSession(
      fields.name,
      fields.message,
      inviteLink,
      signature,
      fields.oneTime ? 2 : 1,
      fields.email,
      fields.phone,
    ).then((res) => {
      const errors = [];
      const success = [];
      switch (res.data.email_result) {
        case 100:
          errors.push(t('Error sending invite to User.', { user: fields.email }));
          break;
        case 0:
          success.push(t('Your invite to User was sent successfully.', { user: fields.email }));
          break;
        default:
          errors.push(t('Cannot currently send SMS invite to Email.', { user: fields.email }));
      }
      switch (res.data.sms_result) {
        case 0:
          success.push(t('Your invite to User was sent successfully.', { user: fields.phone }));
          break;
        case 1:
          break;
        case 1048:
        case 1049:
          errors.push(t('Phone is not a valid mobile number!', { phone: fields.phone }));
          break;
        default:
          errors.push(t('Cannot currently send SMS invite to Phone.', { phone: fields.phone }));
      }
      if (errors.length > 0) {
        onInvitationFailure();
      } else {
        onInvitationSuccess();
      }
      onInvitationSent(fields, { success, errors }, null);
    }).catch((err) => {
      onInvitationSent(fields, null, err);
      onInvitationFailure();
    });
  };

  const handleCopy = () => {
    const { inviteLink } = inviteLinkObj;
    if (inviteLink) {
      navigator.clipboard.writeText(inviteLink);
    }
    if (onLinkCopyToClipboard) {
      onLinkCopyToClipboard();
    }
    return true;
  };

  return (
    <div>
      <InviteForm
        onClose={onClose}
        onSubmit={onSubmit}
        generateLink={generateLink}
        inviteLink={inviteLinkObj.inviteLink}
        handleCopy={enableCopyLink ? handleCopy : null}
        oneTimeEnabled={oneTimeEnabled}
        initialValues={initialValues}
        validators={validators}
        sent={sent}
        t={t}
      />
    </div>
  );
}

Invite.defaultProps = {
  t: (key) => key,
  oneTimeEnabled: false,
  initialOneTime: false,
  enableCopyLink: false,
  onLinkCopyToClipboard: null,
};

Invite.propTypes = {
  client: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  onClose: PropTypes.func.isRequired,
  t: PropTypes.func,
  oneTimeEnabled: PropTypes.bool,
  initialOneTime: PropTypes.bool,
  enableCopyLink: PropTypes.bool,
  onLinkCopyToClipboard: PropTypes.func,
  onInvitationSent: PropTypes.func.isRequired,
};

export default Invite;
