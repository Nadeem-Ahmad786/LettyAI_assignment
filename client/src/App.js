import React from "react";
import {BrowserRouter , Routes, Route} from "react-router-dom";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";

function App() {
  return (
    <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route
          path="/:feedId"
          element={<Page2 />}
        />
      </Routes>
    </main>
  </BrowserRouter>
  );
}

export default App;
