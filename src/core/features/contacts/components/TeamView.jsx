import PaginationCache from '../helpers/PaginationCache';
import MultiPaginationCache from '../helpers/MultiPaginationCache';
import './TeamView.scss';
import BaseContactsView from './BaseContactsView';

class TeamView extends BaseContactsView {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      caches: this.buildCaches(),
    };
    this.viewName = 'TeamView';
  }

  buildCaches = () => new MultiPaginationCache([
    new PaginationCache(
      20,
      (page, pageSize) => this.props.client.fetchOnCallGroup(this.state.filter, page, pageSize),
    ),
    new PaginationCache(
      20,
      (page, pageSize) => this.props.client.fetchTeam(this.state.filter, page, pageSize),
    ),
  ]);
}

export default TeamView;
