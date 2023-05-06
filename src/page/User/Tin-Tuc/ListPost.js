/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/news.css";
import { sendDelete, sendGet } from "../../../utils/api";
import { Tabs } from "antd";
import { getItem } from "../../../utils/storage";
export default function News() {
  const [data, setData] = useState();
  const user = getItem("user") ? JSON.parse(getItem("user")) : {};

  const listNews = async () => {
    if (user.role == 'USER') {
      let res = await sendGet("/users/post", {});
      if (res.statusCode == 200) {
        setData(res.returnValue?.data);
      } else {
        message.error("Thất bại");
      }
    }
    else {
      let res = await sendGet("/tour-guide/post", {});
      if (res.statusCode == 200) {
        setData(res.returnValue?.data);
      } else {
        message.error("Thất bại");
      }
    }

  }; const handleDelete = async (values) => {
    const res = await sendDelete(`/user-tourguide/${values.id}`);
    if (res.statusCode === 200) {
      await listNews();
      message.success("Xóa thành công!");
    } else {
      message.error("Vui lòng thử lại sau!");
    }
  };
  useEffect(() => {
    listNews();
  }, []);
  return (
    <>
      <Layout>
        <div className="blog_wrapper">
          <div className="content">
            <div className="blog-content">
              <Tabs>
                <Tabs.TabPane tab="Bài viết của tôi" key="item-1">
                  {data?.map((item, index) => (
                    <div class="MyPostItem_wrapper__LYeZB" key={index}>
                      <h3>
                        <a href={`/tin-tuc/${item?.id}`}>
                          <span>{item?.title}</span>
                        </a>
                      </h3>
                      <div class="MyPostItem_author__LTSvL">
                        <a href="/post/6367/edit">  {new Date(item?.createdAt).toLocaleString()}</a>
                        <span class="MyPostItem_dot__u8k+x">·</span>
                      </div>
                      <span class="MyPostItem_more__jS8rj">
                        <i class="fa-solid fa-ellipsis"></i>
                        <div className="Tippy-module_wrapper">
                          <ul class="Tippy-module_wrapper__1s5m5 Tippy-module_options__37VQJ hide-on-click">
                            <li><Link to={`/edit-post/${item.id}`} >Chỉnh sửa</Link></li>
                            <li onClick={() => handleDelete(item)}>Xóa</li>
                          </ul>
                        </div>
                      </span>
                    </div>
                  ))}
                </Tabs.TabPane>
                <Tabs.TabPane tab="Đã lưu" key="item-2">
                  <p>Bạn chưa lưu bài viết nào</p>
                </Tabs.TabPane>
              </Tabs>

            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
