import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtrainfo from './WeatherExtrainfo';
import './styles.css';

const WeatherData = () => (
	<div className='weatherDataCont'>
		<WeatherTemperature temperature={20} weatherState={'windy'} />
		<WeatherExtrainfo humidity={80} wind={'25 m/s'} />
	</div>
);

export default WeatherData;