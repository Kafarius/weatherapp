import React from 'react';
import classes from '../css/Wind.module.css'
import { WiWindDeg } from 'react-icons/wi';
import {TbTemperatureCelsius} from "react-icons/tb";


const Wind = (props) => {
    return (
        <div className={classes.wind}>
            <ul>
                <div className='infoBox'>
                    <li>Timestamp:</li>
                    <li><span className='info'>{new Date(props.dt*1000).toLocaleDateString('en-GB')}</span></li>
                    <li><span className='info'>{new Date(props.dt*1000).toLocaleTimeString('en-GB')}</span></li>
                </div>

                <div className='infoBox'>
                    <li>Sunrise: <span className='info'>{new Date(props.sunrise*1000).toLocaleTimeString('en-GB')}</span></li>
                    <li>Sunset: <span className='info'>{new Date(props.sunset).toLocaleTimeString('en-GB')}</span></li>
                </div>

                <div className='infoBox'>
                    <li >Wind speed: <span className='info'>{props.wind.speed} m/s</span></li>
                    <li style={{color: '#b7f3d5', fontWeight: "bold", marginBottom: 0}}>Wind direction:</li>
                    <li style={{marginTop: 0}}><span className='info'><WiWindDeg style={{fontSize: 100, transform: `rotate(${props.wind.deg}deg)`}}/></span></li>
                </div>
            </ul>
        </div>
    );
};

export default Wind;