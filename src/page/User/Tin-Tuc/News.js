/* eslint-disable */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/news.css";
export default function News() {
  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <div className="news__wrapper">
          <div className="banner">
            <img
              alt=""
              src="https://statics.vinpearl.com/dao-phu-quoc_1661246610.jpg"
            />
          </div>
          <div className="news-content">
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
                    <strong>Cam nang </strong>
                  </li>
                </ul>
              </div>
              <div className="news-search">
                <div className="news-input">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="text"
                    placeholder="Tìm kiếm"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="news-list">
                <div className="news-item">
                  <div className="news-img">
                    <Link to={`/tin-tuc/thflsnmx`}>
                      <img alt="" src="http://i.imgur.com/PBGq1ov.jpg" />
                    </Link>
                  </div>
                  <div className="news-main">
                    <h2 className="news-title">
                      <Link to={`/tin-tuc/thflsnmx`}>
                        [Tổng hợp] Các concept chụp ảnh nhóm lầy lội “bá đạo như
                        hạt gạo”
                      </Link>
                    </h2>
                    <p className="news-des">
                      Bạn muốn tìm những cách tạo dáng chụp ảnh nhóm lầy lội để
                      giữ lại…
                    </p>
                    <div className="news-post-share-box">
                      <div className="news-post-share-item">
                        <a href="#" className="news-post-like" title="Like">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                        <a
                          className="post-share-facebook"
                          target="_blank"
                          rel="noreferrer"
                          href="#"
                          title="Facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news-item">
                  <div className="news-img">
                    <Link to={`/tin-tuc/thflsnmx`}>
                      <img alt="" src="http://i.imgur.com/PBGq1ov.jpg" />
                    </Link>
                  </div>
                  <div className="news-main">
                    <h2 className="news-title">
                      <Link to={`/tin-tuc/thflsnmx`}>
                        [Tổng hợp] Các concept chụp ảnh nhóm lầy lội “bá đạo như
                        hạt gạo”
                      </Link>
                    </h2>
                    <p className="news-des">
                      Bạn muốn tìm những cách tạo dáng chụp ảnh nhóm lầy lội để
                      giữ lại…
                    </p>
                    <div className="news-post-share-box">
                      <div className="news-post-share-item">
                        <a href="#" className="news-post-like" title="Like">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                        <a
                          className="post-share-facebook"
                          target="_blank"
                          rel="noreferrer"
                          href="#"
                          title="Facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news-item">
                  <div className="news-img">
                    <Link to={`/tin-tuc/thflsnmx`}>
                      <img alt="" src="http://i.imgur.com/PBGq1ov.jpg" />
                    </Link>
                  </div>
                  <div className="news-main">
                    <h2 className="news-title">
                      <Link to={`/tin-tuc/thflsnmx`}>
                        [Tổng hợp] Các concept chụp ảnh nhóm lầy lội “bá đạo như
                        hạt gạo”
                      </Link>
                    </h2>
                    <p className="news-des">
                      Bạn muốn tìm những cách tạo dáng chụp ảnh nhóm lầy lội để
                      giữ lại…
                    </p>
                    <div className="news-post-share-box">
                      <div className="news-post-share-item">
                        <a href="#" className="news-post-like" title="Like">
                          <i className="fa-regular fa-heart"></i>
                        </a>
                        <a
                          className="post-share-facebook"
                          target="_blank"
                          rel="noreferrer"
                          href="#"
                          title="Facebook"
                        >
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="news-item">
                  <div className="news-img">
                    <Link to={`/tin-tuc/thflsnmx`}>
                      <img alt="" src="http://i.imgur.com/PBGq1ov.jpg" />
                    </Link>
                  </div>
                  <div className="news-main">
                    <h2 className="news-title">
                      <Link to={`/tin-tuc/thflsnmx`}>
                        [Tổng hợp] Các concept chụp ảnh nhóm lầy lội “bá đạo như
                        hạt gạo”
                      </Link>
                    </h2>
                    <p className="news-des">
                      Bạn muốn tìm những cách tạo dáng chụp ảnh nhóm lầy lội để
                      giữ lại…
                    </p>
                  </div>
                </div>
              </div>
              <div className="news-paging">
                <div className="news-paging__item">0</div>
                <div className="news-paging__item">1</div>
                <div className="news-paging__item active">2</div>
                <div className="news-paging__item">3</div>
                <div className="news-paging__item">4</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
