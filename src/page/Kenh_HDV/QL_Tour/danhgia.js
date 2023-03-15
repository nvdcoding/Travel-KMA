/* eslint-disable */
import React, { useEffect } from "react";
import LayoutHDV from "../../../components/layout/layoutHDV";
import "./style.css";
import { Form, Input, DatePicker, Button, Table, Space } from "antd";

export default function DanhGia() {
  const columns = [
    {
      title: "Tên tour",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Đánh giá người dùng",
      dataIndex: "rate",
      key: "rate",
    },
    {
      title: "Mức độ hài lòng",
      dataIndex: "star",
      key: "star",
    },
    {
      title: "Trả lời đánh giá",
      dataIndex: "reply",
      key: "reply",
    },

    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Sửa</a>
          <a>Xóa</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "Du lịch Cẩn thơ 2 ngày",
      rate: "Đây là mô tả đánh giá",
      star: "4",
      reply: "rep ly",
    },
    {
      key: "1",
      name: "Du lịch Cẩn thơ 2 ngày",
      rate: "Đây là mô tả đánh giá",
      star: "4",
      reply: "rep ly",
    },
    {
      key: "1",
      name: "Du lịch Cẩn thơ 2 ngày",
      rate: "Đây là mô tả đánh giá",
      star: "4",
      reply: "rep ly",
    },
  ];
  useEffect(() => {}, []);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const { RangePicker } = DatePicker;

  return (
    <>
      <LayoutHDV>
        <div className="rate_main">
          <div className="rate_header">
            <p className="rate-title">Đánh giá tour</p>
            <p className="rate-des">Xem đánh giá tour của bạn</p>
          </div>
          <div className="rate-body">
            <div className="rate-search">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item name="name" label="Tên Tour">
                  <Input placeholder="Tên tour" />
                </Form.Item>
                <Form.Item name="code" label="Mã tour">
                  <Input showCount maxLength={5} placeholder="Mã tour" />
                </Form.Item>
                <Form.Item name="times" label="Thời gian đánh giá ">
                  <RangePicker />
                </Form.Item>
                <h3 className="title-voucher">Thiết lập mã giảm giá</h3>

                <Form.Item name="user" label="Tên người dùng">
                  <Input placeholder="Nhập tên user" />
                </Form.Item>

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
            <div className="rate-body">
              <div className="header-tab">
                <ul className="tab-nav">
                  <li className="tab-item">Tất cả</li>
                  <li className="tab-item">Chưa trả lời</li>
                  <li className="tab-item">Đã trả lời</li>
                </ul>
              </div>
              <div className="rate-content">
                <div className="shopee-tabs__nav-warp">
                  <div
                    className="shopee-tabs__nav-tabs"
                    style={{ transform: "translateX(0px)" }}
                  >
                    <div className="shopee-tabs__nav-tab">Tất cả </div>
                    <div className="shopee-tabs__nav-tab">
                      <span className="title">5 Sao</span>
                    </div>
                    <div className="shopee-tabs__nav-tab">
                      <span className="title">4 Sao</span>
                    </div>
                    <div className="shopee-tabs__nav-tab">
                      <span className="title">3 Sao</span>
                    </div>
                    <div className="shopee-tabs__nav-tab">
                      <span className="title">2 Sao</span>
                    </div>
                    <div className="shopee-tabs__nav-tab active">
                      <span className="title">1 Sao</span>
                    </div>
                  </div>
                </div>
                <Table columns={columns} dataSource={data} />
              </div>
            </div>
          </div>
        </div>
      </LayoutHDV>
    </>
  );
}
