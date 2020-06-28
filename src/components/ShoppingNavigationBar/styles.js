import styled, { keyframes } from 'styled-components';

export const NavigationBar = styled.div`
  position: fixed;
  z-index: 1;
  bottom: 0;
  width: 100%;
  left: 0;
  display: flex;
  box-shadow: ${(props) => props.theme.boxShadow};
  height: 50px;
  background-color: ${(props) => props.theme.background};
  .item {
    flex-grow: 1;
  }
`;

export const NavigationBarItems = styled.div`
  display: flex;
  width: calc(100% - 100px);
`;

const press = keyframes`
    0% {background-position:0% 50%}
    50% {background-position:100% 50%}
    100% {background-position:0% 50%}
`;

export const AddButton = styled.button`
  display: block;
  position: absolute;
  top: -35px;
  right: 30px;
  width: 70px;
  height: 70px;
  box-shadow: ${(props) => props.theme.boxShadow};
  background: ${(props) => props.theme.greenBlueGradient};
  border-radius: 50%;
  color: #fff;
  border: none;
  transition: cubic-bezier(0.165, 0.84, 0.44, 1) 300ms;

  &:hover,
  &:focus {
    outline: none;
    animation: ${press} 3s ease infinite;
  }
`;
