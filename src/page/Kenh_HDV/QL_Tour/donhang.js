import React, { useEffect } from "react";
import {
  Space,
  Table,
  Form,
  DatePicker,
  Input,
  Button,
  Popconfirm,
  message,
} from "antd";
import { Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import LayoutHDV from "../../../components/layout/layoutHDV";
import "./style.css";
import { useState } from "react";
import { sendGet } from "../../../utils/api";

export default function MyPage() {
  const { RangePicker } = DatePicker;
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const [active, setActive] = useState(1);
  const [data, setData] = useState([]);

  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
      render: (_, value, index) => <p>{index}</p>,
    },
    {
      title: "Tên tour",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Thời gian",
      dataIndex: "timeOrder",
      key: "timeOrder",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, value) => (
        <p>
          {value.status == 1
            ? "Chờ đặt cọc"
            : value.status == 2
            ? "Chờ thanh toán"
            : "Đang thực hiện"}
        </p>
      ),
    },
    {
      title: "Giá tiền",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div className="action" style={{ backgroundColor: "rgb(255 79 32)" }}>
            <Link
              to={`/kenh-hdv/chi-tiet-don/${record.id}`}
              style={{ color: "#fff" }}
            >
              Xem
            </Link>
          </div>
          <div className="action" style={{ backgroundColor: "#1890ff" }}>
            {data.length >= 1 ? (
              <Popconfirm
                title="Từ chối Tour?"
                onConfirm={() => listOrder(1, "Từ chối")}
              >
                Từ chối
              </Popconfirm>
            ) : null}
          </div>
        </Space>
      ),
    },
  ];

  const listOrder = async (index, value) => {
    const res = await sendGet("/orders/tourguide", { type: value });
    if (res.statusCode === 200) {
      setActive(index);
      setData(
        res.returnValue.map((e) => {
          return {
            ...e,
            name: e.tour?.name ? e.tour?.name : "",
            timeOrder: e?.orderSchedule[0].createdAt
              ? e?.orderSchedule[0].createdAt
              : "",
          };
        })
      );
    } else {
      message.error("Cập nhật khóa học thất bại");
    }
  };
  useEffect(() => {
    listOrder(1, "waiting");
  }, []);
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
            </div>
          </div>
          <div className="main-body">
            <div className="header-tab">
              <ul className="tab-nav">
                <li
                  className={active == 1 ? "tab-item active" : "tab-item"}
                  onClick={() => listOrder(1, "waiting")}
                >
                  Yêu cầu người dùng
                </li>
                <li
                  className={active == 2 ? "tab-item active" : "tab-item"}
                  onClick={() => listOrder(2, "processing")}
                >
                  Đang thực hiện
                </li>
                <li
                  className={active == 3 ? "tab-item active" : "tab-item"}
                  onClick={() => listOrder(3, "end")}
                >
                  Hoàn thành
                </li>
                <li
                  className={active == 4 ? "tab-item active" : "tab-item"}
                  onClick={() => listOrder(4, "end")}
                >
                  Đơn hủy
                </li>
              </ul>
            </div>
            <div className="main-content">
              <h3 className="title">{data.length} đơn hàng</h3>
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
      </LayoutHDV>
    </>
  );
}
