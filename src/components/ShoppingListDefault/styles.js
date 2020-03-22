import styled from 'styled-components';

export const ShoppingListDefaultWrapper = styled.div`
  border-radius: ${props => props.theme.containerRadius};
  text-align: center;
  border: dashed 4px ${props => props.theme.grey};
  color: ${props => props.theme.grey};
  padding: 20px 40px;
  .shopping-default-icon {
    padding: 20px;
  }
  .shopping-default-text {
    padding: 15px;
  }
`;
