import React from 'react';
import AddComponent from './addcomponent';
import ChildComponent from './ChildComponent';
// import swal from 'sweetalert';


class Mycomponents extends React.Component {
    state = {
        arrJobs: [
            { title: "DEV", salary: 5000 },
            { title: "Manager", salary: 10000 },
            { title: "Tester", salary: 2000 }
        ]
    };
    addnewjob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        });
    }
    DeleteJob = (job) => {
        this.setState({
            arrJobs: this.state.arrJobs.filter(item => item.salary !== job.salary)
        });
    }
    render() {
        return (
            <>
                <AddComponent addnewjob={this.addnewjob} />
                <ChildComponent DeleteJob={this.DeleteJob} arrJobs={this.state.arrJobs} />
            </>
        )
    }
}
export default Mycomponents;