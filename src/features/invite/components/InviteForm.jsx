import React, { useState } from 'react';

function InviteForm({ t, currentUser }) {

  return (
    <Form horizontal className="InviteToHelpSpaceView" onSubmit={handleSubmit(this.onSubmit)}>
      <div>
        <FormGroup validationState={fields.name.meta.touched && fields.name.meta.error ? 'error' : null}>
          <ControlLabel className="col-sm-2">{t('Name')}</ControlLabel>
          <Col sm={10}>
            <FormControl {...fields.name.input} type="text" placeholder={t('Name (optional)')} />
            {fields.name.meta.touched && fields.name.meta.error &&
              <span className="error">{fields.name.meta.error}</span>}
          </Col>
        </FormGroup>

        <FormGroup validationState={fields.email.meta.touched && fields.email.meta.error ? 'error' : null}>
          <ControlLabel className="col-sm-2">{t('Email')}</ControlLabel>
          <Col sm={10}>
            <FormControl {...fields.email.input} type="email" placeholder={fields.t('Participant email')} />
            {fields.email.meta.touched && fields.email.meta.error &&
              <span className="error">{fields.email.meta.error}</span>}
          </Col>
        </FormGroup>

        <FormGroup validationState={fields.phone.meta.touched && fields.phone.meta.error ? 'error' : null}>
          <ControlLabel className="col-sm-2">{t('Phone')}</ControlLabel>
          <Col sm={10}>
            <FormControl {...fields.phone.input} value={fields.phone.input.value || fields.dialCode} type="text" placeholder={fields.t('Participant Phone Number')} />
            {fields.phone.meta.touched && fields.phone.meta.error &&
              <span className="error">{fields.phone.meta.error}</span>}
          </Col>
        </FormGroup>

        <FormGroup validationState={fields.message.meta.touched && fields.message.meta.error ? 'error' : null}>
          <ControlLabel className="col-sm-2">{t('Message')}</ControlLabel>
          <Col sm={10}>
            <FormControl {...fields.message.input} type="textarea" placeholder={t('Custom message (optional; added to email only)')} />
            {fields.message.meta.touched && fields.message.meta.error &&
              <span className="error">{fields.message.meta.error}</span>}
          </Col>
        </FormGroup>

        {hasPermission(currentUser, 'one_time_use_links') &&
          <FormGroup>
            <Col sm={10} xsOffset={2}>
              <FormControl
                className="onetime-checkbox"
                type="checkbox" {...fields.oneTime.input}
                defaultChecked={fields.initialValues.oneTime}
              />
              <ControlLabel className="onetime-checkbox-label">{t('Send invitation for one-time use')}</ControlLabel>
            </Col>
          </FormGroup>
        }

        <FormGroup validationState={fields.phone.meta.touched && fields.phone.meta.error ? 'error' : null}>
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
          <Button onClick={this.props.hideModal} type="button" disabled={this.state.sent}>{t('Cancel')}</Button>
          <Button primary type="submit" disabled={this.state.sent}>{t('Send Invite')}</Button>
        </ButtonGroup>
      </FormGroup>
    </Form>
  );
}

export default InviteForm;
