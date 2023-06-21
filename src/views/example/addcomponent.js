import React from "react";
import swal from "sweetalert";
class AddComponent extends React.Component {

    state = {
        title: "",
        salary: "",
    }
    handleChangeFirstName = (event) => {
        this.setState({
            title: event.target.value
        });
    };
    handleChangeLasttName = (event) => {
        this.setState({
            salary: event.target.value
        });
    };
    handleClickbutton = () => {
        if (!this.state.title || !this.state.salary) {
            swal("Lỗi rồi bạn ơi!")
            return;
        }
        this.props.addnewjob({ title: this.state.title, salary: this.state.salary })
        this.setState({
            title: "",
            salary: ""
        })
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor='fname'> First Name</label><br />
                    <input type='text' value={this.state.title}
                        onChange={(event) => this.handleChangeFirstName(event)}></input><br />
                    <label htmlFor='lname'> Last Name</label><br />
                    <input type='text' value={this.state.salary}
                        onChange={(event) => this.handleChangeLasttName(event)}></input><br />
                </form>
                <input type='button' value="Submit"
                    onClick={() => this.handleClickbutton()} ></input>
            </>
        )
    }
};
export default AddComponent;