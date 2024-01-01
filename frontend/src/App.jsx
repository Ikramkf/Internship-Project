import React from "react";
import Sidenav from "./components/Sidenav";
import Info from "./components/Info";
import Claim from "./components/Claim";
import Main from "./components/Main";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Sidenav />
      <Main />
      <Info />

      <Claim />
      <Table />
    </div>
  );
}
export default App;
