/* eslint-disable */
import React, { useEffect } from "react";
import Layout from "../../components/layout/layout";
import { avt, banner } from "../../constants/images";
import "../../assets/css/personal.css";
import { Tag } from "antd";
import TourItem from "../../components/tourItem";
import OwlCarousel from "react-owl-carousel";

export default function Personal() {
  const options = {
    loop: true,
    autoplay: true,
    nav: true,
    dots: true,
    items: 4,
    margin: 20,
    stagePadding: 80,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
      },
      380: {
        items: 2,
        stagePadding: 0,
        margin: 10,
      },
      768: {
        items: 3,
        stagePadding: 30,
        margin: 15,
      },
      991: {
        items: 3,
        stagePadding: 60,
        margin: 15,
      },
      1200: {
        items: 4,
      },
    },
  };
  const optionsPeople = {
    loop: true,
    autoplay: false,
    nav: true,
    dots: false,
    items: 8,
    margin: 20,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 3,
      },
      380: {
        items: 4,
        margin: 10,
      },
      768: {
        items: 6,
        margin: 15,
      },
      991: {
        items: 7,
        margin: 15,
      },
      1200: {
        items: 8,
      },
    },
  };
  const tourview = [
    {
      img: "https://phuonganhbeau.weebly.com/uploads/1/3/0/0/130045835/chua-mot-cot_orig.jpg",
      avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
      tag: ["tour gia đình", "tour private"],
      place: "Bắc Ninh",
      time: "3 ngày",
      title: "3 ngày thăm thú Làng quan họ",
      des: "Về làng quan họ, đền Giếng, chùa Dâu, chùa Phật Tích,...",
      hdv: "Duy Nguyen",
      price: "200.000đ",
      rate: 123,
      id: "ghj6781q2",
    },
    {
      img: "https://phuonganhbeau.weebly.com/uploads/1/3/0/0/130045835/chua-mot-cot_orig.jpg",
      avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
      tag: ["tour gia đình", "tour private"],
      place: "Bắc Ninh",
      time: "3 ngày",
      title: "3 ngày thăm thú Làng quan họ",
      des: "Về làng quan họ, đền Giếng, chùa Dâu, chùa Phật Tích,...",
      hdv: "Duy Nguyen",
      price: "200.000đ",
      rate: 123,
      id: "ghj6781q2",
    },
    {
      img: "https://icdn.dantri.com.vn/thumb_w/640/2020/04/24/thai-lan-1587703892914.jpeg",
      avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
      tag: ["tour gia đình", "tour private"],
      place: "Bắc Ninh",
      time: "3 ngày",
      title: "3 ngày thăm thú Làng quan họ",
      des: "Về làng quan họ, đền Giếng, chùa Dâu, chùa Phật Tích,...",
      hdv: "Duy Nguyen",
      price: "200.000đ",
      rate: 123,
      id: "ghj6781q2",
    },
    {
      img: "https://icdn.dantri.com.vn/thumb_w/640/2020/04/24/thai-lan-1587703892914.jpeg",
      avt: "https://icdn.dantri.com.vn/thumb_w/640/2020/04/24/thai-lan-1587703892914.jpeg",
      tag: ["tour gia đình", "tour private"],
      place: "Bắc Ninh",
      time: "3 ngày",
      title: "3 ngày thăm thú Làng quan họ",
      des: "Về làng quan họ, đền Giếng, chùa Dâu, chùa Phật Tích,...",
      hdv: "Duy Nguyen",
      price: "200.000đ",
      rate: 123,
      id: "ghj6781q2",
    },
    {
      img: "https://phuonganhbeau.weebly.com/uploads/1/3/0/0/130045835/chua-mot-cot_orig.jpg",
      avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
      tag: ["tour gia đình", "tour private"],
      place: "Bắc Ninh",
      time: "3 ngày",
      title: "3 ngày thăm thú Làng quan họ",
      des: "Về làng quan họ, đền Giếng, chùa Dâu, chùa Phật Tích,...",
      hdv: "Duy Nguyen",
      price: "200.000đ",
      rate: 123,
      id: "ghj6781q2",
    },
  ];
  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <div className="personal__wrapper">
          <div className="personal-page__wrapper">
            <div className="cover-image">
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
                  <li>
                    <strong>Hướng dẫn viên</strong>
                  </li>
                </ul>
              </div>
              <div className="personal-page__main">
                <div className="personal-page-left">
                  <div className="personal-page__avt">
                    <img alt="" src={avt} />
                  </div>
                  <h3 className="personal-page__name">Nguyễn Duy</h3>
                  <h3 className="personal-page__position">
                    Hướng dẫn viên của Bắc Ninh
                  </h3>
                  <div className="personal-page__contact">
                    <button className="button button--primary">Liên hệ</button>
                  </div>

                  <div className="evaluate">
                    <h4 className="evaluate-title">Hài lòng</h4>
                    <div className="evaluate-star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                      <i className="fa-regular fa-star"></i>
                    </div>
                    <p className="evaluate-des">(44 đánh giá)</p>
                  </div>
                </div>
                <div className="personal-page-right">
                  <h3 className="personal-page-title">
                    Xin chào, mình là Duy!
                  </h3>
                  <p className="personal-page-sub-title">
                    Tôi sinh ra và lớn lên tại Bắc Ninh. Mảnh đất này đã gắn bó
                    và để lại trong trái tim tôi nhiều kỷ niệm. Bắc Ninh một
                    mảnh đất cổ lâu đời với nhiếu nét truyền thông văn hóa đặc
                    sắc. Nói đến Bắc Ninh người ta nhớ ngay tới Quan Họ, làn
                    điệu dân ca đã đi sâu trong tâm thức bao nhiều con đất Việt.
                    Nhưng mảnh đất Bắc Ninh còn nhiều cảnh đẹp và điểm du lịch
                    hấp dẫn khác, hãy cùng tôi thăm quan và tạo nên những chuyến
                    đi đặc biệt. Tôi sẻ kể bạn nghe những điều thú vị và những
                    trải nghiệm mới ở Bắc Ninh. Có quá nhiều điều để đến với Bắc
                    Ninh, và mình sẽ dần dần giới thiệu chia sẻ với các bạn về
                    mảnh đất ngàn năm này.
                  </p>
                  <p className="personal-page-sub-more">Đọc tiếp </p>
                  <div className="personal-page-infomation">
                    <div className="personal-page-infomation-item">
                      <h3 className="personal-page__title">Thông tin cơ bản</h3>
                      <ul className="personal-page__list">
                        <li className="personal-page__item">
                          <div className="personal-page-item__title">
                            <i className="fa-solid fa-location-dot"></i>
                            <p className="personal-page__des">Điểm đến chính</p>
                          </div>
                          <p className="personal-page__value">Bắc Ninh</p>
                        </li>
                        <li className="personal-page__item">
                          <div className="personal-page-item__title">
                            <i class="fa-solid fa-user"></i>
                            <p className="personal-page__des">Giới tính</p>
                          </div>
                          <p className="personal-page__value">Nam</p>
                        </li>
                        <li className="personal-page__item">
                          <div className="personal-page-item__title">
                            <i class="fa-solid fa-cake-candles"></i>
                            <p className="personal-page__des">Ngày sinh</p>
                          </div>
                          <p className="personal-page__value">25/10/2000</p>
                        </li>
                      </ul>
                    </div>
                    <div className="personal-page-infomation-item">
                      <h3 className="personal-page__title">Chuyến đi</h3>
                      <ul className="personal-page__list">
                        <li className="personal-page__item">
                          <div className="personal-page-item__title">
                            <i class="fa-solid fa-star"></i>
                            <p className="personal-page__des">Đánh giá</p>
                          </div>
                          <p className="personal-page__value">
                            4.5/5(125 đánh giá)
                          </p>
                        </li>
                        <li className="personal-page__item">
                          <div className="personal-page-item__title">
                            <i class="fa-solid fa-plane-arrival"></i>
                            <p className="personal-page__des">Chuyến đi</p>
                          </div>
                          <p className="personal-page__value">127 chuyến</p>
                        </li>
                        <li className="personal-page__item">
                          <div className="personal-page-item__title">
                            <i class="fa-solid fa-tags"></i>
                            <p className="personal-page__des">Tag</p>
                          </div>
                          <p className="personal-page__value">
                            <Tag color="orange">tour gia đình</Tag>
                            <Tag color="green">tour private</Tag>
                            <Tag color="red">tour tự lái</Tag>
                            <Tag color="blue">tour cao cấp</Tag>
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="personal-page__container">
                <p className="trip-suggest-title">Các chuyến đi gợi ý từ Duy</p>
                <div className="trip-suggest">
                  <OwlCarousel
                    className="trip-suggest__list owl-theme"
                    {...options}
                  >
                    {tourview.map((item, index) => (
                      <TourItem key={index} item={item} />
                    ))}
                  </OwlCarousel>
                </div>
                <p className="trip-suggest-title">Có thể bạn quan tâm</p>
                <div className="trip-suggest">
                  <OwlCarousel
                    className="trip-suggest__list owl-theme"
                    {...optionsPeople}
                  >
                    {tourview.map((item, index) => (
                      <div className="trip-suggest-main" key={index}>
                        <a href={item.link}>
                          <img
                            src={item.img}
                            alt=""
                            className="tour-guide-hdv"
                          />
                          <div className="">
                            <h3 className="tour-guide-name">{item.hdv}</h3>
                            <p className="tour-guide-place">{item.place}</p>
                          </div>
                          <button class="button_xem">Xem HDV</button>
                        </a>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
