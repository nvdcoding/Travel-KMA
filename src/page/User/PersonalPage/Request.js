/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Tabs, Input, message, Card, Space, Skeleton, Modal, Popconfirm } from "antd";

import "../../../assets/css/trip.css";
import { sendDelete, sendGet } from "../../../utils/api";
export default function Request() {
    const [tourRequest, setTourRequest] = useState();
    const { Search } = Input;

    const request = async (e) => {
        try {
            let res = await sendGet(`/requests/user`);
            if (res.statusCode == 200) {
                setTourRequest(res.returnValue?.data)
            } else {
                message.error("thất bại");
            }
        } catch (error) {
            message.error("Chưa đến hạn kết thúc chuyến đi");
        }
    }; const onSearch = (value) => console.log(value);
    const confirm = async (e) => {
        try {
            let res = await sendDelete(`/requests/user/${e}`);
            if (res.statusCode == 200) {
                message.success("Xóa thành công");
                await request();
            } else {
                message.error("thất bại");
            }
        } catch (error) {
            message.error("Không thể xóa");
        }
    };
    useEffect(() => {
        request();
    }, []);
    // if (!Object.keys(dataWaiting).length) return <Skeleton />;

    return (
        <>
            <div className="tour-request">
                <div className="tour-request-group">
                    <h3>Các chuyến đi bạn yêu cầu</h3>
                    <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
                </div>
                <div className="vertical">
                    {tourRequest ? tourRequest.map((item, index) => (
                        <Card
                            title={
                                item.province?.name}
                            key={index}
                            extra={<Popconfirm
                                title="Xác nhận hủy yêu cầu?"
                                onConfirm={() => confirm(item.id)}
                                okText="Đồng ý"
                                cancelText="Không"
                            >
                                <p className="btn-cancel">Hủy</p>
                            </Popconfirm>}
                        >
                            <p><strong>Mã yêu cầu: </strong>{item?.id}</p>
                            <p><strong>Nội dung: </strong>{item?.content}</p>
                            <p><strong>Loại hình: </strong>{item?.type}</p>
                            <p><strong>Thời gian mong muốn: </strong>{item?.startDate}</p>

                        </Card>
                    )) : 'loading'}

                </div>
            </div>
        </>
    );
}