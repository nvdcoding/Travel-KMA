// /* eslint-disable */
import React, { useEffect } from "react";
import "../../../assets/css/homehdv.css";
import "./style.css";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Select,
  Upload,
  Button,
  message,
  InputNumber,
} from "antd";
import Image from "../../../components/image";

import LayoutHDV from "../../../components/layout/layoutHDV";
import { useState } from "react";
import { sendGet, sendPost } from "../../../utils/api";
export default function AddTour() {
  const { TextArea } = Input;
  const [provice, setProvice] = useState([]);
  const [showtt, setShowtt] = useState(true);

  const getProvice = async () => {
    let respon = await sendGet("/provinces");
    if (respon.data.length >= 0) {
      setProvice(respon.data);
    } else {
      message.error("thất bại");
    }
  };
  const onFinish = async (values) => {
    values.tourSchedules = [
      {
        content: "Lịch trình 1",
      },
      {
        content: "Lịch trình 2",
      },
    ];
    values.tourImages = [
      {
        url: "https://media.baoquangninh.vn/dataimages/201809/original/images1098138_vinh_ha_long.jpg",
      },
    ];
    const res = await sendPost("/tours", values);
    if (res.statusCode === 400) {
      message.error("Thất bại");
    } else {
      message.success("tạo mới tour thành công, vùi lòng đợi Admin phê duyệt");
    }
  };
  const { Option } = Select;
  // const handleLT = () => {
  // setDay(day + 1);
  // setSchedule((schedule) => [...schedule, <StepItem props={day} />]);
  // setValueSchedule()
  // };
  const openTT = () => {
    setShowtt(!showtt);
  };
  useEffect(() => {
    getProvice();
  }, []);
  return (
    <>
      <LayoutHDV>
        <div className="add-tour">
          <div className="add-tour-title" onClick={() => openTT()}>
            <p class="landing-page-title"> Thông tin cơ bản </p>
            <i class={showtt ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            {showtt && (
              <div className="tt-group">
                <Form.Item
                  name="name"
                  label="Tên tour"
                  rules={[
                    {
                      required: true,
                      message: "Tên tour ko để trống!",
                    },
                  ]}
                >
                  <Input placeholder="Tên tour" />
                </Form.Item>
                <Form.Item
                  name="type"
                  label="Phân loại"
                  rules={[
                    {
                      required: true,
                      message: "Phân loại",
                    },
                  ]}
                >
                  <Select placeholder="Phân loại tour">
                    <Option value="male">Du lịch tự nhiên</Option>
                    <Option value="female">Du lịch hoang dã</Option>
                    <Option value="other">Ẩm thực</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="description"
                  label="Mô tả "
                  rules={[
                    {
                      required: true,
                      message: "Mô tả ko để trống!",
                    },
                  ]}
                >
                  <Input placeholder="Mô tả" />
                </Form.Item>
                <Form.Item
                  name="provinceId"
                  label="Tỉnh thành"
                  rules={[
                    {
                      required: true,
                      message: "Tỉnh thành ko để trống!",
                    },
                  ]}
                >
                  <Select placeholder="Tỉnh thành">
                    {provice.map((item, index) => (
                      <Option value={item?.id} key={index}>
                        {item?.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="maxMember"
                  label="Số lượng người tối đa"
                  rules={[
                    {
                      required: true,
                      message: "Số lượng ko để trống!",
                    },
                  ]}
                >
                  <InputNumber min={1} defaultValue={1} />
                </Form.Item>
                <Form.Item
                  name="basePrice"
                  label="Chi phí dự kiến một người"
                  rules={[
                    {
                      required: true,
                      message: "Chi phí ko để trống!",
                    },
                  ]}
                >
                  <InputNumber min={1} />
                </Form.Item>
                <Form.Item
                  name="maxPrice"
                  label="Giá tour"
                  rules={[
                    {
                      required: true,
                      message: "Giá tour ko để trống!",
                    },
                  ]}
                >
                  <InputNumber min={1} />
                </Form.Item>
                <Form.Item
                  name="service"
                  label="Dịch vụ"
                  rules={[
                    {
                      required: true,
                      message: "Dịch vụ ko để trống!",
                    },
                  ]}
                >
                  <div className="service-group">
                    <TextArea rows={4} placeholder="Bao gồm" />
                    <TextArea rows={4} placeholder="Không bao gồm" />
                    <TextArea rows={4} placeholder="Tùy chỉnh" />
                  </div>
                </Form.Item>
                <Form.Item label="Ảnh mô tả" valuePropName="fileList">
                  <Upload action="/upload.do" listType="picture-card">
                    <div>
                      <PlusOutlined />
                      <div
                        style={{
                          marginTop: 8,
                        }}
                      >
                        Upload
                      </div>
                    </div>
                  </Upload>
                </Form.Item>
              </div>
            )}

            <div className="main-ht">
              <Form.List name="info">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      <div className="lt-group">
                        <p className="landing-page-title"> Lịch trình </p>
                        <div
                          className="button button--primary button-add"
                          onClick={() => {
                            add();
                          }}
                        >
                          Thêm mới
                        </div>
                      </div>
                      {fields.map((field, index) => (
                        <div key={field.key}>
                          <StepItem field={field} index={index} />
                          {fields.length > 1 ? (
                            <Button
                              className="dynamic-delete-button"
                              onClick={() => remove(field.name)}
                            >
                              Remove Above Field
                            </Button>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  );
                }}
              </Form.List>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="form-button">
                Lưu
              </Button>
            </Form.Item>
          </Form>
        </div>
      </LayoutHDV>
    </>
  );
}
function StepItem({ field, index }) {
  const { TextArea } = Input;
  const [active, setActive] = useState(true);
  const openServices = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="main-form-step3">
        <div className="main-form-title-box" onClick={() => openServices()}>
          <h3 className="title-ht">Ngày {index + 1}</h3>
          <i class={active ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
        </div>
        <div className={active ? "main-form-item" : "hidden"}>
          <Form.Item>
            <Input.Group>
              <Form.Item
                name={[index, "title"]}
                label="Tiêu đề"
                rules={[
                  {
                    required: true,
                    message: "Tiêu đề ko để trống!",
                  },
                ]}
              >
                <Input placeholder="Tiêu đề" />
              </Form.Item>
              <Form.Item name={[index, "desc"]} label="Mô tả">
                <div className="service-group">
                  <TextArea rows={4} placeholder="Mô tả ngắn" />
                  <TextArea rows={4} placeholder="Mô tả dài" />
                </div>
              </Form.Item>
              <Form.Item name={[index, "image"]} label="Ảnh mô tả">
                <Image lengthImg={1} />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </div>
      </div>
    </>
  );
}
