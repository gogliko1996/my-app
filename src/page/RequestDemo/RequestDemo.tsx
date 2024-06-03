import React, { useState } from "react";
import {
  Card,
  Conteiner,
  Content,
  Row,
  ScreenContent,
  Text,
} from "../../components/ScreenRoot/ScreenContent";
import { Header } from "../../components/Header/Header";
import { useResponsive } from "../../utils/hooks/useResponsive";
import { Spacer } from "../../components/Spacer/Spacer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { colors } from "../../utils/color/color";
import { scroolNameArray } from "../../constant/optional";
import AddIcon from "@mui/icons-material/Add";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./style/Calendar.css";
import { HorizontalScroll } from "../../components/HorizontalScroll/HorizontalScroll";
import { Slider } from "../../components/Slider/Slider";
import { Footer } from "../../components/Footer/Footer";
import { MenuButton } from "../../components/MenuButton/MenuButton";
import styled from "styled-components";
import { Modalize } from "../../components/Modalize/Modalize";
import { Button } from "../../components/Button/Button";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const RequestDemo: React.FC = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [showModal, setShowModal] = useState<boolean>(false);
  const { isResponsiveMobile, isResponsiveweb } = useResponsive();

  return (
    <>
      <ScreenContent>
        <Content>
          <Header noTitle />

          <Spacer mt={30}>
            <Card
              width={"83%"}
              backgroundColor="mediumPurple"
              paddingTop={45}
              paddingBottom={45}
              paddingLeft={ isResponsiveMobile ? 30 : 100}
            >
              <Row width={"100%"} flexWrap="nowrap">
                <Spacer>
                  <Conteiner width={isResponsiveMobile ? "100%" : 480}>
                    <Spacer>
                      <Text fontSize={60} fontWeight="bold" color="wite">
                        Do More With Your Paid Time Off
                      </Text>
                    </Spacer>

                    <Spacer mt={-30}>
                      <Row alignItems="center">
                        {!isResponsiveMobile && (
                          <CheckCircleIcon
                            fontSize="small"
                            style={{ color: colors.wite }}
                          />
                        )}
                        <Text fontSize={14} color="wite">
                          Reduce Employee Churn
                        </Text>
                      </Row>

                      <Row alignItems="center">
                        {!isResponsiveMobile && (
                          <CheckCircleIcon
                            fontSize="small"
                            style={{ color: colors.wite }}
                          />
                        )}
                        <Text fontSize={14} color="wite">
                          Amet minim mollit non deserunt ullamco est sit
                        </Text>
                      </Row>

                      <Row alignItems="center">
                        {!isResponsiveMobile && (
                          <CheckCircleIcon
                            fontSize="small"
                            style={{ color: colors.wite }}
                          />
                        )}

                        <Text fontSize={14} color="wite">
                          Amet minim mollit non deserunt
                        </Text>
                      </Row>

                      {isResponsiveMobile && (
                        <Button
                          variant="text"
                          onClick={() => setShowModal(true)}
                        >
                          <Text color="wite">Calendar</Text>
                        </Button>
                      )}
                    </Spacer>

                    {!isResponsiveMobile && (
                      <Spacer>
                        <Row width={"100%"} justifyContent="space-between">
                          {scroolNameArray.map((item, index) => (
                            <Spacer key={index} mr={50}>
                              <Text
                                color="wite"
                                opacity={"50%"}
                                fontSize={20}
                                fontFamily="Arial"
                                fontWeight="bold"
                              >
                                {item}
                              </Text>
                            </Spacer>
                          ))}
                        </Row>
                      </Spacer>
                    )}
                  </Conteiner>
                </Spacer>

                {!isResponsiveweb && (
                  <Spacer ml={200}>
                    <Card
                      width={380}
                      height={550}
                      backgroundColor="wite"
                      paddingLeft={30}
                      paddingRight={30}
                      paddingTop={10}
                    >
                      <Conteiner width={"100%"}>
                        <Spacer mb={-20}>
                          <Text
                            fontWeight="bold"
                            fontSize={25}
                            color="darkInttigo"
                          >
                            Request a Demo
                          </Text>
                        </Spacer>
                        <Text fontSize={14} color="purpleNavy">
                          Do more with your paid time off
                        </Text>

                        <Spacer mt={25}>
                          <Calendar onChange={onChange} value={value} />
                        </Spacer>
                      </Conteiner>
                    </Card>
                  </Spacer>
                )}
              </Row>
            </Card>
          </Spacer>

          {isResponsiveMobile && (
            <Spacer mt={35}>
              <HorizontalScroll />
            </Spacer>
          )}

          <Spacer mt={50}>
            <Spacer>
              <Text fontWeight="bold" fontSize={35} color="darkInttigo">
                Testimonial
              </Text>
            </Spacer>
            <Slider quantity={1} />
          </Spacer>

          <Spacer mt={150}>
            <Text fontWeight="bold" fontSize={35} color="darkInttigo">
              Questions & Answers
            </Text>
            <Card width={"70%"} noShadow border="1px solid" borderColor="gray">
              <Conteiner width={"100%"}>
                <MenuButton
                  width={"100%"}
                  justifyContent="space-between"
                  icon={<AddIcon />}
                  noOpacity
                  color={colors.black}
                  text="Attract & Retain Top Talent With A Cutting-Edge Solution"
                />
                <Spacer>
                  <Line />
                </Spacer>

                <MenuButton
                  width={"100%"}
                  justifyContent="space-between"
                  icon={<AddIcon />}
                  noOpacity
                  color={colors.black}
                  text="We help you understand the robust features"
                />
                <Spacer>
                  <Line />
                </Spacer>

                <MenuButton
                  width={"100%"}
                  justifyContent="space-between"
                  icon={<AddIcon />}
                  noOpacity
                  color={colors.black}
                  text="Amet minim mollit non deserunt ullamco est sit"
                />
                <Spacer>
                  <Line />
                </Spacer>

                <MenuButton
                  width={"100%"}
                  justifyContent="space-between"
                  icon={<AddIcon />}
                  noOpacity
                  color={colors.black}
                  text="We’re a disruptive and innovative company"
                />
                <Spacer>
                  <Line />
                </Spacer>

                <MenuButton
                  width={"100%"}
                  justifyContent="space-between"
                  icon={<AddIcon />}
                  noOpacity
                  color={colors.black}
                  text="Attract & Retain Top Talent With A Cutting-Edge Solution"
                />
                <Spacer>
                  <Line />
                </Spacer>

                <MenuButton
                  width={"100%"}
                  justifyContent="space-between"
                  icon={<AddIcon />}
                  noOpacity
                  color={colors.black}
                  text="Customizable to Fit Your Company Culture & Employee Experience"
                />
                <Spacer>
                  <Line />
                </Spacer>

                <MenuButton
                  width={"100%"}
                  justifyContent="space-between"
                  icon={<AddIcon />}
                  noOpacity
                  color={colors.black}
                  text="Promote Company-friendly time off"
                />
                <Spacer>
                  <Line />
                </Spacer>

                <MenuButton
                  width={"100%"}
                  justifyContent="space-between"
                  icon={<AddIcon />}
                  noOpacity
                  color={colors.black}
                  text="Our Software"
                />
              </Conteiner>
            </Card>
          </Spacer>
        </Content>
      </ScreenContent>

      <Spacer mt={50}>
        <Footer noTitle />
      </Spacer>

      <Modalize isOpen={showModal} onClose={() => setShowModal(false)}>
        <Conteiner width={375} height={300}>
          <Calendar onChange={onChange} value={value} />
        </Conteiner>
      </Modalize>
    </>
  );
};

const Line = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.6;
  background-color: ${colors.russianViolet};
`;
