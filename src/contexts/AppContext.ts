import { createContext } from "preact";

export const AppContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (_: boolean) => {},
});
