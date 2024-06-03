import React from "react";
import { Spacer } from "../Spacer/Spacer";
import { Card, Conteiner, Image, Row, Text } from "../ScreenRoot/ScreenContent";
import styled from "styled-components";
import { colors } from "../../utils/color/color";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useResponsive } from "../../utils/hooks/useResponsive";
import { array } from "../../constant/optional";
import { SliderProps } from "./Slider.props";

import "swiper/css";

export const Slider: React.FC<SliderProps> = (props) => {
  const { quantity } = props;

  const { isResponsiveTablet, isResponsiveMobile } = useResponsive();

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={quantity ? quantity : isResponsiveTablet ? 2 : 3}
    >
      {array.map((item, index) => (
        <SwiperSlide>
          <Conteiner width={400} key={index}>
            <Spacer
              mr={isResponsiveMobile ? 250 : isResponsiveTablet ? 120 : 20}
            >
              <Row>
                <Card
                  width={48}
                  height={48}
                  borderBottomLeftRadius={12}
                  borderBottomRightRadius={12}
                  borderTopLeftRadius={12}
                  borderTopRightRadius={12}
                >
                  <Image src={item.image} />
                </Card>
                <Conteiner width={150}>
                  <Spacer mt={-10} ml={10}>
                    <Spacer mb={-10}>
                      <Text fontSize={16} fontWeight="bold" color="darkInttigo">
                        {item.title}
                      </Text>
                    </Spacer>
                    <Text fontSize={12} color="purpleNavy">
                      {item.body}
                    </Text>
                  </Spacer>
                </Conteiner>
              </Row>

              <Line />

              <Spacer>
                <Text fontSize={14} color="darkInttigo">
                  {item.detaols}
                </Text>
              </Spacer>
            </Spacer>
          </Conteiner>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const Line = styled.div`
  width: 90%;
  height: 1px;
  opacity: 0.6;
  background-color: ${colors.russianViolet};
`;
