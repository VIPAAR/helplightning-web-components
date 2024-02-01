import PaginationCache from '../helpers/PaginationCache'
import MultiPaginationCache from '../helpers/MultiPaginationCache'
import './Favorites.scss'
import BaseContactsView from './BaseContactsView'

class FavoritesView extends BaseContactsView {
  constructor (props) {
    super(props)
    this.state = {
      filter: '',
      caches: this.buildCaches()
    }
    this.viewName = 'FavoritesView'
    this.refreshWhenChange = true
  }

  needRefreshData (nextProps) {
    const { currentUser: { currentWorkspaceId } } = this.props
    const nextWorkspaceId = nextProps.currentUser.currentWorkspaceId
    const contactChanged = nextProps.contactVersion !== this.props.contactVersion
    const workspaceChanged = currentWorkspaceId !== nextWorkspaceId
    const enterpriseContactRefresh = nextProps.enterpriseContactVersion !== this.props.enterpriseContactVersion
    return (contactChanged || enterpriseContactRefresh || workspaceChanged)
  }

  buildCaches = () => {
    return new MultiPaginationCache([
      new PaginationCache(20, (page, pageSize) => this.props.client.fetchOnCallGroupFavorite(this.state.filter, page, pageSize)),
      new PaginationCache(20, (page, pageSize) => this.props.client.fetchFavorite(this.state.filter, page, pageSize))
    ])
  }
}

export default FavoritesView
