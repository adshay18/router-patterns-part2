import { Link, useParams } from 'react-router-dom';
import './Color.css';

const Color = ({ colors }) => {
	const { color } = useParams();
	let colorVal;
	for (let c of colors) {
		if (c.name === color) {
			colorVal = c.value;
		}
	}
	return (
		<div className="Color" style={{ backgroundColor: colorVal }}>
			<p>THIS IS {color.toUpperCase()}</p>
			<p>WOW... so cool</p>
			<Link to="/colors">Pick a different one already...</Link>
		</div>
	);
};

export default Color;
