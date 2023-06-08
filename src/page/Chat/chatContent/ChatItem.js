import React from "react";
import Avatar from "../chatList/Avatar";
import { Card } from "antd";
const { Meta } = Card;

export default function ChatItem(props) {
  const chatWith =
    props.profile?.role === "USER" ? props?.chat?.tourGuide : props?.chat?.user;
  console.log(props.message, "mu vo dichj");
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`chat__item ${
        props.sender === props.profile?.role ? "me" : "participant"
      }`}
    >
      {!props.message.isSuggest ? (
        <div
          className={`chat__item__content ${
            props.sender === props.profile?.role
              ? "chat__item__content_me"
              : "chat__item__content_participant"
          }`}
        >
          <div className={`chat__msg`}>{props.message.message}</div>
        </div>
      ) : (
        <div
          className={`${
            props.sender === props.profile?.role
              ? "chat__item__content_me"
              : "chat__item__content_participant"
          }`}
        >
          <a href="#" target={"_blank"}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              bordered={true}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </a>
        </div>
      )}

      <Avatar
        isOnline="active"
        image={
          props.sender === props.profile?.role
            ? props.profile?.avatar
            : chatWith.avatar
        }
      />
    </div>
  );
}
