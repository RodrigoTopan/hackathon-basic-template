import { Router } from "express";

// Controllers
import customerController from "@controllers/CustomerController";
import sessionController from "@controllers/SessionController";
import userController from "@controllers/UserController";
// API BASIC MIDDLEWARES
import authMiddleware from "@middlewares/auth";
import errorMiddleware from "@middlewares/error";

const routes = new Router();

// Authenticate
routes.post("/user", userController.store);
routes.post("/session", sessionController.store);

routes.use(authMiddleware);

// Customers
routes.get("/customer", customerController.index);
routes.get("/customer/:id", customerController.find);
routes.post("/customer", customerController.store);

routes.put("/customer/:id", customerController.update);

routes.delete("/customer/:id", customerController.delete);

routes.use(errorMiddleware);

export default routes;
