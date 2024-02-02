/* eslint-disable react/no-unused-state, react/no-unused-class-component-methods */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  AgGridHeader,
  AgGridContent,
  ServerSearch,
  PaginationGrid,
} from './AgGridWrapper';
import MultiPaginationCache from '../helpers/MultiPaginationCache';
import { getDefaultAvatar } from '../helpers/account';
import './TeamView.scss';

class BaseContactsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      caches: this.buildCaches(),
    };
    this.refreshWhenChange = false;
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { active } = this.props;
    const actived = nextProps.active && nextProps.active !== active;
    if (this.needRefreshData(nextProps) || actived) {
      this.refreshData();
    }
  }

  buildCaches = () => new MultiPaginationCache([]);

  onCallClick = (data) => {
    const {
      callGroup, onCallUnreachedUser, callContact,
    } = this.props;
    if (data.isGroup || data.on_call_group) {
      callGroup({
        groupId: data.id,
        groupName: data.name,
        enterpriseId: data.enterprise_id,
        audioOnly: data.audioOnly,
      });
    } else if (!data.reachable) {
      onCallUnreachedUser(data);
    } else {
      callContact(data);
    }
  };

  onChatClick = (data) => { // eslint-disable-line
    const { chatContact } = this.props;
    chatContact(data);
  };

  changeFavorite = (e, id, state, data) => { // eslint-disable-line
    const { client } = this.props;
    const { gridApi } = this.state;
    e.stopPropagation();
    let request = null;
    if (data.isGroup || data.on_call_group) {
      request = state ? client.addToGroupFavorite(id)
        : client.removeFromGroupFavorite(id);
    } else {
      request = state ? client.addToFavorite(id)
        : client.removeFromFavorite(id);
    }
    request.then(() => {
      if (this.refreshWhenChange) {
        this.refreshData();
      } else {
        const node = gridApi.getRowNode(id);
        if (node) {
          node.setData({ ...data, favorite: !data.favorite });
        }
      }
    });
  };

  onGridReady = (params) => {
    this.setState({ gridApi: params.api });
  };

  onSearch = (value) => {
    const { gridApi } = this.state;
    this.setState({ filter: value, caches: this.buildCaches() });
    if (gridApi) {
      gridApi.purgeInfiniteCache();
    }
  };

  refreshData = () => {
    const { gridApi } = this.state;
    this.setState({ caches: this.buildCaches() }, () => {
      if (gridApi) {
        gridApi.purgeInfiniteCache();
      }
    });
  };

  rowClass(params) {
    const classes = [];
    if (params.data) {
      const onCallGroup = params.data.isGroup || params.data.on_call_group;
      if (onCallGroup) {
        classes.push('onCallGroupRow');
      } else if (!params.data.reachable) {
        classes.push('unreachableRow');
      }
      classes.push('paginationGridRow');
      if (params.data.license === 'device') {
        classes.push('device-license');
      }
      if (!params.data.supports_messaging) {
        classes.push('can-not-message');
      }
      return classes.join(' ');
    }
    return '';
  }

  render() {
    const { t } = this.props;
    const { caches } = this.state;
    const columns = [
      { key: 'avatar', label: t('Avatar') },
      { key: 'nameDetails', label: t('Name'), showIfNotSignIn: true },
      { key: 'makeCall', label: t('Call') },
      { key: 'favorite', label: t('Favorite') },
    ];
    const context = { componentParent: this };
    return (
      <div className={`${this.viewName}`}>
        <AgGridHeader>
          <ServerSearch onChange={this.onSearch} />
        </AgGridHeader>
        <AgGridContent>
          { caches
            ? (
              <PaginationGrid
                cache={caches}
                columns={columns}
                id={`hlGrid${this.viewName}`}
                getRowClass={this.rowClass}
                context={context}
                onGridReady={this.onGridReady}
                autoHideColumns={false}
                showHeaders={false}
                t={t}
                parentClassName={this.viewName}
                customColumns={{
                  avatar: { cellRendererParams: { defaultAvatar: getDefaultAvatar() } },
                }}
              />
            )
            : <i className="fa fa-spinner fa-pulse fa-fw fa-3x" />}
        </AgGridContent>
      </div>
    );
  }
}

BaseContactsView.propTypes = {
  client: PropTypes.object.isRequired, // eslint-disable-line

  active: PropTypes.bool,
  callContact: PropTypes.func.isRequired,
  chatContact: PropTypes.func,
  callGroup: PropTypes.func.isRequired,
  onCallUnreachedUser: PropTypes.func.isRequired,
  sendOTUInvitation: PropTypes.func.isRequired, // eslint-disable-line
  t: PropTypes.func,
};

BaseContactsView.defaultProps = {
  t: (key) => key,
};

export default BaseContactsView;
