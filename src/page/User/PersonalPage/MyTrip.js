/* eslint-disable eqeqeq */
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import { Tabs, Popconfirm, message, Skeleton, Modal } from "antd";

import "../../../assets/css/trip.css";
import {
  avt,
  banner,
  error,
  voucher1,
  voucher2,
} from "../../../constants/images";
import RateScreen from "../../../components/rate";
import { Link } from "react-router-dom";
import Condition from "../../../components/condition";
import { sendDelete, sendGet, sendPut } from "../../../utils/api";
import OrderDetail from "./OrderDetail";
export default function MyTrip() {
  const { TabPane } = Tabs;
  const [dataProcessing, setDataProcessing] = useState([]);
  const [dataWaiting, setDataWaiting] = useState([]);
  const [dataEnd, setDataEnd] = useState([]);
  const [step, setStep] = useState(false);
  const [dataDetail, setDataDetail] = useState();
  const [isCancelTour, setIsCancelTour] = useState(false);
  const showModal = () => {
    setIsCancelTour(true);
  };
  const handleOk = () => {
    setIsCancelTour(false);
  };
  const handleCancel = () => {
    setIsCancelTour(false);
  };
  const tourWaitting = async () => {
    const result = await sendGet(`/orders/user`, {
      type: "waiting",
    });
    if (result.statusCode == 200) {
      setDataWaiting(result.returnValue);
    } else {
      message.error("thất bại");
    }
  };
  const tourProcessing = async () => {
    const result = await sendGet(`/orders/user`, {
      type: "processing",
    });
    if (result.statusCode == 200) {
      setDataProcessing(result.returnValue);
    } else {
      message.error("thất bại");
    }
  };
  const tourEnd = async () => {
    const result = await sendGet(`/orders/user`, {
      type: "end",
    });
    if (result.statusCode == 200) {
      setDataEnd(result.returnValue);
    } else {
      message.error("thất bại");
    }
  };
  const startUser = async (e) => {
    if (e.status == 3) {
      try {
        let res = await sendPut(`/orders/start-user/${e.id}`);
        if (res.statusCode == 200) {
          message.success("Thanh công");
        } else {
          message.error("thất bại");
        }
      } catch (error) {
        message.error("Chưa đến ngày bắt đầu");
      }
    } else message.success("Chuyến đi đang được thực hiện");
  };
  // huy và hoàn tiền
  const cancelTour = async (e) => {
    try {
      let res = await sendDelete(`/orders/user`, { orderId: e.id });
      if (res.statusCode == 200) {
        // huy chuyen di
        message.success("Hủy chuyến đi thành công");
        tourWaitting();
      } else {
        message.error("thất bại");
      }
    } catch (error) {
      message.error("Thất bại");
    }
  };
  const endTour = async (e) => {
    try {
      let res = await sendPut(`/orders/end-order`, {
        orderId: e.id,
      });
      if (res.statusCode == 200) {
        message.success("Xác nhận kết thúc tour thành công");
        tourEnd();
      } else {
        message.error("thất bại");
      }
    } catch (error) {
      message.error("Chưa đến hạn kết thúc chuyến đi");
    }
  };
  const handleStep = async (values) => {
    setStep(!step);
    setDataDetail(values);
  };
  const formatterPrice = new Intl.NumberFormat("vi-VN", {
    hour: "2-digit",
    minute: "numeric",
  });
  useEffect(() => {
    tourWaitting();
    tourEnd();
    tourProcessing();
  }, []);
  // if (!Object.keys(dataWaiting).length) return <Skeleton />;

  return (
    <>
      <Layout>
        <div className="My-trip__wrapper">
          <div className="content">
            <Tabs
              defaultActiveKey="1"
              className="mytrip-menu"
              tabPosition="left"
            >
              <TabPane
                tab={
                  <div className="mytrip-menu-item">
                    <i className="fa-solid fa-suitcase-rolling"></i>
                    <p className="mytrip-menu-name">Chuyến đi</p>
                  </div>
                }
                key="1"
              >
                {step ? (
                  <OrderDetail
                    dataDetail={dataDetail}
                    handleStep={handleStep}
                    tourWaitting={tourWaitting}
                    tourProcessing={tourProcessing}
                  />
                ) : (
                  <Tabs defaultActiveKey="1" className="mytrip-sub-menu">
                    <TabPane
                      tab={<p className="mytrip-sub-menu-name">Chờ xác nhận</p>}
                      key="1"
                    >
                      <div className="mytrip-order">
                        {dataWaiting?.map((value, index) => (
                          <div className="mytrip-order-item" key={index}>
                            <div className="mytrip-order__header">
                              <div className="mytrip-order__header-left">
                                <p className="mytrip-order__name">
                                  {value?.name}
                                </p>
                                <Link to="/chat">
                                  <div className="mytrip-order__chat">
                                    <i className="fa-regular fa-comments"></i>
                                    <p className="mytrip-order__contact">
                                      Chat
                                    </p>
                                  </div>
                                </Link>
                              </div>
                              <div className="mytrip-order__header-right">
                                {value.status == 0
                                  ? "Chờ xác nhận"
                                  : value.status == 1
                                  ? "Chờ đặt cọc"
                                  : value.status == 2
                                  ? "Chờ thanh toán"
                                  : value.status == 3
                                  ? "Chưa thực hiện"
                                  : value.status == 4
                                  ? "Đang thực hiện"
                                  : value.status == 5
                                  ? "Đã thực hiện"
                                  : "Đã hủy"}
                              </div>
                            </div>
                            <div className="mytrip-order__main">
                              <div
                                className="mytrip-order__main-left"
                                onClick={() => handleStep(value?.id)}
                              >
                                <img
                                  className="mytrip-order-img"
                                  alt=""
                                  src={
                                    value?.tour?.images[0].url
                                      ? value?.tour?.images[0].url
                                      : banner
                                  }
                                />
                                <div className="info-group">
                                  <h4
                                    className="mytrip-order-name"
                                    onClick={() => handleStep(value?.id)}
                                  >
                                    {value?.tour?.name}
                                  </h4>
                                  <h4 className="mytrip-order-time">
                                    {value?.startDate}
                                  </h4>
                                </div>
                              </div>
                              <div className="mytrip-order__main-right">
                                <p className="mytrip-order__main-price">
                                  {formatterPrice.format(
                                    value?.tour?.basePrice
                                  )}{" "}
                                  đ
                                </p>
                              </div>
                            </div>
                            <div className="mytrip-order__rate md-1">
                              {value.status < 2 ? (
                                <div className="button button--primary">
                                  <Popconfirm
                                    title="Hủy yêu cầu?"
                                    description="Xác nhận hủy chuyến đi"
                                    onConfirm={() => cancelTour(value)}
                                    okText="Đồng ý"
                                    cancelText="Hủy"
                                  >
                                    Hủy
                                  </Popconfirm>
                                </div>
                              ) : (
                                <>
                                  <div
                                    className="button button--primary"
                                    onClick={() => showModal()}
                                  >
                                    Hủy
                                  </div>
                                  <Modal
                                    title=""
                                    open={isCancelTour}
                                    visible={isCancelTour}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    footer={null}
                                  >
                                    <div className="modal-content">
                                      <p className="modal-title">
                                        Xác nhận hủy chuyến?
                                      </p>
                                      <div className="modal-img">
                                        <img alt="" src={error} />
                                      </div>
                                      <p className="modal-desc">
                                        Tiền cọc sẽ không được hoàn lại. Chắc
                                        chắn hủy?
                                      </p>
                                      <div className="button-group">
                                        <div
                                          className="button button--primary"
                                          onClick={() => cancelTour(value)}
                                        >
                                          Đồng ý
                                        </div>
                                        <div
                                          className="button button--normal"
                                          onClick={() => handleCancel()}
                                        >
                                          Hủy
                                        </div>
                                      </div>
                                    </div>
                                  </Modal>
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPane>
                    <TabPane
                      tab={
                        <p className="mytrip-sub-menu-name">Đang thực hiện</p>
                      }
                      key="2"
                    >
                      <div className="mytrip-order">
                        {dataProcessing?.map((value, index) => (
                          <div className="mytrip-order-item" key={index}>
                            <div className="mytrip-order__header">
                              <div className="mytrip-order__header-left">
                                <p className="mytrip-order__name">
                                  {value?.hdv}
                                </p>
                                <div className="mytrip-order__chat">
                                  <i className="fa-regular fa-comments"></i>
                                  <p className="mytrip-order__contact">Chat</p>
                                </div>
                              </div>{" "}
                              <div className="mytrip-order__header-right">
                                {value.status == 0
                                  ? "Chờ xác nhận"
                                  : value.status == 1
                                  ? "Chờ đặt cọc"
                                  : value.status == 2
                                  ? "Chờ thanh toán"
                                  : value.status == 3
                                  ? "Chưa thực hiện"
                                  : value.status == 4
                                  ? "Đang thực hiện"
                                  : value.status == 5
                                  ? "Đã thực hiện"
                                  : "Đã hủy"}
                              </div>
                            </div>
                            <div className="mytrip-order__main">
                              <div
                                className="mytrip-order__main-left"
                                onClick={() => handleStep(value?.id)}
                              >
                                <img
                                  className="mytrip-order-img"
                                  alt=""
                                  src={
                                    value?.tour?.images[0].url
                                      ? value?.tour?.images[0].url
                                      : banner
                                  }
                                />
                                <div className="info-group">
                                  <h4 className="mytrip-order-name">
                                    {value?.tour?.name}
                                  </h4>{" "}
                                  <h4 className="mytrip-order-time">
                                    {value?.startDate}
                                  </h4>
                                </div>
                              </div>
                              <div className="mytrip-order__main-right">
                                <p className="mytrip-order__main-price">
                                  {formatterPrice.format(value?.price)} đ
                                </p>
                              </div>
                            </div>
                            {value.status == 3 ? (
                              <div className="mytrip-order__rate">
                                Khởi hành vào ngày {value?.startDate}
                                <div
                                  className="button button--primary"
                                  onClick={() => startUser(value)}
                                >
                                  Bắt đầu
                                </div>
                              </div>
                            ) : (
                              <div className="mytrip-order__rate">
                                Kết thúc vào ngày vào ngày {value?.endDate}
                                <div
                                  className="button button--primary"
                                  onClick={() => endTour(value)}
                                >
                                  Kết thúc
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </TabPane>
                    <TabPane
                      tab={<p className="mytrip-sub-menu-name">Đã đi</p>}
                      key="3"
                    >
                      {" "}
                      <div className="mytrip-order">
                        {dataEnd?.map((value, index) => (
                          <div className="mytrip-order-item" key={index}>
                            <div className="mytrip-order__header">
                              <div className="mytrip-order__header-left">
                                <p className="mytrip-order__name">
                                  {value?.hdv}
                                </p>
                                <div className="mytrip-order__chat">
                                  <i className="fa-regular fa-comments"></i>
                                  <p className="mytrip-order__contact">Chat</p>
                                </div>
                              </div>{" "}
                              <div className="mytrip-order__header-right">
                                {value.status == 0
                                  ? "Chờ xác nhận"
                                  : value.status == 1
                                  ? "Chờ đặt cọc"
                                  : value.status == 2
                                  ? "Chờ thanh toán"
                                  : value.status == 3
                                  ? "Chưa thực hiện"
                                  : value.status == 4
                                  ? "Đang thực hiện"
                                  : value.status == 5
                                  ? "Đã thực hiện"
                                  : "Đã hủy"}
                              </div>
                            </div>
                            <div className="mytrip-order__main">
                              <div
                                className="mytrip-order__main-left"
                                onClick={() => handleStep(value?.id)}
                              >
                                <img
                                  className="mytrip-order-img"
                                  alt=""
                                  src={
                                    value?.tour?.images[0].url
                                      ? value?.tour?.images[0].url
                                      : banner
                                  }
                                />
                                <div className="info-group">
                                  <h4 className="mytrip-order-name">
                                    {value?.tour?.name}
                                  </h4>{" "}
                                  <h4 className="mytrip-order-time">
                                    {value?.startDate}
                                  </h4>
                                </div>
                              </div>
                              <div className="mytrip-order__main-right">
                                <p className="mytrip-order__main-price">
                                  {formatterPrice.format(value?.price)} đ
                                </p>
                              </div>
                            </div>
                            <div className="mytrip-order__rate ">
                              {value?.tour?.rates.length > 0 ? (
                                <>
                                  <p className="mytrip-order__rate-note">
                                    Đã đánh giá
                                  </p>
                                  {/* <RateScreen
                                  data={value}
                                  rate={value?.tour?.rates}
                                /> */}
                                </>
                              ) : (
                                <>
                                  <p className="mytrip-order__rate-note">
                                    Chưa nhận được đánh giá
                                  </p>

                                  <RateScreen data={value} />
                                </>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPane>
                  </Tabs>
                )}
              </TabPane>
              <TabPane
                tab={
                  <div className="mytrip-menu-item">
                    <i className="fa-solid fa-tags"></i>
                    <p className="mytrip-menu-name">Mã giảm giá</p>
                  </div>
                }
                key="2"
              >
                <h3 className="mytrip-voucher__search">Kho vocher</h3>
                <div className="mytrip-voucher-box-search">
                  <h4 className="mytrip-voucher__title">Mã giảm giá</h4>
                  <input placeholder="nhập mã voucher..." />
                  <div className="button button--primary">Tìm</div>
                </div>
                <Voucher />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </Layout>
    </>
  );
}
const Voucher = () => {
  const { TabPane } = Tabs;
  const [dataVoucher, setDataVoucher] = useState([]);
  const [dataVoucherAvailable, setdataVoucherAvailable] = useState([]);

  const listVoucher = async () => {
    let res = await sendGet(`/vourchers`);
    if (res.statusCode == 200) {
      setDataVoucher(res.returnValue.data);
    } else {
      message.error("thất bại");
    }
  };
  const listVoucherAvailable = async () => {
    let res1 = await sendGet(`/vourchers/available`);
    if (res1.statusCode == 200) {
      setdataVoucherAvailable(res1.returnValue?.data);
    } else {
      message.error("thất bại");
    }
  };
  const saveVoucher = async (e) => {
    try {
      let result = await sendPut(`/vourchers/${e}`);
      if (result.statusCode == 200) {
        message.success("Lưu voucher thành công");
      } else {
        message.error("thất bại");
      }
    } catch (error) {
      message.error("Bạn ko đủ xu để đổi voucher");
    }
  };
  useEffect(() => {
    listVoucher();
    listVoucherAvailable();
  }, []);
  if (!Object.keys(dataVoucher).length) return <Skeleton />;

  return (
    <>
      <Tabs defaultActiveKey="1" className="mytrip-sub-menu">
        <TabPane tab={<p className="mytrip-sub-menu-name">Của bạn</p>} key="1">
          <div className="mytrip-voucher">
            {dataVoucherAvailable ? (
              <>
                {dataVoucherAvailable?.map((item, index) => (
                  <div className="mytrip-voucher-item" key={index}>
                    <div className="mytrip-voucher-left">
                      <img
                        className="mytrip-voucher-img"
                        alt=""
                        src="https://vietteltelecom.vn/images_content/img-travel-pack-3.png"
                      />
                      <h4 className="mytrip-voucher-name">{item?.name}</h4>
                    </div>
                    <div className="mytrip-voucher-right">
                      <div className="mytrip-voucher-top">
                        <h3 className="mytrip-voucher-title">
                          {item?.description}
                        </h3>
                        <p className="mytrip-voucher-use">Dùng ngay</p>
                      </div>
                      <div className="mytrip-voucher-bottom">
                        <h3 className="mytrip-voucher-time">
                          Hạn sử dụng: {item?.endDate}
                        </h3>
                        <Condition data={item} />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p>Bạn chưa có voucher nào</p>
            )}
          </div>
        </TabPane>
        <TabPane tab={<p className="mytrip-sub-menu-name">Săn mã</p>} key="2">
          <div className="mytrip-voucher">
            {dataVoucher ? (
              <>
                {dataVoucher.map((item, index) => (
                  <div className="mytrip-voucher-item" key={index}>
                    <div className="mytrip-voucher-left">
                      <img
                        className="mytrip-voucher-img"
                        alt=""
                        src={voucher2}
                      />
                      <h4 className="mytrip-voucher-name">{item?.name}</h4>
                    </div>
                    <div className="mytrip-voucher-right">
                      <div className="mytrip-voucher-top">
                        <h3 className="mytrip-voucher-title">
                          {item?.description}
                        </h3>
                        <p
                          className="mytrip-voucher-use"
                          onClick={() => saveVoucher(item.id)}
                        >
                          Lưu mã
                        </p>
                      </div>
                      <div className="mytrip-voucher-bottom">
                        <h3 className="mytrip-voucher-time">
                          Hạn sử dụng: {item?.endDate}
                        </h3>
                        <Condition data={item} />
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p>Voucher chưa có sẵn</p>
            )}
          </div>
        </TabPane>
      </Tabs>
    </>
  );
};
