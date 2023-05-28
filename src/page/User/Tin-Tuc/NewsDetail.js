/* eslint-disable */
import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/news.css";
import { Link, useParams } from "react-router-dom";
import { sendDelete, sendGet, sendPost, sendPut } from "../../../utils/api";
import { avt, logo } from "../../../constants/images";
import { Modal, TextArea, message } from "antd";
import { getItem } from "../../../utils/storage";
export default function NewsDetail() {
  const params = useParams();
  const [show, setShow] = useState(false);
  const [data, setData] = useState();
  const [dataHot, setDataHot] = useState();

  const getData = async () => {
    const res = await sendGet(`/posts/user-tourguide/${params.id}`);
    if (res.statusCode == 200) {
      setData(res.returnValue);
    } else {
      message.error("Thất bại");
    }
  };
  const listNews = async () => {
    const res = await sendGet("/posts/user-tourguide", { limit: 100 });
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };
  const user = getItem("user") ? JSON.parse(getItem("user")) : {};

  const handleOk = async () => {
    if (!user) {
      message.error("Vui lòng đăng nhập để báo cáo");
      return;
    }
    if (!content) {
      message.error("Vui lòng nhập nội dung báo cáo");
      return;
    }
    const response = await sendPost(`/reports/post`, {
      postId: data?.id,
      content: content,
    });
    if (response.statusCode === 200) {
      message.success("Bài viết đã được báo cáo tới quản trị viên");
      setIsModalOpen(false);
      setContent("");
    } else {
      message.error("Báo cáo bài viết thất bại !!!");
    }
  };
  const newSave = async () => {
    if (!user) {
      message.error("Vui lòng đăng nhập để lưu bài viết");
      return;
    }
    const response = await sendPut(`/users/add-favorite`, {
      postId: data?.id,
    });
    if (response.statusCode === 200) {
      message.success("Bài viết đã được lưu");
    } else {
      message.error("Lưu không thành công!");
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setContent("");
  };
  const getcontent = (e) => {
    setContent(e.target.value);
  };
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
                <h3 className="news-detail-title">{data?.title}</h3>
                <div className="news-detail__header">
                  <div className="news-detail-author">
                    <img
                      className="news-detail-avt"
                      alt="avt"
                      src={data?.author?.avt ? data?.author?.avt : logo}
                    />
                    <div className="news-detail-info">
                      <span className="news-detail-name">
                        {data?.tourGuide?.username != null
                          ? data?.tourGuide?.username
                          : data?.user?.username}
                      </span>
                      <span className="news-detail-time">
                        {" "}
                        {data?.createdAt &&
                          formatterDate.format(Date.parse(data?.createdAt))}
                      </span>
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
                      <li onClick={() => newSave()}>
                        <i className="fa-solid fa-bookmark"></i>Lưu bài viết
                      </li>
                      <li onClick={showModal}>
                        <i class="fa-solid fa-flag"></i>Báo cáo bài viết
                      </li>
                      <Modal
                        title=""
                        open={isModalOpen}
                        visible={isModalOpen}
                        onOk={handleOk}
                        centered
                        footer={null}
                        onCancel={handleCancel}
                      >
                        <h1 className="modal-title">Báo cáo bài viết</h1>
                        <p className="modal-des">
                          Nội dung bài viết có vấn đề? Hãy báo lại cho chúng tôi
                          ngay nhé!
                        </p>
                        <textarea
                          value={content}
                          onChange={getcontent}
                          rows={3}
                          placeholder="Nội dung báo cáo...."
                        />
                        <div className="modal-btn">
                          <div
                            className="button button--primary"
                            onClick={handleOk}
                          >
                            Báo cáo ngay
                          </div>
                          <div
                            className="button button--normal"
                            onClick={handleCancel}
                          >
                            Hủy
                          </div>
                        </div>
                      </Modal>
                    </ul>
                  </div>
                </div>
                <div className="news-detail__main">
                  <div className="image-detail">
                    <img alt="" src={data?.image} />
                  </div>
                  <p
                    dangerouslySetInnerHTML={{ __html: data?.currentContent }}
                  />
                </div>
                <Comment params={params} />
              </div>
              <div className="news-content-right">
                <div class="news-content__hot-title">
                  <span>Tin mới</span>
                </div>
                <div class="news-content__hot-main">
                  {dataHot?.slice(0, 3)?.map((item, index) => (
                    <div class="news-content__hot-item" key={index}>
                      <a
                        href={`/tin-tuc/${item?.id}`}
                        class="news-content__hot-link"
                      >
                        <div className="news-content__hot-img">
                          <img src={item?.image} alt="" />
                        </div>
                        <div class="news-content__hot-intro">
                          <span class="news-content__hot-time">
                            {item?.createdAt &&
                              formatterDate.format(Date.parse(item?.createdAt))}
                          </span>
                          <p class="news-content__hot-name">{item?.title}</p>
                        </div>
                      </a>
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
const Comment = ({ params }) => {
  const [content, setContent] = useState("");
  const [contentEdit, setContentEdit] = useState("");
  const [comment, setComment] = useState([]);
  const [active, setActive] = useState(null);
  const [hidden, setHidden] = useState(false);

  const user = getItem("user") ? JSON.parse(getItem("user")) : {};
  const listComment = async () => {
    const res = await sendGet(`/comments`, {
      postId: params.id,
      limit: 100,
    });
    if (res.statusCode === 200) {
      setComment(res.returnValue.data);
    } else {
      message.error("Không thể đăng bình luận");
    }
  };
  const deleteComment = async (e) => {
    try {
    } catch (error) {
      message.error("Không thể xóa bình luận");
    }
    await sendDelete(`/comments/${e}`);
    await listComment();
  };

  const showEditCmt = (value, content) => {
    setActive(value);
    setHidden(false);
    setContentEdit(content);
  };
  const handleEdit = async (key, value) => {
    const res = await sendPut(`/comments`, { content: value, commentId: key });
    try {
      if (res.statusCode === 200) {
        await listComment();
        setHidden(!hidden);
      }
    } catch (error) {}
  };
  useEffect(() => {}, []);
  const formatterDate = new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  useEffect(() => {
    listComment();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = async (values) => {
    try {
      const data = {
        content: content,
        parrentCommentId: null,
        postId: parseInt(params.id),
      };
      const res = await sendPost(`/comments`, data);
      if (res.statusCode === 200) {
        listComment();
        setContent("");
      } else {
        message.error("Không thể đăng bình luận");
      }
    } catch (error) {
      message.error("Không thể đăng bình luận");
    }
  };
  return (
    <>
      <div className="news-detail__comment">
        <div className="news-detail__create-comment">
          <img alt="" src={logo} />
          <input
            value={content}
            className="comment--text"
            placeholder="Viết bình luận... "
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="news-detail__send" onClick={() => handleSubmit()}>
            <i class="fa-regular fa-paper-plane"></i>
          </div>
        </div>
        <div className="news-detail__list-cmt">
          {comment?.map((item, index) => (
            <div className="news-detail__item-cmt" key={index}>
              <img alt="" src={avt} />
              <div className="news-detail_item-group">
                <div className="news-detail__item-main">
                  <p className="news-detail__name">{item?.user?.username}</p>
                  <p className="news-detail__des ">{item?.content}</p>
                </div>
                <span class="time">
                  {formatterDate.format(Date.parse(item?.createdAt))}
                </span>
                {active === item?.id ? (
                  <div className="editCmt" hidden={hidden}>
                    <input
                      value={contentEdit}
                      onChange={(e) => setContentEdit(e.target.value)}
                    ></input>
                    <a onClick={() => handleEdit(item?.id, contentEdit)}>
                      <i class="fas fa-paper-plane"></i>
                    </a>
                  </div>
                ) : null}
              </div>{" "}
              {item?.user?.id == user?.id ? (
                <div className="active">
                  <i className="fas fa-ellipsis-h">
                    <ul>
                      <li onClick={() => deleteComment(item?.id)}>Xóa</li>
                      <li
                        onClick={() => showEditCmt(item?.id, item?.content)}
                        key={item?.id}
                      >
                        Sửa
                      </li>
                    </ul>
                  </i>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
