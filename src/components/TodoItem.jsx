import React, { Component } from 'react';
import './TodoItem.css';
const completedStyles = {
	fontStyle: 'italic',
	color: 'cdcdcd',
	textDecoration: 'line-through'
};

class TodoItem extends Component {
	render() {
		return (
			<div className="todo-items">
				<input
					type="checkbox"
					checked={this.props.item.completed}
					onChange={() => this.props.handleChange(this.props.item.id)}
				/>
				<a style={this.props.item.completed ? completedStyles : null}>{this.props.item.text}</a>
			</div>
		);
	}
}

export default TodoItem;
