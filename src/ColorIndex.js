import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const ColorIndex = ({ colors }) => {
	return (
		<div className="ColorIndex">
			<div className="ColorIndex-header">
				<h2>Welcome to the color factory.</h2>
			</div>
			<div className="ColorIndex-list">
				<p>Please select a color:</p>
				{colors.map((color) => (
					<Link key={uuid()} to={`/colors/${color}`}>
						{color}
					</Link>
				))}
			</div>
		</div>
	);
};

ColorIndex.defaultProps = {
	colors: [ 'red', 'green', 'blue' ]
};
export default ColorIndex;
