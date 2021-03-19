import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
            className="border-2 mt-2"
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
        />
        <button color="primary" className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);