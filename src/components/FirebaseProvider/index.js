import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import PropTypes from 'prop-types';

import context from './context';
import firebaseConfig from '../../config/firebaseConfig';

const { Provider } = context;

const FirebaseProvider = ({ children }) => {
  const [firebaseInstance, setFirebaseInstance] = useState();

  useEffect(() => {
    if (firebase.apps.length === 0) {
      setFirebaseInstance(
        firebase.initializeApp(firebaseConfig, firebaseConfig.projectId),
      );
    }
  }, []);
  // useEffect(() => {
  //   console.info(`Name: ${firebaseInstance.name}`);
  // }, [firebaseInstance]);

  if (firebaseInstance && firebaseInstance.name && firebase.apps.length === 1) {
    return <Provider value={firebaseInstance}>{children}</Provider>;
  }

  return '';
};

FirebaseProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FirebaseProvider;
