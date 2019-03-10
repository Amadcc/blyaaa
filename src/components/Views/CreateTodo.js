import React, { Component } from "react";
import withTasks from "../withTasks";
class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todotext: ""
    };
    this.onChangeTodoText = this.onChangeTodoText.bind(this);
  }

  onChangeTodoText(e) {
    this.setState({
      todotext: e.target.value
    });
  }

  render() {
    return (
      <div className="form-group row">
        <div className="col-sm-10">
          <input
            onChange={this.onChangeTodoText}
            value={this.state.todotext}
            type="text"
            className="form-control"
            id="inputEmail3"
            placeholder="add todo here"
          />
          <button
            type="button"
            onClick={() => this.setState({ todotext: "" })}
            style={{ marginTop: "25px", marginRight: "15px" }}
            className="btn btn-primary"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
			 this.props.handleCreatingTask(this.state.todotext);
              this.setState({ todotext: "" });
            }}
            style={{ marginTop: "25px" }}
            className="btn btn-success"
          >
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

export default withTasks(CreateTodo);
