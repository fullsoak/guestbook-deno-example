import {
  setupDefaultFullsoakLogger,
  useFullSoak,
} from "fullsoak";
import { ApiController } from "./controllers/ApiController.ts";
import { FrontendController } from "./controllers/FrontendController.ts";

setupDefaultFullsoakLogger();

useFullSoak({
  port: 3991,
  controllers: [ApiController, FrontendController],
});
