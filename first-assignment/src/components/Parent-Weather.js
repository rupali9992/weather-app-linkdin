import React, { useEffect, useState } from 'react';
import Child_Weather from './Child-Weather';


export default function Parent_Weather() {
    var [city, setcity] = useState("");

    function myfun(ev) {
        console.log(ev.target.value);
        setcity(ev.target.value);

    }
  return (
    <div className='container'>
          <h1> Search Weather</h1>
          <input type='text' onBlur={myfun}/>{city}
          <hr />
          <Child_Weather w1={city} />
    </div>
  );
}
