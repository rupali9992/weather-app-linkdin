import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";

export default function Child_Weather(props) {
  var [weather, setweather] = useState({});
  useEffect(() => {
    console.log("useEffect called-Wether");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.w1}&appid=1a986f69ba609f66d0f4f676cb8b807f&units=metric`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setweather(json);
      });
  }, [props.w1]);
  


  return (
    <div className="container">
      <div className="row">
        <Col>
          <p>City: {weather.name}</p>
          <p>Timezone: {weather.timezone}</p>
          {weather.main && <p>Temperature: {weather.main.temp}°C</p>}
          {weather.weather && (
            <p>Description: {weather.weather[0].description}</p>
          )}


        </Col>
      </div>
    </div>
  );
}
