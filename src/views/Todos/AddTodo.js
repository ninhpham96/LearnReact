import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
    state = {
        title: ""
    }
    handleOnChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddTodo = () => {
        if (!this.state.title) {
            toast.warning("Bạn chưa nhập thông tin!")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }
        this.props.addNewToDo(todo);
        this.setState({
            title: ""
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title} onChange={(event) => this.handleOnChange(event)} />
                <button onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
};
export default AddTodo;