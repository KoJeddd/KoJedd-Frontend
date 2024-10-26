import React from "react";
import ChatsSelectTopbar from "./ChatsSelectTopbar";

const ChatsSelect = ({ children }) => {
  return (
    <div
      className="h-full overflow-hidden"
      style={{ display: "grid", gridTemplateRows: "auto 1fr" }}
    >
      <ChatsSelectTopbar />
      {children}
    </div>
  );
};

export default ChatsSelect;
