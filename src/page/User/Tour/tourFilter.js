/* eslint-disable */
import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import { banner, address } from "../../../constants/images";
import "../../../assets/css/hdv-tour-all.css";
import { Pagination } from "antd";
import TourItem from "../../../components/tourItem";
import {
  Modal,
  Button,
  Result,
  Input,
  DatePicker,
  Form,
  InputNumber,
  Select,
} from "antd";
import { useParams } from "react-router-dom";
import moment from "moment";
import { sendGet } from "../../../utils/api";

export default function ToursFilter() {
  const { Option } = Select;
  const [data, setData] = useState([]);
  const [provice, setProvice] = useState([]);
  const [hdv, setHdv] = useState([]);
  const handleRequest = () => {
    setIsModalOpen(true);
  };
  const nameProvice = localStorage.getItem("provice");
  const timeStart = localStorage.getItem("Timeprovice");
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [place, setPlace] = useState("");
  const [show, setShow] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setShow(false);
  };
  const onChangeTimeStart = (date, dateString) => {};
  const onChangeTimeEnd = (date, dateString) => {};
  let params = useParams();
  const tourFiltter = async () => {
    const result = await sendGet(`/tours?provinceId=${params.id}`);
    if (result.statusCode === 200) {
      setData(
        result.returnValue.data.map((e) => {
          return { ...e, place: e.province?.name ? e.province?.name : "" };
        })
      );
    } else {
      message.error("thất bại");
    }
  };
  useEffect(() => {
    tourFiltter();
  }, []);
  return (
    <>
      <Layout>
        <div className="tours-all__wrapper tours-filter__wrapper">
          <div className="banner">
            <img alt="" src={banner} />
          </div>
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
                <li>Tour</li>
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </li>
                <li>
                  <strong>{nameProvice}</strong>
                </li>
              </ul>
            </div>
            <div className="tours-all__main">
              <div className="tours-all__left">
                <div className="request_tour">
                  <div className="tour-detail__plan">
                    <div className="tour-detail__plan-header">
                      <img
                        alt=""
                        src="https://viettel.vn/images_content/img-solution-camera-2.png"
                      />
                      <div className="tour-detail__plan-info">
                        <span className="tour-plan__review">
                          Lên kế hoạch cho chuyến tham quan
                          <strong> {nameProvice}</strong> với TravelVN
                        </span>
                      </div>
                    </div>
                    <div className="tour-detail__plan-body">
                      <label htmlFor="start">Tên chuyến đi:</label>
                      <Input
                        placeholder="nhập tên chuyến đi"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label htmlFor="place">Địa điểm:</label>
                      <p className="ant-input">{nameProvice}</p>
                      <label htmlFor="times">Thời gian bắt đầu:</label>
                      <div>
                        {" "}
                        <DatePicker
                          onChange={onChangeTimeStart}
                          placeholder="Chọn ngày"
                          format={dateFormatList}
                          defaultValue={moment(timeStart)}
                        />
                      </div>
                      <label htmlFor="times">Thời gian kết thúc:</label>
                      <div>
                        <DatePicker
                          onChange={onChangeTimeStart}
                          placeholder="Chọn ngày"
                          format={dateFormatList}
                          defaultValue={moment(timeStart)}
                        />
                      </div>
                      {/* <label>Số lượng</label>
                      <div className="create-tour__people-item">
                        <p className="create-tour__people-des">
                          Trẻ em
                          <br /> Lứa tuổi 2 - 12
                        </p>
                        <div className="people_unit">
                          <div className="minus">
                            <i class="fa-solid fa-minus"></i>
                          </div>
                          <div className="unit">0</div>
                          <div className="plus">
                            <i class="fa-solid fa-plus"></i>
                          </div>
                        </div>
                      </div>
                      <div className="create-tour__people-item">
                        <p className="create-tour__people-des">Người lớn</p>
                        <div className="people_unit">
                          <div className="minus">
                            <i class="fa-solid fa-minus"></i>
                          </div>
                          <div className="unit">0</div>
                          <div className="plus">
                            <i class="fa-solid fa-plus"></i>
                          </div>
                        </div>
                      </div> */}
                      <label htmlFor="start">Mô tả chi tiết:</label>
                      <Input
                        placeholder="Nhập mô tả"
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                      <div
                        className="button button--primary"
                        onClick={handleRequest}
                      >
                        Yêu cầu
                      </div>
                      <Modal
                        title=""
                        open={isModalOpen}
                        visible={isModalOpen}
                        footer={null}
                        centered
                        onCancel={handleCancel}
                      >
                        <div className="modal-content">
                          {show && (
                            <div className="modal-body">
                              <p className="modal-name">
                                <strong>Tên chuyến đi:</strong> {name}
                              </p>
                              <p className="modal-place">
                                <strong>Địa điểm:</strong> {place}
                              </p>
                              <p className="modal-place">
                                <strong>Thời gian:</strong> 20/11/2022
                                =24/11/2022
                              </p>
                              <p>
                                <strong>Mô tả:</strong>{" "}
                              </p>
                              <p>{desc}</p>
                            </div>
                          )}
                          {!show && (
                            <div className="modal-noti">
                              <Result
                                status="success"
                                title="Gửi yêu cầu thành công"
                                subTitle="HDV sẽ gửi tour đề xuất đến cho bạn trong vòng 2 giờ tới."
                                extra={[
                                  <Button
                                    type="primary"
                                    onClick={() => setShow(true)}
                                  >
                                    Xem
                                  </Button>,
                                  <Button onClick={handleOk}>Đóng</Button>,
                                ]}
                              />
                            </div>
                          )}
                        </div>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tours-all__right ">
                <h3 className="tour-all-result">
                  Chúng tôi tìm thấy {data.length} tours cho Quý khách.
                </h3>
                <div className="tours-all__list">
                  {data.map((item, index) => (
                    <TourItem item={item} key={index} />
                  ))}
                </div>
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
