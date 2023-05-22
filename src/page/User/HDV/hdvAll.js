/* eslint-disable */
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/hdv-tour-all.css";
import {
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Pagination,
  Select,
  Skeleton,
} from "antd";
import HdvItem from "../../../components/hdvItem";
import { AppContext } from "../../../Context/AppContext";
import { sendGet } from "../../../utils/api";
import { nodata } from "../../../constants/images";
import PaginationComponent from "../../../components/pagination";

const { Option } = Select;
export default function HdvAll() {
  const { provice } = useContext(AppContext);
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState([]);

  const numberPage = 6;
  const getData = async (values) => {
    const result = await sendGet("/tour-guide?page=1", {
      limit: numberPage,
    });
    if (result.returnValue.data.length >= 0) {
      setData(result.returnValue.data);
      setTotalPages(result.returnValue?.totalPages);
    } else {
      message.error("thất bại");
    }
  };
  const getDataSearch = async (values) => {
    values.limit = numberPage;
    const result = await sendGet("/tour-guide?page=1", values);
    if (result.returnValue.data.length >= 0) {
      setTotalPages(result.returnValue?.totalPages);
      setData(result.returnValue.data);
    } else {
      message.error("thất bại");
    }
  };
  const getDataFilterTourDirection = async (e) => {
    const result = await sendGet("/tour-guide?page=1", {
      totalTourDirection: e,
      limit: numberPage,
    });
    if (result.returnValue.data.length >= 0) {
      setTotalPages(result.returnValue?.totalPages);
      setData(result.returnValue.data);
    } else {
      message.error("thất bại");
    }
  };
  const getDataFilterFavorite = async (e) => {
    const result = await sendGet("/tour-guide?page=1", {
      totalFavorite: e,
      limit: numberPage,
    });
    if (result.returnValue.data.length >= 0) {
      setData(result.returnValue.data);
      setTotalPages(result.returnValue?.totalPages);
    } else {
      message.error("thất bại");
    }
  };
  const changePaginationData = async (dataPagination) => {
    setData(dataPagination);
  };
  useEffect(() => {
    getData();
  }, []);
  // if (!Object.keys(data).length) return <Skeleton />;

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
                    onFinish={getDataSearch}
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
                        <Option value="0">Nữ</Option>
                        <Option value="1">Nam</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item name="keyword" label="Tìm theo tên">
                      <Input placeholder="Nhập từ khóa tìm kiếm" />
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
                  <div class="travel-sort-by-options__option ">
                    Số tour
                    <div className="price-menu">
                      <div
                        className="price-menu-item"
                        onClick={() => getDataFilterTourDirection("ASC")}
                      >
                        <p>Tăng dần</p>
                        <i class="fa-solid fa-arrow-up-long"></i>
                      </div>
                      <div
                        className="price-menu-item"
                        onClick={() => getDataFilterTourDirection("DESC")}
                      >
                        <p>Giảm dần</p>
                        <i class="fa-solid fa-arrow-down-long"></i>
                      </div>
                    </div>
                  </div>
                  <div class="travel-sort-by-options__option">
                    Yêu thích
                    <div className="price-menu">
                      <div
                        className="price-menu-item"
                        onClick={() => getDataFilterFavorite("ASC")}
                      >
                        <p>Tăng dần</p>
                        <i class="fa-solid fa-arrow-up-long"></i>
                      </div>
                      <div
                        className="price-menu-item"
                        onClick={() => getDataFilterFavorite("DESC")}
                      >
                        <p>Giảm dần</p>
                        <i class="fa-solid fa-arrow-down-long"></i>
                      </div>
                    </div>
                  </div>
                </div>
                {data && data.length > 0 ? (
                  <>
                    <div className="hdv-all__list">
                      {data?.map((item, index) => (
                        <HdvItem item={item} key={index} />
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="no-data">
                      <img alt="" src={nodata} />
                      <p className="no-data-text">
                        Không tìm thấy HDV nào trong hệ thống
                      </p>
                    </div>
                  </>
                )}
                {data.length > 0 && (
                  <PaginationComponent
                    limit={numberPage}
                    enpoint="tour-guide"
                    totalPages={totalPages}
                    changePaginationData={changePaginationData}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
