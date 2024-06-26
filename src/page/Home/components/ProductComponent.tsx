import React, { useState } from "react";
import { productarArray } from "../../../constant/optional";
import { Spacer } from "../../../components/Spacer/Spacer";
import {
  Card,
  Conteiner,
  Content,
  Image,
  Row,
  Text,
} from "../../../components/ScreenRoot/ScreenContent";
import { colors } from "../../../utils/color/color";
import styled from "styled-components";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import { Button } from "../../../components/Button/Button";
import { useResponsive } from "../../../utils/hooks/useResponsive";
import image from "../../../utils/image/pexels-photo-771742.jpeg";
import { MenuButton } from "../../../components/MenuButton/MenuButton";
import CircleIcon from "@mui/icons-material/Circle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { HederScroll } from "../../../components/HederScroll/HederScroll";
import { Chart } from "../../../components/Chart/Cart";



export const ProductComponent: React.FC = () => {
  const { isResponsiveMobile, isResponsiveTablet } = useResponsive();
  return (
    <>
      <Spacer mb={80}>
        <HederScroll/>
      </Spacer>

      <Row
        justifyContent={
          isResponsiveMobile || isResponsiveTablet ? "center" : "space-between"
        }
      >
        {!isResponsiveMobile ||
          (isResponsiveTablet && (
            <Row
              width={isResponsiveMobile ? 380 : 560}
              height={590}
              flexDirection="column"
              justifyContent="center"
            >
              <Spacer ml={isResponsiveMobile ? 50 : 85}>
                <Card
                  width={isResponsiveMobile ? 280 : 380}
                  height={isResponsiveMobile ? 70 : 90}
                  noShadow
                  borderBottomLeftRadius={0}
                  borderBottomRightRadius={0}
                  backgroundColor="magnoliaWhite"
                />
              </Spacer>

              <Card
                height={350}
                style={{ zIndex: 100 }}
                paddingLeft={20}
                paddingTop={20}
                paddingRight={30}
              >
                <Spacer>
                  <Spacer mb={-20}>
                    <Text fontSize={18} fontWeight="bold" color="darkInttigo">
                      Historical
                    </Text>
                  </Spacer>

                  <Row
                    width={"100%"}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Row
                      width={270}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Spacer mr={3}>
                        <CircleIcon
                          style={{ fontSize: 10, color: colors.mediumPurple }}
                        />
                      </Spacer>
                      <Text fontSize={12} color="darkInttigo">
                        Lisa Mathewson
                      </Text>
                      <Spacer mr={3}>
                        <CircleIcon
                          style={{ fontSize: 10, color: colors.gray }}
                        />
                      </Spacer>
                      <Text fontSize={12} color="darkInttigo">
                        Company Average
                      </Text>
                    </Row>

                    <MenuButton
                      text="Company Average"
                      color={colors.darkInttigo}
                      bodyText={["test1", "test2"]}
                    />
                  </Row>
                  <Chart/>
                </Spacer>
              </Card>

              <Spacer ml={isResponsiveMobile ? 50 : 85}>
                <Card
                  width={isResponsiveMobile ? 280 : 380}
                  height={isResponsiveMobile ? 70 : 90}
                  noShadow
                  borderTopLeftRadius={0}
                  borderTopRightRadius={0}
                  backgroundColor="magnoliaWhite"
                />
              </Spacer>
            </Row>
          ))}
        <Conteiner width={480} height={590}>
          <Spacer>
            <Row>
              <Card width={92} height={92}>
                <Image src={image} />
              </Card>

              <Conteiner width={300}>
                <Spacer ml={26} mt={-10}>
                  <Text fontSize={14} color="purpleNavy">
                    “I want to lower PTO liability and keep my employess happy.”
                  </Text>

                  <Spacer mt={-5} mb={-5}>
                    <Text fontSize={12} fontWeight="bold" color="darkInttigo">
                      James Hamilton
                    </Text>
                  </Spacer>

                  <Text fontSize={12} color="purpleNavy">
                    HR Manager
                  </Text>
                </Spacer>
              </Conteiner>
            </Row>

            <Spacer mt={26}>
              <Line />
            </Spacer>

            <Spacer>
              <Text fontSize={24} fontWeight="bold" color="darkInttigo">
                Nullam ultricies luctus elit in facilisis. Etiam in elit mauris.
              </Text>
              <Text fontSize={14} color="purpleNavy">
                Nullam ultricies luctus elit in facilisis. Etiam in elit mauris.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere.
              </Text>

              <Row alignItems="center">
                <VerticalAlignTopIcon fontSize="small" color="error" />
                <Text fontSize={14} color="darkInttigo">
                  High Churn
                </Text>
              </Row>

              <Row alignItems="center">
                <VerticalAlignTopIcon fontSize="small" color="error" />
                <Text fontSize={14} color="darkInttigo">
                  High Employee Burnout
                </Text>
              </Row>

              <Row alignItems="center">
                <VerticalAlignBottomIcon fontSize="small" color="success" />
                <Text fontSize={14} color="darkInttigo">
                  Reduce Employee Churn
                </Text>
              </Row>

              <Row alignItems="center">
                <VerticalAlignBottomIcon fontSize="small" color="success" />
                <Text fontSize={14} color="darkInttigo">
                  Lower Employee Related Costs
                </Text>
              </Row>

              <Spacer mt={68}>
                <Button backgroundColor="mediumPurple" variant="contained">
                  <Text fontSize={10}>Request a Demo</Text>
                </Button>
              </Spacer>
            </Spacer>
          </Spacer>
        </Conteiner>

        {isResponsiveMobile ||
          (!isResponsiveTablet && (
            <Row width={560} height={590} flexDirection="column">
              <Spacer ml={85}>
                <Card
                  width={380}
                  height={90}
                  noShadow
                  borderBottomLeftRadius={0}
                  borderBottomRightRadius={0}
                  backgroundColor="magnoliaWhite"
                />
              </Spacer>

              <Card
                height={350}
                style={{ zIndex: 100 }}
                paddingLeft={20}
                paddingTop={20}
                paddingRight={30}
              >
                <Spacer>
                  <Spacer mb={-20}>
                    <Text fontSize={18} fontWeight="bold" color="darkInttigo">
                      Historical
                    </Text>
                  </Spacer>

                  <Row
                    width={"100%"}
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Row
                      width={270}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Spacer mr={3}>
                        <CircleIcon
                          style={{ fontSize: 10, color: colors.mediumPurple }}
                        />
                      </Spacer>
                      <Text fontSize={12} color="darkInttigo">
                        Lisa Mathewson
                      </Text>
                      <Spacer mr={3}>
                        <CircleIcon
                          style={{ fontSize: 10, color: colors.gray }}
                        />
                      </Spacer>
                      <Text fontSize={12} color="darkInttigo">
                        Company Average
                      </Text>
                    </Row>

                    <MenuButton
                      text="Company Average"
                      color={colors.darkInttigo}
                      bodyText={["test1", "test2"]}
                    />
                  </Row>
                  <Chart/>
                </Spacer>
              </Card>

              <Spacer ml={85}>
                <Card
                  width={380}
                  height={90}
                  noShadow
                  borderTopLeftRadius={0}
                  borderTopRightRadius={0}
                  backgroundColor="magnoliaWhite"
                />
              </Spacer>
            </Row>
          ))}
      </Row>
    </>
  );
};

const Line = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.6;
  background-color: ${colors.russianViolet};
`;
