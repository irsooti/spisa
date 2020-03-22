import styled, { keyframes } from 'styled-components';

const modalAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
  `;

const modalBoxAnimation = keyframes`
    from {
        top: -100;
    }
    to {
        top: 0;
    }
`;

export const ShoppingModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${modalAnimation} 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards;
  background: #00000075;
  overflow: auto;
  .modal-header {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
    padding-bottom: 30px;
  }

  .modal-row {
    display: flex;
    margin-bottom: 10px;
    .spisa-input {
      margin-right: 10px;
      &:nth-last-child(1) {
        margin-right: 0;
      }
    }
  }

  .modal-footer {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: right;
  }
`;

export const ShoppingModalBox = styled.div`
  position: relative;
  top: -100px;
  display: block;
  animation: ${modalBoxAnimation} 0.3s cubic-bezier(0.075, 0.82, 0.165, 1)
    forwards;
  background-color: ${props => props.theme.background};
  margin: 10px 15px;
  border-radius: ${props => props.theme.containerRadius};
  box-shadow: ${props => props.theme.boxShadow};
  padding: 10px 15px;
`;
