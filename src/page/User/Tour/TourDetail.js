/* eslint-disable eqeqeq */
/* eslint-disable */
import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import { useHistory, useParams } from "react-router-dom";
import "../../../assets/css/tour-detail.css";
import {
  Input,
  InputNumber,
  message,
  Form,
  DatePicker,
  Modal,
  Button,
  Skeleton,
} from "antd";
import Condition from "../../../components/condition";
import { sendGet, sendPost } from "../../../utils/api";

export default function TourDetail() {
  const [number, setNumber] = useState(1);
  const [priceNumber, setPriceNumber] = useState(20000);
  const [date, setdate] = useState("");
  const [data, setData] = useState([]);
  const param = useParams();
  const history = useHistory();
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setdate(dateString);
  };

  const onFinish = async (values) => {
    values.tourId = 1;
    values.startDate = date;
    let respon = await sendPost("/orders", values);
    if (respon.statusCode == 0) {
      message.success("gửi yêu cầu thành công");
      history.push("/chuyen-di");
    } else {
      message.error("thất bại");
    }
  };
  const handleNumber = (value) => {
    setNumber(value);
    setPriceNumber(priceNumber * number);
    return priceNumber * number;
  };
  const dataTour = async () => {
    const res = await sendGet(`/tours/${param.id}`);
    if (res.statusCode == 200) {
      setData(res.returnValue);
    } else {
      message.error("Lỗi hệ thống");
    }
  };
  useEffect(() => {
    dataTour();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!Object.keys(data).length) return <Skeleton />;
  return (
    <>
      <Layout>
        <div className="tour-detail">
          <div className="banner">
            <img alt="" src={data?.images[0]?.url} />
          </div>
          <div className="content">
            <div className="pathway">
              <ul>
                <li>
                  <a href="/">Trang chủ</a>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </li>
                <li>Du lịch</li>
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </li>
                <li>
                  <strong>Chi tiết</strong>
                </li>
              </ul>
            </div>
            <div className="tour-detail__content">
              <div className="tour-detail__left">
                <img
                  className="tour-detail__img-introduce"
                  alt=""
                  src={data?.images[0]?.url}
                />
                <h3 className="travel-title">{data?.name}</h3>
                <p className="travel-des">{data?.description}</p>
                <div className="tour-detail__main">
                  <div className="tour-detail__services">
                    <h4 className="tour-detail__name">Dịch vụ</h4>
                    <div className="tour-detail__item">
                      <div className="tour-detail__item-title">
                        <p>Bao gồm:</p>
                      </div>
                      <div className="tour-detail__item-des">
                        <ul>
                          <li>
                            6 đêm lưu trú tại các khách sạn có vị trí hoàn hảo
                          </li>
                          <li>Bữa sáng 6x, bữa trưa 2x</li>
                          <li>
                            Tất cả các chuyển với tài xế riêng và xe hiện đại
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="tour-detail__item">
                      <div className="tour-detail__item-title">
                        <p>Không bao gồm:</p>
                      </div>
                      <div className="tour-detail__item-des">
                        <ul>
                          <li>Chuyến bay quốc tế</li>
                          <li>Phí visa, nếu có</li>
                        </ul>
                      </div>
                    </div>
                    <div className="tour-detail__item">
                      <div className="tour-detail__item-title">
                        <p>Tùy chọn:</p>
                      </div>
                      <div className="tour-detail__item-des">
                        <ul>
                          <li>
                            Buổi biểu diễn ăn tối tại Peña với các điệu múa dân
                            gian truyền thống ( từ USD $ 50 mỗi người )
                          </li>
                        </ul>
                      </div>
                    </div>
                    <h4 className="tour-detail__name">Giá cả</h4>
                    <p className="tour-detail__sub-name">
                      Giá mỗi người và không bao gồm các chuyến bay quốc tế.
                    </p>
                    <table>
                      <tbody>
                        <tr>
                          <td>Số lượng 1</td>
                          <td>Giá tour</td>
                          <td>Phát sinh</td>
                        </tr>
                        <tr>
                          <td>{data?.basePrice}</td>
                          <td>{data?.maxPrice}</td>
                          <td>{data?.feePerMember}</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="tour-detail__sub-des">
                      Các chuyến đi riêng của chúng tôi hoàn toàn có thể tùy
                      chỉnh và có thể bắt đầu vào bất kỳ ngày nào.
                    </p>
                  </div>
                  <div className="tour-detail__journeys">
                    <div className="tour-detail__basic">
                      <h3 className="travel-title">Hành trình cơ bản</h3>
                      <table className="table-journeys">
                        <tbody>
                          {data?.tourSchedule.map((value, index) => (
                            <tr>
                              <td>
                                <p className="tour-detail__time">
                                  Ngày {index + 1}
                                </p>
                              </td>
                              <td>
                                <p className="tour-detail_location">
                                  {value?.name ? value?.name : "tiêu đề"}
                                </p>
                                <p className="tour-detail_location-des">
                                  {value?.content}
                                </p>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="banner-create__tour">
                      <p className="banner-create__tour-title">
                        Các chuyến đi riêng của chúng tôi hoàn toàn có thể tùy
                        chỉnh và có thể bắt đầu vào bất kỳ ngày nào.
                      </p>
                      <a className="button button--primary">
                        Tùy chỉnh chuyến đi này
                      </a>
                    </div>
                    <div className="tour-detail__detail">
                      <h3 className="travel-title">Hành trình chi tiết</h3>
                      {data?.tourSchedule.map((value, index) => (
                        <div className="tour-detail__card">
                          <img alt="" src={data?.images[0]?.url} />
                          <div className="tour-detail-body">
                            <h3 className="tour-detail__district">La Paz</h3>
                            <h4 className="tour-detail__overview">
                              Ngày {index + 1}: {value?.name}
                            </h4>
                            <p className="tour-detail__introduce">
                              {value?.desc ? value?.desc : value?.content}
                            </p>
                            {/* <div className="tour-detail__icon">
                            <p>
                              <i className="fa-solid fa-utensils"></i>Các bữa
                              ăn: Bữa sáng, Bữa trưa
                            </p>
                            <p>
                              <i className="fa-solid fa-hotel"></i>Khách sạn
                            </p>
                          </div> */}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="tour-detail__map">
                    <h3 className="travel-title">Bản đồ</h3>
                    <div className="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100136.43773936549!2d106.05061300956659!3d21.138758589447296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31350c5b3464ae51%3A0x1a3035b9749102f9!2zVHAuIELhuq9jIE5pbmgsIELhuq9jIE5pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1669779861391!5m2!1svi!2s"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tour-detail__right">
                <div className="tour-detail__plan">
                  <div className="tour-detail__plan-header">
                    <img
                      alt=""
                      src="https://viettel.vn/images_content/img-solution-camera-2.png"
                    />
                    <div className="tour-detail__plan-info">
                      <span className="tour-plan__review">
                        Lên kế hoạch cho chuyến tham quan của bạn với HDV
                      </span>
                      <p className="tour-plan__name">
                        {data?.tourGuide?.username
                          ? data?.tourGuide?.username
                          : "Tên HDV"}
                      </p>
                      <div className="tour-plan__rate">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                  <div className="tour-detail__plan-body">
                    <Form
                      name="normal_senyc"
                      className="sendyc-form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                    >
                      <Form.Item
                        name="startDate"
                        label="Ngày bắt đầu:"
                        rules={[
                          {
                            required: true,
                            message: "Ngày bắt đầu ko để trống!",
                          },
                        ]}
                      >
                        <DatePicker onChange={onChange} />
                      </Form.Item>
                      <Form.Item
                        name="numberOfMember"
                        label="Số lượng:"
                        rules={[
                          {
                            required: true,
                            message: "số lượng ko để trống!",
                          },
                        ]}
                        initialValue={1}
                      >
                        <InputNumber
                          placeholder="Số lượng"
                          defaultValue={1}
                          onChange={handleNumber}
                        />
                      </Form.Item>
                      <Form.Item name="desc" label="Mô tả:">
                        <Input placeholder="Nhập yêu cầu" />
                      </Form.Item>
                      <div className="price">
                        <Form.Item
                          name="priceNumber"
                          label="Chi phí về số lượng"
                          getValueFromEvent={handleNumber}
                          initialValue={priceNumber}
                        >
                          <InputNumber
                            disabled
                            placeholder="Chi phí về số lượng"
                            value={priceNumber}
                            defaultValue={priceNumber}
                          />
                        </Form.Item>
                        <Form.Item
                          name="priceTour"
                          label="Chi phí về tour"
                          initialValue={20000}
                        >
                          <InputNumber placeholder="Chi phí về tour" />
                        </Form.Item>

                        <Form.Item
                          name="voucher"
                          label="Mã giảm giá"
                          initialValue="KM2"
                        >
                          <ModalVoucher />
                        </Form.Item>
                        <Form.Item
                          name="price"
                          label="Tổng chi phí"
                          initialValue={20000}
                        >
                          <InputNumber placeholder="Tổng chi phí" />
                        </Form.Item>
                        <Form.Item
                          name="price_km"
                          label="Trả giá"
                          initialValue={20000}
                        >
                          <InputNumber placeholder="Trả giá" />
                        </Form.Item>
                      </div>
                      <Button
                        htmlType="submit"
                        className="button button--primary"
                      >
                        Yêu cầu
                      </Button>
                    </Form>
                  </div>
                </div>
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
