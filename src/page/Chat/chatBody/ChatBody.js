import React, { useEffect } from "react";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";

export default function ChatBody() {
  useEffect(() => {}, []);
  return (
    <div className="main__chatbody">
      <ChatList />
      <ChatContent />
    </div>
  );
}
