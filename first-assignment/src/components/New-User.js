// import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import React, { Component } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function NewUser() {
  let navigate = useNavigate();

  // console.log(useForm());
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const myfun = (data) => {
    console.log(data);
    fetch("http://localhost:8000/users", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((value) => console.log(value));
    navigate("/UserRegShow");
  }
  return (
    <div className="container">
      <Row className="mb-3 ms-5">
        <div className="col-6">
          <form onSubmit={handleSubmit(myfun)}>
            <h2 className="text-center">Register Form</h2>

            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
            <br />
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              {...register("lastname", { required: true })}
            />
            {errors.lastname && <span>This field is required</span>}
            <br />
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              {...register("email", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.email && <span>This field is required</span>}
            <br />
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
            <br />
            <label>Image</label>
            <input
              type="img"
              className="form-control"
              placeholder="Image Path"
              {...register("img", { required: true })}
            />
            {errors.img && <span>This field is required</span>}
            <br />
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
            <br />
            <p className="forgot-password text-right">
              Already registered <Link to="Login">Login</Link>
            </p>
          </form>
        </div>
      </Row>
    </div>
  );
}
