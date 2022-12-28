import React, { useState, useEffect } from 'react';

const EditNoteForm = (props) => {
	const [user, setUser] = useState(props.currentUser);

	useEffect(() => {
		setUser(props.currentUser);
	}, [props]);

	const handleInputChange = (event) => {
		const { name, value } = event.target;

		setUser({ ...user, [name]: value });
	};

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();

				props.updateUser(user.id, user);
			}}
		>
			<input
				type='text'
				name='name'
				className='title-input'
				value={user.name}
				onChange={handleInputChange}
				placeholder='Title'
			/>
			<input
				type='text'
				name='username'
				className='body-input'
				value={user.username}
				onChange={handleInputChange}
				placeholder='Body'
			/>
			<div className='buttons'>
				<button className='update'>Update user</button>
				<button
					onClick={() => props.setEditing(false)}
					className='cancel'
				>
					Cancel
				</button>
			</div>
		</form>
	);
};

export default EditNoteForm;
