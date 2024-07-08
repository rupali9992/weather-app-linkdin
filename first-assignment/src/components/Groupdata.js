import React, {useEffect,useState} from 'react';

export default function Groupdata() {
  var [data, setdata] = useState("");
  useEffect(() => {
    fetch("http://Localhost:9000/Groups")
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        setdata(value);
      });
  }, []);
  return (
    <div className="container ">
      <li className="form-control">
        {data &&
          data.length > 0 &&
          data.map((rec) => <option value={rec.id}>{rec.groupname}</option>)}
      </li>

      <br />
    </div>
  );
}
