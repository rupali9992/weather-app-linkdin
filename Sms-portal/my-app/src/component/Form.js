import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

export default function Form() {
  let ans = useSelector((state) => state.FormSlice.value);
  var [rec, setrec] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
 
  useEffect(() => {
    if (ans!== '') {
      fetch(`http://localhost:9000/Contacts?id=${ans}`)
        .then((res) => res.json())
        .then((ans) => {
          console.log(ans, "data fetch");
          setrec(ans);
        });
    }
    }, [ans]);
  
  const onSubmit = (data) => {
    if (data != "") {
      console.log(data);
      document.querySelector(".para").innerHTML = "Form has been Submitted";
    } else if (data == "") {
      document.querySelector(".para").innerHTML = " Please fulfill this form";
    }
  };

  return (
    <div className="container">
    {ans}
     
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              {...register("Name", { required: true })}
            />
            {errors.Name?.type === "required" && (
              <p role="alert">Name is required</p>
            )}
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Mobile"
              {...register("Mobile", { required: true })}
            />
            {errors.Mobile?.type === "required" && (
              <p role="alert">Mobile number is required</p>
            )}
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Email"
              {...register("Email", { required: true })}
            />
            {errors.Email?.type === "required" && (
              <p role="alert">Email is required</p>
            )}
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Message"
              {...register("Message", { required: true })}
            />
            {errors.Message?.type === "required" && (
              <p role="alert">Message is required</p>
            )}
            <br />
            <button className="btn btn-success text-center">Add</button>
            <p className="para"></p>
          </form>
        
    </div>
  );
}
