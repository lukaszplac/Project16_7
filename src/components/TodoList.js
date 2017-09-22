import React from 'react';
import style from './TodoList.css';

const TodoList = (props) => {
	let list = props.list.map(item => <li 
			key={item.id} 
			onClick = {() => props.remove(item.id)}>{item.text}</li>);
	return <ul className = {style.TodoList}>{list}</ul>;
}

export default TodoList;