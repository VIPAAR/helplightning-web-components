import PaginationCache from '../helpers/PaginationCache';
import MultiPaginationCache from '../helpers/MultiPaginationCache';
import './Favorites.scss';
import BaseContactsView from './BaseContactsView';

class FavoritesView extends BaseContactsView {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      caches: this.buildCaches(),
    };
    this.viewName = 'FavoritesView';
    this.refreshWhenChange = true;
  }

  needRefreshData(nextProps) {
    const {
      currentUser: { currentWorkspaceId }, contactVersion, enterpriseContactVersion,
    } = this.props;
    const nextWorkspaceId = nextProps.currentUser.currentWorkspaceId;
    const contactChanged = nextProps.contactVersion !== contactVersion;
    const workspaceChanged = currentWorkspaceId !== nextWorkspaceId;
    const eContactRefresh = nextProps.enterpriseContactVersion !== enterpriseContactVersion;
    return (contactChanged || eContactRefresh || workspaceChanged);
  }

  buildCaches = () => {
    const { client } = this.props;
    return new MultiPaginationCache([
      new PaginationCache(
        20,
        (page, pageSize) => client.fetchOnCallGroupFavorite(this.state.filter, page, pageSize),
      ),
      new PaginationCache(
        20,
        (page, pageSize) => this.props.client.fetchFavorite(this.state.filter, page, pageSize),
      ),
    ]);
  };
}

export default FavoritesView;
