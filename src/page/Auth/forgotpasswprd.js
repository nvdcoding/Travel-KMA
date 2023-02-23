/* eslint-disable */
import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import "../../assets/css/auth.css";
import { Link } from "react-router-dom";
export default function ForgotPassword() {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    const res = await sendPost("/api/auth/sign-up", values);
    if (res.status === 201) {
      notification.open({
        message: "Đăng kí thành công",
        description: "Bạn vui lòng kiểm tra Email để có thể vào học nhé~~",
        icon: <SmileOutlined style={{ color: "#e52525" }} />,
      });
      form.resetFields();
    }
    if (res.status === 400) {
      if (values.password < 6) {
        return message.error("Password cần trên 6 kí tự!");
      }
      return message.error("Email đã tồn tại");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="signin__wrapper">
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
          className="auth-form"
        >
          <h3 className="auth-title">Đăng nhập</h3>

          <Form.Item
            className="auth-form-item"
            name="email"
            hasFeedback
            rules={[
              {
                validateStatus: "error",
                type: "email",
                message: "Email không hợp lệ!",
              },
              {
                validateStatus: "error",
                required: true,
                message: "Email không được để trống!",
              },
            ]}
          >
            <Input placeholder="Email của bạn" />
          </Form.Item>
          <Form.Item
            name="password"
            hasFeedback
            rules={[
              {
                validateStatus: "error",
                required: true,
                message: "Mật khẩu không được để trống!",
              },
            ]}
          >
            <Input.Password placeholder="Mật khẩu của bạn" />
          </Form.Item>

          <Button className="button button--primary">Đăng nhập</Button>
          <div className="auth-des">
            <Link to="/dang-ky" className="travel-link auth-des-link">
              Đăng ký?
            </Link>
            <a className="travel-link auth-des-link">Quên mật khẩu?</a>
          </div>
        </Form>
      </div>
    </>
  );
}