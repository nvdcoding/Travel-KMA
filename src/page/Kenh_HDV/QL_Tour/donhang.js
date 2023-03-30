/* eslint-disable */
import React, { useEffect } from "react";
import { Space, Table, Form, DatePicker, Input, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import LayoutHDV from "../../../components/layout/layoutHDV";
import "./style.css";
const columns = [
  {
    title: "Tên tour",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Thời gian",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Địa điểm",
    dataIndex: "place",
    key: "place",
  },
  {
    title: "Thao tác",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a className="action-edit">Sửa</a>
        <a className="action-del">Xóa</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: "1",
    name: "Du lịch Cẩn thơ 2 ngày",
    time: "20/10/2023-22/10/2023",
    place: "Cần thơ",
    status: 1,
  },
  {
    key: "1",
    name: "Du lịch Cẩn thơ 2 ngày",
    time: "20/10/2023-22/10/2023",
    place: "Cần thơ",
    status: 1,
  },
  {
    key: "1",
    name: "Du lịch Cẩn thơ 2 ngày",
    time: "20/10/2023-22/10/2023",
    place: "Cần thơ",
    status: 1,
  },
];
export default function MyPage() {
  const { RangePicker } = DatePicker;
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  useEffect(() => {}, []);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      <LayoutHDV>
        <div className="main">
          <div className="search_body">
            <div className="landing-page-title">Danh sách đơn hàng</div>
            <div className="search-group">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <Form.Item name="name" label="Khoảng thời gian">
                  <RangePicker />
                </Form.Item>
                <Form.Item name="code">
                  <Search
                    addonBefore="Mã đơn hàng"
                    placeholder="Nhập mã đơn hàng"
                    allowClear
                    onSearch={onSearch}
                    style={{
                      width: 304,
                    }}
                  />
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
              <div className="form">
                <Button type="primary" icon={<PlusOutlined />}>
                  Tạo mới
                </Button>
              </div>
            </div>
          </div>
          <div className="main-body">
            <div className="header-tab">
              <ul className="tab-nav">
                <li className="tab-item active">Tất cả</li>
                <li className="tab-item">Chờ xác nhận</li>
                <li className="tab-item">Đơn hủy</li>
                <li className="tab-item">Hoàn thành</li>
              </ul>
            </div>
            <div className="main-content">
              <h3 className="title">3 đơn hàng</h3>
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
      </LayoutHDV>
    </>
  );
}
