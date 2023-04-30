/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/hdv-tour-all.css";
import { Button, Checkbox, Form, InputNumber, Select } from "antd";
import HdvItem from "../../../components/hdvItem";
import { AppContext } from "../../../Context/AppContext";
import { sendGet } from "../../../utils/api";
const tourview = [
  {
    img: "https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-1.jpg",
    id: "456789367289o0-1",
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    img: "https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-1.jpg",
    id: "456789367289o0-1",
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    img: "https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-1.jpg",
    id: "456789367289o0-1",
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    img: "https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-1.jpg",
    id: "456789367289o0-1",
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    img: "https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-1.jpg",
    id: "456789367289o0-1",
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
  {
    img: "https://duhoctms.edu.vn/wp-content/uploads/2021/07/dien-tich-nuoc-anh-1-1.jpg",
    id: "456789367289o0-1",
    avt: "https://d3icb70lnx3c24.cloudfront.net/1200x614/7a7227030111fcf1.jpeg",
  },
];
const options = [
  {
    label: "Trên 18",
    value: "Ecotourism",
  },
  {
    label: "Dưới 25",
    value: "Cultural",
  },
  {
    label: "Dưới 35",
    value: "Resort",
  },
  {
    label: "Dưới 55",
    value: "Resort",
  },
];
const { Option } = Select;
export default function HdvAll() {
  const { provice } = useContext(AppContext);
  const [data, setData] = useState([]);
  const getData = async (values) => {
    const result = await sendGet("tour-guide", { status: "1" });
    if (result.returnValue.data.length >= 0) {
      setData(
        result.data.map((e) => {
          return { ...e, place: e.province?.name ? e.province?.name : "" };
        })
      );
    } else {
      message.error("thất bại");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Layout>
        <div className="hdv-all__wrapper tours-all__wrapper">
          <div className="content">
            <div className="tours-all__main">
              <div className="tours-all__left">
                <div className="tour-all-box__search">
                  <h1 className="travel-title">Bộ lọc tìm kiếm</h1>
                  <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{
                      remember: true,
                    }}
                    // onFinish={tourFiltter}
                  >
                    <Form.Item name="provinceId" label="Tỉnh thành">
                      <Select placeholder="Tỉnh thành">
                        <Option>Chọn tỉnh/Thành phố</Option>
                        {provice.map((item, index) => (
                          <Option value={item?.id} key={index}>
                            {item?.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Form.Item name="gender" label="Giới tính">
                      <Select placeholder="Giới tính">
                        <Option>Chọn giới tính</Option>

                        <Option value="FEMALE">Nữ</Option>
                        <Option value="MALE">Nam</Option>
                        <Option value="Khác">Nam</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="bỉthday"
                      label="Tuổi tác"
                      className="tour-select"
                    >
                      <Checkbox.Group options={options} />
                    </Form.Item>
                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="form-button"
                      >
                        Tìm kiếm
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
              <div className="tours-all__right ">
                <h3 className="tour-all-result">
                  <i class="fa-regular fa-lightbulb"></i> Chúng tôi tìm thấy{" "}
                  {data.length} HDV cho Quý khách.
                </h3>
                <div className="hdv-search travel-sort-bar">
                  <p className="search-title">Sắp xếp theo</p>
                  <div class="travel-sort-by-options__option travel-sort-by-options__option--selected">
                    Số tour
                  </div>
                  <div class="travel-sort-by-options__option">Yêu thích</div>
                </div>
                <div className="hdv-all__list">
                  {tourview.map((item, index) => (
                    <HdvItem item={item} key={index} />
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
