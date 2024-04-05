import React from "react";
import Header from "@/components/Header";
import CallPlanTable from "@/components/CallPlanTable";
import { daylist } from "@/lib/utils";

function App() {
  return (
    <div className="bg-slate-100 min-h-screen flex">
      <div className="mx-2 lg:mx-20 my-20  w-full rounded-lg">
        <h1 className="text-base md:text-2xl font-semibold">
          Call Plan Management
        </h1>

        <Header />
        <CallPlanTable data={daylist} />
      </div>
    </div>
  );
}

export default App;
