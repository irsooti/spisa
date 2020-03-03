/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
function getFirebaseConfig() {
  try {
    return require(`../${process.env.NODE_ENV}.firebase.config.json`);
  } catch (err) {
    throw new Error(
      'Missing configuration file! Remember to include your config file in the root folder: [ENVIRONMENT].firebase.config.json',
    );
  }
}

export default getFirebaseConfig();
