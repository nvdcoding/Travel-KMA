/* eslint-disable */
import React, { useEffect } from "react";
import {
  Space,
  Table,
  Form,
  DatePicker,
  Input,
  Button,
  Popconfirm,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import LayoutHDV from "../../../components/layout/layoutHDV";
import "./style.css";
import { Link } from "react-router-dom";
import { sendDelete, sendGet } from "../../../utils/api/index";
export default function Detail() {
  return (
    <>
      <LayoutHDV>
        <div className="mainDetail">
          <h3 className="nameTour">Tên tour</h3>
          <p className="des">
            Đến khám phá những điều kỳ diệu của Bolivia! Từ thành phố thuộc địa
            tuyệt đẹp đến cảnh quan quyến rũ của căn hộ Salyuni, chuyến đi này
            là hoàn hảo cho những người muốn trải nghiệm tất cả những điểm nổi
            bật của Bolivia. Bắt đầu hành trình của bạn ở thủ đô La Paz. Đi lang
            thang qua những khu chợ nhộn nhịp với những sản phẩm đáng ngạc nhiên
            và độc đáo, đồ thủ công phức tạp và những món ăn địa phương ngon
            miệng. Bạn có thích kiến trúc thuộc địa nguyên sơ? Nhận điền vào La
            Paz và Sucre, một trong những Các địa điểm thuộc địa chính của
            Bolivia. Hãy liên lạc với lịch sử, khi bạn ghé thăm Casa de
            Liberdad, nơi độc lập của Bolivia và Bảo tàng Nghệ thuật Bản địa ở
            Sucre. Thiên nhiên không bao giờ xa - hãy tham quan phong cảnh yên
            bình của Thung lũng Mặt trăng và vượt qua những dãy núi đẹp. Kết
            thúc hành trình của bạn với chuyến thăm sa mạc muối lớn nhất thế
            giới, như bạn đi xe trên căn hộ Uyuni Salt trên một chiếc xe jeep
            riêng.
          </p>
        </div>
      </LayoutHDV>
    </>
  );
}
