import React, { useState } from 'react';
import Notes from './notes/Notes';
import AddUserForm from './forms/AddUserForm';
import EditNoteForm from './forms/EditNoteForm';

const App = () => {
	const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	];

	const initialFormState = { id: null, name: '', username: '' };

	// Setting state
	const [users, setUsers] = useState(usersData);
	const [currentUser, setCurrentUser] = useState(initialFormState);
	const [editing, setEditing] = useState(false);

	// This function will take a user object as a parameter, and add them to the users array of objects. The ...users code ensures that all the previous users remain in the array.

	// CRUD Operations
	const addUser = (user) => {
		user.id = users.length + 1;
		setUsers([...users, user]);
	};

	const deleteUser = (id) => {
		setEditing(false);

		setUsers(users.filter((user) => user.id !== id));
	};

	const updateUser = (id, updatedUser) => {
		setEditing(false);

		setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
	};

	const editRow = (user) => {
		setEditing(true);

		setCurrentUser({
			id: user.id,
			name: user.name,
			username: user.username,
		});
	};

	return (
		<div className='container'>
			<header>CRUD App with Hooks</header>
			<div className='title'>
				<h2>Take a Note...</h2>
				<h2 className='h2'>Recent Notes</h2>
			</div>
			<div className='notes'>
				<div className='new-note'>
					<p>Title</p>
					<hr />
					<p>Note Content</p>
				</div>
				<AddUserForm addUser={addUser} />
				<Notes users={users} />
			</div>
		</div>
	);
};

export default App;
