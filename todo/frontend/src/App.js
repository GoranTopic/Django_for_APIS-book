import React, { useReducer } from 'react';
import './App.css';

const initialState = {
		list:[
				{
						"id":1,
						"title":"1st todo",
						"body":"Learn Django properly"
				},
				{
						"id":2,
						"title":"Second item",
						"body":"Learn Python ",
				},
				{
						"id":3,
						"title":"Learn HTTP",
						"body":"It's important",
				}
		],
		isError: false,
		isLoading: false,
}


function App() {
		
		const reducer = (state, action) => {
				switch(action.type){
						case 'SET_LIST':
								return { list: action.payload } 
						case 'REMOVE_ITEM':
								return { list: state.list.filter( item => (item.id === action.payload.id)? true : false  ) }
						default:
								console.log("No type found")
								throw new Error()
				}
		}
		const [ state, dispatcher ] = useReducer(reducer, initialState);


		return (
				<div className="App">
						<header className="App-header">
								{ state.list.map(item => (
										<div key={item.id}>
												<h1>{item.title}</h1>
												<p>{item.body}</p>
										</div>
								))}
						</header>
				</div>
		);
}

export default App;
