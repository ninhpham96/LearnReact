import React from "react";


class ChildComponent extends React.Component {

    state = {
        showJobs: false
    }
    hanldeShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        });
    }
    handleDeleteJob = (job) => {
        this.props.DeleteJob(job)
    }
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {!showJobs ?
                    <div><button onClick={() => this.hanldeShowHide()}>Show</button></div>
                    :
                    <>
                        <div className="job-list">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.title}>
                                            {item.title}-{item.salary} $
                                            <></> <span onClick={() => this.handleDeleteJob(item)}>XXX</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.hanldeShowHide()}>Hide</button></div>
                    </>
                }
            </>
        )
    };
};
export default ChildComponent;