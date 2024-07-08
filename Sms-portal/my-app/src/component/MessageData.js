import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function MessageData() {
  var [rec, setrec] = useState([]);
  let ans = useSelector((state) => state.DataTransfer.value);
  

  useEffect(() => {
    if (ans != "") {
      fetch(`http://localhost:9000/Messages?libid=${ans}`)
        .then((res) => res.json())
        .then((ans) => {
          console.log(ans);
          setrec(ans);
        });
    }
  }, [ans]);

  return (
    <div className="messagedata">
      <h4 className="smsdata-head">Messages</h4>
      <ul>
        {rec && rec.length > 0 && rec.map((obj) => <li>{obj.message}</li>)}
      </ul>
    </div>
  );
}
