/* eslint-disable */
import React, { useEffect } from "react";
import { Input, Table, Space } from "antd";
import { Link } from "react-router-dom";
import LayoutHDV from "../../../components/layout/layoutHDV";
import "./style.css";
export default function Voucher() {
  useEffect(() => {}, []);
  const { Search } = Input;
  const onSearch = () => {};
  const columns = [
    {
      title: "Tên voucher",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Mã voucher",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Loại mã",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Tour áp dụng",
      dataIndex: "apply",
      key: "apply",
    },
    {
      title: "Giảm giá",
      dataIndex: "sale",
      key: "sale",
    },
    {
      title: "Tổng số mã",
      dataIndex: "sum",
      key: "sum",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Thời gian",
      dataIndex: "time",
      key: "time",
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
      type: "phần trăm",
      sale: "20",
      apply: "Tour private",
      status: 1,
      sum: 20,
    },
    {
      key: "1",
      name: "Du lịch Cẩn thơ 2 ngày",
      time: "20/10/2023-22/10/2023",
      type: "phần trăm",
      sale: "20",
      apply: "Tour private",
      status: 1,
      sum: 20,
    },
    {
      key: "1",
      name: "Du lịch Cẩn thơ 2 ngày",
      time: "20/10/2023-22/10/2023",
      type: "phần trăm",
      sale: "20",
      apply: "Tour private",
      status: 1,
      sum: 20,
    },
  ];
  return (
    <>
      <LayoutHDV>
        <div className="voucher_main">
          <div className="voucher_content">
            <div className="landing-page-title">Danh sách mã giảm giá</div>
            <div className="desc-content">
              Tạo Mã giảm giá toàn shop hoặc Mã giảm giá sản phẩm ngay bây giờ
              để thu hút người mua.
              <Link to="#" className="desc-link">
                Tìm hiểu thêm
              </Link>
            </div>
            <div className="landing-page-content aguth_iEwtiEw1ejuP3Yg">
              <div className="header-tab">
                <ul className="tab-nav">
                  <li className="tab-item">Tất cả</li>
                  <li className="tab-item">Đang diễn ra</li>
                  <li className="tab-item">Sắp kết thúc</li>
                  <li className="tab-item">Đã kết thúc</li>
                </ul>
              </div>
              <Search
                addonBefore="Mã đơn hàng"
                placeholder="Nhập mã đơn hàng"
                allowClear
                onSearch={onSearch}
                style={{
                  width: 304,
                }}
              />
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
      </LayoutHDV>
    </>
  );
}
