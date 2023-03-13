/* eslint-disable */
import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout/layout";
import "../../../assets/css/news.css";
import { Link } from "react-router-dom";
export default function NewsDetail() {
  const [show, setShow] = useState(false);
  useEffect(() => {}, []);
  return (
    <>
      <Layout>
        <div className="news-detail__wrapper">
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
                <li>Cẩm nang</li>
                <li>
                  <span>
                    <i className="fa-solid fa-chevron-right"></i>
                  </span>
                </li>
                <li>
                  <strong>Chi tiết</strong>
                </li>
              </ul>
            </div>
            <div className="news-content-details">
              <div className="news-content-left">
                <h3 className="news-detail-title">
                  Bánh ép Huế | Khám phá tinh hoa ẩm thực đường phố tại cố đô
                </h3>
                <div className="news-detail__header">
                  <div className="news-detail-author">
                    <img
                      className="news-detail-avt"
                      alt="avt"
                      src="https://dulich3mien.vn/wp-content/uploads/2022/01/Hinh-anh-banh-ep-Hue-585x465.jpg"
                    />
                    <div className="news-detail-info">
                      <span className="news-detail-name">Tác giả</span>
                      <span className="news-detail-time">20/11/2023</span>
                    </div>
                  </div>
                  <div className="Blog-action">
                    <i
                      className="Blog-action-icon fa-solid fa-ellipsis-vertical"
                      onClick={() => setShow(!show)}
                    ></i>
                    <ul
                      className={show ? "Blog-options active" : "Blog-options"}
                    >
                      <li>
                        <i className="fa-solid fa-bookmark"></i>Lưu bài viết
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/sharer/sharer.php?u=http://learnit-kma.me/learn/reactjs4"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-facebook-f"></i>Chia sẻ lên
                          FaceBook
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to&su=Tiêu đề &body=http://learnit-kma.me/learn/reactjs4"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-solid fa-envelope"></i>Chia sẻ tới
                          Email
                        </a>
                      </li>
                      <li>
                        <i className="fa-regular fa-copy"></i>Sao chép liên kết
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="news-detail__main">
                  <p>
                    trên bàn hoặc mâm lớn. Khi có khách thì chủ quán sẽ đưa viên
                    bột vào giữa hai tấm gang đang nóng đỏ, dùng tay ép chặt cho
                    tới khi vỏ bánh mỏng dính như tờ giấy, rồi thêm trứng cút và
                    đun thêm khoảng 30 giây, lật mặt hai ba lần cho bánh vàng
                    đều. Top 3 cửa hàng bánh ép Huế ngon Để thưởng thức những
                    chiếc bánh ép nóng hổi và đúng chuẩn hương vị Cố đô Huế du
                    khách có thể tham khảo một số quán nổi tiếng sau: Bánh ép Lê
                    Ngô Cát Bánh ép đường Lê Ngô Cát vô cùng nổi tiếng này có
                    tên là bánh ép chị Huệ, được nhiều du khách tới đây trải
                    nghiệm đều đánh giá là nên thử ít nhất 1 lần khi tới Huế.
                    Với mức giá vô cùng rẻ chỉ từ 2.000VNĐ, bánh ép dù to hay
                    nhỏ cũng đều rất lớn và nhiều thịt, trứng nhuộm vàng cả
                    bánh. Khi thưởng thức, mùi sả thơm hòa trộn với trứng, hành
                    phi, rau răm đã tạo nên hương vị vô cùng đặc trưng của món
                    ăn tại đây, cộng thêm cảm giác giòn tan khi cắn miếng bánh
                    ép cũng thật thú vị. Ngoài trải nghiệm món Bánh ép Lê Ngô
                    Cát, du khách còn có thể tăng thêm hương vị khi ăn kèm rau
                    dưa hoặc dùng nước chấm đặc sắc tại quán, sự kết hợp giữa vị
                    cay, ngọt và mặn thì không thể tuyệt vời hơn. Tuy nhiên,
                    không gian quán khá nhỏ, bạn hãy đến sớm để tránh không có
                    chỗ ngồi nhé. Địa chỉ: 116 Lê Ngô Cát, thành phố Huế Giờ mở
                    cửa: 14:00 – 21:00 Giá: 2.000VNĐ Bánh ép Nguyễn Du Huế Nhìn
                    từ ngoài vào, rất nhiều du khách đánh giá quán trông có vẻ
                    hơi tồi tàn và lụp xụp nhưng quán đã mở rất lâu và là một
                    trong những quán bánh ép vô cùng nổi tiếng tại Huế. Bánh ép
                    tại đây được chế biến theo công thức riêng của quán, thực
                    đơn cũng rất phong phú, ngoài vị bánh ép thông thường thì
                    tại đây du khách còn có thể chọn thêm vị pate, bò khô,…ăn
                    kèm nước chấm từ mực của quán thì chất lượng khỏi bàn. Bánh
                    ép Nguyễn Du Huế sẽ ép các lớp bột mỏng cùng với tép, bò
                    khô, hành, trứng,… bạn có thể ăn kèm rau, dưa sẽ rất tuyệt
                    vời. Hơn nữa, quán còn còn có các món khác như bánh tráng
                    trứng, bánh tráng trộn, bò bía, gỏi xoài,… Địa chỉ: 20
                    Nguyễn Du, thành phố Huế Giờ mở cửa: 14:00 – 21:00 Giá:
                    2.000VNĐ
                  </p>
                </div>
                <div className="news-detail__comment">
                  <div className="news-detail__create-comment">
                    <img
                      alt=""
                      src="https://secure.gravatar.com/avatar/282ba02901887131304e2367ca8ef221?s=100&d=mm&r=g"
                    />
                    <input
                      className="comment--text"
                      placeholder="Viết bình luận... "
                    />
                    <div className="news-detail__send">
                      <i class="fa-regular fa-paper-plane"></i>
                    </div>
                  </div>
                  <div className="news-detail__list-cmt">
                    <div className="news-detail__item-cmt">
                      <img
                        alt=""
                        src="https://secure.gravatar.com/avatar/282ba02901887131304e2367ca8ef221?s=100&d=mm&r=g"
                      />
                      <div className="news-detail__item-main">
                        <p className="news-detail__name">Lam Mai</p>
                        <p className="news-detail__des ">
                          đây là nội dung bình luận
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="news-content-right">
                <div class="news-content__hot-title">
                  <span>Tin nổi bật</span>
                </div>
                <div class="news-content__hot-main">
                  <div class="news-content__hot-item">
                    <Link to={`/tin-tuc/1233`} class="news-content__hot-link">
                      <div className="news-content__hot-img">
                        <img
                          src="https://icdn.dantri.com.vn/thumb_w/640/2020/04/24/machu-picchu-1587703892882.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="news-content__hot-intro">
                        <span class="news-content__hot-time">
                          Thứ hai, 14/11/2022
                        </span>
                        <p class="news-content__hot-name">
                          Bánh ép Huế | Khám phá tinh hoa ẩm thực đường phố tại
                          cố đô
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div class="news-content__hot-item">
                    <Link to={`/tin-tuc/1233`} class="news-content__hot-link">
                      <div className="news-content__hot-img">
                        <img
                          src="https://icdn.dantri.com.vn/thumb_w/640/2020/04/24/machu-picchu-1587703892882.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="news-content__hot-intro">
                        <span class="news-content__hot-time">
                          Thứ hai, 14/11/2022
                        </span>
                        <p class="news-content__hot-name">
                          Bánh ép Huế | Khám phá tinh hoa ẩm thực đường phố tại
                          cố đô
                        </p>
                      </div>
                    </Link>
                  </div>
                  <div class="news-content__hot-item">
                    <Link to={`/tin-tuc/1233`} class="news-content__hot-link">
                      <div className="news-content__hot-img">
                        <img
                          src="https://icdn.dantri.com.vn/thumb_w/640/2020/04/24/machu-picchu-1587703892882.jpeg"
                          alt=""
                        />
                      </div>
                      <div class="news-content__hot-intro">
                        <span class="news-content__hot-time">
                          Thứ hai, 14/11/2022
                        </span>
                        <p class="news-content__hot-name">
                          Bánh ép Huế | Khám phá tinh hoa ẩm thực đường phố tại
                          cố đô
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
