import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: ${props =>
    props.size && props.size.width ? props.size.width : '100%'};
  label {
    font-weight: bolder;
    font-size: 0.9rem;
  }
  input,
  textarea {
    font-family: inherit;
    font-size: 1rem;
    margin-top: 3px;
    display: block;
    width: 100%;
    max-width: 100%;
    border-radius: ${props => props.theme.inputRadius};
    background-color: ${props =>
      props.error ? props.theme.inputError : props.theme.inputBackground};
    padding: 15px 10px;
    box-sizing: border-box;
    border: none;
    font-weight: bold;
    resize: none;

    &:focus {
      outline: none;
    }
  }
`;
