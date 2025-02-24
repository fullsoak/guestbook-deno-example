import type { FunctionComponent } from "preact";
import type { RoutableProps } from "preact-iso/router";

export const Login: FunctionComponent<RoutableProps> = () => {
  return (
    <section className="login-form">
      <form action="/login" method="post">
        <input type="text" name="username" required autoFocus></input>
        <input type="password" name="password" required></input>
        <input type="submit" value="login" aria-label="login"></input>
      </form>
      <br />
      <div>(demo:demo)</div>
      {
        /* @TODO consider removing external css <link> once the issue
        * https://github.com/fullsoak/fullsoak/issues/17 is fixed
        */
      }
      <link href="/components/Login/styles.css" rel="stylesheet" />
    </section>
  );
};
