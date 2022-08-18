import Slider from 'react-slick';
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";
import {Col, Row} from "antd";
import ChessList from "@/store/chess";
const ChessSlick = () => {
  const slider_children = ChessList.map(item =>
      <div key={item.heroPaint.replace("s7_", "")}>
        <img key={item.heroPaint.replace("s7_", "")} src={"/src/images/s7/jkimg/" + item.heroPaint.replace("s7_", "") + ".jpg"} height='200px' />
      </div>
  );
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
      <>
        <Row>
          <Col lg={24} md={24} style={{}}>
            <Slider {...settings}>
              {slider_children}
            </Slider>
          </Col>
        </Row>
      </>
  )
};

export default ChessSlick;
