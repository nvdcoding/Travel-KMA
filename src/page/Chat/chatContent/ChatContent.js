import React, { createRef, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { sendGet } from "../../../utils/api";
import { AppContext } from "../../../Context/AppContext";

import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default function ChatContent({ messages, setMessages, socket, users }) {
  const { chatId } = useParams();
  const { infoUser } = useContext(AppContext);
  const chat = users.find((e) => {
    const id = infoUser.role === "USER" ? e.tourGuideId : e.userId;
    if (id == chatId) {
      return true;
    }
    return false;
  });

  console.log(chat, "user chat cung");

  const messagesEndRef = createRef(null);

  const [msg, setMsg] = useState("");
  const scrollToBottom = () => {
    messagesEndRef.current.scroll({
      top: messagesEndRef.current.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleChat = () => {
    if (msg !== "") {
      const newChat = {
        message: msg,
        sender: infoUser.role,
      };
      setMessages((chatItms) => [...chatItms, newChat]);
      setMsg("");

      socket.emit("send-message", {
        chatId,
        content: newChat.message,
        isSuggest: false,
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const onStateChange = (e) => {
    setMsg(e.target.value);
  };
  const handleSendMessage = (message) => {
    if (socket) {
      socket.emit("message", message);
    }
  };

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar isOnline="active" image={infoUser?.avatar} />
            <p>{infoUser?.username}</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings">
            <button className="btn-nobg">
              <i className="fa fa-cog"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="content__body" ref={messagesEndRef}>
        <div className="chat__items">
          {messages.map((itm, index) => {
            return (
              <ChatItem
                animationDelay={index + 1}
                key={index}
                sender={itm.sender || "USER"}
                message={itm}
                profile={infoUser}
                chat={chat}
              />
            );
          })}
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Gửi lời chào..."
            onChange={onStateChange}
            value={msg}
          />
          <button
            className="btnSendMsg"
            id="sendMsgBtn"
            onClick={(e) => handleChat(msg)}
          >
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
