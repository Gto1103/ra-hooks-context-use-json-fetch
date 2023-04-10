import './App.css';
import JsonFetch from './components/JsonFetch';

const states = ['data','loading','error'];
const url = 'http://localhost:7070/';
const opts = { method: 'GET'}

function App() {
	return (
		<div className=  "App">
			{states.length && states.map((item)=>(<JsonFetch key={item} item={item} url={url+item} opts={opts} />))}
		</div>
	);
}

export default App;
