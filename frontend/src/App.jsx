import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { baseUrl } from "./constant";

const App = () => {
  const [item, setItem] = useState([]);
  const [edit, setEdit] = useState("");
  const [editId, setEditId] = useState("");
  const [showBtn, setShowBtn] = useState(false);

  //  CREATE NEW TASK METHOD
  const create = async () => {
    const setData = { task: edit };
    await axios.post(`${baseUrl}/save`, setData);
    const { data } = await axios.get(`${baseUrl}/fetch`);
    setItem(data.taskList);
    setEdit("");
  };

  // FETCH ALL DATA FROM API
  const api = async () => {
    const { data } = await axios.get(`${baseUrl}/fetch`);
    setItem(data.taskList);
  };

  const handleEdit = async (v) => {
    setShowBtn(true);
    setEditId(v._id);
    setEdit(v.task);
  };

  const handleDelete = async (v) => {
    const taskId = { id: v._id };
    const { data } = await axios.post(`${baseUrl}/delete`,taskId);
    setItem(data.newList);
  };

  //  UPDATE METHOD
  const update = async () => {
    const updateData = { id: editId, task: edit };
    const { data } = await axios.post(`${baseUrl}/update`, updateData);
    setItem(data.newLodo);
    setShowBtn(false)
    setEdit('')
  };
  useEffect(() => {
    api();
  }, []);
  return (
    <div className="container">
      <h2>
        Todo <span>App</span>
      </h2>
      <div className="textField">
        <input
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
          type="text"
          placeholder="Insert a task"
        />
        {!showBtn ? (
          <button onClick={create}>Save</button>
        ) : (
          <button onClick={update}>Update</button>
        )}
      </div>
      <div className="taskUl">
        <ul>
          {item.map((v) => (
            <li key={v._id} id="item_list" className="list">
              {v.task}
              <div>
                <button onClick={() => handleEdit(v)} className="editBtn">
                  Edit
                </button>
                <button onClick={() => handleDelete(v)} className="deleteBtn">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
