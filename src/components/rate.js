import React, { useState } from "react";
import { Button, Modal } from "antd";
import { avt } from "../constants/images";
import { Rate } from "antd";

function RateScreen(props) {
  const [open, setOpen] = useState(false);
  const [, setNumber] = useState(2.5);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
  return (
    <>
      <Button className="button button--primary" onClick={showModal}>
        Đánh giá
      </Button>
      <Modal
        title="Đánh giá "
        centered
        visible={open}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Hủy"
        okText="Gửi"
      >
        <div className="mytrip-order__rate-header">
          <img className="mytrip-order-img" alt="" src={avt} />
          <h4 className="mytrip-order-name">{props.data.title}</h4>
        </div>
        <div className="mytrip-order__rate-body">
          <div className="mytrip-order__rate-star">
            <Rate
              allowHalf
              defaultValue={2.5}
              onChange={(value) => setNumber(value)}
            />
          </div>
          <textarea placeholder="nhập nội dung đánh giá" />
          <div className="mytrip-order__rate-note">
            <p className="mytrip-order__rate-note-name">
              Để đánh giá được duyệt, quý khách vui lòng tham khảo
            </p>
            <span className="mytrip-order__rate-note-value">
              Quy định duyệt đánh giá
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
}
export default RateScreen;
