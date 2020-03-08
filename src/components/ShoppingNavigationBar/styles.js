import styled from 'styled-components';

export const NavigationBar = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  width: 100%;
  left: 0;
  display: flex;
  box-shadow: ${props => props.theme.boxShadow};
  height: 50px;
  background-color: ${props => props.theme.background};
  .item {
    flex-grow: 1;
  }
`;

export const NavigationBarItems = styled.div`
  display: flex;
  width: calc(100% - 100px);
`;

export const AddButton = styled.button`
  display: block;
  position: absolute;
  top: -35px;
  right: 30px;
  width: 70px;
  height: 70px;
  box-shadow: ${props => props.theme.boxShadow};
  background: white;
  border-radius: 50%;
  border: none;

  &:hover {
      outline: none;
  }
`;
