import styled from 'styled-components';

export const COLOR_PRIMARY = '65309c';
export const COLOR_SECONDARY = '253b80';
export const COLOR_ALERT = 'ff4b3d';
export const COLOR_GREY = 'ababab';

export const FlexWrapper = 'ababab';

export const LoaderWrapper = styled.div`
  text-align: center;
  font-size: 12px;
`;

export const MenuWrapper = styled.div`
  border-left: 1px solid #${COLOR_GREY};
  margin-left: 30px;
  text-align: center;
  padding-left: 19px;
  flex-grow: 1;
  ul {
    display: flex;
    height: 80px;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      flex: 0 1 108px;
      span {
        border: solid 1px #${COLOR_GREY}
        border-radius: 50%;
        display: inline-block;
        svg {
          display: block
          margin: 0;
        }
      }
      h1 {
        font-size: 14px;
        margin: 0;
      }
    }
  }
`;
