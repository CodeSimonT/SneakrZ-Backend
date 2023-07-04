import express from "express";
const userRouter = express.Router();
// user and add to cart feature
import {
  register,
  login,
  authenticateUser,
  addToCart,
  deleteCart,
  retriveCart,
} from "../controllers/user.js";

// routes for user
userRouter.post("/register", register);
userRouter.post("/login", login);
// cart
// add
userRouter.post("/addToCart", authenticateUser, addToCart);
// delete
userRouter.delete("/deleteCart/:productId", authenticateUser, deleteCart);
// read
userRouter.get("/retriveCart", authenticateUser, retriveCart);

export default userRouter;