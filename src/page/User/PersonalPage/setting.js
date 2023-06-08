/* eslint-disable eqeqeq */
import React, { useState, useEffect, useContext } from "react";
import { Form, Button, Input, Skeleton, message } from "antd";
import axios from "axios";
import "../../../assets/css/personal.css";
import { avt, camera } from "../../../constants/images";
import { sendGet, sendPost, sendPut } from "../../../utils/api";
import Layout from "../../../components/layout/layout";
import { AppContext } from "../../../Context/AppContext";
function Account() {
  const { infoUser } = useContext(AppContext);
  const [show, setShow] = useState(true);
  const [form] = Form.useForm();
  const [form1] = Form.useForm();

  const onFinish = async (values) => {
    values.avatar = await handleGetImage();
    if (infoUser.role == "TOURGUIDE") {
      try {
        let res = await sendPut("/tour-guide/infor", values);
        if (res.statusCode === 200) {
          window.location.reload();
        } else {
          message.error("Cập nhật HDV thất bại");
        }
      } catch (error) {
        message.error("Cập nhật HDV thất bại");
      }
    } else {
      message.error("Chưa thể cập nhật thông tin User");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [imageUrl, setImageUrl] = useState(
    infoUser?.avatar ? infoUser?.avatar : avt
  );
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleGetImage = async () => {
    const { files } = document.querySelector(".img-input");
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "avatar");
    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/learnit2022/image/upload",
        formData
      );
      setImageUrl(data.secure_url);
      return data.secure_url;
    } catch (error) {
      console.error(error);
    }
  };

  const onChangePass = async (values) => {
    try {
      const res = await sendPut("/auth/change-password", values);
      if (res.statusCode === 200) {
        message.success("Đổi mật khẩu thành công");
        form1.resetFields();
      } else {
        message.error("Không thể đổi mật khẩu");
      }
    } catch (error) {
      message.error("Không thể đổi mật khẩu");
    }
  };
  const onCancelChangePass = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  if (!Object.keys(infoUser).length)
    return (
      <>
        <Skeleton />
      </>
    );
  return (
    <>
      <Layout>
        <div className="InfoUser-wwrapper">
          <h1 className="InfoUser-wwrapper_title">Thông tin tài khoản</h1>
          {infoUser.role == "USER" && (
            <>
              {" "}
              <h2>Tổng điểm trong hệ thống</h2>
              <div className="info">
                <Input readOnly value={infoUser?.voucherPoint} />
                <p>Điểm sẻ tự động cộng khi bạn kết thúc chuyến đi.</p>
                <p>Điểm dùng để quy đổi lấy Voucher</p>
              </div>
            </>
          )}

          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            form={form}
          >
            <h2>Thông tin cá nhân</h2>
            <div className="info">
              <h3>Họ tên</h3>
              <Form.Item name="name" initialValue={infoUser?.username}>
                <Input readOnly />
              </Form.Item>
              <p>
                Tên của bạn xuất hiện trên trang cá nhân và bên cạnh các bình
                luận của bạn.
              </p>
            </div>
            <div className="info">
              <h3>Giới thiệu</h3>
              <Form.Item name="bio" initialValue={infoUser?.bio}>
                <Input />
              </Form.Item>
              <p>Bio của bạn xuất hiện trên trang cá nhân của bạn.</p>
            </div>
            <div className="info">
              <h3>SĐT</h3>
              <Form.Item name="phone" initialValue={infoUser?.phone}>
                <Input placeholder="Số điện thoại" />
              </Form.Item>
            </div>

            <div className="info info-image">
              <h3>Avatar</h3>
              <div>
                Nên là ảnh vuông, chấp nhận các tệp: JPG, PNG hoặc GIF.
                <Form.Item name="avatar" initialValue={imageUrl}>
                  <div class="avtUpload">
                    <div class="avtUploadImg">
                      <img src={imageUrl} alt="Avatar" />
                    </div>
                    <label for="img" className="infor-before">
                      <div class="photoupload" onChange={onImageChange}>
                        <img
                          src={camera}
                          class="photoupload-img"
                          alt="camera"
                        />
                      </div>
                      <div class="PhotoPic" hidden={true}>
                        <input
                          className="img-input"
                          type="file"
                          id="img"
                          name="img"
                          accept="image/*"
                          onChange={onImageChange}
                        />
                      </div>
                    </label>
                  </div>
                </Form.Item>
              </div>
            </div>

            <div className="info">
              <h3>Email</h3>
              <Form.Item name="email" initialValue={infoUser?.email}>
                <Input placeholder={"ktravel@gmail.com"} readOnly />
              </Form.Item>
            </div>
            <Form.Item>
              <div className="btn-active">
                <Button className="active" htmlType="submit">
                  Lưu
                </Button>
                <button>Hủy</button>
              </div>
            </Form.Item>
          </Form>
          <div className="ChangPassword">
            <div className="changeinfo">
              <div className="title">
                <i class="fa-solid fa-key"></i>
                <div style={{ marginLeft: "13px" }}>
                  <p style={{ color: "#181717" }}>Đổi mật khẩu</p>
                  <p style={{ color: "#383838" }}>
                    Bạn nên sử dụng mật khẩu mạnh mà mình chưa sử dụng ở đâu
                    khác
                  </p>
                </div>
              </div>
              <button onClick={() => setShow(!show)}>Thay đổi</button>
            </div>
            <Form
              hidden={show}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onChangePass}
              onFinishFailed={onCancelChangePass}
              autoComplete="off"
              form={form1}
            >
              <Form.Item
                name="oldPassword"
                label="Mật khẩu cũ"
                rules={[
                  {
                    required: true,
                    message: "Nhập mật khẩu",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="newPassword"
                label="Mật khẩu mới"
                rules={[
                  {
                    required: true,
                    message: "Nhập mật khẩu",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Nhập lại mật khẩu"
                dependencies={["passwordConfirmation"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Nhật mật khẩu",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error("Mật khẩu không khớp"));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Lưu thay đổi
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Account;
