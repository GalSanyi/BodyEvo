import React from "react";
import "../service/exercise.css";
import ExerciseCard from "./ExerciseCard";
import { exercises } from "../utils/exercises";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
const ExerciseList = () => {
  return (
    <div className="exercise__slider">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={1}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {exercises.map((exercise) => (
        
            <SwiperSlide key={exercise.id}>
              <ExerciseCard exercise={exercise} />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExerciseList;
