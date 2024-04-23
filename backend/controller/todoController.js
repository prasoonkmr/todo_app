// import mongoose from "mongoose"
import Todo from "../model/ToDoModel.js";

const fetchTodo = async (req, res) => {
  try {
    const taskList = await Todo.find();
    res.json({ taskList });
  } catch (error) {
    console.log(`fetch error --> ${error}`);
  }
};

const saveTodo = async (req, res) => {
  try {
    const { task } = req.body;
    const saveTask = await Todo.create({ task });
    res.json(saveTask);
  } catch (error) {
    console.log(`save error --> ${error}`);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.body;
    await Todo.deleteOne({ _id: id });
    const newList = await Todo.find();
    res.json({ newList });
  } catch (error) {
    console.log(`delete error --> ${error}`);
  }
};

const updateTodo = async (req, res) => {
  try {
    const { id,task } = req.body;
    await Todo.findByIdAndUpdate(id, {task},{new:true});
    const newLodo = await Todo.find();
    res.json({ newLodo });
  } catch (error) {
    console.log(`update error --> ${error}`);
  }
};
export { fetchTodo, saveTodo, deleteTodo, updateTodo };
