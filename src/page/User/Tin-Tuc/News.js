/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/news.css";
import { sendGet } from "../../../utils/api";
import { Pagination } from "antd";
import PaginationComponent from "../../../components/pagination";
export default function News() {
  const numberPage = 6;
  const [data, setData] = useState();
  const [totalPages, setTotalPages] = useState([]);
  const [keySearch, setKeySearch] = useState("");
  const [valueTopic, setValueTopic] = useState("");

  const listNews = async () => {
    const res = await sendGet("/posts/user-tourguide?page=1", {
      limit: numberPage,
    });
    if (res.statusCode == 200) {
      setData(res.returnValue.data);
      setTotalPages(res.returnValue?.totalPages);
    } else {
      message.error("Thất bại");
    }
  };
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      let res = await sendGet("/posts/user-tourguide?page=1", {
        limit: numberPage,
        keyword: keySearch,
      });
      if (res.statusCode == 200) {
        setData(res.returnValue.data);
        setTotalPages(res.returnValue?.totalPages);
      } else {
        message.error("Thất bại");
      }
    }
  };
  const handleChangeTopic = async (e) => {
    let res = await sendGet("/posts/user-tourguide?page=1", {
      limit: numberPage,
      topics: e,
    });
    if (res.statusCode == 200) {
      setData(res.returnValue.data);
      setTotalPages(res.returnValue?.totalPages);
    } else {
      message.error("Thất bại");
    }
  };
  const changePaginationData = async (dataPagination) => {
    setData(dataPagination);
  };
  useEffect(() => {
    listNews();
  }, []);
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
                    <strong>Tin tức</strong>
                  </li>
                </ul>
              </div>
              <div className="news-search">
                <div className="news-input">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input
                    value={keySearch}
                    type="text"
                    placeholder="Tìm kiếm"
                    className="form-control"
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setKeySearch(e.target.value)}
                  />
                </div>
                <div className="news-topic">
                  <div className="news-topic-title">
                    <i class="fa-solid fa-filter"></i>Tìm kiếm theo:{" "}
                  </div>
                  <div className="news-topic-main">
                    <select
                      id="topic"
                      onChange={(e) => handleChangeTopic(e.target.value)}
                      value={valueTopic}
                    >
                      <option value="">Chủ đề</option>
                      <option value="FOOD">Đồ ăn</option>
                      <option value="SHARE">Chia sẻ kinh nghiệm</option>
                      <option value="REVIEW">REVIEW</option>
                      <option value="SUGGEST">Gợi ý</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="news-list">
                {data &&
                  data?.map((item, index) => (
                    <div className="news-item" key={index}>
                      <div className="news-img">
                        <Link to={`/tin-tuc/${item?.id}`}>
                          <img alt="" src={item?.image} />
                        </Link>
                      </div>
                      <div className="news-main">
                        <h2 className="news-title">
                          <Link to={`/tin-tuc/${item?.id}`}>{item?.title}</Link>
                        </h2>
                        <p
                          className="news-des"
                          dangerouslySetInnerHTML={{
                            __html: item?.currentContent,
                          }}
                        />
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
                  ))}
              </div>
              <div className="news-paging">
                {data && data.length > 0 && (
                  <PaginationComponent
                    limit={numberPage}
                    enpoint="posts/user-tourguide"
                    totalPages={totalPages}
                    changePaginationData={changePaginationData}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
