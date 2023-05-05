/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/news.css";
import { sendGet } from "../../../utils/api";
import { Pagination } from "antd";
export default function News() {
  const [data, setData] = useState();
  const listNews = async () => {
    const res = await sendGet("/me/news", {});
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
        <div className="blog_wrapper">
          <div className="content">
            <div className="blog-content">
              <h1>Bài viết của tôi</h1>
              <div class="MyPostItem_wrapper__LYeZB">
                <h3>
                  <a href="/tin-tuc/2">
                    <span>Du lịch vùng đất mới</span>
                  </a>
                </h3>
                <div class="MyPostItem_author__LTSvL">
                  <a href="/post/6367/edit">20/11/2022</a>
                  <span class="MyPostItem_dot__u8k+x">·</span>
                </div>
                <span class="MyPostItem_more__jS8rj">
                  <i class="fa-solid fa-ellipsis"></i>
                  <div className="Tippy-module_wrapper">
                    <ul class="Tippy-module_wrapper__1s5m5 Tippy-module_options__37VQJ hide-on-click">
                      <li>Chỉnh sửa</li>
                      <li>Xóa</li>
                    </ul>
                  </div>
                </span>
              </div>
              <div class="MyPostItem_wrapper__LYeZB">
                <h3>
                  <a href="/tin-tuc/2">
                    <span>Du lịch vùng đất mới</span>
                  </a>
                </h3>
                <div class="MyPostItem_author__LTSvL">
                  <a href="/post/6367/edit">20/11/2022</a>
                  <span class="MyPostItem_dot__u8k+x">·</span>
                </div>
                <span class="MyPostItem_more__jS8rj">
                  <i class="fa-solid fa-ellipsis"></i>
                  <div className="Tippy-module_wrapper">
                    <ul class="Tippy-module_wrapper__1s5m5 Tippy-module_options__37VQJ hide-on-click">
                      <li>Chỉnh sửa</li>
                      <li>Xóa</li>
                    </ul>
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
