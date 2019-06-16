import React, { Component } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
import todosData from './todosData';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/header';
class App extends Component {
	state = {
		todos: todosData
	};

	handleChange = (id) => {
		let todos = [ ...this.state.todos ];
		todos = todos.map((todo) => {
			if (todo.id === id) {
				todo.completed = !todo.completed;
			}
			return todo;
		});
		this.setState({ todos });
	};

	render() {
		const todoItems = this.state.todos.map((item) => (
			<TodoItem key={item.id} item={item} handleChange={this.handleChange} />
		));
		return (
			<div className="todo-list">
				<Header />;
				{todoItems}
			</div>
		);
	}
}

export default App;
