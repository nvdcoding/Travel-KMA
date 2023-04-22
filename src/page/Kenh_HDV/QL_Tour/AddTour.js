// /* eslint-disable */
import React, { useContext, useEffect } from "react";
import "../../../assets/css/homehdv.css";
import "./style.css";
import {
  Form,
  Input,
  Select,
  Button,
  message,
  InputNumber,
  Upload,
} from "antd";
import axios from "axios";
import Image from "../../../components/image";
import { PlusOutlined } from "@ant-design/icons";
import LayoutHDV from "../../../components/layout/layoutHDV";
import { useState } from "react";
import { sendPost } from "../../../utils/api";
import { AppContext } from "../../../Context/AppContext";
export default function AddTour() {
  const { TextArea } = Input;
  const { provice } = useContext(AppContext);
  const [showtt, setShowtt] = useState(true);
  const defileTime = 100000;

  const [fileList, setFileList] = React.useState([]);
  const [listFile, setListFile] = React.useState([]);

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const upLoadFile = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "avatar");
      let res = await axios.post(
        "https://api.cloudinary.com/v1_1/learnit2022/image/upload",
        formData
      );

      return res?.data;
    } catch (error) {
      return error;
    }
  };

  const onGetImg = async () => {
    try {
      let files = [];
      for await (const file of fileList) {
        let res = await upLoadFile(file.originFileObj);
        if (res) {
          files = [...files, res.secure_url];
        }
        await wait(!res ? defileTime : 0);
      }
      setListFile(files);
    } catch (err) {
      console.log("error", err);
    }
    return listFile;
  };
  const onFinish = async (values) => {
    values.tourImages = await onGetImg();
    console.log("ima", await onGetImg());
    values.tourSchedules = [
      {
        content: "Lịch trình 1",
      },
      {
        content: "Lịch trình 2",
      },
    ];
    const res = await sendPost("/tours", values);
    if (res.statusCode === 400) {
      message.error("Thất bại");
    } else {
      message.success("tạo mới tour thành công, vùi lòng đợi Admin phê duyệt");
    }
  };
  const { Option } = Select;
  const openTT = () => {
    setShowtt(!showtt);
  };
  return (
    <>
      <LayoutHDV>
        <div className="add-tour">
          <div className="add-tour-title" onClick={() => openTT()}>
            <p class="landing-page-title"> Thông tin cơ bản </p>
            <i class={showtt ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
          </div>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            {showtt && (
              <div className="tt-group">
                <Form.Item
                  name="name"
                  label="Tên tour"
                  rules={[
                    {
                      required: true,
                      message: "Tên tour ko để trống!",
                    },
                  ]}
                >
                  <Input placeholder="Tên tour" />
                </Form.Item>
                <Form.Item
                  name="type"
                  label="Phân loại"
                  rules={[
                    {
                      required: true,
                      message: "Phân loại",
                    },
                  ]}
                >
                  <Select placeholder="Phân loại tour">
                    <Option value="male">Du lịch tự nhiên</Option>
                    <Option value="female">Du lịch hoang dã</Option>
                    <Option value="other">Ẩm thực</Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  name="description"
                  label="Mô tả "
                  rules={[
                    {
                      required: true,
                      message: "Mô tả ko để trống!",
                    },
                  ]}
                >
                  <Input placeholder="Mô tả" />
                </Form.Item>
                <Form.Item
                  name="provinceId"
                  label="Tỉnh thành"
                  rules={[
                    {
                      required: true,
                      message: "Tỉnh thành ko để trống!",
                    },
                  ]}
                >
                  <Select placeholder="Tỉnh thành">
                    {provice.map((item, index) => (
                      <Option value={item?.id} key={index}>
                        {item?.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="maxMember"
                  label="Số lượng người tối đa"
                  rules={[
                    {
                      required: true,
                      message: "Số lượng ko để trống!",
                    },
                  ]}
                  initialValue={1}
                >
                  <InputNumber min={1} />
                </Form.Item>
                <div className="group">
                  <Form.Item
                    name="basePrice"
                    label="Chi phí dự kiến một người"
                    rules={[
                      {
                        required: true,
                        message: "Chi phí ko để trống!",
                      },
                    ]}
                  >
                    <InputNumber min={1} />
                  </Form.Item>
                  <Form.Item
                    name="feePerMember"
                    label="Phí phị thu thêm khi quá số người người"
                    rules={[
                      {
                        required: true,
                        message: "Phí phụ thu ko để trống!",
                      },
                    ]}
                  >
                    <InputNumber min={1} />
                  </Form.Item>
                  <Form.Item
                    name="maxPrice"
                    label="Giá tour"
                    rules={[
                      {
                        required: true,
                        message: "Giá tour ko để trống!",
                      },
                    ]}
                  >
                    <InputNumber min={1} />
                  </Form.Item>
                </div>

                <Form.Item
                  name="service"
                  label="Dịch vụ"
                  rules={[
                    {
                      required: true,
                      message: "Dịch vụ ko để trống!",
                    },
                  ]}
                >
                  <div className="service-group">
                    <TextArea rows={4} placeholder="Bao gồm" />
                    <TextArea rows={4} placeholder="Không bao gồm" />
                    <TextArea rows={4} placeholder="Tùy chỉnh" />
                  </div>
                </Form.Item>
                <Form.Item label="Ảnh mô tả" valuePropName="fileList">
                  {/* <Image lengthImg={1} /> */}
                  <Upload
                    accept="image/png, image/jpeg"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={handleChange}
                  >
                    {fileList.length >= 8 ? null : uploadButton}
                  </Upload>
                </Form.Item>
              </div>
            )}

            <div className="main-ht">
              <Form.List name="info">
                {(fields, { add, remove }) => {
                  return (
                    <div>
                      <div className="lt-group">
                        <p className="landing-page-title"> Lịch trình </p>
                        <div
                          className="button button--primary button-add"
                          onClick={() => {
                            add();
                          }}
                        >
                          Thêm mới
                        </div>
                      </div>
                      {fields.map((field, index) => (
                        <div key={field.key}>
                          <StepItem field={field} index={index} />
                          {fields.length > 1 ? (
                            <Button
                              className="dynamic-delete-button"
                              onClick={() => remove(field.name)}
                            >
                              Remove Above Field
                            </Button>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  );
                }}
              </Form.List>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="form-button">
                Lưu
              </Button>
            </Form.Item>
          </Form>
        </div>
      </LayoutHDV>
    </>
  );
}
function StepItem({ field, index }) {
  const { TextArea } = Input;
  const [active, setActive] = useState(true);
  const openServices = () => {
    setActive(!active);
  };
  return (
    <>
      <div className="main-form-step3">
        <div className="main-form-title-box" onClick={() => openServices()}>
          <h3 className="title-ht">Ngày {index + 1}</h3>
          <i class={active ? "fas fa-chevron-up" : "fas fa-chevron-down"}></i>
        </div>
        <div className={active ? "main-form-item" : "hidden"}>
          <Form.Item>
            <Input.Group>
              <Form.Item
                name={[index, "title"]}
                label="Tiêu đề"
                rules={[
                  {
                    required: true,
                    message: "Tiêu đề ko để trống!",
                  },
                ]}
              >
                <Input placeholder="Tiêu đề" />
              </Form.Item>
              <Form.Item name={[index, "desc"]} label="Mô tả">
                <div className="service-group">
                  <TextArea rows={4} placeholder="Mô tả ngắn" />
                  <TextArea rows={4} placeholder="Mô tả dài" />
                </div>
              </Form.Item>
              <Form.Item name={[index, "image"]} label="Ảnh mô tả">
                <Image lengthImg={1} />
              </Form.Item>
            </Input.Group>
          </Form.Item>
        </div>
      </div>
    </>
  );
}
