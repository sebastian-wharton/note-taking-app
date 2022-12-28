import React, { useState } from 'react';

const AddUserForm = (props) => {
	const initialFormState = { id: null, name: '', username: '' };
	const [user, setUser] = useState(initialFormState);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
		console.log(event);
	};

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (!user.name || !user.username) return;
				props.addUser(user);
				setUser(initialFormState);
			}}
		>
			<input
				type='text'
				name='name'
			
				value={user.name}
				onChange={handleInputChange}
				placeholder='Title'
			/>
			<hr />
			<input
				type='text'
				name='username'
				className='body-input'
				value={user.username}
				onChange={handleInputChange}
				placeholder='Body'
			/>
			<div className='buttons'>
				<button className='add'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
				</button>
			</div>
		</form>
	);
};

export default AddUserForm;
