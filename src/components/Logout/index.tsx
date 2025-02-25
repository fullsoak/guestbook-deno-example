import { getOrigin } from "fullsoak";
import type { FunctionComponent } from "preact";
import { type RoutableProps, useLocation } from "preact-iso";
import { useContext } from "preact/hooks";
import { AppContext } from "../../contexts/AppContext.ts";

const res = await fetch(getOrigin() + "/api/logout", { method: "post" });

export const Logout: FunctionComponent<RoutableProps> = () => {
  const { setIsLoggedIn } = useContext(AppContext);
  const { route } = useLocation();
  if (res.status < 400) setIsLoggedIn(false);
  route("/", true);
  return null;
};
