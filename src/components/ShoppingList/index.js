import React, { useEffect } from 'react';
import { useFirebaseRef } from '../../hooks';

export const ShoppingList = () => {
  const ref = useFirebaseRef('id', 'value');

  useEffect(() => {
    console.log(ref);
  }, [ref]);

  return <div>ref-{ref}</div>;
};
