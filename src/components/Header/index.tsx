import { useContext } from "preact/hooks";
import { AppContext } from "../../contexts/AppContext.ts";

const LogInBtn = () => (
  <a href="/login">
    <small>(Log in)</small>
  </a>
);

const LogOutBtn = () => (
  <a href="/logout">
    <small>(Log out)</small>
  </a>
);

export const Header = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <header>
      <h1>
        Welcome to the Guestbook {isLoggedIn && <LogOutBtn />}
        {!isLoggedIn && <LogInBtn />}
      </h1>
    </header>
  );
};
