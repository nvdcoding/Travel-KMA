import React, { useEffect } from "react";
import Layout from "../../components/layout/layout";
import "../../assets/css/create-tour.css";
import Image from "../../components/image";
function CreateTour() {
  useEffect(() => {}, []);

  return (
    <>
      <Layout>
        <div className="step1__wrapper">
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
                  <strong>Lên kế hoạch chi tiết</strong>
                </li>
              </ul>
            </div>
            <h1 className="title">Kế hoạch chi tiết </h1>
            <div className="main">
              <section className="main-left">
                <div className="main-form">
                  <div className="form-item">
                    <h3 className="form-title">Tiêu đề</h3>
                    <input placeholder="Tiêu đề" />
                  </div>
                  <div className="form-item">
                    <h3 className="form-title">Mô tả</h3>
                    <div className="form-group group-2">
                      <textarea cols={3} placeholder="Mô tả" />
                      <textarea cols={3} placeholder="Mô tả" />
                    </div>
                  </div>
                  <div className="form-item">
                    <h3 className="form-title">Dịch vụ</h3>
                    <div className="form-group group-3">
                      <textarea cols={3} placeholder="Bao gồm" />
                      <textarea cols={3} placeholder="Không bao gồm" />
                      <textarea cols={3} placeholder="Tùy chọn" />
                    </div>
                  </div>
                  <div className="form-item">
                    <h3 className="form-title">Đặt lịch đón</h3>
                    <div className="form-group group-2">
                      <div className="form-group-calender">
                        <h5 className="form-group-calender-box-sub">Ngày</h5>
                        <div className="group-calender">
                          <i className="icon-calendar"></i>
                          <input type="date" />
                        </div>
                      </div>
                      <div className="form-group-calender">
                        <h5 className="form-group-calender-box-sub">Giờ</h5>
                        <div className="group-calender">
                          <i className="icon-calendar"></i>
                          <input type="time" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-item">
                    <h3 className="form-title">Ảnh mô tả</h3>
                    <Image />
                  </div>
                </div>
              </section>
              <section className="main-right">
                <div className="tour-detail__plan">
                  <div className="tour-detail__plan-header">
                    <img
                      alt=""
                      src="https://viettel.vn/images_content/img-solution-camera-2.png"
                    />
                    <div className="tour-detail__plan-info">
                      <span className="tour-plan__review">Mã tour: 23456</span>
                      <p className="tour-plan__name">Mai Lam</p>
                    </div>
                  </div>
                  <div className="tour-detail__plan-body">
                    <div className="button button--sub">Tùy chỉnh</div>
                  </div>
                </div>
              </section>
            </div>
            <div className="button-step2 button button--primary">Tiếp theo</div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export default CreateTour;
