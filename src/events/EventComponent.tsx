import React from "react";

const EventComponent: React.FC = () => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log('im dragged', event);
  }

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>Drag me!</div>
    </div>
  )
}

export default EventComponent;