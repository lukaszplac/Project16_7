import React from 'react';
import style from './Todo.css';


const Todo = (props) => {
	return <li className={style.Todo}>{props.content}</li>
}

export default Todo;