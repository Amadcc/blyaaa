import React, { Component } from "react";
import withTasks from "../withTasks";
class Table extends Component {
    componentDidMount() {
        this.props.handleFetchingTasks();
    }
    render() {
        console.log(this);
        return ( 
          <div>
            Hey
            {this.props.tasks && this.props.tasks.length > 0 &&
              this.props.tasks.map(task => <p key={task.id}>{task.email}</p>)
            }
          </div>
        )
    }
}

export default withTasks(Table);