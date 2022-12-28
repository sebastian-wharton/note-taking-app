import React from 'react';

const Notes = (props) => (
	<table>
			{props.users.length > 0 ? (
				props.users.map((user) => (
					<div
						className='note'
						key={user.id}
					>
						<div className='note-content'>
							<p>{user.name}</p>
							<hr />
							<p>{user.username}</p>
								<div className='buttons'>
									<button>Edit</button>
									<button>Delete</button>
								</div>
						</div>
					</div>
					
				))
			) : (
				<tr>
					<td colSpan={3}>No users</td>
				</tr>
			)}
	</table>
);

export default Notes;
