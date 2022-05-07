import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './NewColorForm.css';

const NewColorForm = ({ addColor }) => {
	const INITIAL_ENTRY = { name: '', value: '#0000FF' };
	const [ formData, setFormData ] = useState(INITIAL_ENTRY);
	const history = useHistory();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addColor(formData);
		setFormData(INITIAL_ENTRY);
		history.push('/colors');
	};

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value
		}));
	};

	return (
		<div className="NewColorForm">
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Name: </label>
					<input id="name" name="name" value={formData.name} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor="value">Value: </label>
					<input type="color" id="value" name="value" value={formData.value} onChange={handleChange} />
				</div>
				<button className="button-5">Add Color</button>

				<br />
				<Link to="/colors">Go Back</Link>
			</form>
		</div>
	);
};

export default NewColorForm;
