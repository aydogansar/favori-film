import { createContext } from "react";
import { useLocalStore } from "mobx-react";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    SearchParams: {
      title: "",
      year: "",
      page: 1,
    },
    Films: {
      Search: [],
    },
    Favorites: [],
    menus: [
      {
        id: "home",
        href: "/",
        name: "Ana Sayfa",
      },
      {
        id: "favorites",
        href: "/favorites",
        name: "Favori Filmlerim",
      },
    ],
    hamburgerMenuOpen: false,
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
