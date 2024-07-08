import React from 'react';

import Fetch_Movie_Child from './Fetch_Movie_Child';
export default function Fetch_movie_data() {

  return (
    <div className="container">
      <h1 className="text-center">Movies</h1>
      <hr/>
      <Fetch_Movie_Child />
      
      <hr />
  
    </div>
  );
}
