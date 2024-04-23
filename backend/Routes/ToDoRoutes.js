import express from "express"
import { deleteTodo, fetchTodo, saveTodo, updateTodo } from "../controller/todoController.js"

const router = express.Router()

router.get("/fetch", fetchTodo)
router.post("/save", saveTodo)
router.post("/delete", deleteTodo)
router.post("/update", updateTodo)

export default router