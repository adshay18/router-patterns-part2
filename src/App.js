import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ColorIndex from './ColorIndex';
import Color from './Color';
import NewColorForm from './NewColorForm';

function App({ colors }) {
	const [ colorList, setColorList ] = useState(colors);

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

App.defaultProps = {
	colors: [
		{ name: 'red', value: 'rgb(255, 0, 0)' },
		{ name: 'green', value: 'rgb(0, 255, 0)' },
		{ name: 'blue', value: 'rgb(0, 0, 255)' }
	]
};
export default App;
