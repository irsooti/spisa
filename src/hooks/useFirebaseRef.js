import { useContext, useEffect, useState, useCallback } from 'react';
import context from '../components/FirebaseProvider/context';
/**
 *
 * @param {string} firebaseRef
 * @param {firebase.database.EventType} eventType
 */
const useFirebaseRef = (firebaseRef, eventType) => {
  const [state, setState] = useState({});
  const [initialized, setInitialized] = useState(false);
  const firebase = useContext(context);

  /**
   * @param {firebase.database.DataSnapshot} evt
   */
  const setValue = useCallback(evt => {
    setInitialized(true)
    setState(evt.val());
  }, []);

  useEffect(() => {
    firebase
      .database()
      .ref(firebaseRef)
      .on(eventType, setValue);

    return () => {
      firebase
        .database()
        .ref(firebaseRef)
        .off(eventType, setValue);
    };
  }, [eventType, firebase, firebaseRef, setValue]);

  const update = (path = '') => {
    return firebase.database().ref(firebaseRef + path);
  };

  return { initialized, value: state, update };
};

export default useFirebaseRef;
