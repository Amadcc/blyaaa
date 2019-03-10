import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux"
import tasks from "./state/tasks";
const {
    actions: {
        handleCreatingTask,
        handleFetchingTasks
    },
    selectors: {
        getTasks
    }
} = tasks;

function withTasks(TasksComponent){
    class TasksWrapper extends Component {
        render() {
            return (
                <TasksComponent {...this.props} />
            );
        }
    }
    function mapStateToProps(state) {
        return {
            tasks: getTasks(state)
        };
    }

    function mapDispatchToProps(dispatch) {
        return bindActionCreators({
            handleFetchingTasks,
            handleCreatingTask
        }, dispatch);
    }
    return connect(mapStateToProps, mapDispatchToProps)(TasksWrapper);
};

export default withTasks;