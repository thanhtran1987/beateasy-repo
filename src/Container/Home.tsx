import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { getNext5Race } from '../store/actions/next5RaceAction';

import { COLOR_PRIMARY, LoaderWrapper } from '../Helper/sharedStyle';

import PageHeader from '../Component/PageHeader';
import Filter from './Filter';

const HomeWrapper = styled.div`
  border-top: solid 2px #${COLOR_PRIMARY};
`;
import Tile from '../Container/Tile';

const TileListWrapper = styled.div`
  padding: 0 10px;
`;

const TileListHeader = styled.div`
  background-color: #${COLOR_PRIMARY};
  border-radius: 4px 4px 0 0;
  padding: 12px 14px;
  color: #fff;
  font-size: 14px;
`;

class HomeTemplate extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      autoUpdate: null,
    };
  }

  componentDidMount() {
    if (this.props.getNext5Race) {
      this.props.getNext5Race(this.props.page.filter);
      // setup refresh after 1 mminute
      const autoUpdate = setInterval(() => this.props.getNext5Race(this.props.page.filter), 60000);
      this.setState({ autoUpdate });
    }
  }
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  renderTileList() {
    const { next5Race, page } = this.props;

    if (next5Race.error) {
      return <LoaderWrapper>Error: {this.props.next5Race.error}</LoaderWrapper>;
    } else if (!next5Race.data) {
      return <LoaderWrapper>Loading...</LoaderWrapper>;
    } else {
      const filter =
        page.filter > 0
          ? next5Race.data.filter((item: any) => item.EventType.EventTypeID === page.filter)
          : next5Race.data;
      return (
        <div>
          {filter.map((item: any) => (
            <Tile {...item} key={item.EventID} />
          ))}
        </div>
      );
    }
  }
  render() {
    return (
      <HomeWrapper>
        <PageHeader />
        <TileListWrapper>
          <TileListHeader>Next to jump</TileListHeader>
          <Filter />
          {this.renderTileList()}
        </TileListWrapper>
      </HomeWrapper>
    );
  }
}
function mapStateToProps(state: any) {
  return {
    next5Race: state.next5Race,
    page: state.page,
  };
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
)(HomeTemplate);
