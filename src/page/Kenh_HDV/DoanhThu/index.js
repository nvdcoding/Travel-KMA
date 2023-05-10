/* eslint-disable */
import React, { useEffect, useState } from "react";
import "../../../assets/css/homehdv.css";
import LayoutHDV from "../../../components/layout/layoutHDV";
import "./style.css";
import {
  Form,
  Input,
  Modal,
  Radio,
  Tabs,
  Table,
  Button,
  message,
  DatePicker,
} from "antd";
import moment from "moment";

export default function AddTour() {
  const dateFormat = "DD/MM/YYYY";

  const columns = [
    {
      title: "Tour",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ngày thanh toán dự kiến",
      dataIndex: "time",
      key: "time",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Số tiền",
      dataIndex: "price",
      key: "price",
    },
  ];
  const data = [
    {
      key: "1",
      name: "Tour BN",
      time: "20/11/2012",
      status: 0,
      price: "3.000.000đ",
    },
    {
      key: "2",
      name: "Tour BN",
      time: "20/11/2012",
      status: 0,
      price: "3.000.000đ",
    },
    {
      key: "3",
      name: "Tour BN",
      time: "20/11/2012",
      status: 0,
      price: "3.000.000đ",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    message.success("Bạn đã gửi yêu cầu rút tiền. Đợi Adin duyệt nhé!");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {}, []);
  const { Search } = Input;
  const optionsWithDisabled = [
    {
      label: "100.000đ",
      value: "100000",
    },
    {
      label: "500.000đ",
      value: "500000",
    },
    {
      label: "1.000.000đ",
      value: "1000000",
    },
    {
      label: "2.000.000đ",
      value: "2000000",
    },
    {
      label: "3.000.000đ",
      value: "3000000",
    },
    {
      label: "Rút hết",
      value: "5000000",
    },
  ];
  const onSearch = (value) => console.log(value);
  const { RangePicker } = DatePicker;

  return (
    <>
      <LayoutHDV>
        <div class="container">
          <div class="left">
            <div class="seller-meta">
              <div className="section-group-header">
                <div class="section-title">Tổng Quan</div>
                <RangePicker
                  defaultValue={[moment(), moment()]}
                  format={dateFormat}
                />
              </div>
              <div class="meta-section">
                <div class="meta-overview">
                  <div class="meta-to-release">
                    <div class="meta-item-title">
                      Doanh thu <span class="sprites-guarantee" />
                    </div>
                    <div class="label">Tổng cộng</div>
                    <div
                      class="meta-numeric-content"
                      style={{ width: "212px" }}
                    >
                      <span class="currency-symbol">₫</span>10.000
                    </div>
                  </div>
                  <div class="meta-released">
                    <div class="meta-item-title">
                      Tháng này <span class="sprites-guarantee" />
                    </div>
                    <div class="meta-time-box">
                      <div class="meta-time-item mr16">
                        <div class="label">Tổng</div>
                        <div
                          class="meta-numeric-content"
                          style={{ width: "212px" }}
                        >
                          <span class="currency-symbol">₫</span>0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="default-bank">
                  <div class="bank-account"></div>
                  <div
                    type="button"
                    class="wallet-entry shopee-button shopee-button--link shopee-button--normal"
                    onClick={showModal}
                  >
                    <span>Rút tiền {`>>`} </span>
                  </div>
                  <Modal
                    open={isModalOpen}
                    visible={isModalOpen}
                    footer={null}
                    centered
                    onCancel={handleCancel}
                  >
                    <h2 className="pay-title">Rút tiền</h2>
                    <Form
                      name="basic"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={handleOk}
                      autoComplete="off"
                    >
                      <Form.Item
                        label="Số tiền thanh toán"
                        name="amount"
                        rules={[
                          {
                            required: true,
                            message: "Nhập số tiền bạn muốn rút toán.",
                          },
                        ]}
                      >
                        <Input placeholder="Nhập số tiền bạn muốn rút toán" />
                      </Form.Item>
                      <Form.Item label="" name="amount">
                        <Radio.Group
                          options={optionsWithDisabled}
                          optionType="button"
                          buttonStyle="solid"
                        />
                      </Form.Item>

                      <Form.Item
                        wrapperCol={{
                          offset: 8,
                          span: 16,
                        }}
                      >
                        <Button
                          type="primary"
                          htmlType="submit"
                          className="button button--primary"
                        >
                          Rút tiền
                        </Button>
                      </Form.Item>
                    </Form>
                  </Modal>
                </div>
              </div>
            </div>
            <div class="right-main-table">
              <div class="main-content">
                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane tab="Lịch sử" key="1">
                    <div class="transactions-table-wrap">
                      <Table columns={columns} dataSource={data} />
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Yêu cầu thanh toán" key="2">
                    <div class="transactions-table-wrap">
                      <Table columns={columns} dataSource={data} />
                    </div>
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </div>
          </div>
          <div class="right"></div>
        </div>
      </LayoutHDV>
    </>
  );
}
