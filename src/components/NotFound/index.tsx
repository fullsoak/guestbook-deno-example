import type { FunctionComponent } from "preact";
import type { RoutableProps } from "preact-iso";

type NotFoundProps = RoutableProps;

export const NotFound: FunctionComponent<NotFoundProps> = () => (
  <>
    <div>Not Found 😭</div>
    <div>
      <a href="/">Back</a>
    </div>
  </>
);
