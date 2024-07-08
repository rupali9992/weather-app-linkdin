import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { shareGroupdata } from "../redux/Slice/dataTransferSlice";

export default function GroupData() {
  var [groupname, setgroupname] = useState([]);
  let Dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:9000/Groups")
      .then((res) => res.json())
      .then((ans) => {
        console.log(ans);
        setgroupname(ans);
      });
  }, []);

  function myfun(id) {
    console.log(id);
    Dispatch(shareGroupdata(id));
  }
  return (
    <div className="messagedata">
      <h4 className="smsdata-head">Groups</h4>
      <ul>
        {" "}
        {groupname &&
          groupname.length > 0 &&
          groupname.map((obj) => (
            <li
              onClick={() => {
                myfun(obj.id)
              }}
            >
              {obj.GroupName}
            </li>
          ))}
      </ul>
    </div>
  );
}
