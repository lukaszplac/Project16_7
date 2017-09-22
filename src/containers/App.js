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
                    text: 'clean room'
                    },
                    {
                    id: 2,
                    text: 'wash the dishes'
                    },
                    {
                    id: 3,
                    text: 'feed my cat'
                    },
                    {
                    id: 4,
                    text: 'feed my dog'
                    }]
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

	render() {
    return (
        <div>
        <Title title="Kodilla TodoApp"/>
            <div className={style.TodoApp}>
                <div className={style.col1}>
                    <TodoForm add={this.addTodo.bind(this)}/>
                </div>
                <div className={style.col2}>
                    <TodoList list={this.state.data} remove={this.removeTodo.bind(this)}/>
                </div>
            </div>
        </div>
        );
    }
}

export default App;