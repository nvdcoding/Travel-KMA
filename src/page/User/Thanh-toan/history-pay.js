/* eslint-disable */
import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/pay.css";
import { sendGet, sendPost } from "../../../utils/api";
import { vnpay, vnpayv2 } from "../../../constants/images";
import { Skeleton } from "antd";

export default function PayHistory() {
  const [history, seyHistory] = useState([]);
  const historyPay = async () => {
    const res = await sendGet("/users/transaction");
    if (res.statusCode == 200) {
      seyHistory(res?.returnValue?.data);
    } else {
      //đơn hàng thất bại
    }
  };
  const formatterDate = new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formatterTime = new Intl.DateTimeFormat("vi-VN", {
    hour: "2-digit",
    minute: "numeric",
  });
  const formatterPrice = new Intl.NumberFormat("vi-VN", {
    hour: "2-digit",
    minute: "numeric",
  });
  useEffect(() => {
    historyPay();
  }, []);
  // if (!Object.keys(history).length) return <Skeleton />;
  return (
    <>
      <div className="pay__wrapper">
        <li class="History-list__info-year">
          <p class="History-list__label">03/2023</p>
          <ul class="History-list__info">
            {history.map((item, index) => (
              <li class="History-item__info">
                <div class="History-images">
                  <img src={vnpay} alt="" />
                </div>
                <div class="History-des">
                  <div class="History-des__title_group">
                    <h4 class="History-des__title">
                      {item?.status == 1
                        ? "Nạp tiền thành công"
                        : item?.status == 2
                        ? "Đang xử lý"
                        : "Thanh toán thất bại"}
                    </h4>
                    <div class="History-des__sub-price">
                      <p>{formatterPrice.format(item?.amount)}đ</p>
                    </div>
                  </div>
                  <div class="History-des__sub-title">
                    <div class="History-des__sub-date_time">
                      <p>{formatterTime.format(Date.parse(item?.createdAt))}</p>
                    </div>
                    <div class="History-des__sub-date_time">
                      <p>{formatterDate.format(Date.parse(item?.createdAt))}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </div>
    </>
  );
}
