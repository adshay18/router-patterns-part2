import { Link, useParams } from 'react-router-dom';
import './Color.css';

const Color = () => {
	const { color, value } = useParams();
	return (
		<div className="Color" style={{ backgroundColor: value }}>
			<p>THIS IS {color.toUpperCase()}</p>
			<p>WOW... so cool</p>
			<Link to="/colors">Pick a different one already...</Link>
		</div>
	);
};

export default Color;
