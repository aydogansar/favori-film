import { createContext } from "react";
import { useLocalStore, useObserver } from "mobx-react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    Film: {},
    Favorites: [],
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
