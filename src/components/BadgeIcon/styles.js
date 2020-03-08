import styled, { css } from 'styled-components';

export const StyledIcon = styled.div`
  background: #fff;
  padding: 4px 6px;
  margin-left: 5px;
  ${props => {
    switch (props.type) {
      case 'danger':
        return css`
          color: ${props.theme.red};
        `;
      case 'warning':
        return css`
          color: ${props.theme.yellow};
        `;

      default:
        return css`
          color: ${props.theme.info};
        `;
    }
  }}
  border-radius: 50%;
  display: inline-block;
`;
