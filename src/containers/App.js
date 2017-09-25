import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title'
import TodoList from '../components/TodoList'
import TodoForm from '../components/TodoForm'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: [ {
                    id: 1,
                    text: 'clean room clean room clean roomclean room clean room clean room clean roomclean roomclean room clean room'
                    },
                    {
                    id: 2,
                    text: 'wash the dishes wash the dishes wash the dishes wash the disheswash the disheswash the dishes wash the dishes'
                    },
                    {
                    id: 3,
                    text: 'feed my cat feed my catfeed my cat feed my catfeed my catfeed my cat feed my cat feed my catfeed my catfeed my cat'
                    },
                    {
                    id: 4,
                    text: 'feed my dog feed my catfeed my catfeed my catfeed my cat v vfeed my cat feed my cat feed my catvfeed my cat feed my cat'
                    }],
            textToShow: "No task to show"
        };
    }

    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data: data}); //ES6 rozumie to jako {data: data}
    }

    removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
	}

    showContent(id) {
        let text = "No task to show";
        this.state.data.forEach(task => {
            if (task.id === id) {
                text = task.text;
            }
        })
        this.setState({
            textToShow: text
            })
    }

	render() {
    return (
        <div className={style.App}>
            <Title title="Kodilla TodoApp"/>
            <div className={style.TodoApp}>
                <div className={style.col1}>
                    <TodoForm add={this.addTodo.bind(this)}/>
                </div>
                <div className={style.col2}>
                    <TodoList list={this.state.data} remove={this.removeTodo.bind(this)} show={this.showContent.bind(this)}/>
                </div>
                <div className={style.col3}>
                    <h2>Task details:</h2>
                    <p>{this.state.textToShow}</p>
                </div>
            </div>
        </div>
        );
    }
}

export default App;