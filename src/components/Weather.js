import React from 'react';
import classes from '../css/Weather.module.css'

const Weather = (props) => {
    return (
        <div className={classes.weather}>
            <ul>
                {/*<li>Temperature: <span className='info'>{props.main.temp} <TbTemperatureCelsius/></span></li>*/}
                <li><img src={`https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} /></li>
                <div className='infoBox'>
                    <li style={{color: '#b7f3d5', fontWeight: "bold"}}>{props.weather[0].main}</li>
                    <li><i><span className='info'>{props.weather[0].description}</span></i></li>
                </div>
                <div className='infoBox'>
                    <li>Visibility: <span className='info'>{props.visibility}</span></li>
                    <li>Clouds: <span className='info'>{props.clouds}</span></li>
                </div>
            </ul>
        </div>
    );
};

export default Weather;