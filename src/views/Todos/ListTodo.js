import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import swal from "sweetalert";

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 1, title: 'Doing homwork' },
            { id: 2, title: 'Learning Code' },
            { id: 3, title: 'Playing sport' }
        ],
        editTodo: {}
    }
    addNewToDo = (todo) => {
        this.setState({
            listTodo: [...this.state.listTodo, todo]
        })
        toast.success("Đã thêm thành công!")
    }
    handleDeleteTodo = (todo) => {
        this.setState({
            listTodo: this.state.listTodo.filter(item => item.id !== todo.id)
        })
        toast.success("Đã xoá thành công!")
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        if (isEmptyObj === false && editTodo.id === todo.id) {
            let ListTodoCopy = [...listTodo];
            let objIndex = ListTodoCopy.findIndex(item => item.id === todo.id);
            ListTodoCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodo: ListTodoCopy,
                editTodo: ""
            })
            toast.success("Đã lưu thành công!")
            return;
        }
        console.log(editTodo)
        this.setState({
            editTodo: todo
        })
    }
    handleChangeTodo = (event) => {
        let editTodoNew = { ...this.state.editTodo };
        editTodoNew.title = event.target.value;
        this.setState({
            editTodo: editTodoNew
        })
    }
    render() {
        let { listTodo, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log(isEmptyObj)
        return (
            <div className="list-todo-container">
                <AddTodo
                    addNewToDo={this.addNewToDo}
                />
                <div className="list-todo-content" >
                    {listTodo && listTodo.length > 0 &&
                        listTodo.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {isEmptyObj === true ?
                                        <span>{index + 1} - {item.title} </span>
                                        :
                                        <>
                                            {editTodo.id === item.id ?
                                                <span>
                                                    {index + 1}-<input type="text"
                                                        onChange={(event) => this.handleChangeTodo(event)}
                                                        value={editTodo.title} />
                                                </span>
                                                :
                                                <span>{index + 1} - {item.title} </span>
                                            }
                                        </>
                                    }
                                    <button className="edit"
                                        onClick={() => this.handleEditTodo(item)}
                                    >
                                        {isEmptyObj === false && editTodo.id == item.id ?
                                            "Save" : "Edit"
                                        }
                                    </button>
                                    <button className="delete"
                                        onClick={() => this.handleDeleteTodo(item)}
                                    >Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
};
export default ListTodo;