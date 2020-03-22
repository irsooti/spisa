import styled from 'styled-components';

export const CartButton = styled.button`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;
  box-shadow: ${props => props.theme.boxShadow};
  background: ${props => (props.isInCart ? props.theme.green : props.theme.blue)};
  border-radius: 50%;
  border: none;
  z-index: 1;
  color: white;

  &:hover {
    outline: none;
  }
`;
