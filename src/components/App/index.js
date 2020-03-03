import React from 'react';
import FirebaseProvider from '../FirebaseProvider';
import { Layout } from '../Layout';
import { ProtectedArea } from '../ProtectedArea';
import { Login } from '../Login';
import ShoppingArea from '../ShoppingArea';

const App = () => {
  return (
    <FirebaseProvider>
      <Layout>
        <ProtectedArea unauthorized={<Login />}>
          <ShoppingArea />
        </ProtectedArea>
      </Layout>
    </FirebaseProvider>
  );
};

export default App;
