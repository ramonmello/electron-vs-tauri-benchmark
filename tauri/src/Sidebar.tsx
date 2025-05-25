import React from "react";
import { useDnD } from "./DnDContext";

export default () => {
  const [_, setType] = useDnD();

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    if (setType) setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="border-r border-[#eee] p-[15px_10px] text-xs bg-[#fcfcfc]">
      <div className="mb-2.5">
        You can drag these nodes to the pane on the right.
      </div>
      <div
        className="h-5 p-1 border border-[#0041d0] rounded mb-2.5 flex justify-center items-center cursor-grab"
        onDragStart={(event) => onDragStart(event, "input")}
        draggable
      >
        Input Node
      </div>
      <div
        className="h-5 p-1 border border-[#1a192b] rounded mb-2.5 flex justify-center items-center cursor-grab"
        onDragStart={(event) => onDragStart(event, "default")}
        draggable
      >
        Default Node
      </div>
      <div
        className="h-5 p-1 border border-[#ff0072] rounded mb-2.5 flex justify-center items-center cursor-grab"
        onDragStart={(event) => onDragStart(event, "output")}
        draggable
      >
        Output Node
      </div>
    </aside>
  );
};
