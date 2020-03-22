import styled from 'styled-components';

export const EmptyListWrapper = styled.div`
  text-align: center;
  border-radius: ${props => props.theme.containerRadius};
  border: dashed 4px ${props => props.theme.grey};
  padding: 20px 40px;
  color: ${props => props.theme.grey};
  .empty-text {
      padding: 15px;
  }
`;
