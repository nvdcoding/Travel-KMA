/* eslint-disable */
import React, { useEffect } from "react";
import "../../../assets/css/trip.css";
import Process from "../../../components/Process";
import { sendGet } from "../../../utils/api";
import { message } from "antd";
export default function OrderDetail({ data }) {
  const orderDetail = async () => {
    const result = await sendGet(`/orders/${data}`);
    if (result.statusCode == 200) {
      console.log(`values`, result);
      setDataEnd(result.returnValue);
    } else {
      message.error("thất bại");
    }
  };
  useEffect(() => {
    orderDetail();
  }, []);
  return (
    <>
      <div className="order-detail">
        <Process />
      </div>
    </>
  );
}
