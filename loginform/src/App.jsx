import { useState } from "react";
import { Login } from "./components/Login";

function App() {
  return (
    <>
      <div className="text-white h-[100vh] flex items-center justify-center bg-cover" >
        <Login />
      </div>
    </>
  );
}

export default App;
