/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import { banner, address, halong } from "../../../constants/images";
import "../../../assets/css/hdv-tour-all.css";
import { Pagination } from "antd";
import TourItem from "../../../components/tourItem";
import { Modal, Button, Result, Input, Form, InputNumber, Select } from "antd";
import { sendGet } from "../../../utils/api";
import { AppContext } from "../../../Context/AppContext";

export default function ToursAll() {
  const { Option } = Select;
  const [data, setData] = useState([]);
  const { provice } = useContext(AppContext);
  const [hdv, setHdv] = useState([]);
  const listTour = async () => {
    const res = await sendGet("/tours", {});
    if (res.returnValue.data.length >= 0) {
      setData(
        res.returnValue.data.map((e) => {
          return { ...e, place: e.province?.name ? e.province?.name : "" };
        })
      );
    } else {
      message.error("Cập nhật tour thất bại");
    }
  };
  const tourFiltter = async (values) => {
    const result = await sendGet("/tours", values);
    if (result.returnValue.data.length >= 0) {
      setData(
        result.data.map((e) => {
          return { ...e, place: e.province?.name ? e.province?.name : "" };
        })
      );
    } else {
      message.error("thất bại");
    }
  };
  useEffect(() => {
    listTour();
  }, []);

  return (
    <>
      <Layout>
        <div className="tours-all__wrapper">
          <div className="banner">
            <img alt="" src={halong} />
          </div>
          <div className="content">
            <div className="pathway">
              <ul>
                <li>
                  <a href="/">Trang chủ</a>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </li>
                <li>Tour</li>
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </li>
                <li>
                  <strong>Xem tất cả</strong>
                </li>
              </ul>
            </div>
            <div className="tours-all__main">
              <div className="tours-all__left">
                <div className="tour-all-box__search">
                  <h1 className="travel-title">Bộ lọc tìm kiếm</h1>
                  <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={tourFiltter}
                  >
                    <Form.Item name="provinceId" label="Tỉnh thành">
                      <Select placeholder="Tỉnh thành">
                        <Option>Chọn tỉnh/Thành phố</Option>
                        {provice.map((item, index) => (
                          <Option value={item?.id} key={index}>
                            {item?.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item name="tourGuideId" label="Hướng dẫn viên">
                      <Select placeholder="Hướng dẫn viên">
                        <Option>Chọn HDV</Option>
                        {hdv.map((item, index) => (
                          <Option value={item?.id} key={index}>
                            {item?.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <div className="price-group price-range">
                      <Form.Item name="minPrice" label="đ Từ">
                        <InputNumber placeholder="" />
                      </Form.Item>
                      <span>-</span>
                      <Form.Item name="maxPrice" label="đ Đến">
                        <InputNumber placeholder="" />
                      </Form.Item>
                    </div>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="form-button"
                      >
                        Tìm kiếm
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
              <div className="tours-all__right ">
                <h3 className="tour-all-result">
                  Chúng tôi tìm thấy {data.length} tours cho Quý khách.
                </h3>
                <div className="tours-all__list">
                  {data.map((item, index) => (
                    <TourItem item={item} key={index} />
                  ))}
                </div>
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
