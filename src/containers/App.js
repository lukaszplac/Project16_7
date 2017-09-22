import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title'
import TodoList from '../components/TodoList'

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
                    }],
            count: 0,
        };
    }

    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data: data, count: count+1}); //ES6 rozumie to jako {data: data}
    }

    removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
	}

	render() {
    return (
        <div className={style.TodoApp}>
            <Title title="Kodilla TodoApp"/>
            <TodoList list={this.state.data} remove={this.removeTodo.bind(this)}/>
        </div>
        );
    }
}

export default App;