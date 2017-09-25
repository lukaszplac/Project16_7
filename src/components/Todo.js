import React from 'react';
import style from './Todo.css';


const Todo = (props) => {
	return <li className={style.Todo} onClick={props.remove}>{props.content}</li>
}

export default Todo;