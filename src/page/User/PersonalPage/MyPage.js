/* eslint-disable */
import React, { useEffect } from "react";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/personal.css";
export default function MyPage() {
  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <h1>tour của tôi</h1> = thêm tour
        <h1>Doanh thu</h1> chưa thanh toán-đã thanh toán-cài đặt thanh toán
        <h1>Đơn hàng</h1>
        <h1>Thiết lập</h1>-chế độ tạm nghỉ
        <h1>Mã giảm giá</h1>-đang hđ, đã kết thúc, tạo vouucher mới
      </Layout>
    </>
  );
}
