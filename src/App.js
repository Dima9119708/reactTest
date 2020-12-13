import Client from "./components/client/Client";
import Applicants from "./components/applicants/Applicants";
import JsonData from "./components/jsonData/JsonData";
import React from "react";


function App() {

  return (
    <div className="App">
      <Client />
      <Applicants />
      <JsonData />
    </div>
  );
}

export default App;
