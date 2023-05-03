/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../../components/layout/layout";
import Condition from "../../../components/condition";
import "../../../assets/css/pay.css";
import { Form, Input, Modal, Button } from "antd";
import { sendPost } from "../../../utils/api";

export default function Pay() {
  let history = useHistory();
  const PayOnline = async (value) => {
    const res = await sendPost("/users", value);
    if (res.statusCode == 200) {
      window.location.href = res.returnValue.data;
    } else {
      //đơn hàng thất bại
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
                <h3 className="payment-online__title">Thông tin chuyến đi</h3>
                <div className="payment-online__inner">
                  <div className="payment-online__left">
                    <div className="payment-online__row">
                      <h4 className="payment-online__sub">
                        Chọn phương thức thanh toán*
                      </h4>
                      <div className="method-payment">
                        <ul className="method-payment__list">
                          <li className="method-payment__item">
                            <div className="method-payment__left">
                              <span className="method-payment__icon">
                                <img
                                  src="http://media.vietteltelecom.vn/upload//88/ad/d8/0535006780b9b3c234343bafa8fa718116781b1d.png"
                                  width="30"
                                  height="30"
                                />
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
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="payment-online__right">
                    <div className="order-payment">
                      <h4 className="order-payment__title">
                        Thông tin nạp tiền
                      </h4>
                      {/* <ul className="order-payment__list">
                        <li className="order-payment__item">
                          <span className="order-payment__name">
                            Tên chuyến đi
                          </span>
                          <span className="order-payment__value">
                            BN 3 ngày 2 đêm
                          </span>
                        </li>
                        <li className="order-payment__item">
                          <span className="order-payment__name">
                            Mã chuyến đi
                          </span>
                          <span className="order-payment__value">BN32145</span>
                        </li>
                        <li className="order-payment__item">
                          <span className="order-payment__name">Tổng tiền</span>
                          <span className="order-payment__value">10.000đ</span>
                        </li>
                        <li className="order-payment__item">
                          <span className="order-payment__name">Giảm giá</span>
                          <span className="order-payment__value">-2.000đ</span>
                        </li>
                        <li className="order-payment__item">
                          <span className="order-payment__name">
                            Đặt cọc
                            <span className="order-payment__note">(30%)</span>
                          </span>
                          <span className="order-payment__value">150.000đ</span>
                        </li>
                        <li className="order-payment__item">
                          <span className="order-payment__name"></span>
                          <ModalVoucher />
                        </li>
                        <li className="order-payment__item last">
                          <span className="order-payment__name">
                            Tổng thanh toán
                          </span>
                          <span className="order-payment__value">10.000đ</span>
                        </li>
                      </ul>
                      <div className="order-payment__btn">
                        <a className="button button--primary" href="#">
                          Đồng ý
                        </a>
                        <div
                          className="button button--normal"
                          onClick={() => history.goBack()}
                        >
                          Quay lại
                        </div>
                      </div> */}
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
                          label="Tổng tiênf"
                          name="amount"
                          rules={[
                            {
                              required: true,
                              message: "err",
                            },
                          ]}
                        >
                          <Input />
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
                </div>
                <ul className="hot-line">
                  <li className="hot-line__item">
                    <span className="hot-line__icon">
                      <img
                        src="https://viettel.vn/images_content/payment-online-new/ic-sp.png"
                        alt="img"
                      />
                    </span>
                    <span className="hot-line__name">CSKH: 18008098</span>
                  </li>
                  <li className="hot-line__item">
                    <span className="hot-line__icon">
                      <img
                        src="https://viettel.vn/images_content/payment-online-new/ic-contact.png"
                        alt="img"
                      />
                    </span>
                    <span className="hot-line__name">
                      Miền Bắc: 0989 198 198
                    </span>
                  </li>
                  <li className="hot-line__item">
                    <span className="hot-line__icon">
                      <img
                        src="https://viettel.vn/images_content/payment-online-new/ic-contact.png"
                        alt="img"
                      />
                    </span>
                    <span className="hot-line__name">
                      Miền Nam: 0989 198 198
                    </span>
                  </li>
                  <li className="hot-line__item">
                    <span className="hot-line__icon">
                      <img
                        src="https://viettel.vn/images_content/payment-online-new/ic-sms.png"
                        alt="img"
                      />
                    </span>
                    <span className="hot-line__name">Email: cskh@.com.vn</span>
                  </li>
                  <li className="hot-line__item">
                    <span className="hot-line__icon">
                      <img
                        src="https://viettel.vn/images_content/payment-online-new/ic-answer.png"
                        alt="img"
                      />
                    </span>
                    <span className="hot-line__name">
                      Group giải đáp online
                    </span>
                  </li>
                </ul>
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
