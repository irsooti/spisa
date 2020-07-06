import React from 'react'
import { ReactComponent as ReactLogo } from '../../assets/logo.svg';
import { SplashScreenWrapper } from './styles';

const SplashScreen = () => {
    return (
      <SplashScreenWrapper>
        <ReactLogo />
      </SplashScreenWrapper>
    )
}

export default SplashScreen
