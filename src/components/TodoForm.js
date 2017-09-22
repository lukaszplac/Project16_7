import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			placeholder: "Write new task and press + button"
		}	
	}

	updateTaskText = (event) => {
		this.setState({text: event.target.value});
	}

	submitTask = () => {
		if (this.state.text!="") {
			this.props.add(this.state.text);
		} else {
			this.setState({placeholder: "No task entered. Try again"});
		}
	}

	render() {
		return  <div className={style.TodoForm}>
					<textarea className={style.inp1} rows="5" cols="10" type="textArea" placeholder={this.state.placeholder} onKeyUp={this.updateTaskText}/>
					<button className={style.but1} type="submit" onClick={this.submitTask}>+</button>
				</div>
	}
}

export default TodoForm;