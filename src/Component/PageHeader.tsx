import * as React from 'react';
import styled from 'styled-components';

import { COLOR_PRIMARY, COLOR_GREY, MenuWrapper } from '../Helper/sharedStyle';
import GlyphBetEasy from '../Component/Glyph/GlyphBetEasy';
import GlyphHorse from '../Component/Glyph/GlyphHorse';

const HeaderWrapper = styled.div`
  height: 80px;
  align-items: center;
  display: flex;
  padding: 0 10px;
  border-bottom: solid 1px #${COLOR_GREY};
  margin-bottom: 10px;
`;

const LogoWrapper = styled.div`
  overflow: hidden;
  flex-shrink: 0;
  align-items: center;
  svg {
    fill: #${COLOR_PRIMARY};
    height: 65px;
    display: block;
    width: 105px;
  }
`;

const LogoBetEasy = styled(GlyphBetEasy)`
  fill: currentColor;
  height: auto;
  width: 100%;
`;

export default () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoBetEasy />
      </LogoWrapper>
      <MenuWrapper>
        <ul>
          <li>
            <span>
              <GlyphHorse />
            </span>
            <h1>Racing</h1>
          </li>
        </ul>
      </MenuWrapper>
    </HeaderWrapper>
  );
};
