import styled from 'styled-components';

export const CartButton = styled.button`
  float: right;
  position: relative;
  width: 50px;
  height: 50px;
  box-shadow: ${props => props.theme.boxShadow};
  background: ${props => (props.isInCart ? props.theme.green : 'white')};
  border-radius: 50%;
  border: none;
  z-index: 1;
  color: ${props => (props.isInCart ? 'white' : 'inherit')};

  &:hover {
    outline: none;
  }
`;
