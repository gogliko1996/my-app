import React from "react";
import { Spacer } from "../Spacer/Spacer";
import { Card, Conteiner, Image, Row, Text } from "../ScreenRoot/ScreenContent";
import styled from "styled-components";
import { colors } from "../../utils/color/color";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImage from '../../utils/image/1-intro-photo-final.jpg'
import sliderImage1 from '../../utils/image/download.jpeg'
import sliderImage2 from '../../utils/image/pexels-photo-771742.jpeg'

import "swiper/css";
import { useResponsive } from "../../utils/hooks/useResponsive";

const array = [
    {
        title: 'Sundar Pichai',
        body: 'CEO Google',
        detaols: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        image: sliderImage
    },
    {
        title: 'Tim Cook',
        body: 'CEO Apple',
        detaols: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        image: sliderImage2
    },
    {
        title: 'Hyun-Suk Kim',
        body: 'CEO Samsung',
        detaols: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        image: sliderImage
    },
    {
        title: 'gyog',
        body: 'Usa mack',
        detaols: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        image: sliderImage2
    },
    {
        title: 'tsd-ddd',
        body: 'Daf anume',
        detaols: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
        image: sliderImage1
    }
];

export const Slider: React.FC = () => {
  const { isResponsiveTablet, isResponsiveMobile } = useResponsive();

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
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
                    <Image src={item.image}/>
                </Card>
                <Conteiner width={'40%'}>
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
