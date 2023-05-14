/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "../../../components/layout/layout";
import Condition from "../../../components/condition";
import PayHistory from "./history-pay";
import "../../../assets/css/pay.css";
import { Form, Input, Modal, Button, Radio, Tabs, message } from "antd";
import { sendGet, sendPost } from "../../../utils/api";
import { note, vnpay } from "../../../constants/images";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Pay() {
  const [coin, setCoin] = useState();
  const [amount, setAmount] = useState();
  const [active, setActive] = useState(true);

  const PayOnline = async (value) => {
    value.amount = parseInt(value.amount);
    const res = await sendPost("/users/deposit", value);
    if (res.statusCode == 200) {
      window.location.href = res.returnValue;
    } else {
      //đơn hàng thất bại
    }
  };
  const UserTransactions = async () => {
    const res = await sendGet("/auth/me");
    if (res.statusCode == 200) {
      setCoin(res?.returnValue?.availableBalance);
    }
  };
  const formatterPrice = new Intl.NumberFormat("vi-VN", {
    hour: "2-digit",
    minute: "numeric",
  });
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
  useEffect(() => {
    UserTransactions();
  }, []);
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
                <h3 className="payment-online__sub-title">
                  Bạn đang có {formatterPrice.format(coin)} VND
                </h3>
                {active && <p className="payment-money" onClick={() => setActive(false)}>Rút tiền ngay {`>>`}</p>}
                {!active && <p className="payment-money" onClick={() => setActive(true)}>Nạp tiền ngay {`>>`}</p>}
                {active && <div className="payment-main">
                  <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab="Nạp tiền " key="1">
                      <div className="payment-online__inner">
                        <div className="payment-online__left">
                          <div className="order-payment">
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
                                <Input placeholder="Nhập số tiền bạn muốn thanh toán" onChange={(e) => setAmount(e.target.value)} />
                              </Form.Item>
                              <Form.Item label="" name="amount">
                                <Radio.Group
                                  options={optionsWithDisabled}
                                  optionType="button"
                                  buttonStyle="solid"
                                />
                              </Form.Item>
                              <label class="trouble-warn__text"><div ><img src={note} alt=".png" /></div> <p class="check-box__txt check-box__txt-payment">
                                Nhấn vào "Thanh toán" đồng nghĩa với việc Quý khách đồng ý với
                                <a href="#" class="check-box__link">điều khoản mua
                                  hàng và thanh toán của Viettel</a></p></label>
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
                              Tổng thanh toán
                            </h4>
                            <div className="method-payment">
                              <ul className="method-payment__list">
                                <li class="order-payment__item last"><span class="order-payment__name">
                                  Tổng tiền
                                </span> <span class="order-payment__value">
                                    {formatterPrice.format(amount)} đ
                                  </span></li>
                              </ul>
                            </div>
                          </div>
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
                }
                {!active && <div className="payment-main">
                  <DrwarMoney coin={coin} />
                </div>}

              </div>
            </div>
          </div>
        </div>
      </Layout >
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
const DrwarMoney = ({ coin }) => {
  const [amountDraw, setAmountDraw] = useState();

  const DrawOnline = async (value) => {
    value.amount = parseInt(value.amount);
    try {
      const res = await sendPost("/transactions/user-withdraw", value);
      if (res.statusCode == 200) {
        message.success("Tạo yêu cầu rút tiền thành công")
      } else {
        //đơn hàng thất bại
      }
    } catch (error) {
      message.success("Lỗi")

    }

  };
  const formatterPrice = new Intl.NumberFormat("vi-VN", {
    hour: "2-digit",
    minute: "numeric",
  });
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const optionsPayMoney = [
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
    {
      label: "Rút hết",
      value: coin,
    },
  ];
  useEffect(() => {
  }, []);
  return (
    <Tabs defaultActiveKey="1">
      <Tabs.TabPane tab="Rút tiền ngay" key="1">
        <div className="payment-online__inner">
          <div className="payment-online__left">
            <div className="order-payment">
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={DrawOnline}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Số tiền cần rút"
                  name="amount"
                  rules={[
                    {
                      required: true,
                      message: "Nhập số tiền bạn muốn rút.",
                    },
                  ]}
                >
                  <Input placeholder="Nhập số tiền bạn muốn rút" onChange={(e) => setAmountDraw(e.target.value)} />
                </Form.Item>
                <Form.Item label="" name="amount">
                  <Radio.Group
                    options={optionsPayMoney}
                    optionType="button"
                    buttonStyle="solid"
                  />
                </Form.Item>
                <label class="trouble-warn__text"><div ><img src={note} alt=".png" /></div> <p class="check-box__txt check-box__txt-payment">
                  Nhấn vào "Rút tiền" đồng nghĩa với việc Quý khách đồng ý với
                  <a href="#" class="check-box__link">điều khoản mua
                    hàng và thanh toán của Viettel</a></p></label>
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
            </div>
          </div>
          <div className="payment-online__right">
            <div className="payment-online__row">
              <h4 className="payment-online__sub">
                Tổng thanh toán
              </h4>
              <div className="method-payment">
                <ul className="method-payment__list">
                  <li class="order-payment__item last"><span class="order-payment__name">
                    Tổng tiền
                  </span> <span class="order-payment__value">
                      {formatterPrice.format(amountDraw)} đ
                    </span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tra cứu yêu cầu" key="2">
        <ul className="Result-request__list">
          <li className="Result-request__item">
            <div className="box-request__top">
              <div className="code-request">
                <p className="code-request__name">
                  Mã yêu cầu:{" "}
                  <span className="code-request__name name-highlight">261696</span>
                </p>
              </div>{" "}
              <a href="#" className="icon-request__detail">
                <img src="images/registeragency/detail.png" alt="" />
              </a>
            </div>{" "}
            <div className="box-request__body">
              <p className="box-request__title">Tạo mã rút tiền</p>{" "}
            </div>{" "}
            <div className="box-request__bottom">
              <div className="request-bottom__detail">
                <i class="fa-solid fa-rotate-right"></i>
                <p className="request-bottom__name">Đang thực hiện</p>
              </div>{" "}
              <div className="request-bottom__time">
                <i class="fa-regular fa-clock"></i>
                <p className="request-bottom__datetime">1:25 18/08/2022</p>
              </div>
            </div>
          </li>
          <li className="Result-request__item">
            <div className="box-request__top">
              <div className="code-request">
                <p className="code-request__name">
                  Mã yêu cầu:{" "}
                  <span className="code-request__name name-highlight">261696</span>
                </p>
              </div>{" "}
              <a href="#" className="icon-request__detail">
                <img src="images/registeragency/detail.png" alt="" />
              </a>
            </div>{" "}
            <div className="box-request__body">
              <p className="box-request__title">Tạo mã rút tiền</p>{" "}
            </div>{" "}
            <div className="box-request__bottom">
              <div className="request-bottom__detail">
                <i class="fa-solid fa-rotate-right"></i>
                <p className="request-bottom__name">Đang thực hiện</p>
              </div>{" "}
              <div className="request-bottom__time">
                <i class="fa-regular fa-clock"></i>
                <p className="request-bottom__datetime">1:25 18/08/2022</p>
              </div>
            </div>
          </li>
        </ul>
      </Tabs.TabPane>
    </Tabs>
  )
}
