// it create a mutable variable which will not re-render the components
// Used to access the DOM element directly

import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const RefHook1 = () => {
  const [userInput, setUserInput] = useState("");
  // const [count, setCount] = useState();
  const count = useRef(0);
  // console.log("🚀 ~ file: RefHook1.jsx ~ line 11 ~ RefHook1 ~ count", count);

  useEffect(() => {
    // setCount(count + 1);
    count.current = count.current + 1;
  });

  return (
    <Wrapper>
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      <p>the number of times comp render:{count.current} </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 2.4rem;

  input {
    min-width: 20rem;
    /* padding: 1rem 0.5rem; */
    color: #000;
    font-size: 2rem;
  }
`;

export default RefHook1;
