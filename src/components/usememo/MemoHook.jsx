import React, { useState, useMemo } from "react";
import styled from "styled-components";

const MemoHook = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    // console.log("🚀 ~ file: Memo.jsx ~ line 12 ~ countNumber ~ num", num);
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

  const CheckData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

  return (
    <Wrapper>
      <button onClick={getValue} style={{ backgroundColor: "red" }}>
        Counter
      </button>
      <p> My new number : {CheckData} </p>
      <button onClick={() => setShow(!show)}>
        {show ? "You clicked me" : "Click me plz"}
      </button>
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
`;

export default MemoHook;
