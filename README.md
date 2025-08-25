# 📘 Redux Toolkit Notes (Beginner Friendly)

## 1. Why use React Redux?

In React, if we pass data from one component to another, it becomes messy when the app grows (called prop drilling).  
Redux helps us keep all data in one global store, so any component can access it easily.  
Redux Toolkit makes Redux simpler and less code-heavy.

## 2. Create a Store

The store is like a box where we keep all our slices (state + logic).  
We make it using `configureStore`.  
👉 Example (`redux/store.js`):

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

export const store = configureStore({
reducer: {
counter: counterSlice, // here we keep our slice
},
});

text

## 3. Create a Slice

A slice is like a small piece of state with its own logic (reducers).  
It has:

- **initialState** → starting value of the state
- **reducers** → functions that change the state

👉 Example (`redux/slices/counterSlice.js`):

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
name: "counter",
initialState: 0, // state starts from 0
reducers: {
increment: (state) => state + 1, // increase
decrement: (state) => state - 1, // decrease
},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

text

## 4. Connect Store to React App

We wrap our `<App />` inside `<Provider>` so every component can use Redux.  
👉 Example (`main.jsx`):

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
<Provider store={store}>
<App />
</Provider>
);

text

## 5. Use Redux in App.jsx

Now we can read state and dispatch actions inside components.  
👉 Example (`App.jsx`):

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counterSlice";

function App() {
// useSelector → to read value from store
const count = useSelector((state) => state.counter);

// useDispatch → to call actions (increment/decrement)
const dispatch = useDispatch();

return (
<>

<h1>Hello counter value :- {count}</h1>
<button onClick={() => dispatch(increment())}>Increase</button>
<button onClick={() => dispatch(decrement())}>Decrease</button>
</>
);
}

export default App;

text

## 🔄 Flow in Simple Words

- Make Store → keeps all slices.
- Make Slice → has initial state and logic (reducers).
- Wrap App with Provider → so Redux works in React.
- Use `useSelector` to get value and `useDispatch` to update value.
