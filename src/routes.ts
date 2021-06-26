import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagcontroller";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagsController } from "./controllers/ListTagsController";
import { ListUsersController } from "./controllers/ListUsersController";
import { ListTagNameController } from "./controllers/ListTagNameController";
import { ListTagIdController } from "./controllers/ListTagIdController";
const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReciveComplimentsController =
  new ListUserReceiveComplimentsController();
const listUserSendComplimentsController =
  new ListUserSendComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();
const listTagNameController = new ListTagNameController();
const listTagIdController = new ListTagIdController();

router.post("/users", createUserController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);

router.post("/login", authenticateUserController.handle);

router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.get("/tags", ensureAuthenticated, listTagsController.handle);

router.post(
  "/compliments",
  ensureAuthenticated,
  createComplimentController.handle
);

router.get(
  "/users/compliments/receive",
  ensureAuthenticated,
  listUserReciveComplimentsController.handle
);

router.get(
  "/users/compliments/send",
  ensureAuthenticated,
  listUserSendComplimentsController.handle
);

router.get(
  "/tags/name/:name",
  ensureAuthenticated,
  listTagNameController.handle
);

router.get("/tags/id/:id", ensureAuthenticated, listTagIdController.handle);
export { router };
