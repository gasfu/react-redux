import React from 'react';

class CardsTeams extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		
		this.image = this.props.image ? this.props.image : '/assets/images/default-card-team.png';

		return (
			<div className="col-md-4">
				<li className="card">
					<img ref="image" className="image" src={ this.image} />
					<div className="description">
						{this.props.children}
					</div>
				</li>
			</div>
		);
	}
}

export default CardsTeams;