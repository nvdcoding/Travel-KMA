/* eslint-disable */
import React, { useEffect, useState } from "react";
import LayoutHDV from "../../../components/layout/layoutHDV";
import "./style.css";
import { Modal } from "antd";

export default function AddTour() {
  useEffect(() => {}, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <LayoutHDV>
        <div className="bank-acc">
          <section className="wallets" onClick={showModal}>
            <h2 className="title">Tài khoản ngân hàng</h2>
            <div className="wallet-cards bankcard">
              <div className="col">
                <div className="shopee-popover shopee-popover--light">
                  <div className="shopee-popover__ref">
                    <div className="wallet create">
                      <div className="button">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                      <div className="description">
                        Thêm Tài khoản Ngân hàng
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Modal
            title="Tài khoản ngân hàng"
            visible={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      </LayoutHDV>
    </>
  );
}
