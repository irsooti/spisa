import isEmpty from 'ramda/es/isEmpty';
import React, { useContext, useEffect } from 'react';
import { useFirebaseRef } from '../../hooks';
import userContext from '../UserProvider/context';
import { BASE_NODE } from '../../utils/constants';

const MyShoppingList = () => {
  const { uid } = useContext(userContext);
  const { update, value, initialized } = useFirebaseRef(
    `${BASE_NODE}/user/${uid}`,
    'value',
  );

  const { update: updateUserConfig, value: configValue } = useFirebaseRef(
    `${BASE_NODE}/user/${uid}/`,
    'value',
  );

  useEffect(() => {
    if (initialized && isEmpty(value)) {
      update('/').set({ createdAt: Date.now(), lists: [] });
    } else if (initialized && !value.lists) {
      updateUserConfig(`/lists`).push({ createdAt: Date.now() });
    }
  }, [updateUserConfig, configValue, initialized, value, update]);

  return <div>Ehilà - {uid} </div>;
};

export default MyShoppingList;
