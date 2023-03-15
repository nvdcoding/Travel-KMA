/* eslint-disable */
import React, { useEffect } from "react";
import "../../../assets/css/homehdv.css";
import { Space, Table, DatePicker, Input } from "antd";
import LayoutHDV from "../../../components/layout/layoutHDV";
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
  return (
    <>
      <LayoutHDV>
        <div className="main">
          <div className="main-body">
            <div className="header-tab">
              <ul className="tab-nav">
                <li className="tab-item">Tất cả</li>
                <li className="tab-item">Chờ xác nhận</li>
                <li className="tab-item">Đơn hủy</li>
                <li className="tab-item">Hoàn thành</li>
              </ul>
            </div>
            <div className="main-content">
              <div className="search_body">
                <RangePicker />
                <Search
                  addonBefore="Mã đơn hàng"
                  placeholder="Nhập mã đơn hàng"
                  allowClear
                  onSearch={onSearch}
                  style={{
                    width: 304,
                  }}
                />
                <div className="button button--primary">Tìm kiếm</div>
              </div>

              <h3 className="title">0 đơn hàng</h3>
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
      </LayoutHDV>
    </>
  );
}
