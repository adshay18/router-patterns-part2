import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
	const INITIAL_ENTRY = { name: '', value: '#0000FF' };
	const [ formData, setFormData ] = useState(INITIAL_ENTRY);
	const history = useHistory();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addColor(formData);
		setFormData(INITIAL_ENTRY);
		console.log(formData);
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
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name:</label>
				<input id="name" name="name" value={formData.name} onChange={handleChange} />

				<label htmlFor="value">Value: </label>
				<input type="color" id="value" name="value" value={formData.value} onChange={handleChange} />
				<button>Add Color</button>
			</form>
			<Link to="/colors">Go Back</Link>
		</div>
	);
};

export default NewColorForm;
