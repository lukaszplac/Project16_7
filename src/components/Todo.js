import React from 'react';
import style from './Todo.css';


const Todo = (props) => {
	let i_style = {
		paddingLeft: '5px',
		paddingRight: '5px'
	};
	return <li className={style.Todo}>
				<div className={style.TodoP}>{props.content}</div>
				<div>
					<i className="fa fa-trash" style={i_style} onClick={props.remove}></i>
					<i className="fa fa-info-circle" style={i_style} onClick={props.show}></i>
				</div>
		   </li>
}

export default Todo;