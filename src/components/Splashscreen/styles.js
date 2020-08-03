import styled, { keyframes } from "styled-components";

const pulsingCircle = keyframes`
    from {
        transform: scale(1.0);
    }
    to {
        transform: scale(1.2);
    }
`;




export const SplashScreenWrapper = styled.div`
 width: 100%;
 max-width: 300px;
 margin: auto;
 display: grid;
 min-height: 100vh;
 & > svg {
    margin: auto;
    overflow: visible
 }
 .cls-1 {
    transform-origin: center;
    animation: ${pulsingCircle} 0.5s cubic-bezier(0.19, 1, 0.22, 1) infinite alternate;
 }


`

