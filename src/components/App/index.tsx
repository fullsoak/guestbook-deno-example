import type { FunctionComponent } from "preact";
import {
  ErrorBoundary,
  lazy,
  LocationProvider,
  Route,
  Router,
} from "preact-iso";
import { locationStub } from "preact-iso/prerender";
import { Home } from "../Home/index.tsx";
import { Entry, type EntryProps } from "../Entry/index.tsx";
import { NotFound } from "../NotFound/index.tsx";
import { AppContext } from "../../contexts/AppContext.ts";
import { Login } from "../Login/index.tsx";
import { useState } from "preact/hooks";

const Logout = lazy(() =>
  import("../Logout/index.tsx").then((cmp) => cmp.Logout)
);

type AppProps = {
  path: string;
  isInitiallyLoggedIn: boolean;
};

export const App: FunctionComponent<AppProps> = (
  { path, isInitiallyLoggedIn },
) => {
  locationStub(path);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(isInitiallyLoggedIn);
  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <LocationProvider scope="/">
        <ErrorBoundary>
          <Router>
            <Login path="/login" />
            <Logout path="/logout" />
            <Home path="/" />
            <Route
              path="/entry/:id"
              component={({ id }: EntryProps) => <Entry id={id} />}
            />
            <NotFound default />
          </Router>
        </ErrorBoundary>
      </LocationProvider>
    </AppContext.Provider>
  );
};
