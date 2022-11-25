import React, { useEffect } from "react";
import Layout from "../components/layout/layout";
import { banner, home } from "../constants/images";
import { DatePicker, Button, Form, Input, Select } from "antd";
import "../assets/css/create-tour.css";
const { RangePicker } = DatePicker;
const { Option } = Select;

function CreateTour() {
    useEffect(() => { }, []);
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const onGenderChange = (value) => {
        switch (value) {
            case 'male':
                this.formRef.current.setFieldsValue({
                    note: 'Hi, man!',
                });
                return;
            case 'female':
                this.formRef.current.setFieldsValue({
                    note: 'Hi, lady!',
                });
                return;
            case 'other':
                this.formRef.current.setFieldsValue({
                    note: 'Hi there!',
                });
                break;
            default:
        }
    };
    return (
        <>
            <Layout>
                <div className="create-tour__wrapper">
                    <div class="content">
                        <main className="create-tour">
                            <div className="banner-bg">
                                <img alt="" src={banner} />
                            </div>
                            <div class="pathway breadcrumbs">
                                <ul>
                                    <li>
                                        <a href="/">Trang chủ</a>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-chevron-right"></i>
                                    </li>
                                    <li>
                                        <strong>Du lịch</strong>
                                    </li>
                                </ul>
                            </div>
                            <select>
                                <option value="#">Chọn tỉnh/thành phố</option>
                            </select>
                            <div className="create-tour__block">
                                <div className="travel-title-all">
                                    <div className="travel-title-group">
                                        <h3>Địa điểm đến?</h3>
                                        <p>Lựa chọn các điểm đến.</p>
                                    </div>
                                    <select>
                                        <option value="#">Chọn vị trí</option>
                                    </select>
                                </div>
                                <ul class="place-form__choose">
                                    <li class="checkbox-customize active">
                                        <label class="checkbox-custom1 nowrap">
                                            <input
                                                type="checkbox"
                                                checked="checked"
                                                name="choose-object"
                                            />
                                            <span class="checkmark"></span>
                                            <img
                                                alt=" "
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIybgZ8r8Is8-S0pQi9YyM1ya5i5jsGQc_g&usqp=CAU"
                                            />
                                            <p className="checkbox-name">Yên Phong</p>
                                        </label>
                                    </li>
                                    <li class="checkbox-customize active">
                                        <label class="checkbox-custom1 nowrap">
                                            <input type="checkbox" name="choose-object" />
                                            <span class="checkmark"></span>
                                            <img
                                                alt=" "
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIybgZ8r8Is8-S0pQi9YyM1ya5i5jsGQc_g&usqp=CAU"
                                            />
                                            <p className="checkbox-name">Yên Phong</p>
                                        </label>
                                    </li>
                                    <li class="checkbox-customize active">
                                        <label class="checkbox-custom1 nowrap">
                                            <input type="checkbox" name="choose-object" />
                                            <span class="checkmark"></span>
                                            <img
                                                alt=" "
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIybgZ8r8Is8-S0pQi9YyM1ya5i5jsGQc_g&usqp=CAU"
                                            />
                                            <p className="checkbox-name">Yên Phong</p>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="create-tour__block">
                                <div className="travel-title-all">
                                    <div className="travel-title-group">
                                        <h3>Khám phá</h3>
                                        <p>Sở thích</p>
                                    </div>
                                    <select>
                                        <option value="#">Chọn vị trí</option>
                                    </select>
                                </div>
                                <ul class="place-form__choose">
                                    <li class="checkbox-customize active">
                                        <label class="checkbox-custom1 nowrap">
                                            <input
                                                type="checkbox"
                                                checked="checked"
                                                name="choose-object"
                                            />
                                            <span class="checkmark"></span>
                                            <img
                                                alt=" "
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIybgZ8r8Is8-S0pQi9YyM1ya5i5jsGQc_g&usqp=CAU"
                                            />
                                            <p className="checkbox-name">Ẩm thực</p>
                                        </label>
                                    </li>
                                    <li class="checkbox-customize active">
                                        <label class="checkbox-custom1 nowrap">
                                            <input type="checkbox" name="choose-object" />
                                            <span class="checkmark"></span>
                                            <img
                                                alt=" "
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIybgZ8r8Is8-S0pQi9YyM1ya5i5jsGQc_g&usqp=CAU"
                                            />
                                            <p className="checkbox-name">Khám phá</p>
                                        </label>
                                    </li>
                                    <li class="checkbox-customize active">
                                        <label class="checkbox-custom1 nowrap">
                                            <input type="checkbox" name="choose-object" />
                                            <span class="checkmark"></span>
                                            <img
                                                alt=" "
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIybgZ8r8Is8-S0pQi9YyM1ya5i5jsGQc_g&usqp=CAU"
                                            />
                                            <p className="checkbox-name">Mới</p>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="create-tour__block">
                                <div className="travel-title-all">
                                    <div className="travel-title-group">
                                        <h3>Nơi ở</h3>
                                        <p>Chọn phong cách mong muốn</p>
                                    </div>
                                </div>
                                <ul class="place-form__choose place-form__choose_radio">
                                    <li class="radio-customize active">
                                        <label class="checkbox-custom1 nowrap">
                                            <input type="radio" name="choose-object" />
                                            <span class="checkmark"></span>
                                            <img alt=" " src={home} />
                                            <p className="radio-name">Nhà dân</p>
                                        </label>
                                    </li>
                                    <li class="radio-customize active">
                                        <label class="checkbox-custom1 nowrap">
                                            <input type="radio" name="choose-object" />
                                            <span class="checkmark"></span>
                                            <img alt=" " src={home} />
                                            <p className="radio-name">Nhà nghỉ</p>
                                        </label>
                                    </li>
                                    <li class="radio-customize active">
                                        <label class="checkbox-custom1 nowrap">
                                            <input type="radio" name="choose-object" />
                                            <span class="checkmark"></span>
                                            <img alt=" " src={home} />
                                            <p className="radio-name">Khách sạn</p>
                                        </label>
                                    </li>
                                    <li class="radio-customize active">
                                        <label class="checkbox-custom1 nowrap">
                                            <input type="radio" name="choose-object" />
                                            <span class="checkmark"></span>
                                            <img alt=" " src={home} />
                                            <p className="radio-name">Cắm trại</p>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="create-tour__block-group">
                                <div className="create-tour__block">
                                    <div className="travel-title-all">
                                        <div className="travel-title-group">
                                            <h3>Số lượng</h3>
                                        </div>
                                    </div>
                                    <div className="create-tour__people">
                                        <div className="create-tour__people-item">
                                            <p className="create-tour__people-des">
                                                Người lớn-Trên 12
                                            </p>
                                            <div class="people_unit">
                                                <div class="minus">-</div>
                                                <div class="unit">0</div>
                                                <div class="plus">+</div>
                                            </div>
                                        </div>
                                        <div className="create-tour__people-item">
                                            <p className="create-tour__people-des">
                                                Trẻ em Lứa tuổi 2 - 12
                                            </p>
                                            <div class="people_unit">
                                                <div class="minus">-</div>
                                                <div class="unit">0</div>
                                                <div class="plus">+</div>
                                            </div>
                                        </div>
                                        <div className="create-tour__people-item">
                                            <p className="create-tour__people-des">
                                                Trẻ sơ sinh Dưới 2
                                            </p>
                                            <div class="people_unit">
                                                <div class="minus">-</div>
                                                <div class="unit">0</div>
                                                <div class="plus">+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="create-tour__block">
                                    <div className="travel-title-all">
                                        <div className="travel-title-group">
                                            <h3>Thời gian bắt đầu</h3>
                                        </div>
                                    </div>
                                    <div className="create-tour__datepicker">
                                        <RangePicker />
                                    </div>
                                    <div className="travel-title-all">
                                        <div className="travel-title-group">
                                            <h3>Khoảng giá</h3>
                                            <p>Từ<input value={20} /> - đến <input value={20} /></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="create-tour__block">
                                <div className="travel-title-group">
                                    <h3>Liên hệ</h3>
                                </div>
                                <Form
                                    name="basic"
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <div className="form-contact-group">
                                        <Form.Item
                                            label="Họ tên"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Họ tên không được để trống',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name="email"
                                            label="E-mail"
                                            rules={[
                                                {
                                                    type: 'email',
                                                    message: 'The input is not valid E-mail!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your E-mail!',
                                                },
                                            ]}
                                        >
                                            <Input />
                                        </Form.Item>

                                        <Form.Item name="gender" label="Giới tính" rules={[{ required: false }]}>
                                            <Select
                                                onChange={onGenderChange}
                                                allowClear
                                            >
                                                <Option value="#" se>Chọn giới tính</Option>
                                                <Option value="male">Nam</Option>
                                                <Option value="female">Nữ</Option>
                                                <Option value="other">Khác</Option>
                                            </Select>
                                        </Form.Item>
                                    </div>


                                    <Form.Item
                                        wrapperCol={{
                                            offset: 8,
                                            span: 16,
                                        }}
                                    >
                                        <Button type="primary" htmlType="submit">
                                            Liên hệ
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </main>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default CreateTour;
