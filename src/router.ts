import { Router } from "https://deno.land/x/oak/mod.ts";
import {userController} from "./controller/user.ts";

const router = new Router();

router.get("/", (ctx) => {
  ctx.response.body = "Hello Deno!!!";
});

let UserController = new userController();

router.get("/users", UserController.getUsers);
router.get("/user/:id", UserController.getUser);
router.post("/user", UserController.addUser);
router.put("/user/:id", UserController.updateUser);
router.delete("/user/:id", UserController.deleteUser);

export default router;
