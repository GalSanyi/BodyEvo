import React from "react";
// import { Col } from "reactstrap";
import BodyPart from "../BodyPart/BodyPart";
import "./horizontal-scroll.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <ul>
          {data.map((item, index) => (
            <SwiperSlide key={`swiper-${item.id || index}`}>
              <BodyPart
                key={`bodyPart-${item.id || index}`}
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            </SwiperSlide>
          ))}
        </ul>
      </Swiper>
    </>
  );
};

export default HorizontalScrollbar;
