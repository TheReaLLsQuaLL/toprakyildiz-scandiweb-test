import { createAction } from "@reduxjs/toolkit";

export const addProduct = createAction("products/addProduct");
export const removeProduct = createAction("products/removeProduct");

export const incrementVal = createAction("products/increment");
export const decrementVal = createAction("products/decrement");
