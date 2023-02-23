import React from "react";
import "../../assets/css/chat.css";
import Nav from "./nav/Nav";
import ChatBody from "./chatBody/ChatBody";

function App() {
  return (
    <div className="__main">
      <Nav />
      <ChatBody />
    </div>
  );
}

export default App;
