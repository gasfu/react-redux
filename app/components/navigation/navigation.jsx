import React from 'react';
import Brand from './brand.jsx'

class Navigation extends React.Component {
	render () {
		return (
			<nav className="nav">
				<Brand />
			</nav>
		);	
	}
}

export default Navigation;