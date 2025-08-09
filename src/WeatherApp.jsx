import SearchBox from './SearchBox';
import InfoBox from "./InfoBox";
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWatherInfo] = useState({
        city:"Delhi",
        feelsLike:32.75,
        temp: 35.38,
        tempMin :35.38,
        tempMax:35.38,
        humidity: 12,
        weather:"Clear",
    });

    let updateInfo = (newInfo) =>{
        setWatherInfo(newInfo);
    }
    
    return(
        <div style={{textAlign:"center"}}>
            <h1>weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
            
           
    );
}