import React from 'react';
import style from './TodoList.css';
import Todo from './Todo';

const TodoList = (props) => {
	let list = props.list.map(item => 
				<Todo key={item.id} content={item.text} remove={() => props.remove(item.id)}/>)
	return <ul className = {style.TodoList}>
				{list}		
			</ul>;
}

export default TodoList;