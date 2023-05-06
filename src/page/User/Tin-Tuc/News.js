/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/news.css";
import { sendGet } from "../../../utils/api";
import { Pagination } from "antd";
export default function News() {
  const numberPage = 6;
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(numberPage);
  const handleChange = (value) => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(numberPage);
    } else {
      setMinValue((value - 1) * numberPage);
      setMaxValue(value * numberPage);
    }
  };
  const listNews = async () => {
    const res = await sendGet("/news", {});
    if (res.returnValue.data.length >= 0) {
      setData(res.returnValue.data);
    } else {
      message.error("Thất bại");
    }
  };
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
<<<<<<< HEAD
=======
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
                    <strong>Tin tức</strong>
                  </li>
                </ul>
              </div>
>>>>>>> 5fc01e84320ad86b6434153ad21f11593edd8d15
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
                {/* {data.length > 0 && ( */}
                <Pagination
                  defaultCurrent={1}
                  defaultPageSize={numberPage}
                  total={10}
                  onChange={(value) => handleChange(value)}
                />
                {/* )} */}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
