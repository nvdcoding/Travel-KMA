/* eslint-disable */
import React, { useEffect } from "react";
import Layout from "../../../components/layout/layout";
import { banner, address } from "../../../constants/images";
import "../../../assets/css/hdv-tour-all.css";
import TourItem from "../../../components/tourItem";
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
                <div className="tour-all-box__search">
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
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
