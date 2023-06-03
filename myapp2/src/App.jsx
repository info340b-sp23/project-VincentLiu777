import React from "react";
import router from "./router";
import { useRoutes } from "react-router-dom";

function App(props) {
  document.title="Coffee Ground"
  const outlet = useRoutes(router);
  return <div className="App">{outlet}</div>;
}

export default App;
