/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/news.css";
import { sendDelete, sendGet } from "../../../utils/api";
import { Tabs, message } from "antd";
import { getItem } from "../../../utils/storage";
import { nodata } from "../../../constants/images";
import PaginationComponent from "../../../components/pagination";
export default function News() {
  const [totalPages, setTotalPages] = useState([]);
  const numberPage = 5;
  const [data, setData] = useState();
  const [dataSave, setDataSave] = useState();
  const user = getItem("user") ? JSON.parse(getItem("user")) : {};
  const changePaginationData = async (dataPagination) => {
    setData(dataPagination);
  };
  const listNews = async () => {
    if (user.role == "USER") {
      let res = await sendGet("/users/post", { limit: numberPage });
      if (res.statusCode == 200) {
        setData(res.returnValue?.data);
        setTotalPages(res.returnValue?.totalPages);
      } else {
        message.error("Thất bại");
      }
    } else {
      let res = await sendGet("/tour-guide/post", { limit: numberPage });
      if (res.statusCode == 200) {
        setData(res.returnValue?.data);
        setTotalPages(res.returnValue?.totalPages);
      } else {
        message.error("Thất bại");
      }
    }
  };
  const handleDelete = async (values) => {
    const res = await sendDelete(`/posts/user-tourguide/${values.id}`);
    if (res.statusCode === 200) {
      await listNews();
      message.success("Xóa thành công!");
    } else {
      message.error("Vui lòng thử lại sau!");
    }
  };
  const listNewsSave = async () => {
    try {
      let res = await sendGet("/users/favorite", { limit: 100 });
      if (res.statusCode == 200) {
        setDataSave(res.returnValue?.postFavorites);
      } else {
        message.error("Thất bại");
      }
    } catch (error) {
      message.error("Ko thành công");
    }
  };
  const handleDeleteSave = async (values) => {
    try {
      const res = await sendDelete(`/users/remove-favorite`, {
        postId: values.id,
      });
      if (res.statusCode === 200) {
        await listNewsSave();
        message.success("Xóa thành công!");
      } else {
        message.error("Vui lòng thử lại sau!");
      }
    } catch (error) {
      message.error("Vui lòng thử lại sau!");
    }
  };
  useEffect(() => {
    listNews();
    listNewsSave();
  }, []);
  return (
    <>
      <Layout>
        <div className="blog_wrapper">
          <div className="content">
            <div className="blog-content">
              <Tabs>
                <Tabs.TabPane tab="Bài viết của tôi" key="item-1">
                  {data?.length > 0 ? (
                    <>
                      <div className="MyPost_main">
                        {data?.map((item, index) => (
                          <div class="MyPostItem_wrapper__LYeZB" key={index}>
                            <h3>
                              <a href={`/tin-tuc/${item?.id}`}>
                                <span>{item?.title}</span>
                              </a>
                            </h3>
                            <div class="MyPostItem_author__LTSvL">
                              <a href="/post/6367/edit">
                                {" "}
                                {new Date(item?.createdAt).toLocaleString()}
                              </a>
                              <span class="MyPostItem_dot__u8k+x">·</span>
                            </div>
                            <span class="MyPostItem_more__jS8rj">
                              <i class="fa-solid fa-ellipsis"></i>
                              <div className="Tippy-module_wrapper">
                                <ul class="Tippy-module_wrapper__1s5m5 Tippy-module_options__37VQJ hide-on-click">
                                  <li>
                                    <Link to={`/edit-post/${item.id}`}>
                                      Chỉnh sửa
                                    </Link>
                                  </li>
                                  <li onClick={() => handleDelete(item)}>
                                    Xóa
                                  </li>
                                </ul>
                              </div>
                            </span>
                          </div>
                        ))}
                      </div>
                      {data && data.length > 0 && (
                        <PaginationComponent
                          limit={numberPage}
                          enpoint="posts/user-tourguide"
                          totalPages={totalPages}
                          changePaginationData={changePaginationData}
                        />
                      )}
                    </>
                  ) : (
                    <>
                      <div className="no-post">
                        <img src={nodata} alt="" />
                        <p className="no-post-desc">
                          Bạn chưa viết bài nào. Xem thêm{" "}
                          <Link class="travel-link" to="/tin-tuc">
                            tại đây
                          </Link>
                        </p>
                      </div>
                    </>
                  )}
                </Tabs.TabPane>
                <Tabs.TabPane tab="Đã lưu" key="item-2">
                  {dataSave?.length > 0 ? (
                    <>
                      {dataSave?.map((item, index) => (
                        <div class="MyPostItem_wrapper__LYeZB" key={index}>
                          <h3>
                            <a href={`/tin-tuc/${item?.id}`}>
                              <span>{item?.title}</span>
                            </a>
                          </h3>
                          <div class="MyPostItem_author__LTSvL">
                            <a href="/post/6367/edit">
                              {" "}
                              {new Date(item?.createdAt).toLocaleString()}
                            </a>
                            <span class="MyPostItem_dot__u8k+x">·</span>
                          </div>
                          <span class="MyPostItem_more__jS8rj">
                            <i class="fa-solid fa-ellipsis"></i>
                            <div className="Tippy-module_wrapper">
                              <ul class="Tippy-module_wrapper__1s5m5 Tippy-module_options__37VQJ hide-on-click">
                                <li onClick={() => handleDeleteSave(item)}>
                                  Bỏ lưu
                                </li>
                              </ul>
                            </div>
                          </span>
                        </div>
                      ))}
                    </>
                  ) : (
                    <>
                      <div className="no-post">
                        <img src={nodata} alt="" />
                        <p className="no-post-desc">
                          Bạn chưa lưu bài nào. Xem thêm{" "}
                          <Link class="travel-link" to="/tin-tuc">
                            tại đây
                          </Link>
                        </p>
                      </div>
                    </>
                  )}
                </Tabs.TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
