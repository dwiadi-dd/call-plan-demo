import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { doctorList, doctorParts, reorder } from "@/lib/utils";
import DragContainer from "../DragContainer";
import { DragDropContext, Droppable } from "@hello-pangea/dnd";

const CallPlanTable = ({ data }) => {
  const [orderedData, setOrderedData] = useState(data);

  useEffect(() => {
    setOrderedData(data);
  }, [data]);

  const onDragEnd = (result) => {
    const { destination, source, type } = result;

    if (!destination) {
      return;
    }

    // if dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // User moves a list
    if (type === "list") {
      const items = reorder(orderedData, source.index, destination.index).map(
        (item, index) => ({ ...item, order: index })
      );

      setOrderedData(items);
    }

    // User moves a card
    if (type === "card") {
      let newOrderedData = [...orderedData];

      // Source and destination list
      const sourceList = newOrderedData.find(
        (list) => list.id === source.droppableId
      );
      const destList = newOrderedData.find(
        (list) => list.id === destination.droppableId
      );

      if (!sourceList || !destList) {
        return;
      }

      // Check if cards exists on the sourceList
      if (!sourceList.data) {
        sourceList.data = [];
      }

      // Check if data exists on the destList
      if (!destList.data) {
        destList.data = [];
      }

      // Moving the card in the same list
      if (source.droppableId === destination.droppableId) {
        const reorderedCards = reorder(
          sourceList.data,
          source.index,
          destination.index
        );

        reorderedCards.forEach((card, idx) => {
          card.order = idx;
        });

        sourceList.data = reorderedCards;

        setOrderedData(newOrderedData);

        // User moves the card to another list
      } else {
        // Remove card from the source list
        const [movedCard] = sourceList.data.splice(source.index, 1);

        // Assign the new listId to the moved card
        movedCard.listId = destination.droppableId;

        // Add card to the destination list
        destList.data.splice(destination.index, 0, movedCard);

        sourceList.data.forEach((card, idx) => {
          card.order = idx;
        });

        // Update the order for each card in the destination list
        destList.data.forEach((card, idx) => {
          card.order = idx;
        });

        setOrderedData(newOrderedData);
      }
    }
  };
  return (
    <div className="  w-[400px] lg:w-9/12 mx-auto mt-4 md:mt-10 ">
      <div className="text-center font-bold bg-slate-200 p-2 rounded-sm">
        MARCH
      </div>
      <Table>
        <TableBody>
          <TableRow>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="list" type="list" direction="horizontal">
                {(provided) => {
                  return (
                    <div
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      className="grid grid-cols-5 gap-4 w-full overflow-x-auto snap-x snap-mandatory"
                    >
                      {data.map((day, index) => (
                        <DragContainer
                          data={day.data}
                          key={day.id}
                          id={day.id}
                          day={day.name}
                          title={index + 20}
                          index={index}
                        />
                      ))}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </DragDropContext>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default CallPlanTable;
