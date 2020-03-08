import styled from 'styled-components';

export const ListItem = styled.div`
  border-radius: ${props => props.theme.containerRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 10px 15px;
  margin-bottom: 15px;
  display: block;

  .item-title-row {
    display: flex;
    align-items: center;
  }

  .item-notes-row {
    font-style: italic;
    display: block;
    align-items: center;
  }
`;

export const QuantityItem = styled.div`
  background: ${props => props.theme.greenBlueGradient};
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #fff;
`;

export const NoteItem = styled.div`
  margin-top: 5px;
  border-radius: ${props => props.theme.containerRadius};
  background: linear-gradient(0deg, rgba(255,230,134,1) 0%, rgba(254,211,43,1) 100%);
  padding: 15px 10px;
`;
