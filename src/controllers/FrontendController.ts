import { Controller, Get, type Context, ssr } from "fullsoak";
import { App } from "../components/App/index.tsx";

@Controller()
export class FrontendController {
  @Get("/:view*")
  async serveApp(ctx: Context) {
    const jwt = await ctx.cookies.get("jwt");
    // @TODO verify the JWT
    const isInitiallyLoggedIn = jwt === "__mock__";
    return ssr(App, { path: ctx.request.url.pathname, isInitiallyLoggedIn });
  }
}
