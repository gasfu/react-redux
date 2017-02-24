import React from 'react';

class Brand extends React.Component {
	render () {
		return (
			<a href="/" className='brand'>
				<img className="image" src="/assets/images/cbf_brand.png" alt="Logo da Confederação Brasileira de Futebol (CBF)" />
				#VidaDeBoleiro
			</a>
		);
	}
}

export default Brand;