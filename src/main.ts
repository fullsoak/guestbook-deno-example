import {
  Context,
  Controller,
  Get,
  Post,
  setupDefaultFullsoakLogger,
  ssr,
  useFullSoak,
} from "fullsoak";
import { App } from "./components/App/index.tsx";
import { login } from "./services/auth.ts";

setupDefaultFullsoakLogger();

@Controller()
class AppController {
  @Post("/login")
  async login(ctx: Context) {
    const data = await ctx.request.body.formData();
    const username = data.get("username")?.toString();
    const password = data.get("password")?.toString();
    if (login(username, password)) {
      // @TODO encode a proper JWT
      await ctx.cookies.set("jwt", "__mock__");
      return ctx.response.redirect("/");
    }
    // @TODO consider UX consequences as this can be a direct
    // response to the browser (not an XHR call behind the curtain)
    ctx.throw(401);
  }

  @Post("/logout")
  async logout(ctx: Context) {
    const bool = await ctx.cookies.delete("jwt");
    if (bool) return ctx.response.redirect("/");
    ctx.throw(500, "unabled to log out");
  }

  @Get("/:path*")
  async serveApp(ctx: Context) {
    const jwt = await ctx.cookies.get("jwt");
    // @TODO verify the JWT
    const isInitiallyLoggedIn = jwt === "__mock__";
    return ssr(App, { path: ctx.request.url.pathname, isInitiallyLoggedIn });
  }
}

useFullSoak({
  port: 3991,
  controllers: [AppController],
});
