import React from "react";
import { useDrag } from "react-dnd";

function Picture({ id, name, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id, name },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <img
      className="ingredients"
      ref={drag}
      src={url}
      width="150px"
      alt={name}
      style={{ border: isDragging ? "5px solid blue" : "0px" }}
    />
  );
}

export default Picture;
