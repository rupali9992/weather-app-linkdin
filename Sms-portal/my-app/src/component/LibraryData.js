import React, { useEffect, useState } from "react";
import {  useDispatch } from "react-redux";
import { sharedata } from "../redux/Slice/dataTransferSlice";
export default function LibraryData() {
    var [libname, setlibname] = useState([]);
    
    let Dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:9000/Libraries")
      .then((res) => res.json())
      .then((ans) => {
        console.log(ans);
        setlibname(ans);
      });
  }, []);
    function myfun(libid) {
        console.log(libid);
        Dispatch(sharedata(libid));
    }
  return (
    <div className="messagedata">
      <h4 className="smsdata-head">Libraries</h4>
      <ul>
        {libname &&
          libname.length > 0 &&
          libname.map((obj) => (
            <li
              onClick={() => {
                myfun(obj.id);
              }}
            >
              {obj.libName}
            </li>
          ))}
      </ul>
    </div>
  );
}
