import React from "react";
import Avatar from "../chatList/Avatar";
import { Card } from "antd";
const { Meta } = Card;

export default function ChatItem(props) {
  const chatWith =
    props.profile?.role === "USER" ? props?.chat?.tourGuide : props?.chat?.user;
  console.log(props.message.message, "mu vo dichj");
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
          <a href={`https://ktravel.online/tour/${props.message.message.split(`&*&`)[2]}`} target={"_blank"} rel="noreferrer">
            <Card
              hoverable
              style={{
                width: 240,
              }}
              bordered={true}
              cover={
                <img
                  alt="tour du lịch"
                  src={props.message.message.split(`&*&`)[1]}
                />
              }
            >
              <Meta
                title={`${props.message.message.split(`&*&`)[0]}`}
                description="chuyến du lịch"
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
