/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/hdv-tour-all.css";
import { Pagination } from "antd";
import TourItem from "../../../components/tourItem";
import {
  Modal,
  Button,
  Result,
  Checkbox,
  Form,
  InputNumber,
  Select,
} from "antd";
import { sendGet } from "../../../utils/api";
import { AppContext } from "../../../Context/AppContext";

export default function ToursAll() {
  const { Option } = Select;
  const [data, setData] = useState([]);
  const { provice } = useContext(AppContext);
  const [hdv, setHdv] = useState([]);
  const options = [
    {
      label: "Du lịch đồng quê",
      value: "1",
    },
    {
      label: "Ẩm thực",
      value: "2",
    },
    {
      label: "Hoang dã",
      value: "3",
    },
    {
      label: "Tự túc",
      value: "4",
    },
  ];
  const optionsRate = [
    {
      label: "5 sa0",
      value: "5",
    },
    {
      label: "Từ 4 sao",
      value: "4",
    },
    {
      label: "Từ 3 sa0",
      value: "3",
    },
    {
      label: "Từ 1 sao",
      value: "1",
    },
  ];
  const number = [
    {
      label: "Dưới 10 lượt",
      value: "<10",
    },
    {
      label: "Từ 10 lượt",
      value: ">10",
    },
    {
      label: "Từ 50 lượt",
      value: "50",
    },
    {
      label: "Từ 100 lượt",
      value: "100",
    },
  ];
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
          <div className="content">
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
                    <Form.Item
                      name="type"
                      label="Loại hình du lịch"
                      className="tour-select"
                    >
                      <Checkbox.Group options={options} />
                    </Form.Item>
                    <Form.Item
                      name="rate"
                      label="Đánh giá"
                      className="tour-select"
                    >
                      <Checkbox.Group options={optionsRate} />
                    </Form.Item>
                    <Form.Item
                      name="type"
                      label="Số lượt đi"
                      className="tour-select"
                    >
                      <Checkbox.Group options={number} />
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
                <div class="travel-sort-bar">
                  <span class="travel-sort-bar__label">Sắp xếp theo</span>
                  <div class="travel-sort-by-options">
                    <div class="travel-sort-by-options__option travel-sort-by-options__option--selected">
                      Đi nhiều
                    </div>
                    <div class="travel-sort-by-options__option">Tour mới</div>
                    <div>
                      <div class="select-with-status">
                        <div class="select-with-status__holder select-with-status__box-shadow">
                          <span class="select-with-status__placeholder">
                            Giá
                          </span>
                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tours-all__list">
                  {data.map((item, index) => (
                    <TourItem item={item} key={index} />
                  ))}
                </div>
                {data.length > 0 && (
                  <Pagination defaultCurrent={1} total={50} />
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
