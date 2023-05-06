/* eslint-disable */
import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/news.css";
import { Link, useParams } from "react-router-dom";
import { sendGet } from "../../../utils/api";
import { avt, logo } from "../../../constants/images";
export default function NewsDetail() {
  const params = useParams()
  const [show, setShow] = useState(false);
  const [data, setData] = useState();
  const [dataHot, setDataHot] = useState()

  const getData = async () => {
    const res = await sendGet(`/posts/user-tourguide/${params.id}`);
    if (res.statusCode == 200) {
      setData(res.returnValue);
    } else {
      message.error("Thất bại");
    }
  };
  const listNews = async () => {
    const res = await sendGet("/posts/user-tourguide");
    if (res.statusCode == 200) {
      setDataHot(res.returnValue.data);
    } else {
      message.error("Thất bại");
    }
  };
  const formatterDate = new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  useEffect(() => {
    getData();
    listNews();
  }, []);
  return (
    <>
      <Layout>
        <div className="news-detail__wrapper">
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
                <li>Cẩm nang</li>
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
            <div className="news-content-details">
              <div className="news-content-left">
                <h3 className="news-detail-title">
                  {data?.title}
                </h3>
                <div className="news-detail__header">
                  <div className="news-detail-author">
                    <img
                      className="news-detail-avt"
                      alt="avt"
                      src={data?.author?.avt ? data?.author?.avt : logo}
                    />
                    <div className="news-detail-info">
                      <span className="news-detail-name">{data?.tourGuide?.username != null ? data?.tourGuide?.username : data?.user?.username}</span>
                      <span className="news-detail-time"> {data?.createdAt && formatterDate.format(Date.parse(data?.createdAt))}</span>
                    </div>
                  </div>
                  <div className="Blog-action">
                    <i
                      className="Blog-action-icon fa-solid fa-ellipsis-vertical"
                      onClick={() => setShow(!show)}
                    ></i>
                    <ul
                      className={show ? "Blog-options active" : "Blog-options"}
                    >
                      <li>
                        <i className="fa-solid fa-bookmark"></i>Lưu bài viết
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/sharer/sharer.php?u=http://learnit-kma.me/learn/reactjs4"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-facebook-f"></i>Chia sẻ lên
                          FaceBook
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=Tiêu đề &body=http://learnit-kma.me/learn/reactjs4"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-solid fa-envelope"></i>Chia sẻ tới
                          Email
                        </a>
                      </li>
                      <li>
                        <i className="fa-regular fa-copy"></i>Sao chép liên kết
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="news-detail__main">
                  <p dangerouslySetInnerHTML={{ __html: data?.currentContent }} />
                </div>
                <div className="news-detail__comment">
                  <div className="news-detail__create-comment">
                    <img
                      alt=""
                      src={logo}
                    />
                    <input
                      className="comment--text"
                      placeholder="Viết bình luận... "
                    />
                    <div className="news-detail__send">
                      <i class="fa-regular fa-paper-plane"></i>
                    </div>
                  </div>
                  <div className="news-detail__list-cmt">
                    <div className="news-detail__item-cmt">
                      <img
                        alt=""
                        src={avt}
                      />
                      <div className="news-detail__item-main">
                        <p className="news-detail__name">Nguyễn A</p>
                        <p className="news-detail__des ">
                          đây là nội dung bình luận
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="news-content-right">
                <div class="news-content__hot-title">
                  <span>Tin mới</span>
                </div>
                <div class="news-content__hot-main">
                  {dataHot?.slice(0, 3)?.map((item, index) => (
                    <div class="news-content__hot-item" key={index}>
                      <Link to={`/tin-tuc/${item?.id}`} class="news-content__hot-link">
                        <div className="news-content__hot-img">
                          <img
                            src={item?.image}
                            alt=""
                          />
                        </div>
                        <div class="news-content__hot-intro">
                          <span class="news-content__hot-time">
                            {item?.createdAt && formatterDate.format(Date.parse(item?.createdAt))}
                          </span>
                          <p class="news-content__hot-name">
                            {item?.title}
                          </p>
                        </div>
                      </Link>
                    </div>
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
