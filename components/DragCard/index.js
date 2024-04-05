import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { GripVertical } from "lucide-react";
import { Draggable } from "@hello-pangea/dnd";
import { getFirstAndLastName } from "@/lib/utils";
import { Button } from "../ui/button";
const DragCard = ({ name, speciality, data, index }) => {
  return (
    <Draggable draggableId={name} index={index}>
      {(provided) => (
        <Card
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          role="button"
          className=" w-[75px] lg:w-[200px] mx-auto p-0"
        >
          <CardHeader className="p-2 px-2 md:px-4 ">
            <CardTitle
              className={
                "text-xs sm:text-sm md:text-base lg:text-lg flex items-center justify-between"
              }
            >
              <HoverCard>
                <HoverCardTrigger className="text-clip  cursor-pointer">
                  {getFirstAndLastName(name)}{" "}
                </HoverCardTrigger>
                <HoverCardContent className="text-sm cursor-default">
                  <h1 className="text-base font-semibold cursor-text">
                    {name}
                  </h1>
                  <p className="font-light tracking-wide  cursor-text">
                    {speciality} -{" "}
                    <span className="font-semibold">RS. Fatmawati</span>
                  </p>
                  <div className="flex gap-2 ">
                    <Button className="mt-2 h-[40px]">View Profile</Button>
                    <Button className="mt-2 h-[40px] ">Call</Button>
                  </div>
                </HoverCardContent>
              </HoverCard>
              {/* <div className="h-[44px] flex items-center justify-end">
                <GripVertical className="h-4 items-end" />
              </div> */}
            </CardTitle>{" "}
            <CardDescription
              className={
                "text-xs sm:text-sm md:text-base lg:text-sm sm:block hidden leading-tight"
              }
            >
              {speciality}
            </CardDescription>
          </CardHeader>
        </Card>
      )}
    </Draggable>
  );
  // return (
  //   <Draggable draggableId={name} index={index}>
  //     {(provided) => (
  //       <Card
  //         {...provided.draggableProps}
  //         {...provided.dragHandleProps}
  //         ref={provided.innerRef}
  //         role="button"
  //         className=" w-[120px] lg:w-[200px] mx-auto p-0"
  //       >
  //         <CardHeader className="p-0 py-1 px-2">
  //           <CardTitle className={"text-xs sm:text-sm md:text-base lg:text-lg"}>
  //             {getFirstAndLastName(name)}
  //           </CardTitle>{" "}
  //           <CardDescription
  //             className={
  //               "text-xs sm:text-sm md:text-base lg:text-lg lg:visible hidden"
  //             }
  //           >
  //             {speciality}
  //           </CardDescription>
  //         </CardHeader>
  //       </Card>
  //     )}
  //   </Draggable>
  // );
};

export default DragCard;
