/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/layout";
import "../../assets/css/province-details.css";
export default function ProvinceDetails() {
  let params = useParams();
  const [province, setProvince] = useState([]);
  const [currentTab, setCurrentTab] = useState(0);
  const [dataShow, setDataShow] = useState([]);
  const data = [
    {
      id: 56,
      banner: "https://vietteltelecom.vn/travel/images/bannerhcm.jpg",
      path: "nhatrang",
      label: "Nha Trang",
      intro:
        "Nha Trang - thành phố biển miền Trung không chỉ đi vào thơ, hoạ mà còn “được lòng” du khách với những gì đẹp nhất của một vùng duyên hải. Hòn ngọc quý của tỉnh Khánh Hòa luôn là một điểm sáng trên bản đồ du lịch Việt, với những trải nghiệm lặn biển tuyệt đẹp, thể thao dưới nước ly kỳ, hay còn là một hành trình văn hóa ấn tượng. ",
      kham_pha: [
        {
          title: "Đảo Bình Ba",
          content:
            "Đảo Bình Ba Khánh Hòa, vùng đất quen thuộc gắn liền với tên gọi vui “đảo tôm hùm” với cảnh quan hoang sơ nhưng trù phú. Đảo đang được đầu tư phát triển thành một địa điểm du lịch thu hút du khách đến tham quan và khám phá với sự hào hứng từ những bước chân đầu tiên trên đảo. Ấn tượng đầu tiên của du khách khi tới đây chính là một hòn đảo hoang sơ với nhiều bãi biển đẹp, nước xanh, cát trắng, đẹp đến ngây người. Vì chưa được khai thác du lịch nhiều, nên sự nguyên sơ của đảo tạo cho du khách cảm giác bình yên, thư thái rất phù hợp cho hoạt động nghỉ ngơi sau những ngày dài mệt mỏi với công việc và cuộc sống thường nhật. Bên bờ biển thanh bình là những bãi tắm tuyệt đẹp, vắng người và chỉ có biển nước mây trời, xanh một màu thanh bình.<br />",
        },
        {
          title: "Viện Hải dương học",
          content:
            "Địa chỉ: số 1, Cầu Đá, Trần Phú, thành phố Nha Trang, tỉnh Khánh Hòa.<br />Viện Hải dương học Nha Trang là nơi nghiên cứu đời sống các loài động thực vật biển tại thành phố Nha Trang tỉnh Khánh Hòa.Viện này được thành lập vào năm 1923 có địa chỉ tại số 1 Cầu Đá, cách trung tâm thành phố Nha Trang khoảng 6km về phía Đông Nam. Địa điểm du lịch này có trên 20.000 mẫu vật của 4.000 loại sinh vật biển được lưu giữ, sưu tầm và nuôi dưỡng trong nhiều năm. Đặc biệt, đây còn là nơi trưng bày một bộ xương cá voi khổng lồ có chiều dài gần 26m, cao 3m với 48 đốt sống đã được phục chế rất đầy đủ. Du khách đến đây sẽ được tham quan khu thí nghiệm, ngắm các sinh vật lạ và biết thêm nhiều điều về cuộc sống của các loài sinh vật ở biển.<br />",
        },
        {
          title: "Tháp bà Ponagar",
          content:
            "Địa chỉ: Đường Hai Tháng Tư, Vĩnh Phước, Thành phố Nha Trang, Khánh Hòa<br />Nha Trang không chỉ hấp dẫn với những bãi biển đẹp đến mê hồn người mà còn gây ấn tượng bởi những công trình kiến trúc độc đáo và đẹp mắt. Tháp bà Ponagar là một trong những quần thể kiến trúc văn hóa Chăm Pa lớn nhất ở miền Trung Việt Nam. Tọa lạc trên một ngọn đồi cao 50m so với mực nước biển, Tháp Bà Ponagar được bao trùm bởi màu xanh của cây rừng, như một công trình nổi bật giữa khung nền thiên nhiên xanh mát. Tổng thể kiến trúc tháp bà Ponagar gồm có 3 tầng: tầng thấp là ngôi tháp cổ mà nay đã không còn nữa. Ở tầng giữa là nhà khách được gọi là Mandapa, dành cho những vị khách có thể nghỉ chân sau chuyến hành hương, gồm 4 hàng cột hình bát giác tạo nên một tổng thể kiến trúc vô cùng lạ mắt. <br />",
        },
        {
          title: "Vinpearl Land",
          content:
            "Địa chỉ: 98B/13, Trần Phú, Lộc Thọ, Thành phố Nha Trang, Khánh Hòa<br />Toạ lạc trên đảo Hòn Tre xinh đẹp giữa biển khơi và bãi biển trong xanh quanh năm, Vinpearl Land được biết đến như điểm đến du lịch Nha Trang – “thiên đường của miền nhiệt đới” hấp dẫn mọi du khách. Ngoài các khu vui chơi dành cho gia đình và trẻ em, Vinpearl Land còn có Công viên nước Vinpearl. Với các đường trượt có độ dốc lớn nhất là 21.5m, khu vực giải trí này thường phục vụ những du khách ưa thích cảm giác mạnh. Trong đó, một đoạn Hang Rùng Rợn dài 56m cũng sẽ làm thoả mãn niềm đam mê thám hiểm của nhiều du khách trẻ tuổi. Hơn nữa, nơi này còn thu hút du khách bởi rạp chiếu phim 4D hoành tráng.<br />",
        },
      ],
      am_thuc: [
        {
          title: "Bún cá lá Cây Bàng",
          content:
            "Người ta vẫn thường nói: “Đến Nha Trang mà không thưởng thức bún cá thì thật là một thiếu sót”. Bún cá lá Cây Bàng được cho là một trong các quán ăn ngon ở Nha Trang. Quả thật vậy, những miếng chả cá dai dai cùng nước lèo ngọt thanh được hầm từ xương khiến người ta nhớ mãi không quên. Nằm bên cạnh bờ biển xinh đẹp, bún cá như là một món ăn đại diện nơi đây. Không bất ngờ khi có những con đường trải dài nhiều quán bán bún chả cá. Tuy nhiên, để thưởng thức bún cá Nha Trang đậm vị nhất thì nên ghé bún cá lá Cây Bàng.<br />- Địa chỉ: 06 Hàn Thuyên, TP. Nha Trang, Khánh Hòa",
        },
        {
          title: "Bánh xèo chảo",
          content:
            "Bánh xèo ở mỗi nơi thì sẽ có một số cái riêng. Nhiều nơi làm nhân bánh xèo với thịt hay cũng một số nơi làm bánh xèo chay. Ở Nha Trang, bánh xèo có nhân được làm từ mực và tôm. Hải sản ở đây được đánh bắt dưới biển lên, còn tươi thì đem đi sơ chế. Đây chính là một trong những món ăn ngon ở Nha Trang mà bạn nhất định nên thử.<br />- Địa chỉ: 85 Tô Hiến Thành, TP. Nha Trang<br /><img src='atnt1.jpg' alt='Bánh xèo chảo' />",
        },
        {
          title: "Bánh căn mực",
          content:
            "Bánh căn mực - một cái tên thật xa lạ với nhiều người. Nhưng nó lại là một món ăn đặc sản ở Nha Trang. Bánh căn ở đây vỏ mỏng nhưng lớp mực lại dày cộm che hết cả phần vỏ. Nhiều người còn đùa rằng món bánh ở đây không giống bánh căn, mà giống một món hải sản hơn.Bánh mới được đúc ra nóng hổi, ăn kèm cùng mỡ hành, xíu mại, xoài và mắm nêm. Một miếng nhưng có vị ngọt từ mực, xíu mại, vị mặn từ mắm nêm, vị chua từ xoài,...Không đến đây thì chuyến đi du lịch Nha Trang lại thiếu thiếu rồi.<br />- Địa chỉ: 227 Võ Thị Sáu, TP. Nha Trang, Khánh Hòa",
        },
        {
          title: "Quán ốc Xuân Anh",
          content:
            "Ốc ở đây được nêm nếm đậm vị, với đa dạng nhiều loại ốc như ốc hương, ốc cà na...Ngoài ốc thì ở đây cũng bán nhiều hải sản tươi khác. Ốc được làm ra rất nhiều món như ốc sốt bơ tỏi, ốc rang muối, ốc xào trứng muối.. Mỗi vị sốt hay mỗi loại ốc đều có cái ngon khác nhau. Bánh mì chấm cùng các nước sốt khá ngon đấy. Một số món khuyến khích bạn thử khi tới đây như cháo hải sản, gỏi ốc,...Với mức giá bình dân, đây là một quán ăn ngon rẻ ở Nha Trang bạn nên ghé!<br />- Địa chỉ: 9C, Tháp Bà, TP. Nha Trang, Khánh Hòa<br /><img src='atnt2.jpg' alt='Quán ốc Xuân Anh' />",
        },
        {
          title: "Hải sản Bờ Kè",
          content:
            "Đây là một địa điểm ăn uống Nha Trang giá rẻ tiếp theo mà bài viết giới thiệu đến bạn. View quán hướng ra biển nên gió thổi mát lồng lộng. Vào cái thời tiết oi bức này, ngồi ăn hải sản có gió tự nhiên và view nhìn ra biển thì còn gì bằng. Một số món nổi tiếng ở quán như tôm hùm nướng, gỏi bạch tuộc hay bào ngư được sốt dầu hào.. Tôm hùm vốn dĩ đã ngọt thịt, nay được nướng lên thì có thêm cả mùi thơm do nướng. Bào ngư sốt dầu hào là một món lạ, nhiều quán không có. Nên nếu muốn thưởng thức, ắt hẳn phải đến Hải sản Bờ Kè rồi!<br />- Địa chỉ: 52 Cù Huân, Tp Nha Trang, Khánh Hòa",
        },
      ],
      mua_sam: [
        {
          title: "Chả Cá Nha Trang",
          content:
            "Yến sào được là một trong số ít đặc sản Nha Trang thuộc hàng quý và hiếm, là loại thực phẩm cao cấp có nhiều chất bổ dưỡng đặc biệt,có lợi cho sức khỏe… Và đây là món quà thích hợp nhất cho bố mẹ, ông bà và những người thân trong gia đình.<br />Địa chỉ tham khảo<br />Cửa hàng yến sào A Nam: 50 B – Nguyễn Thị Minh Khai – Phường Tân Lập – Nha Trang<br />Công ty yến sào Khánh Hòa: Số 248 – đường Thống Nhất – Phường Phương Sơn – Nha Trang",
        },
        {
          title: "Chả Cá Nha Trang",
          content:
            "Không cần phải nói, chả cá chính là đặc sản nổi tiếng nên mua làm quà khi du lịch Nha Trang. Nó được làm nên bởi các loại cá: Cá mối, cá thu, cá thởn, cá rựa, cá nhồng, cá chuồn, cá cờ,…với các loại gia vị bí truyền. Chính điều đó đã tạo nên những miếng chả cá ngon, mềm mịn và hơi dai mà không chả cá ở đâu có được.<br />Địa chỉ tham khảo<br />8A Ngô Thời Nhiệm<br />Quán Nguyên Loan, 123 Ngô Gia Tự",
        },
        {
          title: "Bánh Xoài",
          content:
            "Bánh xoài hay bánh tráng xoài là đặc sản nổi tiếng của Nha Trang, có vị chua thanh, ngọt vừa, phảng phất mùi thơm tự nhiên của xoài, rất thích hợp để ăn chơi chơi, khi chưa chín rất chua nhưng chín vàng thì ngọt đậm và sắc. Bánh ngon là miếng bánh vàng ươm, màu vàng không đậm đen cũng không quá nhạt, mềm dai, dễ xé, có vị chua ngọt thơm ngon tự nhiên của xoài, không ngọt gắt vị đường.<br />Địa chỉ tham khảo<br />Chợ Xóm Mới 49 Ngô Gia Tự – Nha Trang<br />Cửa hàng 11E Thái Nguyên – Nha Trang<br /><img src='msnt2.jpg' alt='Bánh Xoài' />",
        },
        {
          title: "Muối Ớt Xanh",
          content:
            "Muối ớt lá chanh ở Nha Trang là loại nước chấm tinh tế hòa quyện giữa hương vị muối tiêu chanh, tương ớt và tí mù tạt nhẹ. Không giống Sài Gòn chủ quán thường pha mắm ớt hay sử dụng muối tiêu chanh ăn chung với các loại ốc, mọi quán hải sản và thịt nướng tại Nha Trang đều dùng loại nước chấm muối chanh ớt ăn chung với sản phẩm của mình.<br />Địa chỉ tham khảo<br />Chợ Đầm<br />Chợ Xóm Mới 49 Ngô Gia Tự – Nha Trang",
        },
      ],
      hanh_trang: [
        {
          title: "Đồ dùng cá nhân",
          content:
            "Bạn nên mang theo bàn chải, kem đánh răng, dầu gội đầu, thuốc nhỏ mắt, khăn tắm… để tiện khi cần và cũng không nên sử dụng ở nhà nghỉ vì sợ không đảm bảo an toàn.<br /><img src='htnt1.jpg' alt='Đồ dùng cá nhân' />",
        },
        {
          title: "Gói data ST15K của Viettel",
          content:
            'Gói cước ưu đãi 4G HOT nhất của Viettel chính là hành trang không thể thiếu của bạn khi tới Đà Nẵng đó! Chỉ với 15.000đ sẽ có ngay 3GB data tốc độ cao để có thể kết nối Internet miễn phí trên di động trong 3 ngày. Với sự đồng hành hữu ích của gói ST15K, bạn sẽ không phải lo lắng về việc lạc đường, mất liên lạc, không kịp "check-in" cũng như tình trạng phát sinh cước 4G cao hay phải phụ thuộc vào sóng wifi. Nếu bạn đang có một chuyến đi dài ngày, Viettel cũng cung cấp lựa chọn gói cước ST30K với 7GB data trong 7 ngày (Chỉ 30.000đ). ',
          short_link:
            "https://viettel.vn/fr/dt?cd=ST30k&ch=QLDT&utm_source=landing",
        },
        {
          title: "Mỹ phẩm",
          content:
            "Đối với đồ trang điểm, nên mang đủ dùng và kèm theo các sản phẩm dưỡng da như kem chống nắng, tinh chất dưỡng da là được.",
        },
        {
          title: "Trang phục",
          content:
            "Ngoài những gợi ý ở trên, bạn cũng cần chuẩn bị mang theo kính mắt, áo choàng, dép tông nếu có đi biển,… vì khi cần sẽ không phải mua ở bên ngoài sẽ rất đắt, vì đây có những điểm du lịch nổi tiếng. Việc chuẩn bị đồ đi du lịch Quảng Ninh cũng không quá cầu kỳ nhưng nếu biết phân bổ và lựa chọn những đồ dùng hợp lý thì bạn sẽ cảm thấy khá đơn giản.<br /><img src='htnt2.jpg' alt='Trang phục' />",
        },
        {
          title: '"Phụ kiện check-in"',
          content:
            "Máy ảnh, sạc dự phòng, gậy tự sướng, máy sấy tóc mini đều rất cần thiết cho chuyến đi của bạn nhé. Ngoài ra, bạn còn cần chuẩn bị những chiếc túi chuyên dụng để đựng hết những vật dụng này cho gọn gàng để có thể bỏ vừa vào trong vali khi cần sẽ dễ dàng lấy ra.",
        },
      ],
    },
    {
      id: 29,
      banner: "https://vietteltelecom.vn/travel/images/bannerhcm.jpg",
      path: "hanoi",
      label: "Ha Noi",
      intro:
        "Ha Noi - thành phố biển miền Trung không chỉ đi vào thơ, hoạ mà còn “được lòng” du khách với những gì đẹp nhất của một vùng duyên hải. Hòn ngọc quý của tỉnh Khánh Hòa luôn là một điểm sáng trên bản đồ du lịch Việt, với những trải nghiệm lặn biển tuyệt đẹp, thể thao dưới nước ly kỳ, hay còn là một hành trình văn hóa ấn tượng. ",
      kham_pha: [
        {
          title: "Đảo Bình Ba",
          content:
            "Đảo Bình Ba Khánh Hòa, vùng đất quen thuộc gắn liền với tên gọi vui “đảo tôm hùm” với cảnh quan hoang sơ nhưng trù phú. Đảo đang được đầu tư phát triển thành một địa điểm du lịch thu hút du khách đến tham quan và khám phá với sự hào hứng từ những bước chân đầu tiên trên đảo. Ấn tượng đầu tiên của du khách khi tới đây chính là một hòn đảo hoang sơ với nhiều bãi biển đẹp, nước xanh, cát trắng, đẹp đến ngây người. Vì chưa được khai thác du lịch nhiều, nên sự nguyên sơ của đảo tạo cho du khách cảm giác bình yên, thư thái rất phù hợp cho hoạt động nghỉ ngơi sau những ngày dài mệt mỏi với công việc và cuộc sống thường nhật. Bên bờ biển thanh bình là những bãi tắm tuyệt đẹp, vắng người và chỉ có biển nước mây trời, xanh một màu thanh bình.<br />",
        },
        {
          title: "Viện Hải dương học",
          content:
            "Địa chỉ: số 1, Cầu Đá, Trần Phú, thành phố Nha Trang, tỉnh Khánh Hòa.<br />Viện Hải dương học Nha Trang là nơi nghiên cứu đời sống các loài động thực vật biển tại thành phố Nha Trang tỉnh Khánh Hòa.Viện này được thành lập vào năm 1923 có địa chỉ tại số 1 Cầu Đá, cách trung tâm thành phố Nha Trang khoảng 6km về phía Đông Nam. Địa điểm du lịch này có trên 20.000 mẫu vật của 4.000 loại sinh vật biển được lưu giữ, sưu tầm và nuôi dưỡng trong nhiều năm. Đặc biệt, đây còn là nơi trưng bày một bộ xương cá voi khổng lồ có chiều dài gần 26m, cao 3m với 48 đốt sống đã được phục chế rất đầy đủ. Du khách đến đây sẽ được tham quan khu thí nghiệm, ngắm các sinh vật lạ và biết thêm nhiều điều về cuộc sống của các loài sinh vật ở biển.<br />",
        },
        {
          title: "Tháp bà Ponagar",
          content:
            "Địa chỉ: Đường Hai Tháng Tư, Vĩnh Phước, Thành phố Nha Trang, Khánh Hòa<br />Nha Trang không chỉ hấp dẫn với những bãi biển đẹp đến mê hồn người mà còn gây ấn tượng bởi những công trình kiến trúc độc đáo và đẹp mắt. Tháp bà Ponagar là một trong những quần thể kiến trúc văn hóa Chăm Pa lớn nhất ở miền Trung Việt Nam. Tọa lạc trên một ngọn đồi cao 50m so với mực nước biển, Tháp Bà Ponagar được bao trùm bởi màu xanh của cây rừng, như một công trình nổi bật giữa khung nền thiên nhiên xanh mát. Tổng thể kiến trúc tháp bà Ponagar gồm có 3 tầng: tầng thấp là ngôi tháp cổ mà nay đã không còn nữa. Ở tầng giữa là nhà khách được gọi là Mandapa, dành cho những vị khách có thể nghỉ chân sau chuyến hành hương, gồm 4 hàng cột hình bát giác tạo nên một tổng thể kiến trúc vô cùng lạ mắt. <br />",
        },
        {
          title: "Vinpearl Land",
          content:
            "Địa chỉ: 98B/13, Trần Phú, Lộc Thọ, Thành phố Nha Trang, Khánh Hòa<br />Toạ lạc trên đảo Hòn Tre xinh đẹp giữa biển khơi và bãi biển trong xanh quanh năm, Vinpearl Land được biết đến như điểm đến du lịch Nha Trang – “thiên đường của miền nhiệt đới” hấp dẫn mọi du khách. Ngoài các khu vui chơi dành cho gia đình và trẻ em, Vinpearl Land còn có Công viên nước Vinpearl. Với các đường trượt có độ dốc lớn nhất là 21.5m, khu vực giải trí này thường phục vụ những du khách ưa thích cảm giác mạnh. Trong đó, một đoạn Hang Rùng Rợn dài 56m cũng sẽ làm thoả mãn niềm đam mê thám hiểm của nhiều du khách trẻ tuổi. Hơn nữa, nơi này còn thu hút du khách bởi rạp chiếu phim 4D hoành tráng.<br />",
        },
      ],
      am_thuc: [
        {
          title: "Bún cá lá Cây Bàng",
          content:
            "Người ta vẫn thường nói: “Đến Nha Trang mà không thưởng thức bún cá thì thật là một thiếu sót”. Bún cá lá Cây Bàng được cho là một trong các quán ăn ngon ở Nha Trang. Quả thật vậy, những miếng chả cá dai dai cùng nước lèo ngọt thanh được hầm từ xương khiến người ta nhớ mãi không quên. Nằm bên cạnh bờ biển xinh đẹp, bún cá như là một món ăn đại diện nơi đây. Không bất ngờ khi có những con đường trải dài nhiều quán bán bún chả cá. Tuy nhiên, để thưởng thức bún cá Nha Trang đậm vị nhất thì nên ghé bún cá lá Cây Bàng.<br />- Địa chỉ: 06 Hàn Thuyên, TP. Nha Trang, Khánh Hòa",
        },
        {
          title: "Bánh xèo chảo",
          content:
            "Bánh xèo ở mỗi nơi thì sẽ có một số cái riêng. Nhiều nơi làm nhân bánh xèo với thịt hay cũng một số nơi làm bánh xèo chay. Ở Nha Trang, bánh xèo có nhân được làm từ mực và tôm. Hải sản ở đây được đánh bắt dưới biển lên, còn tươi thì đem đi sơ chế. Đây chính là một trong những món ăn ngon ở Nha Trang mà bạn nhất định nên thử.<br />- Địa chỉ: 85 Tô Hiến Thành, TP. Nha Trang<br /><img src='atnt1.jpg' alt='Bánh xèo chảo' />",
        },
        {
          title: "Bánh căn mực",
          content:
            "Bánh căn mực - một cái tên thật xa lạ với nhiều người. Nhưng nó lại là một món ăn đặc sản ở Nha Trang. Bánh căn ở đây vỏ mỏng nhưng lớp mực lại dày cộm che hết cả phần vỏ. Nhiều người còn đùa rằng món bánh ở đây không giống bánh căn, mà giống một món hải sản hơn.Bánh mới được đúc ra nóng hổi, ăn kèm cùng mỡ hành, xíu mại, xoài và mắm nêm. Một miếng nhưng có vị ngọt từ mực, xíu mại, vị mặn từ mắm nêm, vị chua từ xoài,...Không đến đây thì chuyến đi du lịch Nha Trang lại thiếu thiếu rồi.<br />- Địa chỉ: 227 Võ Thị Sáu, TP. Nha Trang, Khánh Hòa",
        },
        {
          title: "Quán ốc Xuân Anh",
          content:
            "Ốc ở đây được nêm nếm đậm vị, với đa dạng nhiều loại ốc như ốc hương, ốc cà na...Ngoài ốc thì ở đây cũng bán nhiều hải sản tươi khác. Ốc được làm ra rất nhiều món như ốc sốt bơ tỏi, ốc rang muối, ốc xào trứng muối.. Mỗi vị sốt hay mỗi loại ốc đều có cái ngon khác nhau. Bánh mì chấm cùng các nước sốt khá ngon đấy. Một số món khuyến khích bạn thử khi tới đây như cháo hải sản, gỏi ốc,...Với mức giá bình dân, đây là một quán ăn ngon rẻ ở Nha Trang bạn nên ghé!<br />- Địa chỉ: 9C, Tháp Bà, TP. Nha Trang, Khánh Hòa<br /><img src='atnt2.jpg' alt='Quán ốc Xuân Anh' />",
        },
        {
          title: "Hải sản Bờ Kè",
          content:
            "Đây là một địa điểm ăn uống Nha Trang giá rẻ tiếp theo mà bài viết giới thiệu đến bạn. View quán hướng ra biển nên gió thổi mát lồng lộng. Vào cái thời tiết oi bức này, ngồi ăn hải sản có gió tự nhiên và view nhìn ra biển thì còn gì bằng. Một số món nổi tiếng ở quán như tôm hùm nướng, gỏi bạch tuộc hay bào ngư được sốt dầu hào.. Tôm hùm vốn dĩ đã ngọt thịt, nay được nướng lên thì có thêm cả mùi thơm do nướng. Bào ngư sốt dầu hào là một món lạ, nhiều quán không có. Nên nếu muốn thưởng thức, ắt hẳn phải đến Hải sản Bờ Kè rồi!<br />- Địa chỉ: 52 Cù Huân, Tp Nha Trang, Khánh Hòa",
        },
      ],
      mua_sam: [
        {
          title: "Chả Cá Nha Trang",
          content:
            "Yến sào được là một trong số ít đặc sản Nha Trang thuộc hàng quý và hiếm, là loại thực phẩm cao cấp có nhiều chất bổ dưỡng đặc biệt,có lợi cho sức khỏe… Và đây là món quà thích hợp nhất cho bố mẹ, ông bà và những người thân trong gia đình.<br />Địa chỉ tham khảo<br />Cửa hàng yến sào A Nam: 50 B – Nguyễn Thị Minh Khai – Phường Tân Lập – Nha Trang<br />Công ty yến sào Khánh Hòa: Số 248 – đường Thống Nhất – Phường Phương Sơn – Nha Trang",
        },
        {
          title: "Chả Cá Nha Trang",
          content:
            "Không cần phải nói, chả cá chính là đặc sản nổi tiếng nên mua làm quà khi du lịch Nha Trang. Nó được làm nên bởi các loại cá: Cá mối, cá thu, cá thởn, cá rựa, cá nhồng, cá chuồn, cá cờ,…với các loại gia vị bí truyền. Chính điều đó đã tạo nên những miếng chả cá ngon, mềm mịn và hơi dai mà không chả cá ở đâu có được.<br />Địa chỉ tham khảo<br />8A Ngô Thời Nhiệm<br />Quán Nguyên Loan, 123 Ngô Gia Tự",
        },
        {
          title: "Bánh Xoài",
          content:
            "Bánh xoài hay bánh tráng xoài là đặc sản nổi tiếng của Nha Trang, có vị chua thanh, ngọt vừa, phảng phất mùi thơm tự nhiên của xoài, rất thích hợp để ăn chơi chơi, khi chưa chín rất chua nhưng chín vàng thì ngọt đậm và sắc. Bánh ngon là miếng bánh vàng ươm, màu vàng không đậm đen cũng không quá nhạt, mềm dai, dễ xé, có vị chua ngọt thơm ngon tự nhiên của xoài, không ngọt gắt vị đường.<br />Địa chỉ tham khảo<br />Chợ Xóm Mới 49 Ngô Gia Tự – Nha Trang<br />Cửa hàng 11E Thái Nguyên – Nha Trang<br /><img src='msnt2.jpg' alt='Bánh Xoài' />",
        },
        {
          title: "Muối Ớt Xanh",
          content:
            "Muối ớt lá chanh ở Nha Trang là loại nước chấm tinh tế hòa quyện giữa hương vị muối tiêu chanh, tương ớt và tí mù tạt nhẹ. Không giống Sài Gòn chủ quán thường pha mắm ớt hay sử dụng muối tiêu chanh ăn chung với các loại ốc, mọi quán hải sản và thịt nướng tại Nha Trang đều dùng loại nước chấm muối chanh ớt ăn chung với sản phẩm của mình.<br />Địa chỉ tham khảo<br />Chợ Đầm<br />Chợ Xóm Mới 49 Ngô Gia Tự – Nha Trang",
        },
      ],
      hanh_trang: [
        {
          title: "Đồ dùng cá nhân",
          content:
            "Bạn nên mang theo bàn chải, kem đánh răng, dầu gội đầu, thuốc nhỏ mắt, khăn tắm… để tiện khi cần và cũng không nên sử dụng ở nhà nghỉ vì sợ không đảm bảo an toàn.<br /><img src='htnt1.jpg' alt='Đồ dùng cá nhân' />",
        },
        {
          title: "Gói data ST15K của Viettel",
          content:
            'Gói cước ưu đãi 4G HOT nhất của Viettel chính là hành trang không thể thiếu của bạn khi tới Đà Nẵng đó! Chỉ với 15.000đ sẽ có ngay 3GB data tốc độ cao để có thể kết nối Internet miễn phí trên di động trong 3 ngày. Với sự đồng hành hữu ích của gói ST15K, bạn sẽ không phải lo lắng về việc lạc đường, mất liên lạc, không kịp "check-in" cũng như tình trạng phát sinh cước 4G cao hay phải phụ thuộc vào sóng wifi. Nếu bạn đang có một chuyến đi dài ngày, Viettel cũng cung cấp lựa chọn gói cước ST30K với 7GB data trong 7 ngày (Chỉ 30.000đ). ',
          short_link:
            "https://viettel.vn/fr/dt?cd=ST30k&ch=QLDT&utm_source=landing",
        },
        {
          title: "Mỹ phẩm",
          content:
            "Đối với đồ trang điểm, nên mang đủ dùng và kèm theo các sản phẩm dưỡng da như kem chống nắng, tinh chất dưỡng da là được.",
        },
        {
          title: "Trang phục",
          content:
            "Ngoài những gợi ý ở trên, bạn cũng cần chuẩn bị mang theo kính mắt, áo choàng, dép tông nếu có đi biển,… vì khi cần sẽ không phải mua ở bên ngoài sẽ rất đắt, vì đây có những điểm du lịch nổi tiếng. Việc chuẩn bị đồ đi du lịch Quảng Ninh cũng không quá cầu kỳ nhưng nếu biết phân bổ và lựa chọn những đồ dùng hợp lý thì bạn sẽ cảm thấy khá đơn giản.<br /><img src='htnt2.jpg' alt='Trang phục' />",
        },
        {
          title: '"Phụ kiện check-in"',
          content:
            "Máy ảnh, sạc dự phòng, gậy tự sướng, máy sấy tóc mini đều rất cần thiết cho chuyến đi của bạn nhé. Ngoài ra, bạn còn cần chuẩn bị những chiếc túi chuyên dụng để đựng hết những vật dụng này cho gọn gàng để có thể bỏ vừa vào trong vali khi cần sẽ dễ dàng lấy ra.",
        },
      ],
    },
  ];
  const dataTab = () => {
    console.log("currentTab", currentTab);
    switch (currentTab) {
      case 0:
        setDataShow(province.kham_pha);
        break;

      case 1:
        setDataShow(province.am_thuc);
        break;
      case 2:
        setDataShow(province.mua_sam);
        break;
      case 3:
        setDataShow(province.hanh_trang);
        break;
    }
  };

  useEffect(() => {
    data.forEach((e) => {
      if (e.path === params.id) {
        setProvince(e);
      }
    });
  }, [params]);
  useEffect(() => {
    dataTab();
  }, [province]);
  return (
    <>
      <Layout>
        <div className="province-details__wrapper">
          <div className="discover-detail">
            <div className="discover-detail__banner">
              <img
                src={
                  province.banner
                    ? province.banner
                    : "https://vietteltelecom.vn/images_content/banner-travel.png"
                }
                alt={province?.label}
              />
              {province.label && (
                <div className="discover-detail__banner-info">
                  <div className="content">
                    <h2 className="discover-detail__banner-name">
                      {province?.label}
                    </h2>
                  </div>
                </div>
              )}
            </div>
            <div className="discover-detail__menu">
              <div className="content">
                <ul className="discover-detail__menu-list">
                  <li
                    className={
                      currentTab == 0
                        ? "discover-detail__menu-item active"
                        : "discover-detail__menu-item "
                    }
                    onClick={() => setCurrentTab(0)}
                  >
                    <a href="#" className="discover-detail__menu-link">
                      <h5 className="discover-detail__menu-name">
                        KHÁM PHÁ
                        <br />
                        TRẢI NGHIỆM
                      </h5>
                      <img
                        src="https://vietteltelecom.vn/images_content/img-travel-menu-4.png"
                        alt="icon KHÁM PHÁ TRẢI NGHIỆM"
                      />
                    </a>
                  </li>
                  <li
                    className={
                      currentTab == 1
                        ? "discover-detail__menu-item active"
                        : "discover-detail__menu-item "
                    }
                    onClick={() => setCurrentTab(1)}
                  >
                    <a href="#" className="discover-detail__menu-link">
                      <h5 className="discover-detail__menu-name">ẩm thực</h5>
                      <img
                        src="https://vietteltelecom.vn/images_content/img-travel-menu-3.png"
                        alt="icon ẩm thực"
                      />
                    </a>
                  </li>
                  <li
                    className={
                      currentTab == 2
                        ? "discover-detail__menu-item active"
                        : "discover-detail__menu-item "
                    }
                    onClick={() => setCurrentTab(2)}
                  >
                    <a href="#" className="discover-detail__menu-link">
                      <h5 className="discover-detail__menu-name">mua sắm</h5>
                      <img
                        src="https://vietteltelecom.vn/images_content/img-travel-menu-2.png"
                        alt="icon mua sắm"
                      />
                    </a>
                  </li>
                  <li
                    className={
                      currentTab == 3
                        ? "discover-detail__menu-item active"
                        : "discover-detail__menu-item "
                    }
                    onClick={() => setCurrentTab(3)}
                  >
                    <a href="#" className="discover-detail__menu-link">
                      <h5 className="discover-detail__menu-name">hành trang</h5>
                      <img
                        src="https://vietteltelecom.vn/images_content/img-travel-menu-1.png"
                        alt="icon hành trang"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="discover-detail__info">
              {dataShow?.map((item, index) => (
                <div className="content" key={index}>
                  <h3 className="discover-detail__info-title">{item.title}</h3>
                  <div
                    className="discover-detail__info-intro discover-detail__info-des"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
