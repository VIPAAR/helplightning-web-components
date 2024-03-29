import PropTypes from 'prop-types';
import PaginationCache from '../helpers/PaginationCache';
import './PersonalView.scss';
import BaseContactsView from './BaseContactsView';

class PersonalView extends BaseContactsView {
  static propTypes = {
    contactVersion: PropTypes.number.isRequired,
    changedContact: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      cache: this.buildCache(),
    };
    this.viewName = 'PersonalView';
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.contactVersion !== this.props.contactVersion) {
      this.applySingleChange(nextProps.changedContact);
    }
  }

  buildCache = () => new PaginationCache(
    20,
    (page, pageSize) => this.props.client.fetchPersonal(this.state.filter, page, pageSize),
  );

  applySingleChange = (changedContact) => {
    const { contact } = changedContact;
    const node = this.state.gridApi.getRowNode(contact.id);
    if (node) {
      node.setData(contact);
    }
  };
}

export default PersonalView;
