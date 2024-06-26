/* eslint-disable */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { avt, banner } from "../constants/images";

function TourItem(props) {
  function currencyFormat(num) {
    return new Intl.NumberFormat().format(num);
  }
  useEffect(() => {}, []);
  return (
    <>
      <div className="tour-view__item">
        <div className="tour-view__card-img">
          <img
            alt=""
            className="tour-view__img"
            src={
              props?.item?.images[0]?.url
                ? props?.item?.images[0]?.url
                : { banner }
            }
          />
          <div className="tour-view__tag">
            <p className="tour-view__tag-name tour-primary">
              {props?.item.type == "Ecotourism"
                ? "Sinh thái"
                : props?.item.type == "Cultural"
                ? "Văn hóa"
                : props?.item.type == "Entertainment"
                ? "Giải trí"
                : props?.item.type == "Sports"
                ? "Thể thao"
                : props?.item.type == "Discovery"
                ? "Khám phá"
                : props?.item.type == "Adventure"
                ? "Mạo hiểm"
                : "Khác"}
            </p>
          </div>
          <div className="tour-view-avt">
            <img
              alt=""
              className="tour-view__avt"
              src={
                props?.item?.tourGuide?.avatar
                  ? props?.item?.tourGuide?.avatar
                  : { avt }
              }
            />
          </div>
        </div>
        <div className="tour-view__card-content">
          <div className="tour-view__head">
            <p className="tour-view__name">
              {props?.item?.tourGuide?.username}
            </p>
            <p className="tour-view__time">
              {props?.item?.tourSchedule.length} ngày
            </p>
          </div>
          <div className="tour-view-body">
            <h3 className="tour-view__title">{props?.item?.name}</h3>
            <p className="tour-view__des">{props?.item?.description}</p>
            <div className="tour-view__place">
              <i className="fa-solid fa-plane-arrival"></i>
              <span className="tour-view__place-name">
                {props?.item?.place}
              </span>
            </div>
            <Link to={`/tour/${props?.item?.id}`} className="travel-link">
              Xem chi tiết
            </Link>
          </div>
          <div className="tour-view-footer">
            <p className="tour-view__price">
              khoảng
              <span> {currencyFormat(props?.item?.basePrice)}đ </span>
            </p>
            <div className="tour-view__evaluate">
              {/* <div className="tour-view__star">
                {props?.item?.star != null && (
                  <Rate allowHalf disabled defaultValue={props?.item?.star} />
                )}
                {props?.item?.totalTour != 0 ? (
                  <span>{props?.item?.totalTour} lượt đi</span>
                ) : (
                  <span>Chưa có lượt đi</span>
                )}
              </div> */}
              <Link to={`/tour/${props?.item?.id}`}>
                <div className="button button--primary button-contact">
                  Tùy chỉnh và liên hệ
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TourItem;
