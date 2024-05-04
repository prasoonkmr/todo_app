import React from "react";
import TodoList from "./TodoList";
import { BrowserRouter, Route, Router } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
    <Router>
      <Route path="/"  element={TodoList}/>
    </Router>
    </BrowserRouter>
  );
};

export default App;
