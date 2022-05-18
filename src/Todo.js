import React from "react";

import styled from "styled-components";
import { Actions } from "./App";

export default function Todo({ todoObj, dispatch }) {
  return (
    <Container>
      <div className="container-wrapper">
        <Element>
          <div style={{ overflow: "hidden", width: "90%" }}>
            <Text style={{ width: "90%" }}>{todoObj.data}</Text>
          </div>

          <ButtonContainer>
            <Button
              onClick={() =>
                dispatch({
                  type: Actions.DeleteToDo,
                  payload: { id: todoObj.id },
                })
              }
            >
              🗑️
            </Button>
          </ButtonContainer>
        </Element>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;
const Element = styled.div`
  display: flex;
  //   margin-top: 20px;
  justify-content: center;
  width: 30rem;
  height: 30px;
  border-radius: 6px;
  padding: 10px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  overflow: hidden;
`;

const Text = styled.div`
  padding: 5px;
  text-transform: uppercase;
  max-width: 400px;
  min-width: 200px;
  width: 200px;
`;

const ButtonContainer = styled.div``;
const Button = styled.button`
  //   margin: -1px 0px 5px 100px;
  background-color: transparent;
  padding: 5px;
  &:hover {
    cursor: pointer;
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.1);
    border: 1px solid black;
    background: red;
  }
`;

// <Button
//   onClick={() =>
//     dispatch({
//       type: Actions.ToggleToComplete,
//       payload: { id: todoObj.id },
//     })
//   }
// >
//   ✅ Complete
// </Button>
