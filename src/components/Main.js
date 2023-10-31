import React from 'react';
import classes from '../css/Main.module.css'
import { TbTemperatureCelsius } from 'react-icons/tb';


const Main = (props) => {
    return (
        <div className={classes.main}>
            <ul>
                <div className='infoBox'>
                    <li>Temperature: <span className='info'>{props.main.temp} <TbTemperatureCelsius/></span></li>
                    <li>Perceived temperature: <span className='info'>{props.main.feels_like} <TbTemperatureCelsius/></span></li>
                    <li>Temperature min: <span className='info'>{props.main.temp_min} <TbTemperatureCelsius/></span></li>
                    <li>Temperature max: <span className='info'>{props.main.temp_max} <TbTemperatureCelsius/></span></li>
                </div>

                <div className='infoBox'>
                    <li>Humidity: <span className='info'>{props.main.humidity} %</span></li>
                    <li>Preassure: <span className='info'>{props.main.pressure} hPa</span></li>
                </div>


            </ul>
        </div>
    );
};

export default Main;