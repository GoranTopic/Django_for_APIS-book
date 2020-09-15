import React, { useReducer, useEffect  } from 'react';
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
						case 'SET_IS_LOADING':
								return { ...state, IsLoading: true, } 
						case 'FETCH_SUCCESS':
								return { list: action.payload, IsLoading: false, } 
						case 'FETCH_ERROR':
								return { list: [], IsLoading: false, isError:true,  } 
						case 'SET_LIST':
								return { list: action.payload } 
						case 'REMOVE_ITEM':
								return { list: state.list.filter( item => (item.id === action.payload.id)? true : false  ) }
						default:
								console.log("No type found")
								throw new Error()
				}
		}

		// define dispatcher with the reducer 
		const [ state, dispatcher ] = useReducer(reducer, initialState);



		//definie use effecto load up the request 
		useEffect(() => {
				// Set State as loading
				dispatcher({ type: 'SET_IS_LOADING' });
				//fetch from API list
				fetch('http://127.0.0.1:8000/api/')
						.then( res => res.json() )
						.then( res => dispatcher({ type:'FETCH_SUCCESS', payload: res.data }) )
						.catch( () => dispatcher({ type:'FETCH_ERROR'  }))
		}, [])
		

		



		return (
				<div className="App">
						<header className="App-header">	
								{ state.isError && <p>Something went wrong =(</p> }
								{ (state.isLoading)? <p>Loading...</p> :  <List list={state.list} /> }
						</header>
				</div>
		);
}


const List = ({ list, }) => {
		return <>
				{list.map(item => (
						<div key={item.id}>
								<h1>{item.title}</h1>
								<p>{item.body}</p>
						</div>
				))}
		</>

}



export default App;
