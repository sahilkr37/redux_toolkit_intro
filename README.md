# 📘 Redux Toolkit Notes

## 1. Why use React Redux?

In React, if we pass data from one component to another, it becomes messy when the app grows (called prop drilling).  
Redux helps us keep all data in one global store, so any component can access it easily.  
Redux Toolkit makes Redux simpler and less code-heavy.

---

## 2. Create a Store

The store is like a box where we keep all our slices (state + logic).  
We make it using `configureStore`.

👉 Example (`redux/store.js`):

---

## 3. Create a Slice

A slice is like a small piece of state with its own logic (reducers).  
It has:

- **initialState** → starting value of the state
- **reducers** → functions that change the state

👉 Example (`redux/slices/counterSlice.js`):

---

## 4. Connect Store to React App

We wrap our `<App />` inside `<Provider>` so every component can use Redux.

👉 Example (`main.jsx`):

---

## 5. Use Redux in App.jsx

Now we can read state and dispatch actions inside components.

👉 Example (`App.jsx`):

---

## 🔄 Flow in Simple Words

- Make Store → keeps all slices.
- Make Slice → has initial state and logic (reducers).
- Wrap App with Provider → so Redux works in React.
- Use `useSelector` to get value and `useDispatch` to update value.
