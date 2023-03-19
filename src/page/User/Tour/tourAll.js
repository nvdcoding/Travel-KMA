/* eslint-disable */
import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import { banner, address } from "../../../constants/images";
import "../../../assets/css/hdv-tour-all.css";
import { Pagination } from "antd";
import TourItem from "../../../components/tourItem";
import { Modal, Button, Result, Input } from "antd";

const tourview = [
  {
    img: address,
    id: "456789367289o0-1",
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    img: address,
    id: "456789367289o0-2",
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    img: address,
    id: "456789367289o0-4",
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    img: address,
    id: "4567893672r-1",
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    img: address,
    id: "456789367289jko0-1",
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    img: address,
    id: "456789367289o0kd1",
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
];
export default function ToursAll() {
  useEffect(() => {}, []);
  const handleRequest = () => {
    setIsModalOpen(true);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [show, setShow] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setShow(false);
  };
  return (
    <>
      <Layout>
        <div className="tours-all__wrapper">
          <div className="banner">
            <img alt="" src={banner} />
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
                <li>Tour</li>
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </li>
                <li>
                  <strong>Xem tất cả</strong>
                </li>
              </ul>
            </div>
            <div className="tours-all__main">
              <div className="tours-all__left">
                {/* <div className="tour-all-box__search">
                  <h1 className="travel-title">Bộ lọc tìm kiếm</h1>
                  <div className="form-item--group">
                    <label className="form-label">Tỉnh/thành phố</label>
                    <select id="country" name="country" className="">
                      <option
                        value=""
                        hidden="hidden"
                        defaultValue
                        disabled="disabled"
                        className="option_disable"
                      >
                        Chọn Tỉnh/thành phố
                      </option>
                      <option data-name="An Giang" value="A076">
                        An Giang
                      </option>
                      <option data-name="Bà Rịa Vũng Tàu" value="V064">
                        Bà Rịa Vũng Tàu
                      </option>
                      <option data-name="Bắc Giang" value="B240">
                        Bắc Giang
                      </option>
                      <option data-name="Bắc Kạn" value="B281">
                        Bắc Kạn
                      </option>
                    </select>
                  </div>
                  <div className="form-item--group">
                    <label className="form-label">HDV</label>
                    <select id="hdv" name="hdv" className="">
                      <option
                        value=""
                        hidden="hidden"
                        defaultValue
                        disabled="disabled"
                        className="option_disable"
                      >
                        Chọn HDV
                      </option>
                      <option data-name="An Giang" value="A076">
                        Mai Lam 1
                      </option>
                      <option data-name="Bà Rịa Vũng Tàu" value="V064">
                        Mai Lam 1
                      </option>
                    </select>
                  </div>
                  <div className="form-item--group">
                    <label className="form-label">Số ngày</label>
                    <input
                      type="number"
                      id="tentacles"
                      name=""
                      min="1"
                      max="30"
                    />
                  </div>
                  <div className="form-item--group">
                    <label htmlFor="">Ngày bắt đầu</label>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      value="2022-11-28"
                      min="2018-01-01"
                      max="2024-12-31"
                    />
                  </div>
                  <div className="form-item--group">
                    <label htmlFor="">Số nguời</label>
                    <ul className="number-people">
                      <li className="number-people__item">
                        <a href="#" className="number-people__value">
                          1 người
                        </a>
                      </li>
                      <li className="number-people__item">
                        <a href="#" className="number-people__value">
                          2 người
                        </a>
                      </li>
                      <li className="number-people__item">
                        <a href="#" className="number-people__value">
                          3-5 người
                        </a>
                      </li>
                      <li className="number-people__item">
                        <a href="#" className="number-people__value">
                          5+ người
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="form-item--group">
                    <label htmlFor="">Dòng tour</label>
                    <ul className="evaluate-tour number-people">
                      <li className="number-people__item">
                        <a href="#" className="number-people__value">
                          Cao cấp
                        </a>
                      </li>
                      <li className="number-people__item">
                        <a href="#" className="number-people__value">
                          Tiêu chuẩn
                        </a>
                      </li>
                      <li className="number-people__item">
                        <a href="#" className="number-people__value">
                          Tiết kiệm
                        </a>
                      </li>
                      <li className="number-people__item">
                        <a href="#" className="number-people__value">
                          Giá tốt
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="form-item--group">
                    <label htmlFor="">Khoảng giá</label>
                    <div className="price-range">
                      <input placeholder="đTừ" /> <span>-</span>{" "}
                      <input placeholder="đĐến" />
                    </div>
                  </div>
                  <div className="form-item--group">
                    <div className="button button--primary">Tìm kiếm</div>
                  </div>
                </div> */}
                <div className="request_tour">
                  <div className="tour-detail__plan">
                    <div className="tour-detail__plan-header">
                      <img
                        alt=""
                        src="https://viettel.vn/images_content/img-solution-camera-2.png"
                      />
                      <div className="tour-detail__plan-info">
                        <span className="tour-plan__review">
                          Lên kế hoạch cho chuyến tham quan được cá nhân hóa của
                          bạn với TravelVN
                        </span>
                      </div>
                    </div>
                    <div className="tour-detail__plan-body">
                      <label htmlFor="start">Tên chuyến đi:</label>
                      <Input
                        placeholder="nhập tên chuyến đi"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="people">Địa điểm:</label>
                      <select
                        name="select-place"
                        id=""
                        className=""
                        onChange={(e) => setPlace(e.target.value)}
                      >
                        <option defaultChecked value="">
                          Bạn muốn đi đâu?
                        </option>
                        <option value="hanoi">Hà Nội</option>
                        <option value="quangninh">Quảng Ninh</option>
                      </select>
                      <label htmlFor="people">Thời gian bắt đầu:</label>
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value="2022-11-30"
                        min="2022-01-01"
                        max="2024-12-31"
                      />
                      <label htmlFor="times">Thời gian kết thúc:</label>
                      <input
                        type="date"
                        id="start"
                        name="trip-start"
                        value="2022-11-30"
                        min="2022-01-01"
                        max="2024-12-31"
                      />
                      <label>Số lượng</label>
                      <div className="create-tour__people-item">
                        <p className="create-tour__people-des">
                          Trẻ em
                          <br /> Lứa tuổi 2 - 12
                        </p>
                        <div className="people_unit">
                          <div className="minus">
                            <i class="fa-solid fa-minus"></i>
                          </div>
                          <div className="unit">0</div>
                          <div className="plus">
                            <i class="fa-solid fa-plus"></i>
                          </div>
                        </div>
                      </div>
                      <div className="create-tour__people-item">
                        <p className="create-tour__people-des">Người lớn</p>
                        <div className="people_unit">
                          <div className="minus">
                            <i class="fa-solid fa-minus"></i>
                          </div>
                          <div className="unit">0</div>
                          <div className="plus">
                            <i class="fa-solid fa-plus"></i>
                          </div>
                        </div>
                      </div>
                      <label htmlFor="start">Yêu cầu chi tiết:</label>
                      <input placeholder="Nhập mô tả" value="" />
                      <div
                        className="button button--primary"
                        onClick={handleRequest}
                      >
                        Yêu cầu
                      </div>
                      <Modal
                        title=""
                        open={isModalOpen}
                        visible={isModalOpen}
                        footer={null}
                        onCancel={handleCancel}
                      >
                        <div className="modal-content">
                          {show && (
                            <div className="modal-body">
                              <p className="modal-name">
                                Tên chuyến đi: {name}
                              </p>
                              <p className="modal-place">Địa điểm: {place}</p>
                              <p className="modal-place">
                                Thời gian: 20/11/2022 =24/11/2022
                              </p>
                              <p>Yêu cầu: </p>
                              <p>
                                Khách sạn 2 sao, có 2 giường đơn dành cho 2
                                người.{" "}
                              </p>
                            </div>
                          )}
                          {!show && (
                            <div className="modal-noti">
                              <Result
                                status="success"
                                title="Gửi yêu cầu thành công"
                                subTitle="HDV sẽ gửi tour đề xuất đến cho bạn trong vòng 2 giờ tới."
                                extra={[
                                  <Button
                                    type="primary"
                                    onClick={() => setShow(true)}
                                  >
                                    Xem
                                  </Button>,
                                  <Button onClick={handleOk}>Đóng</Button>,
                                ]}
                              />
                            </div>
                          )}
                        </div>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tours-all__right ">
                <h3 className="tour-all-result">
                  Chúng tôi tìm thấy 258 tours cho Quý khách.
                </h3>
                <div className="tours-all__list">
                  {tourview.map((item, index) => (
                    <TourItem item={item} key={index} />
                  ))}
                </div>
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
