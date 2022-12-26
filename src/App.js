import React, { useState } from 'react';
import Notes from './notes/Notes';

const App = () => {
	const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	];

	const [users, setUsers] = useState(usersData);

	return (
		<div className='container'>
			<h1>CRUD App with Hooks</h1>
			<div className='title'>
				<h2>Take a Note...</h2>
				<h2>Recent Notes</h2>
			</div>
			<div className='flex-row'>
				<div className='new-note'>
					<h3>Title</h3>
					<hr />
					<h3>Note Content</h3>
				</div>
				<Notes users={users} />
			</div>
		</div>
	);
};

export default App;
