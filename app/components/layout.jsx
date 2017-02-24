import React from 'react';
import Navigation from './navigation/navigation.jsx';

class Layout extends React.Component {
	
	render () {
		return ( 
			<seciton>
				<Navigation />
				<main className='container main'>
					{this.props.children}
				</main>
			</seciton>
		);
	}
}

export default Layout;