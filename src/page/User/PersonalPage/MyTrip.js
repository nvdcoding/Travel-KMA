/* eslint-disable */
import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import { Tabs, Popconfirm, message, Skeleton } from "antd";

import "../../../assets/css/trip.css";
import { avt } from "../../../constants/images";
import RateScreen from "../../../components/Rate";
import { Link } from "react-router-dom";
import Condition from "../../../components/condition";
import { sendGet } from "../../../utils/api";
export default function MyTrip() {
  const { TabPane } = Tabs;
  const [dataProcessing, setDataProcessing] = useState([]);
  const [dataWaiting, setDataWaiting] = useState([]);
  const [dataEnd, setDataEnd] = useState([]);
  const trip = [
    {
      hdv: "Nguyễn Văn B 1",
      status: 1,
      title: "Bắc Ninh ngày và đêm",
      rate: 0,
      price: "1200323",
      pricekm: "120000",
      id: "5738911173",
    },
    {
      hdv: "Nguyễn Văn B",
      status: 1,
      title: "Bắc Ninh ngày và đêm",
      rate: 0,
      price: "1200323",
      pricekm: "120000",
      id: "5738229173",
    },
    {
      hdv: "Nguyễn Văn B 155",
      status: 1,
      title: "Bắc Ninh ngày và đêm",
      rate: 0,
      price: "1200323",
      pricekm: "120000",
      id: "5738912173",
    },
    {
      hdv: "Nguyễn Văn B 1ử",
      status: 1,
      title: "Bắc Ninh ngày và đêm",
      rate: 0,
      price: "1200323",
      pricekm: "120000",
      id: "5738914373",
    },
    {
      hdv: "Nguyễn Văn B 1ưư",
      status: 1,
      title: "Bắc Ninh ngày và đêm",
      rate: 0,
      price: "1200323",
      pricekm: "120000",
      id: "57389432173",
    },
  ];
  const confirm = () => {
    message.success("Hủy chuyến đi thành công");
  };
  const accesss = () => {
    message.success("Xác nhận chuyến đi thành công");
  };
  const tourWaitting = async () => {
    const result = await sendGet(`/orders`, {
      type: "waiting",
    });
    if (result.statusCode == 200) {
      setDataWaiting(result.returnValue);
    } else {
      message.error("thất bại");
    }
  };
  const tourProcessing = async () => {
    const result = await sendGet(`/orders`, {
      type: "processing",
    });
    if (result.statusCode == 200) {
      setDataProcessing(result.returnValue);
    } else {
      message.error("thất bại");
    }
  };
  const tourEnd = async () => {
    const result = await sendGet(`/orders`, {
      type: "end",
    });
    if (result.statusCode == 200) {
      setDataEnd(result.returnValue);
    } else {
      message.error("thất bại");
    }
  };
  useEffect(() => {
    tourWaitting();
    tourEnd();
    tourProcessing();
  }, []);
  if (!Object.keys(dataWaiting).length) return <Skeleton />;

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
                <Tabs defaultActiveKey="0" className="mytrip-sub-menu">
                  <TabPane
                    tab={<p className="mytrip-sub-menu-name">Tour gợi ý</p>}
                    key="0"
                  >
                    <div className="mytrip-order">
                      {trip.map((value, index) => (
                        <div className="mytrip-order-item" key={index}>
                          <div className="mytrip-order__header">
                            <div className="mytrip-order__header-left">
                              <p className="mytrip-order__name">{value.hdv}</p>
                              <Link to="/chat">
                                <div className="mytrip-order__chat">
                                  <i className="fa-regular fa-comments"></i>
                                  <p className="mytrip-order__contact">Chat</p>
                                </div>
                              </Link>
                            </div>
                            <div className="mytrip-order__header-right">
                              Gợi ý
                            </div>
                          </div>
                          <div className="mytrip-order__main">
                            <div className="mytrip-order__main-left">
                              <img
                                className="mytrip-order-img"
                                alt=""
                                src={avt}
                              />
                              <h4 className="mytrip-order-name">
                                <Link to={`/tour/${value.id}`}>
                                  {value.title}
                                </Link>
                              </h4>
                            </div>
                            <div className="mytrip-order__main-right">
                              <p className="mytrip-order__main-price">
                                {value.price}
                              </p>
                              <p className="mytrip-order__main-price-km">
                                {value.pricekm}
                              </p>
                            </div>
                          </div>
                          <div className="mytrip-order__rate md-1">
                            <div className="button button--primary">
                              <Popconfirm
                                title="Đồng ý chuyến đi"
                                description=""
                                onConfirm={accesss}
                                okText="Đồng ý"
                                cancelText="Hủy"
                              >
                                Đồng ý
                              </Popconfirm>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabPane>
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
                                  <p className="mytrip-order__contact">Chat</p>
                                </div>
                              </Link>
                            </div>
                            <div className="mytrip-order__header-right">
                              Chờ xác nhận
                            </div>
                          </div>
                          <div className="mytrip-order__main">
                            <div className="mytrip-order__main-left">
                              <img
                                className="mytrip-order-img"
                                alt=""
                                src={avt}
                              />
                              <h4 className="mytrip-order-name">
                                <Link to={`/tour/${value?.id}`}>
                                  {value?.tour?.name}
                                </Link>
                              </h4>
                            </div>
                            <div className="mytrip-order__main-right">
                              <p className="mytrip-order__main-price">
                                {value?.tour?.basePrice}
                              </p>
                              <p className="mytrip-order__main-price-km">
                                {value?.tour?.pricekm}
                              </p>
                            </div>
                          </div>
                          <div className="mytrip-order__rate md-1">
                            <div className="button button--primary">
                              <Popconfirm
                                title="Hủy yêu cầu?"
                                description="Xác nhận hủy chuyến đi"
                                onConfirm={confirm}
                                okText="Đồng ý"
                                cancelText="Hủy"
                              >
                                Hủy
                              </Popconfirm>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabPane>
                  <TabPane
                    tab={<p className="mytrip-sub-menu-name">Đang thực hiện</p>}
                    key="2"
                  >
                    {dataProcessing?.map((value, index) => (
                      <div className="mytrip-order-item" key={index}>
                        <div className="mytrip-order__header">
                          <div className="mytrip-order__header-left">
                            <p className="mytrip-order__name">{value?.hdv}</p>
                            <div className="mytrip-order__chat">
                              <i className="fa-regular fa-comments"></i>
                              <p className="mytrip-order__contact">Chat</p>
                            </div>
                          </div>{" "}
                          <div className="mytrip-order__header-right">
                            Đang thực hiện
                          </div>
                        </div>
                        <div className="mytrip-order__main">
                          <div className="mytrip-order__main-left">
                            <img
                              className="mytrip-order-img"
                              alt=""
                              src={avt}
                            />
                            <h4 className="mytrip-order-name">
                              <Link to={`/tour/${value?.id}`}>
                                {value?.name}
                              </Link>
                            </h4>
                          </div>
                          <div className="mytrip-order__main-right">
                            <p className="mytrip-order__main-price">
                              {value?.price}
                            </p>
                            <p className="mytrip-order__main-price-km">
                              {value?.pricekm}
                            </p>
                          </div>
                        </div>
                        <div className="mytrip-order__rate md-1">
                          Khởi hành vào ngày {value?.startDate}
                        </div>
                      </div>
                    ))}
                  </TabPane>
                  <TabPane
                    tab={<p className="mytrip-sub-menu-name">Đã đi</p>}
                    key="3"
                  >
                    {dataEnd?.map((value, index) => (
                      <div className="mytrip-order-item" key={index}>
                        <div className="mytrip-order__header">
                          <div className="mytrip-order__header-left">
                            <p className="mytrip-order__name">{value?.hdv}</p>
                            <div className="mytrip-order__chat">
                              <i className="fa-regular fa-comments"></i>
                              <p className="mytrip-order__contact">Chat</p>
                            </div>
                          </div>{" "}
                          <div className="mytrip-order__header-right">
                            Đã đi
                          </div>
                        </div>
                        <div className="mytrip-order__main">
                          <div className="mytrip-order__main-left">
                            <img
                              className="mytrip-order-img"
                              alt=""
                              src={avt}
                            />
                            <h4 className="mytrip-order-name">
                              <Link to={`/tour/${value?.id}`}>
                                {value?.name}
                              </Link>
                            </h4>
                          </div>
                          <div className="mytrip-order__main-right">
                            <p className="mytrip-order__main-price">
                              {value?.price}
                            </p>
                            <p className="mytrip-order__main-price-km">
                              {value?.pricekm}
                            </p>
                          </div>
                        </div>
                        <div className="mytrip-order__rate">
                          <p className="mytrip-order__rate-note">
                            Không nhận được đánh giá
                          </p>
                          <RateScreen data={value} />
                        </div>
                      </div>
                    ))}
                  </TabPane>
                </Tabs>
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
                <Tabs defaultActiveKey="1" className="mytrip-sub-menu">
                  <TabPane
                    tab={<p className="mytrip-sub-menu-name">Hiệu lực</p>}
                    key="1"
                  >
                    <div className="mytrip-voucher">
                      <div className="mytrip-voucher-item">
                        <div className="mytrip-voucher-left">
                          <img
                            className="mytrip-voucher-img"
                            alt=""
                            src="https://vietteltelecom.vn/images_content/img-travel-pack-3.png"
                          />
                          <h4 className="mytrip-voucher-name"> Voucher</h4>
                        </div>
                        <div className="mytrip-voucher-right">
                          <div className="mytrip-voucher-top">
                            <h3 className="mytrip-voucher-title">
                              Giảm 10% đơn 20k giảm 210k
                            </h3>
                            <p className="mytrip-voucher-use">Dùng ngay</p>
                          </div>
                          <div className="mytrip-voucher-bottom">
                            <h3 className="mytrip-voucher-time">
                              Sắp hết hạn: Còn 4 giờ
                            </h3>
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
                          <h4 className="mytrip-voucher-name"> Voucher</h4>
                        </div>
                        <div className="mytrip-voucher-right">
                          <div className="mytrip-voucher-top">
                            <h3 className="mytrip-voucher-title">
                              Giảm 10% đơn 20k giảm 210k
                            </h3>
                            <p className="mytrip-voucher-use">Dùng ngay</p>
                          </div>
                          <div className="mytrip-voucher-bottom">
                            <h3 className="mytrip-voucher-time">
                              Sắp hết hạn: Còn 4 giờ
                            </h3>
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
                            <h3 className="mytrip-voucher-time">
                              Sắp hết hạn: Còn 4 giờ
                            </h3>
                            <Condition />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                  <TabPane
                    tab={<p className="mytrip-sub-menu-name">Hết hiệu lực</p>}
                    key="2"
                  >
                    <div className="mytrip-voucher voucher-expires">
                      <div className="mytrip-voucher-item">
                        <div className="mytrip-voucher-left">
                          <img
                            className="mytrip-voucher-img"
                            alt=""
                            src="https://vietteltelecom.vn/images_content/img-travel-pack-3.png"
                          />
                          <h4 className="mytrip-voucher-name"> Voucher</h4>
                        </div>
                        <div className="mytrip-voucher-right">
                          <div className="mytrip-voucher-top">
                            <h3 className="mytrip-voucher-title">
                              Giảm 10% đơn 20k giảm 210k
                            </h3>
                            <p className="mytrip-voucher-use">Dùng ngay</p>
                          </div>
                          <div className="mytrip-voucher-bottom">
                            <h3 className="mytrip-voucher-time">
                              Sắp hết hạn: Còn 4 giờ
                            </h3>
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
                          <h4 className="mytrip-voucher-name"> Voucher</h4>
                        </div>
                        <div className="mytrip-voucher-right">
                          <div className="mytrip-voucher-top">
                            <h3 className="mytrip-voucher-title">
                              Giảm 10% đơn 20k giảm 210k
                            </h3>
                            <p className="mytrip-voucher-use">Dùng ngay</p>
                          </div>
                          <div className="mytrip-voucher-bottom">
                            <h3 className="mytrip-voucher-time">
                              Sắp hết hạn: Còn 4 giờ
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPane>
                </Tabs>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </Layout>
    </>
  );
}
