import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ColorIndex from './ColorIndex';
import Color from './Color';
import NewColorForm from './NewColorForm';

function App() {
	const colors = JSON.parse(localStorage.getItem('colors')) || [
		{ name: 'red', value: 'rgb(255, 0, 0)' },
		{ name: 'green', value: 'rgb(0, 255, 0)' },
		{ name: 'blue', value: 'rgb(0, 0, 255)' }
	];
	const [ colorList, setColorList ] = useState(colors);

	useEffect(() => localStorage.setItem('colors', JSON.stringify(colors), [ colors ]));

	const addColor = (color) => {
		setColorList([ ...colorList, color ]);
	};
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/colors">
						<ColorIndex colors={colorList} />
					</Route>
					<Route exact path="/colors/new">
						<NewColorForm addColor={addColor} />
					</Route>
					<Route exact path="/colors/:color">
						<Color colors={colorList} />
					</Route>

					<Redirect to="/colors" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
