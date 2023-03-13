/* eslint-disable */
import React, { useEffect } from "react";
import Layout from "../../../components/layout/layout";
import { address } from "../../../constants/images";
import { Link } from "react-router-dom";
import "../../../assets/css/tour-detail.css";

export default function TourDetail() {
  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <div className="tour-detail">
          <div className="banner">
            <img
              alt=""
              src="https://phunugioi.com/wp-content/uploads/2021/11/Background-banner-1.jpg"
            />
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
                  src="https://nld.mediacdn.vn/2020/5/29/doi-hoa-tim-6-15907313455782118586731.jpg"
                />
                <h3 className="travel-title">Bắc Ninh 7 ngày</h3>
                <p className="travel-des">
                  Đến khám phá những điều kỳ diệu của Bolivia! Từ thành phố
                  thuộc địa tuyệt đẹp đến cảnh quan quyến rũ của căn hộ Salyuni,
                  chuyến đi này là hoàn hảo cho những người muốn trải nghiệm tất
                  cả những điểm nổi bật của Bolivia. Bắt đầu hành trình của bạn
                  ở thủ đô La Paz. Đi lang thang qua những khu chợ nhộn nhịp với
                  những sản phẩm đáng ngạc nhiên và độc đáo, đồ thủ công phức
                  tạp và những món ăn địa phương ngon miệng. Bạn có thích kiến
                  trúc thuộc địa nguyên sơ? Nhận điền vào La Paz và Sucre, một
                  trong những Các địa điểm thuộc địa chính của Bolivia. Hãy liên
                  lạc với lịch sử, khi bạn ghé thăm Casa de Liberdad, nơi độc
                  lập của Bolivia và Bảo tàng Nghệ thuật Bản địa ở Sucre. Thiên
                  nhiên không bao giờ xa - hãy tham quan phong cảnh yên bình của
                  Thung lũng Mặt trăng và vượt qua những dãy núi đẹp. Kết thúc
                  hành trình của bạn với chuyến thăm sa mạc muối lớn nhất thế
                  giới, như bạn đi xe trên căn hộ Uyuni Salt trên một chiếc xe
                  jeep riêng.
                </p>
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
                          <li>
                            Tất cả chuyển sân bay, bao gồm cả ngày đầu tiên và
                            ngày cuối cùng
                          </li>
                          <li>Hướng dẫn nói tiếng Anh cho các chuyến thăm</li>
                          <li>
                            Tài xế / hướng dẫn viên nói tiếng Tây Ban Nha cho
                            Uyuni
                          </li>
                          <li>Tất cả phí vào cửa</li>
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
                            Bữa tối sang trọng tại một nhà hàng Pháp ( từ USD $
                            85 mỗi người )
                          </li>
                          <li>
                            Salteña, bánh ngọt truyền thống Bolivian ( từ USD $
                            15 mỗi người )
                          </li>
                          <li>
                            Lớp học nấu ăn trong một nhà hàng ( từ USD $ 180 mỗi
                            người )
                          </li>
                          <li>
                            Điều trị spa cả ngày ( từ USD $ 340 mỗi người )
                          </li>
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
                          <td></td>
                          <td>1-2 người</td>
                          <td>Dưới 5 người</td>
                          <td>Trên 5 người</td>
                        </tr>
                        <tr>
                          <td>10.000đ</td>
                          <td>5.000đ</td>
                          <td>5.000đ</td>
                          <td>5.000đ</td>
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
                          <tr>
                            <td>
                              <p className="tour-detail__time">Ngày 1</p>
                            </td>
                            <td>
                              <p className="tour-detail_location">Yên Phong</p>
                              <p className="tour-detail_location-des">
                                Tận hưởng sự yên tĩnh trong Thung lũng Mặt trăng
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="tour-detail__time">Ngày 2</p>
                            </td>
                            <td>
                              <p className="tour-detail_location">Yên Phong</p>
                              <p className="tour-detail_location-des">
                                Tận hưởng sự yên tĩnh trong Thung lũng Mặt trăng
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="tour-detail__time">Ngày 3</p>
                            </td>
                            <td>
                              <p className="tour-detail_location">Yên Phong</p>
                              <p className="tour-detail_location-des">
                                Tận hưởng sự yên tĩnh trong Thung lũng Mặt trăng
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <p className="tour-detail__time">Ngày 4</p>
                            </td>
                            <td>
                              <p className="tour-detail_location">Yên Phong</p>
                              <p className="tour-detail_location-des">
                                Tạm biệt!
                              </p>
                            </td>
                          </tr>
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
                      <div className="tour-detail__card">
                        <img
                          alt=""
                          src="https://gonatour.vn/vnt_upload/news/04_2020/du_lich_mien_bac_gonatour.jpg"
                        />
                        <div className="tour-detail-body">
                          <h3 className="tour-detail__district">La Paz</h3>
                          <h4 className="tour-detail__overview">
                            Ngày 1: Bienvenidos a Bolivia!
                          </h4>
                          <p className="tour-detail__introduce">
                            Chào mừng đến với Bolivia xinh đẹp! Khi đến sân bay
                            El Alto, đại diện của Trip.Me sẽ chờ để chào đón bạn
                            và đưa bạn đến khách sạn của bạn ở La Paz. Kiểm tra
                            vào khách sạn của bạn và nghỉ ngơi trước khi bạn đi
                            ra ngoài cho chuyến tham quan buổi chiều của bạn.
                            Sau đó, nó đi vào thành phố để.Từ đó, đi lang thang
                            trên đường Sagarnaga và duyệt qua các sản phẩm thủ
                            công địa phương trước khi dừng chân tại "Mercado de
                            las Brujas" hoặc Chợ phù thủy. Tại đây, bạn có thể
                            tìm thấy tất cả các loại vật liệu cho nghi lễ địa
                            phương cho "Pachamama" hoặc "Trái đất mẹ", chẳng hạn
                            như lá coca, cây thuốc, v.v.Dừng lại bởi
                          </p>
                          <div className="tour-detail__icon">
                            <p>
                              <i className="fa-solid fa-utensils"></i>Các bữa
                              ăn: Bữa sáng, Bữa trưa
                            </p>
                            <p>
                              <i className="fa-solid fa-hotel"></i>Khách sạn
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="tour-detail__card">
                        <img
                          alt=""
                          src="https://gonatour.vn/vnt_upload/news/04_2020/du_lich_mien_bac_gonatour.jpg"
                        />
                        <div className="tour-detail-body">
                          <h3 className="tour-detail__district">La Paz</h3>
                          <h4 className="tour-detail__overview">
                            Ngày 1: Bienvenidos a Bolivia!
                          </h4>
                          <p className="tour-detail__introduce">
                            Chào mừng đến với Bolivia xinh đẹp! Khi đến sân bay
                            El Alto, đại diện của Trip.Me sẽ chờ để chào đón bạn
                            và đưa bạn đến khách sạn của bạn ở La Paz. Kiểm tra
                            vào khách sạn của bạn và nghỉ ngơi trước khi bạn đi
                            ra ngoài cho chuyến tham quan buổi chiều của bạn.
                            Sau đó, nó đi vào thành phố để.Từ đó, đi lang thang
                            trên đường Sagarnaga và duyệt qua các sản phẩm thủ
                            công địa phương trước khi dừng chân tại "Mercado de
                            las Brujas" hoặc Chợ phù thủy. Tại đây, bạn có thể
                            tìm thấy tất cả các loại vật liệu cho nghi lễ địa
                            phương cho "Pachamama" hoặc "Trái đất mẹ", chẳng hạn
                            như lá coca, cây thuốc, v.v.Dừng lại bởi
                          </p>
                          <div className="tour-detail__icon">
                            <p>
                              <i className="fa-solid fa-utensils"></i>Các bữa
                              ăn: Bữa sáng, Bữa trưa
                            </p>
                            <p>
                              <i className="fa-solid fa-hotel"></i>Khách sạn
                            </p>
                          </div>
                        </div>
                      </div>
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
                  <div className="tour-detail__comment">
                    <h3 className="travel-title">Đánh giá</h3>
                    <ul className="review-list">
                      <li className="tour-detail__review-list__item review-list__item">
                        <div className="review-list__review-header">
                          <div className="rating-custom__review">
                            <span className="rating-custom__star voted">
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span className="rating-custom__star voted">
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span className="rating-custom__star voted">
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span className="rating-custom__star voted">
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span className="rating-custom__star">
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </div>
                          <span className="review-list__rate">4/5</span>
                        </div>
                        <p className="review-list__review-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        <div className="review-list__avt">
                          <img
                            alt=""
                            src="https://viettel.vn/images_content/img-solution-camera-2.png"
                          />
                          <div className="review-list__info">
                            <p className="review-list__name">Mai Lam</p>
                            <span className="review-list__time-review">
                              Nhận xét vào 12/09/2021
                            </span>
                          </div>
                        </div>
                      </li>
                      <li className="tour-detail__review-list__item review-list__item">
                        <div className="review-list__review-header">
                          <div className="rating-custom__review">
                            <span className="rating-custom__star voted">
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span className="rating-custom__star voted">
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span className="rating-custom__star voted">
                              <i className="fa-solid fa-star"></i>{" "}
                              <i className="fa-solid fa-star"></i>
                            </span>
                            <span className="rating-custom__star">
                              <i className="fa-solid fa-star"></i>
                            </span>
                          </div>
                          <span className="review-list__rate">4/5</span>
                        </div>
                        <p className="review-list__review-content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur.
                        </p>
                        <div className="review-list__avt">
                          <img
                            alt=""
                            src="https://viettel.vn/images_content/img-solution-camera-2.png"
                          />
                          <div className="review-list__info">
                            <p className="review-list__name">Mai Lam</p>
                            <span className="review-list__time-review">
                              Nhận xét vào 12/09/2021
                            </span>
                          </div>
                        </div>
                      </li>
                    </ul>
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
                        Lên kế hoạch cho chuyến tham quan được cá nhân hóa của
                        bạn với Destination Expert
                      </span>
                      <p className="tour-plan__name">Mai Lam</p>
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
                    <label htmlFor="start">Ngày bắt đầu:</label>
                    <input
                      type="date"
                      id="start"
                      name="trip-start"
                      value="2022-11-30"
                      min="2022-01-01"
                      max="2024-12-31"
                    />
                    <label htmlFor="people">Số lượng:</label>
                    <input
                      type="number"
                      id="people"
                      name="trip-people"
                      value="2"
                      min="0"
                      max="50"
                    />
                    <label htmlFor="people">Nơi ở:</label>
                    <select>
                      <option checked value="Hotel">
                        Hotel
                      </option>
                    </select>
                    <div className="button button--primary">
                      <Link to="/pay/456">Yêu cầu</Link>
                    </div>
                    <div className="button button--nomal">
                      <a href="#">Tùy chỉnh</a>
                    </div>
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