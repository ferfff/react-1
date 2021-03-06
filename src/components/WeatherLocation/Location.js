import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({city}) => (
	<div>
		<h1 className='locationCont'>{city}</h1>
	</div>
);

Location.propTypes = {
	city : PropTypes.string.isRequired,
}
export default Location;