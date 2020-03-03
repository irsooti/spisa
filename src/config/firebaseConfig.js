/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
function getFirebaseConfig() {
  try {
    return {
      apiKey: process.env.REACT_APP_apiKey,
      authDomain: process.env.REACT_APP_authDomain,
      databaseURL: process.env.REACT_APP_databaseURL,
      projectId: process.env.REACT_APP_projectId,
      storageBucket: process.env.REACT_APP_storageBucket,
      messagingSenderId: process.env.REACT_APP_messagingSenderId,
      appId: process.env.REACT_APP_appId,
    };
  } catch (err) {
    throw new Error(
      'Missing configuration file! Remember to include your configuration in your environment',
    );
  }
}

export default getFirebaseConfig();
