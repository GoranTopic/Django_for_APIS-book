import React, { useReducer, useEffect, useCallback  } from 'react';
import './App.css';

const initialState = {
		list:[],
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
								return { ...state, list: [], isError:true,  } 
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

		const handleFetchList = useCallback(() => {
				dispatcher({ type: 'SET_IS_LOADING' });
				fetch('http://127.0.0.1:8000/api/')
						.then( result => result.json() )
						.then( result => dispatcher({ type:'FETCH_SUCCESS', payload: result }) )
						.catch( () => dispatcher({ type: 'FETCH_ERROR' }) );
		}, []);

		useEffect(() => { handleFetchList(); }, [handleFetchList]);



		return (
				<div className="App">
						<header className="App-header">	
								{ state.isError && <p>Something went wrong =(</p> }
								{ state.isLoading? <p>Loading...</p> :  <List list={state.list} /> }
						</header>
				</div>
		);
}


const List = ({ list }) => {
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
