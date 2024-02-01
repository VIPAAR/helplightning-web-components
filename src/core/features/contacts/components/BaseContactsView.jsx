import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  AgGridHeader,
  AgGridContent,
  ServerSearch,
  PaginationGrid
} from './AgGridWrapper'
import MultiPaginationCache from '../helpers/MultiPaginationCache'
import { getDefaultAvatar } from '../helpers/account'
import defaultTrans from '../../defaultTrans'
import './TeamView.scss'

class BaseContactsView extends Component {
  static propTypes = {
    active: PropTypes.bool,
    currentUser: PropTypes.object,
    callContact: PropTypes.func.isRequired,
    chatContact: PropTypes.func,
    callGroup: PropTypes.func.isRequired,
    enterpriseContactVersion: PropTypes.number,
    showModal: PropTypes.func.isRequired,
    sendOTUInvitation: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired
  }

  static defaultProps = {
    t: defaultTrans
  }

  constructor (props) {
    super(props)
    this.state = {
      filter: '',
      caches: this.buildCaches()
    }
    this.refreshWhenChange = false
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    const actived = nextProps.active && nextProps.active !== this.props.active
    if (this.needRefreshData(nextProps) || actived) {
      this.refreshData()
    }
  }

  needRefreshData = (nextProps) => {
    const { currentUser: { currentWorkspaceId } } = this.props
    const nextWorkspaceId = nextProps.currentUser.currentWorkspaceId
    return (
      nextProps.enterpriseContactVersion !== this.props.enterpriseContactVersion ||
      currentWorkspaceId !== nextWorkspaceId
    )
  }

  buildCaches = () => {
    return new MultiPaginationCache([])
  }

  onCallClick = (data) => {
    const dialer = this.props.currentUser
    if (data.isGroup || data.on_call_group) {
      this.props.callGroup({
        groupId: data.id,
        groupName: data.name,
        enterpriseId: data.enterprise_id || this.props.currentUser.enterprise_id,
        audioOnly: data.audioOnly
      }, dialer)
    } else if (!data.reachable) {
      this.props.onCallUnreachedUser(data, dialer)
    } else {
      this.props.callContact(data, dialer)
    }
  }

  onChatClick = (data) => {
    this.props.chatContact(data)
  }

  changeFavorite = (e, id, state, data) => {
    e.stopPropagation()
    let request = null
    if (data.isGroup || data.on_call_group) {
      request = state ? this.props.client.addToGroupFavorite(id)
        : this.props.client.removeFromGroupFavorite(id)
    } else {
      request = state ? this.props.client.addToFavorite(id)
        : this.props.client.removeFromFavorite(id)
    }
    request.then((resp) => {
      if (this.refreshWhenChange) {
        this.refreshData()
      } else {
        const node = this.state.gridApi.getRowNode(id)
        if (node) {
          node.setData({ ...data, favorite: !data.favorite })
        }
      }
    })
  }

  onGridReady = (params) => {
    this.setState({ gridApi: params.api })
  }

  onSearch = (value) => {
    this.setState({ filter: value, caches: this.buildCaches() })
    if (this.state.gridApi) {
      this.state.gridApi.purgeInfiniteCache()
    }
  }

  refreshData = () => {
    this.setState({ caches: this.buildCaches() }, () => {
      if (this.state.gridApi) {
        this.state.gridApi.purgeInfiniteCache()
      }
    })
  }

  rowClass (params) {
    const classes = []
    if (params.data) {
      const onCallGroup = params.data.isGroup || params.data.on_call_group
      if (onCallGroup) {
        classes.push('onCallGroupRow')
      } else if (!params.data.reachable) {
        classes.push('unreachableRow')
      }
      classes.push('paginationGridRow')
      if (params.data.license === 'device') {
        classes.push('device-license')
      }
      if (!params.data.supports_messaging) {
        classes.push('can-not-message')
      }
      return classes.join(' ')
    }
  }

  render () {
    const { t, currentUser } = this.props
    const columns = [
      { key: 'avatar', label: t('Avatar') },
      { key: 'nameDetails', label: t('Name'), showIfNotSignIn: true },
      { key: 'makeCall', label: t('Call') },
      { key: 'favorite', label: t('Favorite') }
    ]
    const context = { componentParent: this }
    return (
      <div className={`${this.viewName}`}>
        <AgGridHeader>
          <ServerSearch onChange={this.onSearch} />
        </AgGridHeader>
        <AgGridContent>
          { this.state.caches
            ? <PaginationGrid
              cache={this.state.caches}
              columns={columns}
              id={`hlGrid${this.viewName}`}
              getRowClass={this.rowClass}
              context={context}
              onGridReady={this.onGridReady}
              autoHideColumns={false}
              showHeaders={false}
              t={t}
              parentClassName={this.viewName}
              customColumns={{ avatar: { cellRendererParams: { defaultAvatar: getDefaultAvatar(currentUser) } } }}
            />
            : <i className="fa fa-spinner fa-pulse fa-fw fa-3x" />
          }
        </AgGridContent>
      </div>
    )
  }
}

export default BaseContactsView
