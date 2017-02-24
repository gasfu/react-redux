import React from 'react';
import CardsTeam from './cards-teams.jsx'

class Teams extends React.Component {
	constructor(props) {
		super(props);
		this.teams = new Array();
	}

	render (props) {
		console.log(this.props.teams)
		let html = (team) => <CardsTeam image={team.coat_of_arms}>{team.name}</CardsTeam>;
		return <ul className="row">{ this.props.teams.map(html) }</ul>;
	}
}

export default Teams;