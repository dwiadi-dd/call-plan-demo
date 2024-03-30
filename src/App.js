import React from "react";
import Header from "@/components/Header";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen flex">
      <div className="mx-20 my-20  w-full rounded-lg">
        <h1 className="text-3xl font-semibold">Call Plan Management</h1>

        <Header />
        <div className="w-52"></div>
      </div>
    </div>
  );
}

export default App;
