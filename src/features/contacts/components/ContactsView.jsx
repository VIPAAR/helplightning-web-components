import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Tabs, Tab, Button } from 'react-bootstrap'
import iconInvite from '../icon-invite.svg'
import TeamView from './TeamView'
import FavoritesView from './FavoritesView'
import DirectoryView from './DirectoryView'
import PersonalView from './PersonalView'
import defaultTrans from '../../defaultTrans'
import './Contacts.scss'

class ContactsView extends Component {
  static propTypes = {
    client: PropTypes.object.isRequired,
    activeKey: PropTypes.string,
    currentUser: PropTypes.object,
    showPersonal: PropTypes.bool,
    showDirectory: PropTypes.bool,
    onInviteUserClick: PropTypes.func,
    callContact: PropTypes.func.isRequired,
    callGroup: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    router: PropTypes.object
  }

  static defaultProps = {
    t: defaultTrans
  };

  constructor (props) {
    super(props)

    this.state = {
      key: props.activeKey || 'team'
    }
  }

  renderMyHelpSpaceLink = () => {
    if (this.props.onInviteUserClick) {
      return (
        <Button primary imageUrl={iconInvite} onClick={this.props.onInviteUserClick}>
          {this.props.t('Send My Help Space Invitation')}
        </Button>
      )
    }
  }

  handleSelect = (key) => {
    this.setState({ key })
    const { router } = this.props
    router?.push(`/contacts/${key}`)
  }

  renderDicTab () {
    const key = 'directory'
    const { t, showDirectory } = this.props
    return showDirectory && (
      <Tab eventKey={key} title={<div><i className="fa fa-address-book" /> <span>{t('Directory')}</span></div>}>
        <DirectoryView {...this.props} active={this.state.key === key} />
      </Tab>
    )
  }

  renderPersonalTab () {
    const key = 'personal'
    const { t, showPersonal } = this.props
    return showPersonal && (
      <Tab eventKey={key} title={<div><i className="fa fa-users-class" /> <span>{t('Personal')}</span></div>}>
        <PersonalView {...this.props} active={this.state.key === key} />
      </Tab>
    )
  }

  renderTeamTab () {
    const key = 'team'
    const { t } = this.props
    return <Tab eventKey={key} title={<div><i className="fa fa-users" /> <span>{t('Team')}</span></div>}>
      <TeamView {...this.props} active={this.state.key === key} />
    </Tab>
  }

  renderFavTab () {
    const key = 'favorites'
    const { t } = this.props
    return <Tab eventKey={key} title={<div><i className="fa fa-star" /> <span>{t('Favorites')}</span></div>}>
      <FavoritesView {...this.props} active={this.state.key === key} />
    </Tab>
  }

  render () {
    const { currentUser, t } = this.props
    if (currentUser.token) {
      return (
        <div className="Contacts">
          <h1>{t('Contacts')} {this.renderMyHelpSpaceLink()}</h1>
          <Tabs
            id="user-tabs"
            activeKey={this.state.key}
            onSelect={this.handleSelect}
            className="container-box"
          >
            {this.renderFavTab()}
            {this.renderTeamTab()}
            {this.renderPersonalTab()}
            { this.renderDicTab()}
          </Tabs>
        </div>
      )
    }
    return null
  }
}

export default ContactsView
