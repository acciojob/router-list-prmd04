import React from "react";
import "./../styles/App.css";
import { Item1 } from "./Item1";
import { Item2 } from "./Item2";
import { Item3 } from "./Item3";
import { Routes, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Item List</h1>
              <ul>
                <li>
                  <NavLink to="item1">Item 1</NavLink>
                </li>
                <li>
                  <NavLink to="item2">Item 2</NavLink>
                </li>
                <li>
                  <NavLink to="item3">Item 3</NavLink>
                </li>
              </ul>
            </div>
          }
        ></Route>
        <Route path="item1" element={<Item1 />}></Route>
        <Route path="item2" element={<Item2 />}></Route>
        <Route path="item3" element={<Item3 />}></Route>
      </Routes>
    </>
  );
};

export default App;
