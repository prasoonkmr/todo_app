import express from "express";
import {
  deleteUser,
  saveUser,
  updateUser,
} from "../controller/userController.js";
import { loginUser } from "../controller/authController.js";

const router = express.Router();

//  /api/user/save
router.post("/save", saveUser);
//  /api/user/login
router.post("/login", loginUser);
//  /api/user/fetch
// router.get("/fetch", fetchUser);
//  /api/user/update
router.put("/update", updateUser);
//  /api/user/delete
router.delete("/delete", deleteUser);

export default router;
