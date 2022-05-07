import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ColorIndex from './ColorIndex';
import Color from './Color';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/colors">
						<ColorIndex />
					</Route>
					<Route exact path="/colors/:color">
						<Color />
					</Route>
					<Redirect to="/colors" />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
