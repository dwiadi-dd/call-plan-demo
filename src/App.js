import React from "react";
import Header from "@/components/Header";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { daylist } from "@/lib/utils";
function App() {
  return (
    <div className="bg-slate-100 min-h-screen flex">
      <div className="mx-20 my-20  w-full rounded-lg">
        <h1 className="text-3xl font-semibold">Call Plan Management</h1>

        <Header />
        <div className="w-9/12 mx-auto mt-10">
          <Table>
            <TableCaption>
              Call plan week 10 for Medical Representative : Wirayuda Senjaya.
            </TableCaption>
            <TableHeader>
              <TableRow>
                {daylist.map((day) => (
                  <TableHead className="text-center">{day}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {Array.from({ length: 5 }, (_, index) => (
                  <TableCell key={index} className="text-center">
                    {index + 20}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="w-52"></div>
      </div>
    </div>
  );
}

export default App;
