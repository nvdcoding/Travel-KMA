// /* eslint-disable */
import React, { useEffect } from "react";
import "../../../assets/css/homehdv.css";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Select, Upload, Button } from "antd";
import { useHistory } from "react-router-dom";
import LayoutHDV from "../../../components/layout/layoutHDV";
export default function AddTour() {
  const history = useHistory();
  useEffect(() => {}, []);
  const onFinish = (values) => {
    history.push("/tao-tour-du-lich");
  };
  const { Option } = Select;

  return (
    <>
      <LayoutHDV>
        <div className="add-tour">
          <p class="landing-page-title"> Thông tin cơ bản </p>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
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
                  message: "PHân loại",
                },
              ]}
            >
              <Select placeholder="select your gender">
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
            <Form.Item label="Upload" valuePropName="fileList">
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
