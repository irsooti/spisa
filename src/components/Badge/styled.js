import styled, { css } from 'styled-components';

export const BadgeContainer = styled.div`
  font-size: ${props => props.theme.small};
  border-radius: ${props => props.theme.containerRadius};
  display: inline-block;
  padding: 3px 8px;
  color: #fff;
  vertical-align: middle;
  ${props => {
    switch (props.type) {
      case 'danger':
        return css`
          background-color: ${props.theme.red};
        `;
      case 'warning':
        return css`
          background-color: ${props.theme.yellow};
        `;

      default:
        return css`
          background-color: ${props.theme.info};
        `;
    }
  }}
`;
