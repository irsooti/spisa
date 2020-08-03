import React, { useContext, useEffect, useState } from 'react';
import firebaseContext from '../FirebaseProvider/context';
import { UserProvider } from '../UserProvider';
import childrenPropType from '../../propTypes/childrenPropType';
import SplashScreen from '../Splashscreen';

export const ProtectedArea = ({ children, unauthorized }) => {
  const context = useContext(firebaseContext);
  const [user, setUser] = useState();
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    context.auth().onAuthStateChanged(u => {
      setInitialized(true)
      setUser(u);
    });
  }, [context]);

  if (!initialized) {
    return <SplashScreen />
  }

  if (user) {
    return <UserProvider user={user}>{children}</UserProvider>;
  }

  return unauthorized;
};

ProtectedArea.propTypes = {
  children: childrenPropType,
  unauthorized: childrenPropType,
};
