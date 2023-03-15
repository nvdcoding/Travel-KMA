/* eslint-disable */
import React, { useEffect, useState } from "react";
import LayoutHDV from "../../../components/layout/layoutHDV";
import "./style.css";
import { Modal, Form, Input, Select, Button } from "antd";

export default function AddTour() {
  const { Option } = Select;
  useEffect(() => {}, []);
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinishModal = (values) => {
    console.log("Success:", values);
    setIsModalOpen(false);
  };
  const onFinishModalFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setIsModalOpen(false);
  };
  return (
    <>
      <LayoutHDV>
        <div className="bank-acc">
          <section className="wallets" onClick={showModal}>
            <h2 className="title">Tài khoản ngân hàng</h2>
            <div className="wallet-cards bankcard">
              <div className="col">
                <div className="shopee-popover shopee-popover--light">
                  <div className="shopee-popover__ref">
                    <div className="wallet create">
                      <div className="button">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                      <div className="description">
                        Thêm Tài khoản Ngân hàng
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Modal
            title="Tài khoản ngân hàng"
            visible={isModalOpen}
            footer={null}
            onCancel={onFinishModal}
          >
            <div className="add_bank_acc">
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinishModal}
                onFinishFailed={onFinishModalFailed}
                autoComplete="off"
              >
                <Form.Item label="Họ và tên" name="name">
                  <Input showCount maxLength={50} onChange={onChange} />
                </Form.Item>

                <Form.Item label="Số CMND" name="code">
                  <Input placeholder="nhập vào" />
                </Form.Item>
                <Form.Item label="Tên ngân hàng" name="bank">
                  <Select defaultValue="1">
                    <Option value="1">Ngân hàng A</Option>
                    <Option value="2">Ngân hàng B</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Chi nhánh ngân hàng" name="bank">
                  <Select defaultValue="1">
                    <Option value="1">Chi nhánh A</Option>
                    <Option value="2">Chi nhánh B</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Số tài khoản" name="stk">
                  <Input placeholder="nhập vào" />
                </Form.Item>
                <Form.Item
                  label="Tên chủ tài khoản (Viết in hoa, không dấu - NGUYEN VAN A)"
                  name="name1"
                >
                  <Input placeholder="nhập vào" />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                  <Button type="primary" onClick={onFinishModalFailed}>
                    Hủy
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Modal>
        </div>
      </LayoutHDV>
    </>
  );
}
