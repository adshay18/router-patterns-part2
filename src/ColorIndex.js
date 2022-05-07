import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const ColorIndex = ({ colors }) => {
	const [ colorList, setColorList ] = useState(colors);
	const addColor = (name, value) => {
		let color = { name, value };
		setColorList([ ...colorList, color ]);
	};

	return (
		<div className="ColorIndex">
			<div className="ColorIndex-header">
				<h2>Welcome to the color factory.</h2>
			</div>
			<div className="ColorIndex-list">
				<p>Please select a color:</p>
				{colorList.map((color) => (
					<Link key={uuid()} to={`/colors/${color.name}/${color.value}`}>
						{color.name}
					</Link>
				))}
			</div>
		</div>
	);
};

ColorIndex.defaultProps = {
	colors: [
		{ name: 'red', value: 'rgb(255, 0, 0)' },
		{ name: 'green', value: 'rgb(0, 255, 0)' },
		{ name: 'blue', value: 'rgb(0, 0, 255)' }
	]
};
export default ColorIndex;
