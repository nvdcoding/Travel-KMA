/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../../components/layout/layout";
import Condition from "../../../components/condition";
import PayHistory from "./history-pay";
import "../../../assets/css/pay.css";
import { Form, Input, Modal, Button, Radio, Tabs } from "antd";
import { sendPost } from "../../../utils/api";
import { vnpay } from "../../../constants/images";

export default function Pay() {
  const PayOnline = async (value) => {
    value.amount = parseInt(value.amount);
    const res = await sendPost("/users/deposit", value);
    if (res.statusCode == 200) {
      window.location.href = res.returnValue;
    } else {
      //đơn hàng thất bại
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
      label: "5.000.000đ",
      value: "5000000",
    },
  ];
  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <div className="pay__wrapper">
          <div className="method-payment-component">
            <div className="pathway">
              <div className="content">
                <ul>
                  <li>
                    <a href="/">Trang chủ</a>
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                  </li>
                  <li>
                    <strong>Thanh toán online</strong>
                  </li>
                </ul>
              </div>
            </div>
            <div className="payment-online">
              <div className="content">
                <h3 className="payment-online__title">Thông tin chi tiết</h3>

                <Tabs defaultActiveKey="1">
                  <Tabs.TabPane tab="Nạp tiền " key="1">
                    <div className="payment-online__inner">
                      <div className="payment-online__left">
                        <div className="order-payment">
                          <h4 className="order-payment__title">
                            Thông tin chi tiết
                          </h4>
                          <Form
                            name="basic"
                            initialValues={{
                              remember: true,
                            }}
                            onFinish={PayOnline}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                          >
                            <Form.Item
                              label="Số tiền thanh toán"
                              name="amount"
                              rules={[
                                {
                                  required: true,
                                  message: "Nhập số tiền bạn muốn thanh toán.",
                                },
                              ]}
                            >
                              <Input placeholder="Nhập số tiền bạn muốn thanh toán" />
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
                                Thanh toán
                              </Button>
                            </Form.Item>
                          </Form>
                        </div>
                      </div>
                      <div className="payment-online__right">
                        <div className="payment-online__row">
                          <h4 className="payment-online__sub">
                            Phương thức thanh toán*
                          </h4>
                          <div className="method-payment">
                            <ul className="method-payment__list">
                              <li className="method-payment__item">
                                <div className="method-payment__left">
                                  <span className="method-payment__icon">
                                    <img src={vnpay} width="30" height="30" />
                                  </span>
                                  <div className="method-payment__detail">
                                    <div className="method-payment__info">
                                      <div className="method-payment__top js-toggle">
                                        <h5 className="method-payment__name">
                                          VNPay: ATM/VISA
                                        </h5>
                                      </div>
                                      <div className="method-payment__choose">
                                        <label className="radio-custom1">
                                          <input type="radio" name="radio" />
                                          <span className="checkmark"></span>
                                        </label>
                                      </div>
                                    </div>
                                    payHistory{" "}
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Tra cứu" key="2">
                    <PayHistory />
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
const ModalVoucher = () => {
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
  const handleVoucher = () => {
    setIsModalOpen(false);
    setVoucher("TM12");
  };
  const [voucher, setVoucher] = useState();
  return (
    <>
      <span className="order-payment_voucher" onClick={showModal}>
        <span className="coupon-label success">{voucher}</span>
        {/* <i className="fa-solid fa-percent"></i> */}
        Mã Voucher
      </span>
      <Modal
        footer={null}
        width="90%"
        title="Mã giảm giá "
        visible={isModalOpen}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <div className="mytrip-voucher">
          <div className="mytrip-voucher-item">
            <div className="mytrip-voucher-left">
              <img
                className="mytrip-voucher-img"
                alt=""
                src="https://vietteltelecom.vn/images_content/img-travel-pack-3.png"
              />
              <h4 className="mytrip-voucher-name">Voucher</h4>
            </div>
            <div className="mytrip-voucher-right">
              <div className="mytrip-voucher-top">
                <h3 className="mytrip-voucher-title">
                  Giảm 10% đơn 20k giảm 210k
                </h3>
                <p
                  className="mytrip-voucher-use"
                  onClick={() => handleVoucher()}
                >
                  Dùng ngay
                </p>
              </div>
              <div className="mytrip-voucher-bottom">
                <h3 className="mytrip-voucher-time">Sắp hết hạn: Còn 4 giờ</h3>
                <Condition />
              </div>
            </div>
          </div>
          <div className="mytrip-voucher-item">
            <div className="mytrip-voucher-left">
              <img
                className="mytrip-voucher-img"
                alt=""
                src="https://vietteltelecom.vn/images_content/img-travel-pack-3.png"
              />
              <h4 className="mytrip-voucher-name">Voucher</h4>
            </div>
            <div className="mytrip-voucher-right">
              <div className="mytrip-voucher-top">
                <h3 className="mytrip-voucher-title">
                  Giảm 10% đơn 20k giảm 210k
                </h3>
                <p className="mytrip-voucher-use">Dùng ngay</p>
              </div>
              <div className="mytrip-voucher-bottom">
                <h3 className="mytrip-voucher-time">Sắp hết hạn: Còn 4 giờ</h3>
                <Condition />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
