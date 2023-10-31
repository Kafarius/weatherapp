import './App.css';
import {useEffect, useState} from "react";
import Main from "./components/Main";
import Weather from "./components/Weather";
import Wind from "./components/Wind";
import { BsFillEmojiSmileFill } from 'react-icons/bs';

function App() {
  const [fetchedData, setFetchedData] = useState();
  const [locationLink, setLocationLink] = useState('');
  const [error, setError] = useState(false);

  useEffect(()=>{
    // let lat = 52.1961472;
    // let lon = 21.0272256;
    let lat, lon;
    const apiKey = '7abcd83f648343abb35c453bc8faa7db';

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              if (position.coords.latitude) {
                  lat = position.coords.latitude;
                  lon = position.coords.longitude;
                  setError(false);
              }
              else {
                  setError(true);
              }
              // console.log('lat:', lat, 'lon:',lon)

            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
            fetch(url)
                .then((response => response.json()))
                .then((data)=>{ setFetchedData(data) });
            setLocationLink(`https://openstreetmap.org/#map=13/${lat}/${lon}`) ;

          }
      )
    }

  }, []);
  // console.log(fetchedData);

  return (
      fetchedData
          ?
          <div className="App">
            <div className='location'>
              <h1>Current Weather Application</h1>
              <a href={locationLink}><h2>{fetchedData.name}({fetchedData.sys.country})</h2></a>
              <i>Lon: {fetchedData.coord.lon}, Lat: {fetchedData.coord.lat}</i>
            </div>
            <div className='conditions'>
              <Weather
                  weather={fetchedData.weather}
                  visibility={fetchedData.visibility}
                  clouds={fetchedData.clouds.all}
              />
              <Main
                  main={fetchedData.main}
              />
              < Wind
                  wind={fetchedData.wind}
                  sunrise={fetchedData.sys.sunrise}
                  sunset={fetchedData.sys.sunrise}
                  dt={fetchedData.dt}
              />
            </div>
          </div>
          :
          <div className='error'>
              <p>Please allow for location check, it is necessary for fetching weather data in Your area and starting the application.  <BsFillEmojiSmileFill/></p>
          </div>
  );
}

export default App;
