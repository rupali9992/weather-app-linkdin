import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shareMessagedata } from "../redux/Slice/FormSlice";
// import Table from "react-bootstrap/Table";
export default function ContactData() {
  var [rec, setrec] = useState([]);
  let ans = useSelector((state) => state.DataTransfer.value1);
  let Dispatch = useDispatch();
  useEffect(() => {
    if (ans != "") {
      fetch(`http://localhost:9000/Contacts?Groupid=${ans}`)
        .then((res) => res.json())
        .then((ans) => {
          console.log(ans);
          setrec(ans);
        });
    }
  }, [ans]);
  function myfun(contactid) {
    console.log(contactid);
    console.log("working");
    Dispatch(shareMessagedata(contactid));
  }
  return (
    <div className="contactdata">
      <h4 className="smsdata-head">ContactsData</h4>

      <table className="tableOfContact">
        <thead>
          <tr>
            <th>#</th>
            <th> Name</th>
            <th>Mobile</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {rec &&
            rec.length > 0 &&
            rec.map((obj) => (
              <tr>
                <td>1</td>
                <td
                  onClick={() => {
                    myfun(obj.id);
                  }}
                >
                  {obj.Name}
                </td>
                <td>{obj.Mobile}</td>
                <td>{obj.Email}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
