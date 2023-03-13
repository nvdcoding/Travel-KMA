/* eslint-disable */

import React, { useEffect, useState } from "react";
import {
  adjust,
  global,
  vocher,
  avt,
  people,
  address,
  hoguom,
  condao,
  halong,
  vungtau,
  sapa,
  phanthiet,
  hoian,
  nhatrang,
  dalat,
  hanoi,
  haiphong,
  hochiminh,
  danang,
} from "../../constants/images";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import { phuquoc } from "../../constants/images";
const images = [
  {
    img: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
    link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    img: "https://d3icb70lnx3c24.cloudfront.net/1200x614/f5eb7be92c10a7cd.jpeg",
    link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    img: "https://d3icb70lnx3c24.cloudfront.net/1200x614/24183ef65af1849b.jpeg",
    link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    img: "https://d3icb70lnx3c24.cloudfront.net/1200x614/68fe37a1fec76684.jpeg",
    link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
];
const person = [
  {
    img: { people },
    link: "hdvLamlamla",
    title: "Lam Mai",
    address: "HDV Bắc Ninh",
  },
  {
    img: { people },
    link: "hdvLamlamla",
    title: "Lam Mai 1",
    address: "HDV Bắc Ninh 1",
  },
  {
    img: { people },
    link: "hdvLamlamla",
    title: "Lam Mai 2",
    address: "HDV Bắc Ninh 2",
  },
  {
    img: { people },
    link: "hdvLamlamla",
    title: "Lam Mai 3",
    address: "HDV Bắc Ninh 3",
  },
  {
    img: { people },
    link: "hdvLamlamla",
    title: "Lam Mai 4",
    address: "HDV Bắc Ninh 4",
  },
];
const feedback = [
  {
    name: "Lam Mai",
    time: "Thứ 2, 20/11/2022",
    des: "Tour giá tốt, dịch vụ xe cộ khách sạn ổn, hướng dẫn viên thân thiện, nhưng đồ ăn khá ít, nên cải thiện thêm khẩu phần ăn",
    img: { avt },
  },
  {
    name: "Lam Mai 1",
    time: "Thứ 2, 20/11/2022",
    des: "Dịch vụ ổn, khách sạn hơi cũ,nói chung phù hợp với giá tiền, sẽ tiếp tục trãi nghiệm các chương trình khác",
    img: { avt },
  },
  {
    name: "Lam Mai 2",
    time: "Thứ 2, 20/11/2022",
    des: "Tôi hài lòng, tour đi hướng dẫn viên vui, nhiệt tình, giá tốt",
    img: { avt },
  },
  {
    name: "Lam Mai 3",
    time: "Thứ 2, 20/11/2022",
    des: "Tour đi ổn, khách sạn hơi cũ, đồ ăn còn ít, nhưng bạn hướng dẫn viên rất nhiệt tình!",
    img: { avt },
  },
  {
    name: "Lam Mai 4",
    time: "Thứ 2, 20/11/2022",
    des: "HDV thân thiện, Phòng khách sạn 3* đúng tiêu chuẩn tuy nhiên hơi cũ. Bữa ăn đặc sản miền Tây ngon miệng. Giá cả hợp lý",
    img: { avt },
  },
];
const touraddress = [
  {
    name: "Lam Mai",
    img: { address },
    link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    name: "Lam Mai 1",
    img: { address },
    link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    name: "Lam Mai 2",
    img: { address },
    link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    name: "Lam Mai 3",
    img: { address },
    link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    name: "Lam Mai 4",
    img: { address },
    link: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
];
const tourview = [
  {
    img: address,
    id: 111,
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    id: 111,
    img: address,
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    id: 111,
    img: address,
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    id: 111,
    img: address,
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    id: 111,
    img: address,
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
];
const optionsPerson = {
  loop: true,
  autoplay: true,
  nav: true,
  dots: true,
  items: 3,
  margin: 20,
  stagePadding: 50,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 2,
      stagePadding: 0,
    },
    768: {
      items: 2,
      stagePadding: 30,
    },
    991: {
      items: 2,
      stagePadding: 40,
    },
    1200: {
      items: 3,
    },
  },
};
const optionsFeedback = {
  loop: true,
  autoplay: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
  nav: true,
  dots: true,
  items: 5,
  margin: 30,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    500: {
      items: 3,
    },
    768: {
      items: 3,
    },
    991: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
};
const optionsTouraddress = {
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  nav: true,
  dots: true,
  items: 5,
  margin: 20,
  stagePadding: 40,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 2,
    },
    991: {
      items: 3,
    },
    1200: {
      items: 5,
    },
  },
};
const optionsTourview = {
  loop: true,
  autoplay: false,
  nav: true,
  dots: true,
  items: 4,
  margin: 20,
  stagePadding: 50,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    768: {
      items: 2,
    },
    991: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};
function Home() {
  const [more, setMore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  useEffect(() => {}, []);
  return (
    <>
      <div className="home__wrapper">
        <div class="travel-guarantee">
          <div class="travel-guarantee_title has-text-weight-bold mb-1">
            Du lịch thật dễ dàng
          </div>
          <div class="travel-guarantee_text">
            Thiết kế chuyến đi
            <span class="is-inline-block">|</span>
            Tiết kiệm chi phí
            <span class="is-inline-block">|</span>
            <Link class="link-component" to="/">
              Xem thêm
            </Link>
          </div>
        </div>
        <div className="banner__wrapper banner">
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav
            autoplay={false}
            dots={false}
            items={1}
          >
            {images.map((item, index) => (
              <div className="item" key={index}>
                <a href={item.link}></a>
                <img src={item.img} alt="" />
              </div>
            ))}
          </OwlCarousel>
          <div className="content">
            <div className="popup-place">
              <p className="banner-title">
                Lên kế hoạch cho chuyến đi của riêng mình cùng với HDV địa
                phương ngay!
              </p>
              <select
                name="select-place"
                id=""
                className=""
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option defaultChecked value="">
                  Bạn muốn đi đâu?
                </option>
                <option value="hanoi">Hà Nội</option>
                <option value="quangninh">Quảng Ninh</option>
              </select>
              <div className="button button--primary">
                <Link to={`/du-lich/${selectedOption}`}>Khám phá ngay</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row-banner-bg">
          <div className="content">
            <div className="row-banner">
              <div className="introduce-item">
                <img src={global} alt="" className="introduce-img" />
                <div className="introduce-des">
                  <h3>Hành trình thú vị</h3>
                  <p>
                    Hướng dẫn viên địa phương luôn sẵn sàng lên kế hoạch cho các
                    tour du lịch độc đáo, nổi bật nhất.
                  </p>
                </div>
              </div>
              <div className="introduce-item">
                <img src={adjust} alt="" className="introduce-img" />
                <div className="introduce-des">
                  <h3>100% có thể tùy chỉnh</h3>
                  <p>Tùy chỉnh chuyến đi của bạn đến từng chi tiết.</p>
                </div>
              </div>
              <div className="introduce-item">
                <img src={vocher} alt="" className="introduce-img" />
                <div className="introduce-des">
                  <h3>Giá thành rẻ</h3>
                  <p>
                    Bỏ qua các tour du lịch đắt đỏ bằng cách trao đổi trực tiếp
                    với các HDV địa phương
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="tour-guide">
            <div className="tour-guide-left">
              <h2 className="tour-guide-title">
                100% tour du lịch được thiết kế riêng từ các HDV địa phương được
                công nhận
              </h2>
              <p className="tour-guide-sub-title">
                HDV của chúng tôi chính là những người dân tại nơi đến. Họ là
                những người nắm rõ bản sắc văn hóa nơi mà họ đang sinh sống.{" "}
                <strong>TourTravel</strong> đảm bảo rằng họ cung cấp các dịch vụ
                tốt nhất, có kiến thức địa phương sâu rộng và có niềm đam mê
                giúp bạn tạo ra chuyến đi đáng nhớcủa mình.
              </p>
            </div>
            <OwlCarousel
              className="tour-guide-right owl-theme"
              {...optionsPerson}
            >
              {person.map((item, index) => (
                <div className="tour-guide-item" key={index}>
                  <div href={item.link}>
                    <img src={item.img.people} alt="" />
                    <div className="tour-guide-des">
                      <h3 className="tour-guide-name">{item.title}</h3>
                      <p className="tour-guide-place">{item.address}</p>
                    </div>
                  </div>
                  <Link to={`/trang-ca-nhan/${item.link}`} class="button_xem">
                    Xem HDV
                  </Link>
                </div>
              ))}
            </OwlCarousel>
          </div>
          <div className="tour-guides tour-view">
            <div className="travel-title-all">
              <h2 className="travel-title">Hướng dẫn viên</h2>
              <a href="#" className="travel-link">
                Xem tất cả <i class="fa-solid fa-angle-right"></i>
              </a>
            </div>

            <div className="tour-guides__main">
              <OwlCarousel
                className="tour-guides__list owl-theme "
                {...optionsTourview}
              >
                {tourview.map((item, index) => (
                  <div className="tour-guides__item" key={index}>
                    <div className="tour-guides__card-img tour-view__card-img">
                      <img
                        alt=""
                        className="tour-guides__img tour-view__img"
                        src={item.img}
                      />
                      <div className="tour-guides__tag tour-view__tag">
                        <p className="tour-guides__tag-name tour-view__tag-name">
                          Nature
                        </p>
                        <p className="tour-guides__tag-name tour-view__tag-name">
                          Private Tour
                        </p>
                      </div>
                    </div>
                    <div className="tour-guides__card-content">
                      <div className="tour-guides__head">
                        <p className="tour-guides__name">Nguyễn Văn Duy</p>
                        <p className="tour-guides__time">Nam</p>
                      </div>
                      <div className="tour-guides-body">
                        <ul className="tour-guides-list">
                          <li className="tour-guides--item">
                            <i className="fa-solid fa-calendar-days"></i>
                            <p className="tour-guides__text">Tuổi: 41</p>
                          </li>
                          <li className="tour-guides--item">
                            <i className="fa-solid fa-location-dot"></i>
                            <p className="tour-guides__text">
                              Địa chỉ: Yên Phong
                            </p>
                          </li>
                          <li className="tour-guides--item">
                            <i className="fa-solid fa-heart"></i>
                            <p className="tour-guides__text">Đánh giá:</p>
                          </li>
                          <li className="tour-guides--item">
                            <i className="fa-solid fa-hand-holding-heart"></i>
                            <p className="tour-guides__text">
                              Tham gia: 5 năm trước
                            </p>
                          </li>
                          <li className="tour-guides--item">
                            <i className="fa-solid fa-plane-arrival"></i>
                            <p className="tour-guides__text">
                              Chuyến đi: 234 chuyến đi
                            </p>
                          </li>
                        </ul>
                        <Link
                          to={`trang-ca-nhanh/${item.id}`}
                          className="travel-link"
                        >
                          Chi tiết <i class="fa-solid fa-angles-right"></i>
                        </Link>
                      </div>

                      <div className="button button--primary button-contact">
                        <Link to="/chat">Liên hệ</Link>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
          <div className="tour-banner tour-banner2">
            <img className="tour-banner-img" alt="" src={hoguom} />
            <div className="content">
              <div className="tour-banner__text">
                <h3 className="tour-banner-title">Du lịch theo cá tính</h3>
                <p className="tour-banner-des">
                  Trải nghiệm trọn vẹn - Giá cả phải chăng
                </p>
                <div className="button">
                  <a href="#">Thiết kế chuyến đi</a>
                </div>
              </div>
            </div>
          </div>
          <div className="tour-address">
            <h2 className="travel-title">
              <Link to="diem-den">Điểm đến</Link>
            </h2>
            <p className="travel-des">
              Khám phá, tạo và đặt chuyến đi của bạn!
            </p>
            <div class="hide-1199">
              <div class="specialLocationBox">
                <div class="specialLocationBox_item">
                  <div class="specialLocationBox_item_box">
                    <div
                      class="specialLocationBox_item_box_image"
                      style={{
                        backgroundImage: `url(${phuquoc})`,
                      }}
                    ></div>
                    <a href="/tour-du-lich-phu-quoc" title="Tour Phú Quốc">
                      <div class="specialLocationBox_item_box_title">
                        <h3 class="maxLine_1">Phú Quốc</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="specialLocationBox_item">
                  <div class="specialLocationBox_item_box">
                    <div
                      class="specialLocationBox_item_box_image"
                      style={{
                        backgroundImage: `url(${halong})`,
                      }}
                    ></div>
                    <a
                      href="/tour-du-lich-vinh-ha-long"
                      title="Tour Vịnh Hạ Long"
                    >
                      <div class="specialLocationBox_item_box_title">
                        <h3 class="maxLine_1">Vịnh Hạ Long</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="specialLocationBox_item">
                  <div class="specialLocationBox_item_box">
                    <div
                      class="specialLocationBox_item_box_image"
                      style={{
                        backgroundImage: `url(${condao})`,
                      }}
                    ></div>
                    <a href="/tour-du-lich-con-dao" title="Tour Côn Đảo">
                      <div class="specialLocationBox_item_box_title">
                        <h3 class="maxLine_1">Côn Đảo</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="specialLocationBox_item">
                  <div class="specialLocationBox_item_box">
                    <div
                      class="specialLocationBox_item_box_image"
                      style={{
                        backgroundImage: `url(${vungtau})`,
                      }}
                    ></div>
                    <a href="/tour-du-lich-vung-tau" title="Tour Vũng Tàu">
                      <div class="specialLocationBox_item_box_title">
                        <h3 class="maxLine_1">Vũng Tàu</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="specialLocationBox_item">
                  <div class="specialLocationBox_item_box">
                    <div
                      class="specialLocationBox_item_box_image"
                      style={{
                        backgroundImage: `url(${sapa})`,
                      }}
                    ></div>
                    <a href="/tour-du-lich-sapa" title="Tour SaPa">
                      <div class="specialLocationBox_item_box_title">
                        <h3 class="maxLine_1">Sa Pa</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="specialLocationBox_item">
                  <div class="specialLocationBox_item_box">
                    <div
                      class="specialLocationBox_item_box_image"
                      style={{
                        backgroundImage: `url(${phanthiet})`,
                      }}
                    ></div>
                    <a href="/tour-du-lich-phan-thiet" title="Tour Phan Thiết">
                      <div class="specialLocationBox_item_box_title">
                        <h3 class="maxLine_1">Phan Thiết</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="specialLocationBox_item">
                  <div class="specialLocationBox_item_box">
                    <div
                      class="specialLocationBox_item_box_image"
                      style={{
                        backgroundImage: `url(${danang})`,
                      }}
                    ></div>
                    <a href="/tour-du-lich-da-nang" title="Tour Đà Nẵng">
                      <div class="specialLocationBox_item_box_title">
                        <h3 class="maxLine_1">Đà Nẵng</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="specialLocationBox_item">
                  <div class="specialLocationBox_item_box">
                    <div
                      class="specialLocationBox_item_box_image"
                      style={{
                        backgroundImage: `url(${hoian})`,
                      }}
                    ></div>
                    <a href="/tour-du-lich-hoi-an" title="Tour Hội An">
                      <div class="specialLocationBox_item_box_title">
                        <h3 class="maxLine_1">Hội An</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="specialLocationBox_item">
                  <div class="specialLocationBox_item_box">
                    <div
                      class="specialLocationBox_item_box_image"
                      style={{
                        backgroundImage: `url(${nhatrang})`,
                      }}
                    ></div>
                    <a href="/tour-du-lich-nha-trang" title="Tour Nha Trang">
                      <div class="specialLocationBox_item_box_title">
                        <h3 class="maxLine_1">Nha Trang</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="specialLocationBox_item">
                  <div class="specialLocationBox_item_box">
                    <div
                      class="specialLocationBox_item_box_image"
                      style={{
                        backgroundImage: `url(${dalat})`,
                      }}
                    ></div>
                    <a href="/tour-du-lich-da-lat" title="Tour Đà Lạt">
                      <div class="specialLocationBox_item_box_title">
                        <h3 class="maxLine_1">Đà Lạt</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="specialLocationBox_item">
                  <div class="specialLocationBox_item_box">
                    <div
                      class="specialLocationBox_item_box_image"
                      style={{
                        backgroundImage: `url(${hanoi})`,
                      }}
                    ></div>
                    <a href="/tour-du-lich-ha-noi" title="Tour Hà Nội">
                      <div class="specialLocationBox_item_box_title">
                        <h3 class="maxLine_1">Hà Nội</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="specialLocationBox_item">
                  <div class="specialLocationBox_item_box">
                    <div
                      class="specialLocationBox_item_box_image"
                      style={{
                        backgroundImage: `url(${haiphong})`,
                      }}
                    ></div>
                    <a href="/tour-du-lich-hai-phong" title="Tour Hải Phòng">
                      <div class="specialLocationBox_item_box_title">
                        <h3 class="maxLine_1">Hải Phòng</h3>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="specialLocationBox_item">
                  <div class="specialLocationBox_item_box">
                    <div
                      class="specialLocationBox_item_box_image"
                      style={{
                        backgroundImage: `url(${hochiminh})`,
                      }}
                    ></div>
                    <a
                      href="/tour-du-lich-ho-chi-minh"
                      title="Tour Hồ Chí Minh"
                    >
                      <div class="specialLocationBox_item_box_title">
                        <h3 class="maxLine_1">Hồ Chí Minh</h3>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="tour-address__main">
              <OwlCarousel
                className="tour-address__list owl-theme"
                {...optionsTouraddress}
              >
                {touraddress.map((item, index) => (
                  <div className="tour-address__item" key={index}>
                    <Link to={item.link}>
                      <img
                        alt=""
                        className="tour-address__img"
                        src={item.img.address}
                      />
                      <div className="tour-address__info">
                        <i class="fa-solid fa-map-location-dot"></i>
                        <p className="tour-address__name">{item.name}</p>
                      </div>
                      <button class="button_xem">Xem điểm đến</button>
                    </Link>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
          {/* bai viet */}
          <div className="news">
            <div className="travel-title-all">
              <h2 className="travel-title">Bài viết</h2>
              <a href="#" className="travel-link">
                Xem tất cả <i class="fa-solid fa-angle-right"></i>
              </a>
            </div>
            <div className="news-main">
              <ul className="news-left">
                <li className="news-left-item">
                  <Link to={`/tin-tuc/thflsnmx`}>
                    <div className="news-left-thumb">
                      <img
                        alt=""
                        src=" https://media.vietteltelecom.vn/upload//3d/7c/c3/8fcba0cf72a19ac1d3b68fc171d711d2cd2d7a65.jpg"
                      />
                    </div>{" "}
                  </Link>
                  <div className="news-left__intro">
                    <Link to={`/tin-tuc/thflsnmx`}>
                      <h3 className="news-left__name">bài viết số 1</h3>
                    </Link>
                    <p className="news-left-des">
                      Đây là những điểm đến đẹp nhất hành tinh, nhưng thật đáng
                      tiếc vì chúng có nguy cơ biến mất mãi mãi do sự biến đổi
                      khí hậu và sự bất cẩn của con người.
                    </p>
                    <Link to={`/tin-tuc/thflsnmx`} className="news-link">
                      Xem chi tiết
                    </Link>
                  </div>
                </li>
              </ul>
              <ul className="news-right">
                <li className="news-right-item">
                  <div className="news-right-thumb">
                    <Link to={`/tin-tuc/thflsnmx`}>
                      <img
                        alt=""
                        src=" https://media.vietteltelecom.vn/upload//3d/7c/c3/8fcba0cf72a19ac1d3b68fc171d711d2cd2d7a65.jpg"
                      />
                    </Link>
                  </div>
                  <div className="news-right__intro">
                    <Link to={`/tin-tuc/thflsnmx`}>
                      <h3 className="news-right__name">bài viết số 1</h3>
                    </Link>
                    <p className="news-right-des">
                      Đây là những điểm đến đẹp nhất hành tinh, nhưng thật đáng
                      tiếc vì chúng có nguy cơ biến mất mãi mãi do sự biến đổi
                      khí hậu và sự bất cẩn của con người.
                    </p>
                    <Link to={`/tin-tuc/thflsnmx`} className="news-link">
                      Xem chi tiết
                    </Link>
                  </div>
                </li>
                <li className="news-right-item">
                  <div className="news-right-thumb">
                    <Link to={`/tin-tuc/thflsnmx`}>
                      <img
                        alt=""
                        src=" https://media.vietteltelecom.vn/upload//3d/7c/c3/8fcba0cf72a19ac1d3b68fc171d711d2cd2d7a65.jpg"
                      />
                    </Link>
                  </div>
                  <div className="news-right__intro">
                    <Link to={`/tin-tuc/thflsnmx`}>
                      <h3 className="news-right__name">bài viết số 1</h3>
                    </Link>
                    <p className="news-right-des">
                      Đây là những điểm đến đẹp nhất hành tinh, nhưng thật đáng
                      tiếc vì chúng có nguy cơ biến mất mãi mãi do sự biến đổi
                      khí hậu và sự bất cẩn của con người.
                    </p>
                    <Link to={`/tin-tuc/thflsnmx`} className="news-link">
                      Xem chi tiết
                    </Link>
                  </div>
                </li>
                <li className="news-right-item">
                  <div className="news-right-thumb">
                    <Link to={`/tin-tuc/thflsnmx`}>
                      <img
                        alt=""
                        src=" https://media.vietteltelecom.vn/upload//3d/7c/c3/8fcba0cf72a19ac1d3b68fc171d711d2cd2d7a65.jpg"
                      />
                    </Link>
                  </div>
                  <div className="news-right__intro">
                    <Link to={`/tin-tuc/thflsnmx`}>
                      <h3 className="news-right__name">bài viết số 1</h3>
                    </Link>
                    <p className="news-right-des">
                      Đây là những điểm đến đẹp nhất hành tinh, nhưng thật đáng
                      tiếc vì chúng có nguy cơ biến mất mãi mãi do sự biến đổi
                      khí hậu và sự bất cẩn của con người.
                    </p>
                    <Link to={`/tin-tuc/thflsnmx`} className="news-link">
                      Xem chi tiết
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="tour-view">
            <div className="travel-title-all">
              <div>
                {" "}
                <h2 className="travel-title">Tour du lịch</h2>
                <p className="travel-des">
                  Chọn một chuyến đi bạn thích hoặc liên hệ trực tiếp với HDV
                </p>
              </div>
              <a href="#" className="travel-link">
                Xem tất cả<i class="fa-solid fa-angle-right"></i>
              </a>
            </div>

            <div className="tour-view__main">
              <OwlCarousel
                className="tour-view__list owl-theme "
                {...optionsTourview}
              >
                {tourview.map((item, index) => (
                  <div className="tour-view__item" key={index}>
                    <div className="tour-view__card-img">
                      <img alt="" className="tour-view__img" src={item.img} />
                      <div className="tour-view__tag">
                        <p className="tour-view__tag-name">Nature</p>
                        <p className="tour-view__tag-name">Private Tour</p>
                        <p className="tour-view__tag-name tour-primary">
                          Carbon Friendly
                        </p>
                        <p className="tour-view__tag-name tour-primary">
                          Social Impact
                        </p>
                      </div>
                      <div className="tour-view-avt">
                        <img alt="" className="tour-view__avt" src={item.avt} />
                      </div>
                    </div>
                    <div className="tour-view__card-content">
                      <div className="tour-view__head">
                        <p className="tour-view__name">Nepal</p>
                        <p className="tour-view__time">10 days</p>
                      </div>
                      <div className="tour-view-body">
                        <h3 className="tour-view__title">
                          10-Day Luxury Annapurna Trek
                        </h3>
                        <p className="tour-view__des">
                          Stay at Ker & Downey Lodges,
                        </p>
                        <div className="tour-view__place">
                          <i className="fa-solid fa-plane-arrival"></i>
                          <span className="tour-view__place-name">
                            Bắc Ninh
                          </span>
                        </div>
                        <a href="#" className="travel-link">
                          Xem chi tiết<i class="fa-solid fa-angles-right"></i>
                        </a>
                      </div>
                      <div className="tour-view-footer">
                        <p className="tour-view__price">
                          khoảng<span>200.000đ</span>một người
                        </p>
                        <div className="tour-view__evaluate">
                          <div className="tour-view__star">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                            <i className="fa-regular fa-star"></i>
                            <span>Đã đi 1.2k</span>
                          </div>
                          <div className="button button--primary button-contact">
                            Tùy chỉnh và liên hệ
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
        <div className="tour-banner">
          <img
            className="tour-banner-img"
            alt=""
            src="https://images.vietnamtourism.gov.vn/vn/images/2020/Thang_9/trang_an1.jpg"
          />
          <div className="content">
            <div className="tour-banner__text">
              <h3 className="tour-banner-title">
                Tra cứu thông tin HDV du lịch dễ dàng
              </h3>
              <p className="tour-banner-des">
                Tùy chỉnh và lên kế hoạch chuyến đi ngay
              </p>
              <div className="button button--primary">
                <a href="#">Khám phá ngay</a>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="tour-feedback">
            <h2 className="travel-title">Trải nghiệm đặc biệt</h2>
            <p className="travel-des">
              Đánh giá từ du khách về trải nghiệm của họ với TravelLocal
            </p>
            <div className="tour-feedback__main">
              <OwlCarousel
                className="tour-feedback__list owl-theme"
                {...optionsFeedback}
              >
                {feedback.map((item, index) => (
                  <div className="tour-feedback__item" key={index}>
                    <div className="tour-feedback__star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <div
                      className={
                        more
                          ? "tour-feedback__content more"
                          : "tour-feedback__content"
                      }
                    >
                      {item.des}
                    </div>
                    <div className="tour-feedback__people">
                      <img
                        alt=""
                        className="tour-feedback__avt"
                        src={item.img.avt}
                      />
                      <div className="tour-feedback__info">
                        <p className="tour-feedback__name">{item.name}</p>
                        <p className="tour-feedback__time">{item.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
