import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

import PropTypes from 'prop-types';

import context from './context';
import firebaseConfig from '../../config/firebaseConfig';

const { Provider } = context;

const FirebaseProvider = ({ children }) => {
  let firebaseInstance;
  if (firebase.apps.length === 0) {
    firebaseInstance = firebase.initializeApp(
      firebaseConfig,
      firebaseConfig.projectId,
    );
  }

  useEffect(() => console.info(`Name: ${firebaseInstance.name}`));

  return <Provider value={firebaseInstance}>{children}</Provider>;
};

FirebaseProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FirebaseProvider;
