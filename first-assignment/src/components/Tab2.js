import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
export default function Tab2() {
  var [rec, setrec] = useState([]);
  {
    useEffect(() => {
      console.log("useEfetch called-movie");
      fetch(
        "https://api.themoviedb.org/3/tv/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
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
              <p className="text-center">{course.title}</p>
            </Col>
          ))}
      </div>
    </div>
  );
}
