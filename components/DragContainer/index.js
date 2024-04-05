import DragCard from "../DragCard";
import { TableCell } from "../ui/table";
import { Draggable, Droppable } from "@hello-pangea/dnd";

const DragContainer = ({ data, id, title, index, day }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <TableCell ref={provided.innerRef}>
          <div {...provided.dragHandleProps} className="gap-2 flex flex-col  ">
            <p className="text-center font-bold  ">{title}</p>
            <p className="text-center font-base  border-x-4">{day}</p>
            <Droppable droppableId={id} type="card">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="gap-2 flex flex-col "
                >
                  {Array.isArray(data) &&
                    data.map((doctor, index) => (
                      <DragCard
                        key={doctor.id}
                        name={doctor.name}
                        speciality={doctor.speciality}
                        data={doctor}
                        index={index}
                      />
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </TableCell>
      )}
    </Draggable>
  );
};
export default DragContainer;
