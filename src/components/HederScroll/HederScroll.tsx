import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { productarArray } from "../../constant/optional";
import { Text } from "../ScreenRoot/ScreenContent";
import { useResponsive } from "../../utils/hooks/useResponsive";
import { Spacer } from "../Spacer/Spacer";
import styled from "styled-components";
import { colors } from "../../utils/color/color";
import { HederScrollProps } from "./HederScroll.props";

export const HederScroll: React.FC<HederScrollProps> = (props) => {
const {array, slidesPerView} = props

    const [onClick, setOnClick] = useState<number | string>("");
  
    const { isResponsiveMobile } = useResponsive();

    const cangeArray = array || productarArray
  
    return (
      <>
        <Swiper spaceBetween={1} slidesPerView={isResponsiveMobile ? 2 : slidesPerView ? slidesPerView : 5}>
          {cangeArray.map((item, index) => (
            <SwiperSlide>
              <Spacer key={index} mb={isResponsiveMobile ? 2 : undefined}>
                <div
                  onClick={() => setOnClick(index)}
                  style={{
                    cursor: "pointer",
                    borderBottom:
                      onClick === index
                        ? `2px solid ${colors.mediumPurple}`
                        : undefined,
                  }}
                >
                  <Text
                    color="russianViolet"
                    opacity={"60%"}
                    textAlign="center"
                    style={{
                      marginBottom: 10,
                      color: onClick === index ? colors.mediumPurple : undefined,
                    }}
                  >
                    {item}
                  </Text>
                </div>
              </Spacer>
            </SwiperSlide>
          ))}
        </Swiper>
        <Line />
      </>
    );
  };


  const Line = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.6;
  background-color: ${colors.russianViolet};
`;