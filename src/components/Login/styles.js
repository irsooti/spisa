import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    background: linear-gradient(0deg,#00cf92,#009cde)
  }
  to {
    background: linear-gradient(360deg,#00cf92,#009cde)
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 100%;
  background: ${props => props.theme.greenBlueGradient};
  animation: ${rotate} 3s cubic-bezier(0.075, 0.82, 0.165, 1) ease-in-out infinite alternate;
  justify-content: stretch;
`;

export const LoginBox = styled.div`
  display: block;
  align-self: center;
  justify-items: center;
  margin: auto 15px;
  width: 600px;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.containerRadius};
  padding: 30px 20px;
  background: ${props => props.theme.background};
`;

export const LoginText = styled.div`
  display: block;
  text-align: center;
  padding-bottom: 30px;
`;

export const LoginButtonBox = styled.div`
  display: block;
  text-align: right;
`;
