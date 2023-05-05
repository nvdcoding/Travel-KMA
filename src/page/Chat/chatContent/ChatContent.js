import React, { createRef, useEffect, useState } from "react";

import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import io, {Socket} from 'socket.io-client';
import { socketInstance } from '../../../utils/SocketInstance';
export default function ChatContent() {

  const messagesEndRef = createRef(null);
  const chatItms = [
    // {
    //   image:
    //     "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    //   type: "",
    //   msg: "Hi Tim, How are you?",
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    //   type: "other",
    //   msg: "I am fine.",
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    //   type: "other",
    //   msg: "What about you?",
    // },
    // {
    //   image:
    //     "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    //   type: "",
    //   msg: "Awesome these days.",
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    //   type: "other",
    //   msg: "Finally. What's the plan?",
    // },
    // {
    //   image:
    //     "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    //   type: "",
    //   msg: "what plan mate?",
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
    //   type: "other",
    //   msg: "I'm taliking about the tutorial",
    // },
  ];
  const [chat, setChat] = useState(chatItms);
  const [msg, setMsg] = useState([]);
  const [socket, setSocket] = useState(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleChat = (messageSend) => {
      if (messageSend !== "") {
       if ( socketInstance.getInstance()) {
         socketInstance.getInstance().emit('message', messageSend);
      }
      const newChat = {
        type: "",
        msg: msg,
        image:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvietotaku.com%2Fone-piece-suc-manh-moi-cua-luffy-se-xuat-hien-trong-phan-phim-sap-toi&psig=AOvVaw07ZN0DtfizzKu-DOG1Rcvi&ust=1683365614472000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiy2N3v3f4CFQAAAAAdAAAAABAE",
      };
      // setChat((chatItms) => [...chatItms, newChat]);
      scrollToBottom();
      setMsg("");
    }
  };

  useEffect(() => {
      socketInstance.getInstance().on("hehe", (message) => {
      const data = {
        image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvietotaku.com%2Fone-piece-suc-manh-moi-cua-luffy-se-xuat-hien-trong-phan-phim-sap-toi&psig=AOvVaw07ZN0DtfizzKu-DOG1Rcvi&ust=1683365614472000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOiy2N3v3f4CFQAAAAAdAAAAABAE",
        type: "",
        msg: message,
      };
      setChat((chatItms) => [...chatItms, data]);
      });
  }, [chatItms.length]);

  const messageListener = (message) => {
    setMsg([...msg, message])
  }
  const onStateChange = (e) => {
    setMsg(e.target.value);
  };
  const handleSendMessage = (message) => {
    if (socket) {
      socket.emit('message', message);
    }
  };

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            <Avatar
              isOnline="active"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            />
            <p>Tim Hover</p>
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
      <div className="content__body">
        <div className="chat__items">
          {chat.map((itm, index) => {
            return (
              <ChatItem
                animationDelay={index + 2}
                key={index}
                user={itm.type ? itm.type : "me"}
                msg={itm.msg}
                image={itm.image}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <button className="addFiles">
            <i className="fa fa-plus"></i>
          </button>
          <input
            type="text"
            placeholder="Type a message here"
            onChange={onStateChange}
            value={msg}
          />
          <button className="btnSendMsg" id="sendMsgBtn" onClick={e => handleChat(msg)}>
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
