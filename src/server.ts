import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router.ts";
import { PORT, HOST} from '../config.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Running in http://${HOST}:${PORT}`);

await app.listen(`${HOST}:${PORT}`);
