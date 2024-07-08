import React, { useEffect, useState } from "react";


export default function UserRegShow() {
  var [data, setdata] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((res) => res.json())
      .then((res) => {
        setdata(res);
      });
  }, []);
  function deleteData(productid,EV) {
    console.log("test");
    console.log(productid);
    console.log(EV.target.parentNode);
    fetch(`http://localhost:8000/users/${productid}`, {
          method:'DELETE',
        })
          .then((res) => res.json())
          .then(function (res) {
            console.log(res);
            EV.target.parentNode.remove();
            });
  }
  return (
    <div className="container">
      <div className="row mt-3 mb-2">
        {data.map((item) => (
          <div className="col-3">
            <img src={item.img} />
            <p>{item.name}</p>
            <p>{item.email}</p>
            <p>{item.password}</p>
            <button
              onClick={(EV) => {
                deleteData(item.id,EV);
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
