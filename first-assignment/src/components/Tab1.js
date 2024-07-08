import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
export default function Tab1() {
  var [rec, setrec] = useState([]);
  {
    useEffect(() => {
      console.log("useEfetch called-movie");
      fetch(
        "https://api.themoviedb.org/3/tv/airing_today?api_key=7e7e1d6fe5c1515af9ef1f306fadbb9f"
      )
        .then((res) => res.json())
        .then((ans) => {
          console.log(ans);
          setrec(ans.results);
        });
    }, []);
  }
  return (
    <div className="container mt-3">
      <div className="row">
        {rec &&
          rec.length > 0 &&
          rec.map((course) => (
            <Col xs={3}>
              <img
                src={`https://image.tmdb.org/t/p/w500${course.backdrop_path}`}
                className="img-fluid"
              />
              <h5 className="text-center bolder">{course.title}</h5>
            </Col>
          ))}
      </div>
    </div>
  );
}
