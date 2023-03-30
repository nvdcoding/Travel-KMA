/* eslint-disable */
import React, { useEffect, useState } from "react";
import LayoutHDV from "../../../components/layout/layoutHDV";
import "./style.css";
import { Form, Input, Select, Radio, DatePicker, Button, Modal } from "antd";
import ModalAddVoucher from "../../../components/modalAddVoucher";
export default function AddVoucher() {
  useEffect(() => {}, []);
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const onFinish = (values) => {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinishModal = (values) => {
    console.log("Success:", values);
  };
  const onFinishModalFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const selectBefore = (
    <Select defaultValue="1" className="select-before">
      <Option value="1">Theo số tiền</Option>
      <Option value="0">Theo phần trăm</Option>
    </Select>
  );
  return (
    <>
      <LayoutHDV>
        <div className="voucher-create">
          <div className="card-style new-voucher">
            <div className="card-content">
              <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
              >
                <h3 className="title-voucher">Thông tin cơ bản</h3>
                <Form.Item
                  name="name"
                  label="Tên voucher"
                  rules={[
                    {
                      required: true,
                      message: "Tên voucher ko để trống!",
                    },
                  ]}
                >
                  <Input placeholder="Tên tour" />
                </Form.Item>
                <Form.Item
                  name="code"
                  label="Mã voucher"
                  rules={[
                    {
                      required: true,
                      message: "Mã voucher ko để trống!",
                    },
                  ]}
                >
                  <Input showCount maxLength={5} placeholder="Mã voucher" />
                </Form.Item>
                <Form.Item
                  name="times"
                  label="Thời gian sử dụng "
                  rules={[
                    {
                      required: true,
                      message: "Thời gian không để trống",
                    },
                  ]}
                >
                  <RangePicker showTime />
                </Form.Item>
                <h3 className="title-voucher">Thiết lập mã giảm giá</h3>
                <Form.Item
                  name="sale"
                  label="thLoại giảm giá | Mức giảm "
                  rules={[
                    {
                      required: true,
                      message: "Loại giảm giá | Mức giảm không để trống",
                    },
                  ]}
                >
                  <Input addonBefore={selectBefore} addonAfter="đ" />
                </Form.Item>
                <Form.Item
                  name="value"
                  label="Giá trị đơn hàng tối thiểu"
                  rules={[
                    {
                      required: true,
                      message: "Loại giảm giá | Mức giảm không để trống",
                    },
                  ]}
                >
                  <Input addonBefore="đ" placeholder="" allowClear />
                </Form.Item>
                <Form.Item
                  name="number"
                  label="Tổng lượt sử dụng tối đa"
                  rules={[
                    {
                      required: true,
                      message: "Loại giảm giá | Mức giảm không để trống",
                    },
                  ]}
                >
                  <Input placeholder="Số mã giảm giá" />
                  <span className="form-desc">
                    Tổng số Mã giảm giá có thể sử dụng
                  </span>
                </Form.Item>
                <h3 className="title-voucher">
                  Hiển thị mã giảm giá và các sản phẩm áp dụng
                </h3>
                <Form.Item name="status" label="Hiển thị Voucher">
                  <Radio.Group onChange={onChange} value={value}>
                    <Radio value={0}>Ẩn </Radio>
                    <Radio value={1}>Hiện</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item name="apply" label="Áp dụng cho">
                  <ModalAddVoucher />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="form-button"
                  >
                    Lưu
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </LayoutHDV>
    </>
  );
}
