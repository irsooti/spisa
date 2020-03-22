import styled from 'styled-components';

export const ShoppingListWrapper = styled.div`
  .shopping-done {
    .shopping-done-ok {
        color: ${props => props.theme.green}
    }
    .shopping-done-text {
      padding: 15px;
    }
  }
  text-align: center;
  color: ${props => props.theme.grey};
  border-radius: ${props => props.theme.containerRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 10px 15px;
  position: relative;
  margin-bottom: 15px;
  display: block;
`;
