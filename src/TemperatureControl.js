import React,{useState} from 'react';
export default function TemperatureControl(){
    const[temperature,SetTemperature]=useState(15);
    const[temperatureColour,setTemperatureColour]=useState('cold');
    const increaseTempt=()=>{
        if(temperature>=0&&temperature<=30){
        SetTemperature(temperature+1);
       /* setTemperatureColour('hot');*/
        }
        if(temperature>=15&&temperature<=30){
            setTemperatureColour('hot');
        }
    }
    const decreaseTempt=()=>{
        if(temperature>=0&&temperature<=30){
        SetTemperature(temperature-1);
        /*setTemperatureColour(cold);*/
        }
        if(temperature<=10&&temperature>=0){
            setTemperatureColour('cold');
        }
    }
    return(
        <div>
            <div className={`temperature-display ${temperatureColour}`}>{temperature}°C</div>
        <button onClick={increaseTempt}>+</button>
        <button onClick={decreaseTempt}>-</button>
        </div>
    );
}