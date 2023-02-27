import React, { useState } from "react";
import axios from "axios";
import MarkdownIt from "markdown-it";
import { message } from "antd";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import { useHistory } from "react-router-dom";
import "./NewPost.scss";
import { sendPost } from "../../utils/api";
import Layout from "../../components/layout/layout";
const mdParser = new MarkdownIt();
function Blogging() {
  document.title = "Viết Blog";
  const history = useHistory();
  const [imageUrl, setImageUrl] = useState("11");
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleChangeImage = (e) => {
    const { files } = document.querySelector(".img-input");
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "descriptionCourse");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/learnit2022/image/upload",
        formData
      )
      .then((response) => setImageUrl(response.data.secure_url))
      .catch((err) => console.error(err));
    return imageUrl;
  };
  //nội dung trong mackdown
  function handleEditorChange({ html }) {
    setContent(html);
  }
  function onImageUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (data) => {
        resolve(data.target.result);
      };
      reader.readAsDataURL(file);
    });
  }
  const handleChangeSubmit = async (values) => {
    const data = {
      img: imageUrl,
      title: title,
      content: content,
    };
    // eslint-disable-next-line no-unused-vars
    const add = await sendPost("/api/blog", data);
    // console.log(add);
    if (add.status === 201) {
      message.success("Bài viết của bạn đang được duyệt");
      history.push("/");
    } else {
      message.error("Lỗi kĩ thuật");
    }
  };

  return (
    <>
      <Layout>
        <div className="Blogging-wrapper ">
          <div style={{ display: " flex", justifyContent: "flex-end" }}>
            <button className="Xuat-ban" onClick={handleChangeSubmit}>
              Xuất bản
            </button>
          </div>
          <input
            placeholder="Tiêu đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {/* content */}
          <MdEditor
            placeholder="Nội dung viết ở đây"
            style={{ height: "500px" }}
            renderHTML={(text) => mdParser.render(text)}
            onImageUpload={onImageUpload}
            onChange={handleEditorChange}
          />
          <section className="block-img_thumb">
            <label htmlFor="img">
              <div
                className="img"
                style={{ backgroundImage: `url(${imageUrl})` }}
              >
                <p style={{ padding: "38px 20px 0" }}>
                  Thêm một ảnh đại diện hấp dẫn sẽ giúp bài viết của bạn cuốn
                  hút hơn với độc giả.
                </p>
                <p style={{ color: "red" }}>
                  Kéo thả ảnh vào đây, hoặc bấm để chọn ảnh.
                </p>
                <input
                  className="img-input"
                  hidden
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                  onChange={handleChangeImage}
                />
              </div>
            </label>
          </section>
        </div>
      </Layout>
    </>
  );
}

export default Blogging;
