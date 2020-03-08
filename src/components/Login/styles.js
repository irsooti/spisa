import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 100%;
`;

export const LoginBox = styled.div`
  display: block;
  align-self: center;
  justify-items: center;
  margin: auto 15px;
  width: 600px;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.containerRadius};
  padding: 40px 20px;
`;

export const LoginText = styled.div`
  display: block;
  text-align: center;
`;

export const LoginButtonBox = styled.div`
  display: block;
  text-align: right;
`;
