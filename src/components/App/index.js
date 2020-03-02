import React from 'react';
import FirebaseProvider from '../FirebaseProvider';
import { Layout } from '../Layout';
import { ProtectedArea } from '../ProtectedArea';
import { Login } from '../Login';
import { ShoppingList } from '../ShoppingList';

const App = () => {
  return (
    <FirebaseProvider>
      <Layout>
        <ProtectedArea unauthorized={<Login />}>
          <ShoppingList />
        </ProtectedArea>
      </Layout>
    </FirebaseProvider>
  );
};

export default App;
