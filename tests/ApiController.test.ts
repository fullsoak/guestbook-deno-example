// deno-lint-ignore no-explicit-any
(globalThis.window = globalThis as any)[Symbol("SHAM_SYMBOL")] = {};

import { superoak } from "superoak";
import { useFullSoak } from "fullsoak/testing";
import { ApiController } from "../src/controllers/ApiController.ts";

Deno.test("it should serve [POST] /api/login", async () => {
  const app = useFullSoak({ controllers: [ApiController] });

  const req1 = await superoak(app);
  await req1.post("/api/login")
    .send(JSON.stringify({username: "foo", password: "bar"}))
    .expect(401);

  const req2 = await superoak(app);
  await req2.post("/api/login")
    .set("content-type", "application/x-www-form-urlencoded")
    .send("username=demo&password=demo")
    .expect(302);
});

Deno.test("it should serve [POST] /api/logout", async () => {
  const app = useFullSoak({ controllers: [ApiController] });

  const req1 = await superoak(app);
  await req1.post("/api/login")
    .send(JSON.stringify({username: "foo", password: "bar"}))
    .expect(401);

  const req2 = await superoak(app);
  await req2.post("/api/login")
    .set("content-type", "application/x-www-form-urlencoded")
    .send("username=demo&password=demo")
    .expect(302);
});
