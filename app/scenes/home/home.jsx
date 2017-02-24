import React from 'react';

import Search from './search.jsx';
import Teams from './teams.jsx';

class Home extends React.Component {
	constructor () {
		super();
		this.state = { header: '' }	
	}

	componentDidMount () {
		this.refs.search.refs.input.addEventListener('keyup', () => this.change());
		this.refs.search.refs.input.focus();
	}

	change () {
		let input = this.refs.search.refs.input;
		this.setState({ header: input.value != '' ? '--top' : '' });
	}

	render () {
		return (
			<section id="home">
				<header className={'home-header ' + this.state.header}>
					<Search ref="search" />
				</header>
				<main>
					<Teams ref="teams" />
				</main>
			</section>			
		);
	}
}

export default Home;