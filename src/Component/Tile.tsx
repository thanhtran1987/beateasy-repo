/// <reference path="./Tile.d.ts" />

import * as React from 'react';
import styled from 'styled-components';

import GlyphHorse from './Glyph/GlyphHorse';
import GlyphHarness from './Glyph/GlyphHarness';
import GlyphGreyHound from './Glyph/GlyphGreyHound';
import { COLOR_SECONDARY, COLOR_GREY, COLOR_ALERT } from '../Helper/sharedStyle';

import { getCountDown } from '../Helper/shared';

const TileWrapper = styled.div`
  border-top: 1px solid #ebedf5;
  display: flex;
  justify-content: flex-start;

  padding: 10px;
`;

const GlyphWrapper = styled.div`
  height: 36px;
  flex: 1;
`;

const RaceWrapper = styled.div`
  padding: 0 5px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
`;

const RaceName = styled.div`
  color: #${COLOR_SECONDARY};
`;
const RaceNumber = styled.div`
  color: #${COLOR_GREY};
`;
const RaceTime = styled.div`
  margin-left: auto;
  color: #${COLOR_ALERT};
  font-weight: 500;
`;

const renderGlyph: any = (data: number) => {
  const icons = [<GlyphHorse />, <GlyphHarness />, <GlyphGreyHound />];

  return icons[data - 1];
};

export default class Tile extends React.Component<any, any> {
  constructor(props: IEvent) {
    super(props);

    const timeNext = new Date(this.props.AdvertisedStartTime);
    const timeNow = new Date();

    this.state = {
      tick: (timeNext.getTime() - timeNow.getTime()) / 1000,
    };
  }

  render() {
    return (
      <TileWrapper>
        <GlyphWrapper>{renderGlyph(this.props.EventType.EventTypeID)}</GlyphWrapper>
        <RaceWrapper>
          <div>
            <RaceName>{this.props.EventName}</RaceName>
            <RaceNumber>Race {this.props.RaceNumber}</RaceNumber>
          </div>

          <RaceTime>{getCountDown(this.state.tick)}</RaceTime>
        </RaceWrapper>
      </TileWrapper>
    );
  }
}
