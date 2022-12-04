/* eslint-disable */
import React, { useEffect } from "react";
import {
    Form,
    Input, Button
} from 'antd';
import "../../assets/css/auth.css";
export default function SignIn() {
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
    useEffect(() => {
    }, []);
    return (
        <>
            <div className="signin__wrapper">
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="Họ tên"
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
                        label="E-mail"
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
                        label="Password"
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
                        label="Confirm Password"
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
                                    return Promise.reject(new Error("Password không khớp!"));
                                },
                            }),
                        ]}
                    >
                        <Input.Password placeholder="Nhập lại mật khẩu" />
                    </Form.Item>
                    <Button htmlType="submit">Đăng Ký</Button>
                </Form>

            </div>
        </>
    );
}