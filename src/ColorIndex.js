import { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const ColorIndex = ({ colors }) => {
	const links = colors.map((color) => (
		<Link key={uuid()} to={`/colors/${color.name}`}>
			{color.name}
		</Link>
	));
	return (
		<div className="ColorIndex">
			<div className="ColorIndex-header">
				<h2>Welcome to the color factory.</h2>
				<Link to="/colors/new">Add a color</Link>
			</div>
			<div className="ColorIndex-list">
				<p>Please select a color:</p>
				{links}
			</div>
		</div>
	);
};

export default ColorIndex;
