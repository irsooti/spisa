/* eslint-disable camelcase */
import React from 'react';
import { IntlProvider } from 'react-intl';
import FirebaseProvider from '../FirebaseProvider';
import { Layout } from '../Layout';
import { ProtectedArea } from '../ProtectedArea';
import { Login } from '../Login';
import ShoppingArea from '../ShoppingArea';
import locale_en from '../../translations/en.json';
import locale_it from '../../translations/it.json';
import MyShoppingList from '../MyShoppingLists';

const data = {
  en: locale_en,
  it: locale_it,
};

const App = () => {
  // eslint-disable-next-line no-undef
  const language = window.navigator.language.split(/[-_]/)[0];

  return (
    <IntlProvider locale={language} messages={data[language]}>
      <FirebaseProvider>
        <Layout>
          <ProtectedArea unauthorized={<Login />}>
            <MyShoppingList></MyShoppingList>
            {/* <ShoppingArea /> */}
          </ProtectedArea>
        </Layout>
      </FirebaseProvider>
    </IntlProvider>
  );
};

export default App;
