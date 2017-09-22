import React from 'react';
import style from './Title.css';

class Title extends React.Component {
	constructor(props) {
		super(props);	
	}

	render() {
		return <h1 className={style.title}>{this.props.title}</h1>;
	}
}

export default Title;