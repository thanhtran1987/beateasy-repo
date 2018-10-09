import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Filter from '../Component/Filter';
import { setFilter } from '../store/actions/pageAction';

function mapStateToProps(state: any) {
  return {
    next5Race: !state.next5Race.loading ? state.next5Race.data : [],
    filter: state.page.filter,
  };
}
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      setFilter,
    },
    dispatch,
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filter);
