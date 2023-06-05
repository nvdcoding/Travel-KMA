/* eslint-disable */
import React, { useContext, useEffect } from "react";
import {
  Space,
  Table,
  Form,
  DatePicker,
  Input,
  Button,
  Popconfirm,
  Select,
  InputNumber,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import LayoutHDV from "../../../components/layout/layoutHDV";
import "./style.css";
import { Link } from "react-router-dom";
import { sendDelete, sendGet, sendPut } from "../../../utils/api/index";
import { useState } from "react";
import { AppContext } from "../../../Context/AppContext";
import { getItem } from "../../../utils/storage";

export default function MyPage() {
  const { provice } = useContext(AppContext);
  const { Option } = Select;
  const [data, setData] = useState([]);
  const user = getItem("user") ? JSON.parse(getItem("user")) : {};
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
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
      render: (status) => <p>{status == 1 ? "Đang hoạt động" : "Đang khóa"}</p>,
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
          <div className="action" style={{ backgroundColor: "rgb(255 79 32)" }}>
            <Link to={`/tour/${record.id}`} style={{ color: "#fff" }}>
              Xem
            </Link>
          </div>
          {/* <div className="action" style={{ backgroundColor: "#1890ff" }}>
            {data.length >= 1 ? (
              <Popconfirm
                title="Ẩn Tour?"
                onConfirm={() => handleDelete(record.id)}
              >
                Ẩn
              </Popconfirm>
            ) : null}
          </div> */}
        </Space>
      ),
    },
  ];
  const handleDelete = async (key) => {
    try {
      const del = await sendPut(`/tours`, {
        tourId: key,
        action: "",
      });
      if (del.statusCode === 200) {
        await listTour();
      } else {
        message.error("Không thể ẩn tour");
      }
    } catch (error) {
      message.error("Không thể ẩn tour");
    }
  };
  const listTour = async () => {
    try {
      const res = await sendGet("/tours/tourGuide-get", {
        limit: 100,
        tourGuideId: user?.id,
      });
      if (res.returnValue.data.length >= 0) {
        setData(
          res.returnValue.data.map((e) => {
            return { ...e, place: e.province?.name ? e.province?.name : "" };
          })
        );
      } else {
        message.error("Cập nhật tour thất bại");
      }
    } catch (error) {
      message.error("Cập nhật tour thất bại");
    }
  };

  const tourFiltter = async (values) => {
    values.limit = 100;
    values.tourGuideId = user?.id;
    const result = await sendGet("/tours", values);
    if (result.returnValue.data.length >= 0) {
      setData(
        result.returnValue.data.map((e) => {
          return { ...e, place: e.province?.name ? e.province?.name : "" };
        })
      );
    } else {
      message.error("thất bại");
    }
  };
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
  useEffect(() => {
    listTour();
  }, []);
  return (
    <>
      <LayoutHDV>
        <div className="main">
          <div className="search_body">
            <div className="landing-page-title">Tìm kiếm Tour</div>
            <div className="search-group">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={tourFiltter}
              >
                <div className="price-group">
                  <Form.Item name="minPrice" label="đ Từ">
                    <InputNumber placeholder="" min={1} />
                  </Form.Item>
                  -
                  <Form.Item name="maxPrice" label="đ Đến">
                    <InputNumber placeholder="" min={1} />
                  </Form.Item>
                </div>
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
                  <Link to="/kenh-hdv/them-tour">Tạo mới</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="main-body">
            <div className="main-content">
              <h3 className="landing-page-title">Danh sách tour</h3>
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
