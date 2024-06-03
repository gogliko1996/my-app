import React from "react";
import { Spacer } from "../Spacer/Spacer";
import { Text } from "../ScreenRoot/ScreenContent";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useResponsive } from "../../utils/hooks/useResponsive";


const scroolNameArray = [
  "SAMSUNG",
  "INTEL",
  "MICROSOFT",
  "GOLDMAN",
  "SONI",
  "BOENIG",
  "APPl",
  "GOLDMAN",
  "SONI",
  "BOENIG",
  "APPl",
  "GOLDMAN",
  "SONI",
  "BOENIG",
  "APPl",
];

export const HorizontalScroll: React.FC = () => {
  const { isResponsiveMobile } = useResponsive();
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={isResponsiveMobile ? 3 : 10}
    >
      {scroolNameArray.map((item, index) => (
         <SwiperSlide>
        <Spacer key={index} mr={50}>
          <Text color="gray" fontSize={20} fontFamily="Arial" fontWeight="bold">
            {item}
          </Text>
        </Spacer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};




