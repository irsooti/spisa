import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border-radius: ${props => props.theme.inputRadius};
  padding: ${props => props.theme.inputPadding};
  font-weight: bolder;
  border: none;
  box-shadow: ${props => props.theme.boxShadow};
  color: ${props => props.theme.inputColor};
  background: ${props => props.theme.inputPrimaryBg};
  ${({block}) => block && css`
    width: 100%;
  `}
  &:focus {
    outline: none;
  }
`;
