import React from "react";
import ComponentContext from "./assets/context/ComponentContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainCont from "./assets/components/MainCont";
function App() {
  return (
    <div id="main-box">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ComponentContext>
                <MainCont />
              </ComponentContext>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
