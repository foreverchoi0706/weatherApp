import { createAction } from "@reduxjs/toolkit";

export const up = createAction("UP");

export const down = createAction("DOWN");

const initialState = 0;

const root = function (state = initialState, action) {
  switch (action.type) {
    case up.type:
      return state + 1;
    case down.type:
      console.log(down());
      return state - 1;
    default:
      return state;
  }
};

export default root;
