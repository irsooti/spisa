import styled, { css, keyframes } from 'styled-components';

const fadeInTransition = keyframes`
  from {
    background-color: transparent;
  }

  to {
    background-color: #3a3a3ac4;
  }
`;

export const ListItem = styled.div`
  transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: ${(props) => props.theme.containerRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  padding: 10px 15px;
  position: relative;
  margin-bottom: 15px;
  display: block;

  .item-header-row {
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    .item-header-col {
      width: 50%;
    }

    .item-header-col-right {
      text-align: right;
    }
  }
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
  /* background: ${(props) => props.theme.greenBlueGradient}; */
  height: 35px;
  padding: 5px 5px;
  font-size: 1.3rem;
  border-radius: ${(props) => props.theme.containerRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
  font-weight: bolder;
  .unit {
    font-size: 1rem;
    color: #828282;
    margin-left: 5px;
  }
`;

export const InTheCartOverlay = styled.div`
  ${(props) =>
    props.isAdded &&
    css`
      position: absolute;
      border-radius: ${props.theme.containerRadius};
      z-index: 1;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      animation: ${fadeInTransition} 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)
        forwards;
      overflow: hidden;
      display: flex;
      & > div {
        font-size: 4em;
        font-weight: bolder;
        margin: auto;
        text-transform: uppercase;
        /* transform: rotate(325deg); */
      }
    `}
`;

export const NoteItem = styled.div`
  margin-top: 5px;
  border-radius: ${(props) => props.theme.containerRadius};
  background: linear-gradient(
    0deg,
    rgba(255, 230, 134, 1) 0%,
    rgba(254, 211, 43, 1) 100%
  );
  padding: 15px 10px;
  border-top: solid 11px hsla(38, 299%, 58%, 1);
`;
