import React, { Fragment, useState } from 'react';
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  ButtonGroup,
  Col
} from 'react-bootstrap'
import { hasPermission } from '../helpers/permissions';

const defaultState = {
  name: { value: '', error: null, touched: false },
  email: { value: '', error: null, touched: false },
  phone: { value: '', error: null, touched: false },
  message: { value: '', error: null, touched: false },
  oneTime: { value: false, error: null, touched: false }
}

const mergeStateWithValues = (state, values) => {
  return Object.keys(state).reduce((acc, key) => {
    return {
      ...acc,
      [key]: {
        ...state[key],
        value: values[key]
      }
    }
  }, {});
}

const pickValues = (state) => {
  const { name, email, phone, message, oneTime } = state;
  return { name: name.value, email: email.value, phone: phone.value, message: message.value, oneTime: oneTime.value }
}

function InviteForm({ onCancel, onSubmit, t, currentUser, initialValues, validators, sent, inviteLink, handleCopy }) {
  const [fields, setFields] = useState(mergeStateWithValues(defaultState, initialValues));

  const onChange = (field) => {
    return (e) => {
      const value = e.target.value;
      const error = validators && validators[field] && validators[field](value, pickValues(fields));
      setFields({
        ...fields,
        [field]: {
          ...fields[field],
          value,
          error,
          touched: true
        }
      });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(pickValues(fields));
    setFields(defaultState);
  }

  return (
    <Form horizontal className="InviteForm" onSubmit={handleSubmit}>
      <div>
        <FormGroup validationState={fields.name.touched && fields.name.error ? 'error' : null}>
          <ControlLabel className="col-sm-2">{t('Name')}</ControlLabel>
          <Col sm={10}>
            <FormControl value={fields.name.value} onChange={onChange('name')} type="text" placeholder={t('Name (optional)')} />
            {fields.name.touched && fields.name.error &&
              <span className="error">{fields.name.error}</span>}
          </Col>
        </FormGroup>

        <FormGroup validationState={fields.email.touched && fields.email.error ? 'error' : null}>
          <ControlLabel className="col-sm-2">{t('Email')}</ControlLabel>
          <Col sm={10}>
            <FormControl value={fields.email.value} onChange={onChange('email')} type="email" placeholder={t('Participant email')} />
            {fields.email.touched && fields.email.error &&
              <span className="error">{fields.email.error}</span>}
          </Col>
        </FormGroup>

        <FormGroup validationState={fields.phone.touched && fields.phone.error ? 'error' : null}>
          <ControlLabel className="col-sm-2">{t('Phone')}</ControlLabel>
          <Col sm={10}>
            <FormControl value={fields.phone.value} onChange={onChange('phone')} type="text" placeholder={t('Participant Phone Number')} />
            {fields.phone.touched && fields.phone.error &&
              <span className="error">{fields.phone.error}</span>}
          </Col>
        </FormGroup>

        <FormGroup validationState={fields.message.touched && fields.message.error ? 'error' : null}>
          <ControlLabel className="col-sm-2">{t('Message')}</ControlLabel>
          <Col sm={10}>
            <FormControl value={fields.message.value} onChange={onChange('message')} type="textarea" placeholder={t('Custom message (optional; added to email only)')} />
            {fields.message.touched && fields.message.error &&
              <span className="error">{fields.message.error}</span>}
          </Col>
        </FormGroup>

        {hasPermission(currentUser, 'one_time_use_links') &&
          <FormGroup>
            <Col sm={10} xsOffset={2}>
              <FormControl
                className="onetime-checkbox"
                type="checkbox" value={fields.oneTime.value}
                onChange={onChange('onTime')}
                defaultChecked={initialValues.oneTime}
              />
              <ControlLabel className="onetime-checkbox-label">{t('Send invitation for one-time use')}</ControlLabel>
            </Col>
          </FormGroup>
        }

        <FormGroup validationState={fields.phone.touched && fields.phone.error ? 'error' : null}>
          <ControlLabel className="col-sm-2">{t('Link')}</ControlLabel>
          <Col sm={10}>
            <div className="invite-link">
              {inviteLink && (
                <Fragment>
                  {inviteLink}
                  <i className="far fa-copy " onClick={handleCopy} />
                </Fragment>
              )}
              {inviteLink ? null : <i className="fa fa-spinner fa-spin" />}
            </div>
          </Col>
        </FormGroup>
      </div>
      <FormGroup>
        <ButtonGroup>
          <Button onClick={onCancel} type="button" disabled={sent}>{t('Cancel')}</Button>
          <Button primary type="submit" disabled={sent}>{t('Send Invite')}</Button>
        </ButtonGroup>
      </FormGroup>
    </Form>
  );
}

export default InviteForm;
