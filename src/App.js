import React from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import "./App.css";
import Plate from "./components/plate/Plate";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Home />
      </div>

      <div className="App">
        <Plate />
      </div>
    </DndProvider>
  );
};

export default App;
