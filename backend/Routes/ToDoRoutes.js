import express from "express";
import {
  deleteTodo,
  fetchTodo,
  saveTodo,
  updateTodo,
} from "../controller/todoController.js";

const router = express.Router();
//  /api/fetch
router.get("/fetch", fetchTodo);
//  /api/save
router.post("/save", saveTodo);
//  /api/delete
router.post("/delete", deleteTodo);
//  /api/update
router.post("/update", updateTodo);

export default router;
