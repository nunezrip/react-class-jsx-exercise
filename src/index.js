import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root');
// const Message = props => <div>{props.children}</div>;
// const helloWorld = <div>Hello World</div>;
// const element = (
// 	<div className="container">
// 		<Message>Hello World</Message>
// 		<Message>Goodby Cruel World</Message>
// 	</div>
// );

const book = (
	<div className="book">
		<div className="title">The Title</div>
		<div className="author">The Author</div>
		<ul className="stats">
			<li className="rating">5 stars</li>
			<li className="isbn">12-345678-910</li>
		</ul>
	</div>
);

function NewJSXCall() {
	return React.createElement(
		'div',
		{},
		React.createElement('div', { className: 'title', children: ['The Title'] }),
		React.createElement('div', { className: 'author', children: ['The Author'] }),
		React.createElement(
			'ul',
			{ className: 'stats' },
			React.createElement('li', { className: 'rating', children: ['5 Starts'] }),
			React.createElement('li', { className: 'isbn', children: ['12-345678-910'] }),
		),
	);
}

ReactDOM.render(book, rootElement);

// 6) Return the appropiate JSX from the following component so that when username is undefined or null, it renders 'Not logged in'. When username is a string, render "Hello, username".

// function Greeting() {
// Try all of these variations
// var username = 'root';
// var username = undefined;
// var username = null;
// var username = false;
//
// Fill in the rest:
//
// return(...)
// }
