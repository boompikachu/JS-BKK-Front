/* eslint-disable react/jsx-props-no-spreading */
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import { createContext } from 'react';
import { useLocalStore } from 'mobx-react-lite';
import Nav from '../commons/components/componnent.nav';
import createUserStore from '../commons/stores/store.user';
import { UserStore } from '../interfaces/interface.user';
import useAuthGuard from '../commons/hooks/hook.auth';

export const rootContext = createContext({
  userStore: {} as UserStore
});

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const rootStore = useLocalStore(() => ({ userStore: createUserStore() }));
  useAuthGuard(rootStore.userStore);

  return (
    <>
      <rootContext.Provider value={rootStore}>
        <Nav />
        <Component {...pageProps} />
      </rootContext.Provider>
    </>
  );
};

App.propTypes = {};

export default App;
