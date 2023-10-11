// TodoList.js
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handleAddTodo = () => {
    if (this.state.newTodo) {
      this.props.addTodo(this.state.newTodo);
      this.setState({ newTodo: '' });
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
        <ul>
          {this.props.todos.map((todo, index) => (
            <li key={index}>{todo.text}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
