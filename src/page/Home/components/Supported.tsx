import React, { useState } from "react";
import {
  Card,
  Conteiner,
  Image,
  Row,
  Text,
} from "../../../components/ScreenRoot/ScreenContent";
import { Spacer } from "../../../components/Spacer/Spacer";
import { Button } from "../../../components/Button/Button";
import { useResponsive } from "../../../utils/hooks/useResponsive";
import icon from "../../../utils/icons/github.png";
import { supportedarray } from "../../../constant/optional";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { colors } from "../../../utils/color/color";
import { useNavigation } from "../../../utils/hooks/usenavigation";
import { screen } from "../../../routes/constants";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const ButtonArray = ["All", "HRIS", "PEO", "ASO", "Other"];

export const Supported: React.FC = () => {
  const [onClick, setOnClick] = useState<number>(0);

  const { navigation } = useNavigation();
  const { isResponsiveMobile } = useResponsive();

  const ButtonArraySlice = ButtonArray.slice(0, isResponsiveMobile ? 2 : 5);
  const filterArray = supportedarray.slice(0, 9);

  return (
    <Card
      backgroundColor="darkInttigo"
      paddingLeft={isResponsiveMobile ? 10 : 100}
      paddingTop={50}
      paddingRight={isResponsiveMobile ? 10 : 100}
    >
      <Spacer>
        <Row width={"100%"} justifyContent="space-between">
          <Spacer mt={-50}>
            <Conteiner width={isResponsiveMobile ? "60%" : 480}>
              <Text
                fontFamily="Arial"
                fontWeight="bold"
                fontSize={45}
                color="wite"
              >
                Supported Integration Partners
              </Text>
            </Conteiner>
          </Spacer>

          <Row>
            {ButtonArraySlice.map((item, index) => (
              <Spacer key={index} mr={20} mb={40}>
                <Button
                  width={60}
                  height={30}
                  variant="contained"
                  backgroundColor={
                    onClick === index ? "mediumPurple" : "darkSlateBlue"
                  }
                  onClick={() => setOnClick(index)}
                >
                  <Text fontSize={10} color="wite">
                    {item}
                  </Text>
                </Button>
              </Spacer>
            ))}
          </Row>
        </Row>

        {!isResponsiveMobile ? (
          <Row width={"100%"} justifyContent="space-between">
            {filterArray.map((item, index) => (
              <Conteiner width={"30%"} key={index}>
                <Spacer mb={60}>
                  <Card width={64} height={60} backgroundColor="wite">
                    <Image src={item.icon} />
                  </Card>
                  <Text fontWeight="bold" fontSize={12} color="wite">
                    {item.title}
                  </Text>
                  <Text fontSize={10} color="wite">
                    {item.body}
                  </Text>
                </Spacer>
              </Conteiner>
            ))}
          </Row>
        ) : (
          <Swiper spaceBetween={50} slidesPerView={3}>
            {filterArray.map((item, index) => (
              <SwiperSlide>
                <Conteiner width={400} key={index}>
                  <Spacer mr={isResponsiveMobile ? 300 : 20}>
                    <Row>
                      <Card
                        width={48}
                        height={48}
                        borderBottomLeftRadius={12}
                        borderBottomRightRadius={12}
                        borderTopLeftRadius={12}
                        borderTopRightRadius={12}
                      >
                        <Image src={item.icon} />
                      </Card>
                      <Conteiner>
                        <Spacer mt={-10} ml={10}>
                          <Spacer mb={-10}>
                            <Text fontSize={16} fontWeight="bold" color="wite">
                              {item.title}
                            </Text>
                          </Spacer>
                          <Text fontSize={12} color="wite">
                            {item.body}
                          </Text>
                        </Spacer>
                      </Conteiner>
                    </Row>

                    <Spacer>
                      <Text fontSize={14} color="darkInttigo">
                        {item.body}
                      </Text>
                    </Spacer>
                  </Spacer>
                </Conteiner>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <Row width={"100%"} justifyContent="center">
          <Spacer mb={20}>
            <Button onClick={() => navigation(screen.integrationPage)}>
              <Row alignItems="center">
                <Text fontSize={14} color="wite">
                  View All
                </Text>
                <NavigateNextIcon style={{ color: colors.wite }} />
              </Row>
            </Button>
          </Spacer>
        </Row>
      </Spacer>
    </Card>
  );
};
