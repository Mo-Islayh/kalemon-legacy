import { useMemo } from "react";

import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import getStore from "./store";

/**
 * A wrapper around the Provider component to skip rendering <PersistGate />
 * on the server. PersistGate prevents children from rendering until the persisted
 * state is retrieved from localstorage, this results in an empty DOM for SSR and SSG.
 * For more info: https://github.com/rt2zz/redux-persist/issues/1008
 */

type Props = {
  children: React.ReactNode;
};

const ReduxProvider = ({ children }: Props) => {
  const store = useMemo(() => getStore, []);
  const persistor = useMemo(() => persistStore(store), [store]);

  /**
   * Before the Gate lifts, we want to get the user preferences
   * then store in Redux so that they can be used.
   */
  const onBeforeLift = async () => {};

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} onBeforeLift={onBeforeLift}>
        {() => <>{children}</>}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
