import React from 'react';

import Search from './search.jsx';
import Teams from './teams.jsx';

import { connect } from 'react-redux';

import { showTeams, cleanTeams } from './../../store/actions/teams-actions.js';
import Http from './../../utils/Http';
import StringUtil from './../../utils/String';

class Home extends React.Component {
	constructor ({dispatch}) {
		super();
		this.state = { header: ''}
		this.dispatch = dispatch;	
	}

	componentDidMount () {
		this.refs.search.refs.input.addEventListener('keyup', () => this.change());
		this.refs.search.refs.input.focus();
	}

	async searchTeams (value) {
		//Request
		let response = await Http.get('/objects/teams.json');
		let teams = JSON.parse(response).teams;
		
		//Filtro
		const filter = (team) => {
			value = StringUtil.stripAccents(value)
			team = StringUtil.stripAccents(team.name);
			return team.indexOf(value) > -1;
		};

		let teamsFilter = Object.values(teams).filter(filter);
		this.dispatch(showTeams(teamsFilter));
		console.log(teamsFilter);
		
	}

	cleanTeams () {
		this.dispatch(cleanTeams());
	}

	change () {
		let input = this.refs.search.refs.input;
		this.setState({ header: input.value != '' ? '--top' : '' });
		input.value != '' ? this.searchTeams(input.value) : this.cleanTeams(); 
	}

	render () {
		return (
			<section id="home">
				<header className={'home-header ' + this.state.header}>
					<Search ref="search" />
				</header>
				<main>
					<Teams ref="teams" teams={ this.props.teams ? this.props.teams : new Array() } />
				</main>
			</section>			
		);
	}
}


const mapStateToProps = function(store) {
  return {
    teams: store.teams
  };
}

export default connect(mapStateToProps)(Home);