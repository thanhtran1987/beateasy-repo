import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Tile from '../Component/Tile';
import { getNext5Race } from '../store/actions/next5RaceAction';

function mapStateToProps(state: any) {
  return {};
}
function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(
    {
      getNext5Race,
    },
    dispatch,
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tile);
