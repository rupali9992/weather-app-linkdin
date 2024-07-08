import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
export default function ContactSmaple() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (value) => {
    console.log(value);
    if (value != "") {
      fetch("http://localhost:9000/Contacts", {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((ans) => {
          console.log(ans);
        });
    }

    document.querySelector(".para").innerHTML = "form submitted";
  };

  var [group, setgroup] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/Groups")
      .then((res) => res.json())
      .then((ans) => {
        console.log(ans);
        setgroup(ans);
      });
  }, []);

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <select
          className="form-control"
          {...register("Groupid", { required: true })}
        >
          <option>please select Library</option>

          {group &&
            group.length > 0 &&
            group.map((obj) => <option value={obj.id}>{obj.GroupName}</option>)}
        </select>

        <br />

        <input
          type="text"
          className="form-control"
          placeholder=" Name"
          {...register("Name", { required: true })}
        />
        {errors.Name?.type === "required" && (
          <p role="alert"> name is required</p>
        )}
        <br />
        <input
          type="text"
          className="form-control"
          placeholder=" Mobile"
          {...register("Mobile", { required: true })}
        />
        {errors.Mobile?.type === "required" && (
          <p role="alert"> Mobile Number is required</p>
        )}

        <br />
        <input
          type="text"
          className="form-control"
          placeholder=" Email"
          {...register("Email", { required: true })}
        />
        {errors.Email?.type === "required" && (
          <p role="alert"> Email is required</p>
        )}
        <br />
        <button className="btn btn-primary">Add</button>
        <br />
        <hr />
        <p className="para"></p>
      </form>
    </div>
  );
}
