import * as React from 'react';
import styled from 'styled-components';

import GlyphHorse from './Glyph/GlyphHorse';
import { COLOR_PRIMARY, COLOR_GREY } from '../Helper/sharedStyle';
import GlyphGreyHound from './Glyph/GlyphGreyHound';
import GlyphHarness from './Glyph/GlyphHarness';

const ButtonWrapper = styled.button`
  height: 36px;
  margin-right: 5px;
  border: solid 1px #${COLOR_PRIMARY};
  border-radius: 3px;
  flex: 1;
  color: #${COLOR_PRIMARY};
  background: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  &:last-child {
    margin-right: 0;
  }
  svg {
    fill: #${COLOR_PRIMARY};
  }
  &.is-active {
    background: #${COLOR_PRIMARY};
    color: #fff;
    svg {
      fill: #fff;
    }
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

export default class Filter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  isActive(data: number) {
    if (data === this.props.filter) {
      return 'is-active';
    }
    return '';
  }

  render() {
    return (
      <FilterWrapper>
        <ButtonWrapper className={this.isActive(0)} onClick={() => this.props.setFilter(0)}>
          All
        </ButtonWrapper>
        <ButtonWrapper className={this.isActive(1)} onClick={() => this.props.setFilter(1)}>
          <GlyphHorse />
        </ButtonWrapper>
        <ButtonWrapper className={this.isActive(2)} onClick={() => this.props.setFilter(2)}>
          <GlyphGreyHound />
        </ButtonWrapper>
        <ButtonWrapper className={this.isActive(3)} onClick={() => this.props.setFilter(3)}>
          <GlyphHarness />
        </ButtonWrapper>
      </FilterWrapper>
    );
  }
}
