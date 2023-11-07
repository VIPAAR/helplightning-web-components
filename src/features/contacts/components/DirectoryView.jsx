import PaginationCache from '../helpers/PaginationCache'
import './Directory.scss'
import BaseContactsView from './BaseContactsView'

class DirectoryView extends BaseContactsView {
  constructor (props) {
    super(props)
    this.state = {
      filter: '',
      caches: this.buildCaches()
    }
    this.viewName = 'DirectoryView'
  }

  buildCaches = () => {
    return new PaginationCache(20, (page, pageSize) => this.props.client.fetchDirectory(this.state.filter, page, pageSize))
  }
}

export default DirectoryView
