/* eslint-disable */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Tabs } from "antd";
import "../../assets/css/auth.css";
export default function SignUp() {
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
        <div className="auth-form">
          <h3 className="auth-title">Đăng ký</h3>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Người dùng" key="1">
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
              >
                <Form.Item
                  name="name"
                  hasFeedback
                  rules={[
                    {
                      validateStatus: "error",
                      required: true,
                      message: "Họ tên không được để trống!",
                    },
                  ]}
                >
                  <Input placeholder="Họ tên của bạn" />
                </Form.Item>
                <Form.Item
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
                <Form.Item
                  name="passwordConfirmation"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Mật khẩu không để trống!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Password không khớp!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Nhập lại mật khẩu" />
                </Form.Item>
                <Button htmlType="submit" className="button button--primary">
                  Đăng Ký
                </Button>
                <div className="auth-des">
                  <p className="auth-des-note">
                    Đã có tài khoản? Bạn muốn{" "}
                    <Link
                      to="/dang-nhap"
                      className="travel-link auth-des-link-note"
                    >
                      Đăng nhập?
                    </Link>
                  </p>
                </div>
              </Form>
            </Tabs.TabPane>
            <Tabs.TabPane tab="Hướng dẫn viên" key="2">
              <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form}
              >
                <Form.Item
                  name="name"
                  hasFeedback
                  rules={[
                    {
                      validateStatus: "error",
                      required: true,
                      message: "Họ tên không được để trống!",
                    },
                  ]}
                >
                  <Input placeholder="Họ tên của bạn" />
                </Form.Item>
                <Form.Item
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
                <Form.Item
                  name="passwordConfirmation"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Mật khẩu không để trống!",
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Password không khớp!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="Nhập lại mật khẩu" />
                </Form.Item>
                <Button htmlType="submit" className="button button--primary">
                  Đăng Ký
                </Button>
                <div className="auth-des">
                  <p className="auth-des-note">
                    Đã có tài khoản? Bạn muốn{" "}
                    <Link
                      to="/dang-nhap"
                      className="travel-link auth-des-link-note"
                    >
                      Đăng nhập?
                    </Link>
                  </p>
                </div>
              </Form>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </div>
    </>
  );
}
