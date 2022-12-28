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
							<button
								onClick={() => {
									props.editRow(user);
								}}
								className='edit-btn'
							>
								{' '}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='edit'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
									/>
								</svg>
							</button>
							<button
								onClick={() => props.deleteUser(user.id)}
								className='button muted-button'
							>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='delete'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
							</button>
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
