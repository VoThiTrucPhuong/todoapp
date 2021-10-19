/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, { useState } from "react";
import "./App.css";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import ToDoList from "./component/TodoList";
import ToDoForm from "./component/TodoForm";
import storage from './util/storage'

function App() {
  const [toDoList, setToDoList] = useState(storage.get());
  // Xử lý công việc đã hoàn thành
  const handleToggle = (id) => {
    let mapper = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapper);
    storage.set(mapper);
  };
  // Lọc ra để xóa những công việc đã hoàn thành
  const handleFilter = () => {
    let notComplete = [];
    toDoList.filter((task) => {
      if(task.complete){
        notComplete.push(task.complete);
      }
    })
    if(notComplete.length > 0){
      confirmAlert({
        title: 'Thông báo',
        message: ' Bạn chắc chắn muốn xóa những nội dung đã hoàn thành?',
        buttons: [
            {
            label: 'Yes',
            onClick: () => {
                let filtered = toDoList.filter((task) => {
                  return !task.complete;
                });
                setToDoList(filtered);
                storage.set(filtered);
              }
            },
            {
            label: 'No',
            }]
      });
    }else{
      confirmAlert({
        title: 'Thông báo',
        message: 'Chưa có nội dung nào hoàn thành',
        buttons: [
            {
            label: 'Yes',
            onClick: () => {return;}
            },]
      });
    }
  };
  // Thêm công việc
  const addTask = (userInput, due) => {
    let copy = [...toDoList];
    copy = [
      ...copy,
      { id: toDoList.length + 1, task: userInput, complete: false, dateOf: due },
    ];
    setToDoList(copy);
    storage.set(copy);
  };
  // Xóa content item
  const handleDelete = (id)=>{
    let del = toDoList.filter(todo => todo.id != id);
    setToDoList(del);
    storage.set(del);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="app-h1"> Todo App </h1>
        <div>
          <ToDoForm addTask={addTask} />
          <ToDoList
            toDoList={toDoList}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
            handleDelete={handleDelete}
          />
        </div>
      </header>
    </div>
  );
}
export default App;
