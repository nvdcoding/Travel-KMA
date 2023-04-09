/* eslint-disable */

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { address, avt, haiphong } from "../constants/images";

function TourItem(props) {
  function currencyFormat(num) {
    console.log(num.toFixed(3).replace(/(\d)(?=(\d{3})+(?!\d))/g, ".") + "đ");
  }
  useEffect(() => {
    currencyFormat(200000);
  }, []);
  return (
    <>
      <div className="tour-view__item">
        <div className="tour-view__card-img">
          <img
            alt=""
            className="tour-view__img"
            // src={
            //   props?.item?.images[0]?.url
            //     ? props?.item?.images[0]?.url
            //     : { avt }
            // }
            src={haiphong}
          />
          <div className="tour-view__tag">
            <p className="tour-view__tag-name">Nature</p>
            <p className="tour-view__tag-name">Private Tour</p>
            <p className="tour-view__tag-name tour-primary">Carbon Friendly</p>
            <p className="tour-view__tag-name tour-primary">Social Impact</p>
          </div>
          <div className="tour-view-avt">
            <img
              alt=""
              className="tour-view__avt"
              src={props?.item?.tourGuide?.avatar}
            />
          </div>
        </div>
        <div className="tour-view__card-content">
          <div className="tour-view__head">
            <p className="tour-view__name">{props?.item?.hdv}</p>
            <p className="tour-view__time">{props?.item?.time}</p>
          </div>
          <div className="tour-view-body">
            <h3 className="tour-view__title">{props?.item?.title}</h3>
            <p className="tour-view__des">{props?.item?.des}</p>
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
              <span>
                {props?.item?.basePrice.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
              /một người
            </p>
            {/* <p className="tour-view__price">
              khoảng <span>{props?.item?.maxPrice}</span>/Tour
            </p> */}
            <div className="tour-view__evaluate">
              <div className="tour-view__star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
                <i className="fa-regular fa-star"></i>
                <span>Đã đi {props?.item?.rate}</span>
              </div>
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
