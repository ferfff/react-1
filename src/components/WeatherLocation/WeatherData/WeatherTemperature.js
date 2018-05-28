import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

const stateToIconName = weatherState => {
	return weatherState;
}

const getWeatherIcon = weatherState => {
	return (<WeatherIcons className='wicon' name={stateToIconName(weatherState)} size="4x" />);
}

const WeatherTemperature = ({ temperature, weatherState }) => (
	<div className='weatherTemperatureCont'>
		{getWeatherIcon(weatherState)}
		<span className='temperature'>{` ${temperature} `}</span>
		<WeatherIcons name="celsius" size="3x" />
	</div>
);

WeatherTemperature.propTypes = {
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string,
};

export default WeatherTemperature;
