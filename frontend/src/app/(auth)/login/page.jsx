"use client";
import { axiosClient } from "@/utils/AxiosClient";
import React, { useState } from "react";

const page = () => {
  const [states, setStates] = useState({
    name: "",
    email: "",
    password: "",
    ac_type: "saving",
  });

  const onChangeHandler = (e) => {
    setStates({ ...states, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    console.log("Submitting:", states);

    try {
      const response = await axiosClient.post("/auth/register", states);

      console.log(response.data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  return (
    <div>
      <div className="h-screen flex items-center justify-center">
        <form className="w-1/2 px-10 py-10 border" onSubmit={onSubmitHandler}>
          <div className="mb-3">
            <input
              type="text"
              className="w-full py-3 px-3 rounded border outline-none"
              name="name"
              value={states.name}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="w-full py-3 px-3 rounded border outline-none"
              name="email"
              value={states.email}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="w-full py-3 px-3 rounded border outline-none"
              name="password"
              value={states.password}
              onChange={onChangeHandler}
              required
            />
          </div>

          <div className="mb-3">
            <select
              name="ac_type"
              className="w-full py-3 px-3 rounded border outline-none"
              value={states.ac_type}
              onChange={onChangeHandler}
              required
            >
              <option value="saving">Saving</option>
              <option value="current">Current</option>
            </select>
          </div>

          <div className="mb-3">
            <button className="w-full py-4 text-center text-lg bg-rose-600 rounded text-white">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
