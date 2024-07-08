import React, { useEffect, useState } from "react";

export default function Category() {
  var [cat, setcat] = useState([]);
  useEffect(() => {
    console.log("useEffect Called - Category");
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setcat(json);
      })
  }, []);

  return (
    <div>
      <p>
        Category component
        <ul>
          {cat && cat.length > 0 && cat.map((values) => <li>{values}</li>)}
        </ul>
      </p>
    </div>
  );
}
