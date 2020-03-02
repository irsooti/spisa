import React, { useContext, useEffect, useState } from 'react';
import firebaseContext from '../FirebaseProvider/context';
import { UserProvider } from '../UserProvider';
import childrenPropType from '../../propTypes/childrenPropType';

export const ProtectedArea = ({ children, unauthorized }) => {
  const context = useContext(firebaseContext);
  const [user, setUser] = useState();

  useEffect(() => {
    context.auth().onAuthStateChanged(u => {
      setUser(u);
    });
  });

  if (user) {
    return <UserProvider user={user}>{children}</UserProvider>;
  }

  return unauthorized;
};

ProtectedArea.propTypes = {
  children: childrenPropType,
  unauthorized: childrenPropType,
};
