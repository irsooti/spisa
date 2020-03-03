/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
function getFirebaseConfig() {
  try {
    return require(`../${process.env.NODE_ENV}.firebase.config.json`);
  } catch (err) {
    try {
      return {
        apiKey: process.env.apiKey,
        authDomain: process.env.authDomain,
        databaseURL: process.env.databaseURL,
        projectId: process.env.projectId,
        storageBucket: process.env.storageBucket,
        messagingSenderId: process.env.messagingSenderId,
        appId: process.env.appId,
      };
    } catch (subErr) {
      throw new Error(
        'Missing configuration file! Remember to include your config file in the root folder: [ENVIRONMENT].firebase.config.json',
      );
    }
  }
}

export default getFirebaseConfig();
