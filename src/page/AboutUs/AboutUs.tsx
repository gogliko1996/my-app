import React, { Component } from "react";
import {
  Card,
  Conteiner,
  Content,
  Image,
  Row,
  ScreenContent,
  Text,
} from "../../components/ScreenRoot/ScreenContent";
import { Header } from "../../components/Header/Header";
import { Spacer } from "../../components/Spacer/Spacer";
import { useResponsive } from "../../utils/hooks/useResponsive";
import groupImage from "../../utils/image/group-business-people-silhouette-walking-world-map-background-businesspeople-team-concept_48369-15941.avif";
import profilImage from "../../utils/image/pexels-photo-771742.jpeg";
import aboutImage from "../../utils/image/360_F_128958691_XesV1Q1x10WOuIGLq1PolnEaYHdM08rO.jpg";
import { HorizontalScroll } from "../../components/HorizontalScroll/HorizontalScroll";
import { imageArray } from "../../constant/optional";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import CameraIcon from "@mui/icons-material/Camera";
import { colors } from "../../utils/color/color";
import { Button } from "../../components/Button/Button";
import { Footer } from "../../components/Footer/Footer";
import { ButtonCards } from "../../components/ButtonCard/ButtonCard";

const componentArray = [
  {
    icon: <AccountCircleIcon style={{ color: colors.wite, fontSize: 40 }} />,
    number: "30+",
    text: "Years experience in Human Resources",
  },
  {
    icon: <CameraIcon style={{ color: colors.wite, fontSize: 40 }} />,
    number: "20+",
    text: "Years experience in Human Resources",
  },
  {
    icon: <AccountCircleIcon style={{ color: colors.wite, fontSize: 40 }} />,
    number: "18+",
    text: "Years experience in Human Resources",
  },
  {
    icon: <BuildCircleIcon style={{ color: colors.wite, fontSize: 40 }} />,
    number: "40+",
    text: "Years experience in Human Resources",
  },
  {
    icon: <AccountCircleIcon style={{ color: colors.wite, fontSize: 40 }} />,
    number: "55+",
    text: "Years experience in Human Resources",
  },
  {
    icon: <AccountCircleIcon style={{ color: colors.wite, fontSize: 40 }} />,
    number: "55+",
    text: "Years experience in Human Resources",
  },
];

export const AboutUs: React.FC = () => {
  const { isResponsiveMobile, isResponsiveweb } = useResponsive();

  return (
    <>
      <ScreenContent>
        <Content>
          <Header />

          <Spacer mt={100}>
            <Spacer>
              <Row justifyContent="center" width={"100%"}>
                <Card width={65} noShadow backgroundColor="ghostWhite">
                  <Text
                    fontSize={10}
                    textAlign="center"
                    color="purpleNavy"
                    fontWeight="bold"
                  >
                    About Us
                  </Text>
                </Card>
              </Row>
            </Spacer>
            <Text
              fontSize={65}
              textAlign="center"
              color="eigengrau"
              fontFamily="Arial"
              fontWeight="bold"
            >
              Our mission is to improve the lives of employees everywhere
            </Text>
            <Row justifyContent="center" width={"100%"}>
              <Conteiner width={"65%"}>
                <Text
                  fontSize={18}
                  textAlign="center"
                  color="purpleNavy"
                  opacity={"60%"}
                  fontFamily="Arial"
                >
                  PTO Genius is disruptive and innovative company that exists to
                  improve the lives of employees around the world by delivering
                  transformative human capital solutions that contribute
                  substantially to our clients success.
                </Text>
              </Conteiner>
            </Row>
          </Spacer>

          <Spacer mt={20}>
            <Row
              width={"100%"}
              justifyContent={isResponsiveweb ? "center" : "space-between"}
            >
              {!isResponsiveweb && (
                <Card
                  backgroundColor="magnoliaWhite"
                  width={!isResponsiveweb ? 780 : "100%"}
                  height={690}
                  paddingLeft={isResponsiveMobile ? 15 : 50}
                  paddingRight={isResponsiveMobile ? 15 : 50}
                  paddingTop={50}
                  backgroundImage={aboutImage}
                />
              )}

              <Card
                width={isResponsiveMobile ? "70%" : 380}
                paddingLeft={20}
                paddingRight={20}
                paddingBottom={30}
                paddingTop={345}
                backgroundImage={groupImage}
              >
                <Spacer>
                  <Spacer mb={-16} ml={15}>
                    <Card width={100} height={100}>
                      <Image src={profilImage} />
                    </Card>
                  </Spacer>

                  <Card
                    width={isResponsiveMobile ? "100%" : 340}
                    paddingLeft={15}
                    paddingRight={15}
                    paddingBottom={10}
                    paddingTop={10}
                    backgroundColor="wite"
                  >
                    <Spacer>
                      <Text
                        color="russianViolet"
                        fontFamily="Arial"
                        fontWeight="bold"
                        fontSize={18}
                      >
                        We like to think this offers our clients a unique
                        combination — service they can depend on, with the
                        freedom to collaborate at scale.
                      </Text>

                      <Spacer mt={35} mb={-5}>
                        <Text
                          fontFamily="Arial"
                          fontSize={14}
                          fontWeight="bold"
                          color="darkSlateBlue"
                        >
                          Tim Cook
                        </Text>
                      </Spacer>
                      <Text fontFamily="Arial" fontSize={12} color="Rhythm">
                        HR Manager
                      </Text>
                    </Spacer>
                  </Card>
                </Spacer>
              </Card>
            </Row>
          </Spacer>

          <Spacer mt={50}>
            <HorizontalScroll />
          </Spacer>

          <Spacer>
            <Row width={"100%"} justifyContent="center">
              <Conteiner width={isResponsiveMobile ? "90%" : 780}>
                <Text
                  fontSize={45}
                  textAlign="center"
                  color="eigengrau"
                  fontFamily="Arial"
                  fontWeight="bold"
                >
                  It’s more than just a business. It’s personal.
                </Text>

                <Text
                  fontSize={18}
                  textAlign="center"
                  color="purpleNavy"
                  opacity={"60%"}
                  fontFamily="Arial"
                >
                  Nam ac posuere eros. Morbi ex mi, condimentum ac faucibus
                  quis, finibus non tortor. Vivamus vitae sem fermentum,
                  sollicitudin turpis sed, venenatis lacus. Ut eget aliquam
                  magna. Nullam volutpat, dui fermentum gravida tincidunt,
                  sapien metus molestie dolor, et consequat arcu enim ac ante.
                  Nam ac posuere eros. Morbi ex mi,, venenatis lacus., sapien
                  metus molestie dolor, et consequat arcu enim ac ante.
                </Text>

                <Text
                  fontSize={18}
                  textAlign="center"
                  color="purpleNavy"
                  opacity={"60%"}
                  fontFamily="Arial"
                >
                  condimentum ac faucibus quis, finibus non tortor. Vivamus
                  vitae sem fermentum, sollicitudin turpis sed, venenatis lacus.
                  Ut eget aliquam magna. Nullam volutpat, dui fermentum gravida
                  tincidunt, sapien metus molestie dolor, et consequat arcu enim
                  ac ante. Nam ac posuere eros. Morbi ex mi, condimentum ac
                  faucibus quis, finibus non tortor. Vivamus vitae sem
                  fermentum, sollicitudin turpis sed
                </Text>

                <Text
                  fontSize={18}
                  textAlign="center"
                  color="purpleNavy"
                  opacity={"60%"}
                  fontFamily="Arial"
                >
                  Ut eget aliquam magna. Nullam volutpat, dui fermentum gravida
                  tincidunt, sapien metus molestie dolor, et consequat arcu enim
                  ac ante.Nam ac posuere eros. Morbi ex mi, condimentum ac
                  faucibus quis, finibus non tortor. Vivamus vitae sem
                  fermentum, sollicitudin turpis sed, venenatis lacus. Ut eget
                  aliquam magna. Nullam volutpat, dui fermentum gravida
                  tincidunt
                </Text>

                <Text
                  fontSize={18}
                  textAlign="center"
                  color="purpleNavy"
                  opacity={"60%"}
                  fontFamily="Arial"
                >
                  Nam ac posuere eros. Morbi ex mi, condimentum ac faucibus
                  quis, finibus non tortor. Vivamus vitae sem fermentum,
                  sollicitudin turpis sed, venenatis lacus. Ut eget aliquam
                  magna. Nullam volutpat, dui fermentum gravida tincidunt,
                  sapien metus molestie dolor, et consequat arcu enim ac
                  ante.Nam ac posuere eros. Morbi ex mi, condimentum ac faucibus
                  quis, finibus non tortor. Vivamus vitae sem fermentum,
                  sollicitudin turpis sed, venenatis lacus. Ut eget aliquam
                  magna. Nullam volutpat, dui fermentum gravida tincidunt,
                  sapien metus molestie dolor, et consequat arcu enim ac ante.
                </Text>

                <Spacer mt={80}>
                  <Row width={"100%"} justifyContent="space-between">
                    {imageArray.map((item, index) => (
                      <Spacer key={index} mb={20}>
                        <Card
                          width={180}
                          height={180}
                          backgroundImage={item.image}
                        />
                      </Spacer>
                    ))}
                  </Row>
                </Spacer>
              </Conteiner>
            </Row>
          </Spacer>

          <Spacer>
            <Card
              backgroundColor="darkInttigo"
              paddingTop={50}
              paddingLeft={isResponsiveMobile ? 30 : 100}
              paddingBottom={50}
              paddingRight={isResponsiveMobile ? 30 : 100}
            >
              <Conteiner>
                <Spacer>
                  <Text
                    fontSize={65}
                    textAlign="center"
                    color="wite"
                    fontFamily="Arial"
                    fontWeight="bold"
                  >
                    Built with Experience
                  </Text>

                  <Row justifyContent="center" width={"100%"}>
                    <Conteiner width={"65%"}>
                      <Text
                        fontSize={18}
                        textAlign="center"
                        color="purpleNavy"
                        opacity={"60%"}
                        fontFamily="Arial"
                      >
                        PTO Genius is disruptive and innovative company that
                        exists to improve the lives of employees around the
                        world by delivering transformative human capital
                        solutions that contribute substantially to our clients
                        success.
                      </Text>
                    </Conteiner>
                  </Row>
                </Spacer>

                <Spacer>
                  <Row width={"100%"} justifyContent="center">
                    <Row width={"65%"} justifyContent="space-between">
                      {componentArray.map((item, index) => (
                        <Card noShadow width={180} height={180}>
                          <Conteiner width={"100%"}>
                            {item.icon}
                            <Text
                              fontSize={20}
                              color="wite"
                              fontFamily="Arial"
                              fontWeight="bold"
                            >
                              {item.number}
                            </Text>

                            <Text
                              fontSize={18}
                              color="wite"
                              opacity={"60%"}
                              fontFamily="Arial"
                            >
                              {item.text}
                            </Text>
                          </Conteiner>
                        </Card>
                      ))}
                    </Row>
                  </Row>
                </Spacer>
              </Conteiner>
            </Card>
          </Spacer>

          <Spacer>
            <Text
              fontSize={65}
              textAlign="center"
              color="eigengrau"
              fontFamily="Arial"
              fontWeight="bold"
            >
              Fueled by passion. Driven by our values
            </Text>
            <Row justifyContent="center" width={"100%"}>
              <Conteiner width={"65%"}>
                <Text
                  fontSize={18}
                  textAlign="center"
                  color="purpleNavy"
                  opacity={"60%"}
                  fontFamily="Arial"
                >
                  Increase job satisfaction, improve engagement, decrease
                  burnout and lower payroll liability by reimagining what
                  employees can do with their PTO.
                </Text>
              </Conteiner>
            </Row>
          </Spacer>

          <Spacer mt={20}>
            <Row width={"100%"} justifyContent="center">
              <Spacer>
                <Button variant="contained" backgroundColor="mediumPurple">
                  <Text fontSize={10} color="wite">
                    Request a Demo
                  </Text>
                </Button>
              </Spacer>
            </Row>
          </Spacer>

          <Spacer mt={50}>
            <ButtonCards />
          </Spacer>
          <Spacer>
            <ButtonCards />
          </Spacer>

          <Spacer mt={50}>
            <Card
              paddingLeft={isResponsiveMobile ? 50 : 20}
              paddingRight={isResponsiveMobile ? 50 : 20}
              paddingBottom={30}
              paddingTop={isResponsiveMobile ? 300 : 100}
              backgroundImage={groupImage}
            >
              <Spacer>
                <Card
                  width={isResponsiveMobile ? "100%" : 500}
                  paddingLeft={50}
                  paddingRight={50}
                  paddingBottom={10}
                  paddingTop={10}
                  backgroundColor="wite"
                >
                  <Spacer>
                    <Text
                      color="russianViolet"
                      fontFamily="Arial"
                      fontWeight="bold"
                      fontSize={18}
                    >
                      We’re on a mission to make what is digital more human.
                    </Text>

                    <Spacer mt={10} mb={-5}></Spacer>
                    <Text fontFamily="Arial" fontSize={12} color="Rhythm">
                      Living in a digital age, people’s experiences can
                      sometimes feel quite disconnected. That is why our work
                      values the human connection and always has users as the
                      focal point.
                    </Text>

                    <Spacer mt={20}>
                      <Button
                        variant="contained"
                        backgroundColor="mediumPurple"
                      >
                        <Text fontSize={12} color="wite">
                          Join PTO Genius
                        </Text>
                      </Button>
                    </Spacer>
                  </Spacer>

                </Card>
              </Spacer>
            </Card>
          </Spacer>
        </Content>
      </ScreenContent>

      <Spacer>
        <Footer />
      </Spacer>
    </>
  );
};
