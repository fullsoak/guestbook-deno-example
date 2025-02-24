import type { FunctionComponent } from "preact";

export type EntryProps = {
  id: string;
};

export const Entry: FunctionComponent<EntryProps> = ({ id }) => (
  <section>
    <h1>title of entry {id}</h1>
    <div>content of entry {id}</div>
    <br />
    <div><a href="/">Back</a></div>
  </section>
);
