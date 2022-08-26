import React from "react";
import { useGlobalContext } from "./components/usecontext/userContext";

const Child = () => {
  // const { name, age } = user;
  const userData = useGlobalContext();
  // console.log("🚀 ~ file: Child.jsx ~ line 8 ~ Child ~ userData", userData);

  return (
    <div>
      Child = My name is {userData.name} and my age is {userData.age}.{" "}
    </div>
  );
};

export default Child;
