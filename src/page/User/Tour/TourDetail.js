/* eslint-disable eqeqeq */
/* eslint-disable */
import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import { Link, useHistory, useParams } from "react-router-dom";
import "../../../assets/css/tour-detail.css";
import OwlCarousel from "react-owl-carousel";
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
import { haiphong, halong, hanoi } from "../../../constants/images";

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
    values.tourId = data.id;
    values.startDate = date;
    let respon = await sendPost("/orders", values);
    if (respon.statusCode == 200) {
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
        <div className="tour-detail single-box-content">
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
              <div className="single-box-content-inner tour-detail__left">
                <h1 className="title-tour">{data?.name}</h1>
                <div className="single-content">
                  <div className="owl-image">
                    <OwlCarousel
                      className="owl-theme"
                      loop
                      margin={10}
                      nav={false}
                      autoplay={false}
                      dots={true}
                      items={1}
                    >
                      {data?.images.map((item, index) => (
                        <div className="tour-detail__img-introduce" key={index}>
                          <img src={item.url} alt="" />
                        </div>
                      ))}
                    </OwlCarousel>
                  </div>
                  <div className="box-tlb-tour">
                    <table className="tlb-info-tour">
                      <tbody>
                        <tr>
                          <td>
                            <i
                              className="fa fa-map-marker-alt"
                              aria-hidden="true"
                            />
                            {data?.province?.name}
                          </td>
                          <td>
                            <i className="fa fa-clock-o" aria-hidden="true" />
                            <span>{data?.tourSchedule.length} ngày</span>
                          </td>
                          <td></td>
                        </tr>
                        <tr>
                          <td colSpan={3}>
                            <span className="title-tour">Mã tour: </span>
                            <span className="id-tour">{data?.id}</span>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={3}>
                            <i
                              className="fa fa-calendar-alt"
                              aria-hidden="true"
                            />
                            Khởi hành từ: <span>{data?.createdAt}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="single-box-excerpt">
                    <p style={{ textAlign: "justify" }}>
                      <b>{data?.description} </b>
                    </p>
                    <p style={{ textAlign: "justify" }}>
                      <span style={{ color: "#FF0000" }}>
                        <u>
                          <b>ĐIỂM NỔI BẬT NHẤT:</b>
                        </u>
                      </span>
                    </p>
                    <ul>
                      <li style={{ textAlign: "justify" }}>
                        <span style={{ color: "#008000" }}>
                          {data?.description}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="panel-group"
                    id="tour-product"
                    role="tablist"
                    aria-multiselectable="true"
                  >
                    <div className="panel panel-tour-product">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="heading-program-tour-0"
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            id="a-title-program-tour-0"
                            data-toggle="collapse"
                            data-parent="#tour-product"
                            href="#program-tour-0"
                            aria-expanded="true"
                            aria-controls="program-tour-0"
                            className=""
                          >
                            Chương trình tour
                            <i className="pull-right fa fa-chevron-down" />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="program-tour-0"
                        className="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="heading-program-tour-0"
                        style={{ height: "auto" }}
                      >
                        <div className="panel-body content-tour-item content-tour-tab-program-tour-0 active">
                          {data?.tourSchedule.map((value, index) => (
                            <>
                              <h3 style={{ textAlign: "justify" }}>
                                <span style={{ color: "#B22222" }}>
                                  <strong> Ngày {index + 1}</strong>
                                </span>
                              </h3>

                              <p style={{ textAlign: "justify" }}>
                                {value?.name ? value?.name : "tiêu đề"}
                              </p>
                              <p style={{ textAlign: "justify" }}>
                                {value?.content}
                              </p>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-tour-product">
                      <div
                        className="panel-heading"
                        role="tab"
                        id="heading-tour-rule-2"
                      >
                        <h4 className="panel-title">
                          <a
                            role="button"
                            id="a-title-tour-rule-2"
                            data-toggle="collapse"
                            data-parent="#tour-product"
                            href="#tour-rule-2"
                            aria-expanded="true"
                            aria-controls="tour-rule-2"
                            className="collapsed"
                          >
                            Quy định
                            <i className="pull-right fa fa-chevron-down" />
                          </a>
                        </h4>
                      </div>
                      <div
                        id="tour-rule-2"
                        className="panel-collapse collapse"
                        role="tabpanel"
                        aria-labelledby="heading-tour-rule-2"
                        style={{ height: 0 }}
                      >
                        <div className="panel-body content-tour-item content-tour-tab-tour-rule-2 active">
                          <p>
                            <meta charSet="utf-8" />
                          </p>
                          <h3 dir="ltr" style={{ textAlign: "center" }}>
                            <span style={{ color: "#B22222" }}>
                              <u>
                                <strong>QUY TRÌNH ĐĂNG KÝ TOUR</strong>
                              </u>
                            </span>
                          </h3>
                          <ul dir="ltr">
                            <li
                              role="presentation"
                              style={{ textAlign: "justify" }}
                            >
                              <strong>Đợt 01:</strong> Quý khách thanh toán 70%
                              giá trị của tour ngay khi đăng ký mua tour.​​
                            </li>
                            <li
                              role="presentation"
                              style={{ textAlign: "justify" }}
                            >
                              <strong>Đợt 02:</strong> Quý khách thanh toán 30%
                              giá trị của tour trước lịch khởi hành
                              07&nbsp;ngày.
                            </li>
                          </ul>
                          <p dir="ltr" style={{ textAlign: "justify" }}>
                            <u>
                              <strong>*Lưu ý:</strong>
                            </u>
                            Đối với những tour quý khách đăng ký sát lịch khởi
                            hành từ 03&nbsp;cho đến 07&nbsp;ngày, quý khách vui
                            lòng liên hệ
                            <span style={{ color: "#FF0000" }}>1900 3398</span>
                            để xác nhận số chỗ còn lại và&nbsp;thanh toán 100%
                            giá trị của tour.
                          </p>
                          <h3 dir="ltr" style={{ textAlign: "center" }}>
                            <span style={{ color: "#B22222" }}>
                              <u>
                                <strong>ĐIỀU KIỆN HỦY TOUR</strong>
                              </u>
                            </span>
                          </h3>
                          <p dir="ltr" style={{ textAlign: "justify" }}>
                            <u>
                              <em>
                                <strong>
                                  Trường hợp hủy bỏ dịch vụ từ Ktravel:
                                </strong>
                              </em>
                            </u>
                          </p>
                          <p dir="ltr" style={{ textAlign: "justify" }}>
                            Nếu <strong>Ktravel</strong> không thực hiện được
                            chuyến du lịch/ dịch vụ, công ty phải báo ngay cho
                            khách hàng biết và thanh toán lại cho khách hàng
                            toàn bộ số tiền mà khách hàng đã đóng trong vòng 3
                            ngày kể từ lúc chính thức thông báo hủy chuyến đi/
                            dịch vụ du lịch bằng hình thức tiền mặt hoặc chuyển
                            khoản.
                          </p>
                          <p dir="ltr" style={{ textAlign: "justify" }}>
                            <em>
                              <strong>
                                <u>
                                  Trường hợp hủy bỏ dịch vụ từ Quý khách hàng:
                                </u>
                              </strong>
                            </em>
                          </p>
                          <p dir="ltr" style={{ textAlign: "justify" }}>
                            Trong trường hợp không thể tiếp tục sử dụng dịch vụ/
                            tour, Quý khách phải thông báo cho Công ty bằng văn
                            bản hoặc email (Không giải quyết các trường hợp liên
                            hệ chuyển/ hủy tour qua điện thoại). Đồng thời Quý
                            khách vui lòng mang Biên bản đăng ký tour/ dịch vụ
                            &amp; biên lai đóng tiền đến văn phòng Vietnam
                            Booking để làm thủ tục hủy/ chuyển tour.
                          </p>
                          <ul dir="ltr">
                            <li style={{ textAlign: "justify" }}>
                              Các trường hợp chuyển/ đổi dịch vụ/ tour: Cty sẽ
                              căn cứ xem xét tình hình thực tế để tính phí và có
                              mức hỗ trợ Quý khách hàng
                            </li>
                            <li style={{ textAlign: "justify" }}>
                              Trường hợp hủy dịch vụ/ tour: Quý khách phải chịu
                              chi phí hủy tour/ dịch vụ theo quy định của
                              Ktravel và toàn bộ phí ngân hàng cho việc thanh
                              toán trực tuyến.
                            </li>
                          </ul>
                          <p style={{ textAlign: "justify" }}>
                            <strong>Phí hủy được quy định như sau:</strong>
                          </p>
                          <ul>
                            <li>
                              Ngay sau khi đặt cọc hoặc thanh toán hoặc trước 10
                              ngày: phí hủy 30% tiền tour.
                            </li>
                            <li>
                              Hủy 7 ngày trước ngày khởi hành: phí hủy 50% tiền
                              tour.
                            </li>
                            <li>
                              Hủy 3 ngày trước ngày khởi hành: phí hủy 85% tiền
                              tour
                            </li>
                            <li>
                              Hủy 05 ngày trước ngày khởi hành: phí hủy 100%
                              tiền tour
                            </li>
                            <li>
                              Trường hợp quý khách đến trễ giờ khởi hành được
                              tính là hủy 05&nbsp;ngày trước ngày khởi hành.
                            </li>
                            <li>
                              Giai đoạn Lễ/Tết: không hoàn, không hủy, không
                              đổi.
                            </li>
                          </ul>
                          <p>
                            Việc huỷ bỏ chuyến đi phải được thông báo trực tiếp
                            với Công ty hoặc qua fax, email, tin nhắn và phải
                            được Công ty xác nhận. Việc huỷ bỏ bằng điện thoại
                            không được chấp nhận.
                          </p>
                          <p>
                            Các ngày đặt cọc, thanh toán, huỷ và dời tour: không
                            tính thứ 07, Chủ Nhật.
                          </p>
                          <p>
                            Đến ngày hẹn thanh toán 100% giá trị tour, nếu quý
                            khách không thực hiện thanh toán đúng hạn và đúng số
                            tiền, xem như quý khách tự ý&nbsp;hủy tour và mất
                            hết số tiền đặt cọc giữ chỗ.
                          </p>
                          <h3 dir="ltr" style={{ textAlign: "center" }}>
                            <span style={{ color: "#B22222" }}>
                              <u>
                                <strong>NHỮNG LƯU Ý KHÁC</strong>
                              </u>
                            </span>
                          </h3>
                          <ul>
                            <li>
                              Quý khách phải mang theo: giấy tờ tùy thân hợp
                              pháp (CMND hoặc Passport).
                            </li>
                            <li>
                              Trẻ em dưới 14 tuổi có thể sử dụng giấy khai sinh
                              bản sao hoặc Hộ chiếu.
                            </li>
                            <li>
                              Trẻ em từ 14 tuổi trở lên phải có Thẻ căn cước
                              hoặc Hộ chiếu.
                            </li>
                            <li>
                              Quý khách nên mang theo: thuốc chống côn trùng,
                              thuốc cảm sốt thông thường hoặc các thuốc đã được
                              kê đơn riêng theo chỉ định của bác sĩ.
                            </li>
                            <li>
                              Quý khách là người ăn chay vui lòng mang thêm đồ
                              ăn chay để đảm bảo khẩu vị của mình.
                            </li>
                            <li>
                              Bất cứ dịch vụ nào trong tour nếu quý khách không
                              sử dụng cũng không được hoàn lại.
                            </li>
                            <li>
                              Hướng dẫn viên có quyền sắp xếp lại thứ tự các
                              điểm thăm quan cho phù hợp điều kiện từng ngày
                              khởi hành cụ thể nhưng vẫn đảm bảo tất cả các điểm
                              thăm quan trong chương trình.
                            </li>
                            <li>
                              Trường hợp mua đồ hải sản phải được đựng trong
                              thùng xốp dán kín và sạch sẽ. Lái xe có quyền từ
                              chối vận chuyển nếu Quý khách mang theo đồ hải sản
                              lên xe mà không được đóng gói cẩn thận.
                            </li>
                          </ul>
                          <p
                            dir="ltr"
                            role="presentation"
                            style={{ textAlign: "justify" }}
                          >
                            **Trong những trường hợp khách quan như: khủng bố,
                            thiên tai… hoặc do có sự cố, có sự thay đổi lịch
                            trình của các phương tiện vận chuyển công cộng như:
                            máy bay, tàu hỏa… thì Ktravel&nbsp;sẽ giữ quyền thay
                            đổi lộ trình bất cứ lúc nào vì sự thuận tiện, an
                            toàn cho khách hàng và sẽ không chịu trách nhiệm bồi
                            thường những thiệt hại phát sinh**.
                          </p>
                          <p
                            dir="ltr"
                            role="presentation"
                            style={{ textAlign: "justify" }}
                          >
                            ***Nếu số khách tham gia không đủ số lượng tối thiểu
                            để khởi hành, Công ty sẽ hỗ trợ dời sang ngày khởi
                            hành gần nhất hoặc hoàn lại phí tour như đã đặt
                            cọc&nbsp;cho quý khách​***.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-form-price-tour horizontal box-left">
                    <Form
                      name="normal_senyc"
                      className="sendyc-form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                    >
                      <table className="tlb-box-price-tour">
                        <tbody>
                          <tr>
                            <td>
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
                                <DatePicker
                                  onChange={onChange}
                                  className="form-control txt-date-start hasDatepicker"
                                />
                              </Form.Item>
                            </td>
                            <td>
                              <Form.Item
                                name="numberOfMember"
                                label="Số khách:"
                                rules={[
                                  {
                                    required: true,
                                    message: "số lượng ko để trống!",
                                  },
                                ]}
                              >
                                <InputNumber
                                  className="form-control slc-tour-people"
                                  placeholder="Số lượng"
                                  onChange={handleNumber}
                                />
                              </Form.Item>
                            </td>
                            <td>
                              <Button
                                htmlType="submit"
                                className="button button--primary"
                              >
                                Đặt tour
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Form>
                  </div>
                </div>
                <div className="box-tour-product-relative  ">
                  <h4>Các tour khác có thể bạn quan tâm</h4>
                  <ul>
                    <li>
                      <Link to="">
                        <div className="box-img">
                          <img alt="" src={halong} />
                        </div>
                        <div className="box-content">
                          <div className="title-h4">
                            Tour du lịch Mỹ Tho – Cần Thơ 2 ngày 1 đêm giá tốt,
                            khởi hành từ TPHCM
                          </div>
                          <div className="box-price">
                            Giá: <span>2,190,000 VND</span>
                          </div>
                          <div className="box-date-start">
                            <i
                              className="fa fa-calendar-alt"
                              aria-hidden="true"
                            />{" "}
                            Khởi hành: KH 30-04, Thứ 2, chủ nhật hàng tuần
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tour-detail__right">
                <div className="tour-detail__plan">
                  <div className="box-form-price-tour vertical">
                    <Form
                      name="normal_senyc"
                      className="sendyc-form"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                    >
                      <table className="tlb-box-price-tour">
                        <tbody>
                          <tr>
                            <td colSpan={2}>
                              <span className="price-tour">
                                <div className="title-price-old">
                                  {/* <del>6,129,000 VND</del> */}
                                </div>
                                {data?.basePrice.toLocaleString('en-US', {style : 'currency', currency : 'VND'})}{" "}
                                <span>VND/{data?.numOfFreeMember}người</span>
                              </span>
                            </td>
                          </tr>
                          <tr>
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
                              <DatePicker
                                onChange={onChange}
                                className="form-control txt-date-start hasDatepicker"
                              />
                            </Form.Item>
                          </tr>
                          <tr>
                            <Form.Item
                              name="numberOfMember"
                              label="Số khách:"
                              rules={[
                                {
                                  required: true,
                                  message: "số lượng ko để trống!",
                                },
                              ]}
                            >
                              <InputNumber
                                className="form-control slc-tour-people"
                                placeholder="Số lượng"
                                onChange={handleNumber}
                              />
                            </Form.Item>
                          </tr>
                        </tbody>
                      </table>
                      <Button
                        htmlType="submit"
                        className="button button--primary"
                      >
                        Đặt tour
                      </Button>
                    </Form>
                  </div>
                </div>
                <div className="box-tour-special type-sidebar sidebar-tour-item sidebar-box-item sidebar-box-item-default">
                  <div style={{ marginTop: 20 }} className="box-title">
                    <h3>Tour Cùng Tỉnh!@</h3>
                  </div>
                  <ul className="list-item">
                    <li>
                      <div className="box-img">
                        <Link to="">
                          <img src={haiphong} alt="" />
                        </Link>
                      </div>
                      <div className="box-content">
                        <div className="box-title">
                          <Link to="">
                            Tour du lịch Mỹ Tho – Cần Thơ 2 ngày 1 đêm giá tốt,
                            khởi hành từ TPHCM
                          </Link>
                        </div>
                        <div className="box-price">
                          <div className="box-price-old">
                            <del className="price">2,600,000 VND</del>
                            <div className="promo">
                              <span className="arrow-left" />
                              16 %
                            </div>
                          </div>
                          <div className="price-present">2,190,000 VND</div>
                        </div>
                        <div className="box-readmore">
                          <Link to="">Xem chi tiết</Link>
                        </div>
                      </div>
                    </li>
                  </ul>
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
