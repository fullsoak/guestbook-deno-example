import type { FunctionComponent } from "preact";
import type { RoutableProps } from "preact-iso";
import { useContext } from "preact/hooks";
import { AppContext } from "../../contexts/AppContext.ts";
import { GROOT_SAYS } from "../../_lab/foo.js";
import { Foo } from "../../_lab/foo.jsx";
import { Header } from "../Header/index.tsx";

type HomeProps = RoutableProps;

export const Home: FunctionComponent<HomeProps> = () => {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <>
      <Header />
      <section>
        {isLoggedIn && (
          <>
            <p>List of entries</p>
            <ul>
              <li>entry 1</li>
              <li>
                <a href="/entry/foo">entry foo</a>
              </li>
              <li>honorary entry: {GROOT_SAYS}</li>
            </ul>
            <section>
              by the way, <Foo />
            </section>
          </>
        )}
      </section>
    </>
  );
};
