/* eslint-disable eqeqeq */
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
import { sendDelete, sendGet, sendPut } from "../../../utils/api";
import moment from "moment";

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
      render: (_, value, index) => <p>{index + 1}</p>,
    },
    {
      title: "Tên tour",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Thời gian",
      dataIndex: "updatedAt",
      key: "updatedAt",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (_, value) => (
        <p>
          {value.status == 0
            ? "Chờ xác nhận"
            : value.status == 1
            ? "Chờ đặt cọc"
            : value.status == 2
            ? "Chờ thanh toán"
            : value.status == 3
            ? "Chưa thực hiện"
            : value.status == 4
            ? "Đang thực hiện"
            : value.status == 5
            ? "Đã thực hiện"
            : "Đã hủy"}
        </p>
      ),
      filters: [
        {
          text: "Chờ xác nhận",
          value: 0,
        },
        {
          text: "Chờ đặt cọc",
          value: 1,
        },
        {
          text: "Chờ thanh toán",
          value: 2,
        },
        {
          text: "Chưa thực hiện",
          value: 3,
        },
        {
          text: "Đang thực hiện",
          value: 4,
        },
        {
          text: "Đã thực hiện",
          value: 5,
        },
        {
          text: "Đã hủy",
          value: 6,
        },
      ],
      onFilter: (value, record) => record.status.startsWith(value),
      filterSearch: true,
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
          {record.status == 0 ? (
            <div
              className="action"
              style={{ backgroundColor: "rgb(255 79 32)", color: "#fff" }}
              onClick={() => acceptOrder(record)}
            >
              {/* <Link
to={`/kenh-hdv/chi-tiet-don/${record.id}`}
style={{ color: "#fff" }}
>
Xem
</Link> */}
              Chấp nhận
            </div>
          ) : record.status == 1 || record.status == 2 ? (
            <p>Chờ User thanh toán</p>
          ) : record.status == 3 ? (
            <div
              className="action"
              style={{ backgroundColor: "rgb(255 79 32)", color: "#fff" }}
              onClick={() => startGuide(record)}
            >
              Bắt đầu
            </div>
          ) : null}
          {data.length >= 1 && record.status <= 3 ? (
            <div
              className="action"
              style={{ backgroundColor: "#1890ff", color: "#fff" }}
            >
              <Popconfirm
                title="Từ chối Tour?"
                onConfirm={() => deleteOrder(record.id)}
              >
                Từ chối
              </Popconfirm>
            </div>
          ) : null}
        </Space>
      ),
    },
  ];

  const listOrder = async (index, value) => {
    const res = await sendGet("/orders/tourguide", { type: value, limit: 100 });
    if (res.statusCode === 200) {
      setActive(index);
      setData(
        res.returnValue.map((e) => {
          return {
            ...e,
            name: e.tour?.name ? e.tour?.name : "",
          };
        })
      );
    } else {
      message.error("Thất bại");
    }
  };
  const deleteOrder = async (value) => {
    const res = await sendPut("/orders/tourguide/approve-order", {
      action: "reject",
      orderId: parseInt(value),
    });
    if (res.statusCode === 200) {
      message.success("Từ chối order");
      listOrder(1, "waiting_confirm");
    } else {
      message.error("Thất bại");
    }
  };
  const acceptOrder = async (e) => {
    try {
      const res = await sendPut("/orders/tourguide/approve-order", {
        action: "accept",
        orderId: parseInt(e.id),
      });
      if (res.statusCode === 200) {
        message.error("Thành công");
        listOrder(1, "waiting_confirm");
      } else {
        message.error(" thất bại");
      }
    } catch (error) {
      message.error("Ko thành công");
    }
  };
  const startGuide = async (e) => {
    console.log("eeee", e);
    if (e.status == 3) {
      try {
        let res = await sendPut(`/orders/start-tourguide/${e.id}`);
        if (res.statusCode == 200) {
          message.success("Thanh công");
        } else {
          message.error("thất bại");
        }
      } catch (error) {
        message.error("Chưa đến ngày bắt đầu");
      }
    } else message.success("Chuyến đi đang được thực hiện");
  };
  useEffect(() => {
    listOrder(1, "waiting_confirm");
  }, []);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const dateFormat = "DD/MM/YYYY";
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 8,
      total: data.length,
    },
  });
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
  };
  return (
    <>
      <LayoutHDV>
        <div className="main">
          <div className="search_body">
            <div className="landing-page-title">Danh sách yêu cầu</div>
            {/* <div className="search-group">
<Form
name="normal_login"
className="login-form"
initialValues={{
remember: true,
}}
onFinish={onFinish}
>
<Form.Item name="name" label="Khoảng thời gian">
<RangePicker
defaultValue={[moment(), moment()]}
format={dateFormat}
/>
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
</div> */}
          </div>
          <div className="main-body">
            <div className="header-tab">
              <ul className="tab-nav">
                <li
                  className={active == 1 ? "tab-item active" : "tab-item"}
                  onClick={() => listOrder(1, "waiting_confirm")}
                >
                  Yêu cầu người dùng
                </li>
                <li
                  className={active == 2 ? "tab-item active" : "tab-item"}
                  onClick={() => listOrder(2, "waiting_purchase")}
                >
                  Chờ thanh toán
                </li>
                <li
                  className={active == 3 ? "tab-item active" : "tab-item"}
                  onClick={() => listOrder(3, "processing")}
                >
                  Đang thực hiện
                </li>
                <li
                  className={active == 4 ? "tab-item active" : "tab-item"}
                  onClick={() => listOrder(4, "end")}
                >
                  Hoàn thành
                </li>
              </ul>
            </div>
            <div className="main-content">
              <h3 className="title">{data.length} đơn hàng</h3>
              <Table
                rowKey={(record) => record.id}
                columns={columns}
                dataSource={data}
                onChange={handleTableChange}
                pagination={tableParams.pagination}
              />
            </div>
          </div>
        </div>
      </LayoutHDV>
    </>
  );
}
