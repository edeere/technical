import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
// import { addTodo } from "../redux/actions";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import VisibilityFilters from "../components/VisibilityFilters";
import { todosRef } from '../firebase';
import { setTodo } from "../redux/actions";

const Todo = ({ setTodo }) => {
    // const [data,setData] = useState(null)
  
    useEffect(()=>{
        todosRef.once('value', snap => {
            let all = []
            let idList = []
            snap.forEach(data => {
                let info = data.val()
                all[info.id] = info
                idList.push(info.id)
            })
            setTodo(all,idList)
          })
    },[])


    return (
        <div className="todo-app mt-24 mx-24">
            <h1 className="font-semibold">Todo List</h1>
            <VisibilityFilters />
            <AddTodo />
            <TodoList />
        </div>
    );

}

  // export default VisibilityFilters;
  export default connect(
    null,
    { setTodo }
  )(Todo);