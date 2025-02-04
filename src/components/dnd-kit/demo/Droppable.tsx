import React from "react";
import { useDroppable } from "@dnd-kit/core";

export default function Droppable(props: any) {
  const { isOver, setNodeRef } = useDroppable({
    id: props.id,
  });

  return (
    <div
      ref={setNodeRef}
      className="h-1/3 w-1/3 bg-gray-200 border border-dashed border-black rounded-lg"
    >
      {props.children}
    </div>
  );
}
