import React from 'react';

class Search extends React.Component {
	render () {
		return (
			<form className='form'>
				<div className='input-group'>
					<input ref="input" className="input" type='text' placeholder='Encontre um time' />
					<span className="icon icon-search"></span>
				</div>
			</form>
		);
	}
}

export default Search;