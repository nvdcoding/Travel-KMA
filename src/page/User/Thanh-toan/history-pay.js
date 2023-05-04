/* eslint-disable */
import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/pay.css";
import { sendPost } from "../../../utils/api";
import { vnpay, vnpayv2 } from "../../../constants/images";

export default function PayHistory() {
  const historyPay = async () => {
    const res = await sendPost("/users/me");
    if (res.statusCode == 200) {
      console.log("6", res.returnValue);
    } else {
      //đơn hàng thất bại
    }
  };
  useEffect(() => {
    historyPay();
  }, []);
  return (
    <>
      <Layout>
        <div className="pay__wrapper">
          <h4 className="order-payment__title">Thông tin chi tiết</h4>
          <li class="History-list__info-year">
            <p class="History-list__label">03/2023</p>{" "}
            <ul class="History-list__info">
              <li class="History-item__info">
                <div class="History-images">
                  <img src={vnpay} alt="" />
                </div>{" "}
                <div class="History-des">
                  <div class="History-des__title_group">
                    <h4 class="History-des__title">Nạp thành công</h4>{" "}
                    <div class="History-des__sub-price">
                      <p>5.000đ</p>
                    </div>
                  </div>{" "}
                  <div class="History-des__sub-title">
                    <div class="History-des__sub-date_time">
                      <p> 21:58:39</p>
                    </div>{" "}
                    <div class="History-des__sub-date_time">
                      <p>07/03/2023</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </div>
      </Layout>
    </>
  );
}
