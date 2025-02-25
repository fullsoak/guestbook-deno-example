import { Controller, Post, type Context } from "fullsoak";
import { login } from "../services/auth.ts";

@Controller()
export class ApiController {
  @Post("/api/login")
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

  @Post("/api/logout")
  async logout(ctx: Context) {
    const bool = await ctx.cookies.delete("jwt");
    if (bool) return ctx.response.redirect("/");
    ctx.throw(500, "unabled to log out");
  }
}
