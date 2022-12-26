import React from 'react';

const Notes = (props) => (
	<table>
		<tbody>
			{props.users.length > 0 ? (
				props.users.map((user) => (
					<div className='grid'>
						<div
							className='old-note'
							key={user.id}
						>
							<div className='flex'>
								<p>{user.name}</p>
								<hr />
								<p>{user.username}</p>
								<div className='buttons'>
									<button className='muted-button edit'>
										Edit
									</button>
									<button className='button muted-button'>
										Delete
									</button>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<tr>
					<td colSpan={3}>No users</td>
				</tr>
			)}
		</tbody>
	</table>
);

export default Notes;
