import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Button, Card, CardBody } from "@heroui/react";

export default function Draggable(props: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: props.id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <Card
      content=""
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <CardBody className="text-red-600">
        <p>I'm a draggable</p>
      </CardBody>
    </Card>
  );
}
