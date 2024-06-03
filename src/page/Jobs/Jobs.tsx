import React from "react";
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
import { Footer } from "../../components/Footer/Footer";
import { useResponsive } from "../../utils/hooks/useResponsive";
import backImage from "../../utils/image/goal-setting-theory-person-writes-on-board-presenting-to-team.webp";
import profilImage from "../../utils/image/pexels-photo-771742.jpeg";
import image from "../../utils/image/8RpVSDWY7iVsRB4vKfNKqK-1200-80.jpg";
import { JobList } from "./components/JobsList";
import { Button } from "../../components/Button/Button";
import image2 from "../../utils/image/photo-1606857521015-7f9fcf423740.avif";
import bricksimage from '../../utils/image/bricks-2181920_640.jpg'

export const Jobs: React.FC = () => {
  const { isResponsiveTablet, isResponsiveMobile, isResponsiveweb } =
    useResponsive();

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
                    Careers
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
              Steer your career in the right direction
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
        
              <Card
                width={isResponsiveMobile ? "70%" : 380}
                paddingLeft={20}
                paddingRight={20}
                paddingBottom={30}
                paddingTop={345}
                backgroundImage={bricksimage}
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

              {!isResponsiveweb && (
                <Card
                  backgroundColor="magnoliaWhite"
                  width={!isResponsiveweb ? 780 : "100%"}
                  height={690}
                  paddingLeft={isResponsiveMobile ? 15 : 50}
                  paddingRight={isResponsiveMobile ? 15 : 50}
                  paddingTop={50}
                  backgroundImage={image}
                />
              )}
            </Row>
          </Spacer>

          <Spacer mt={80} mb={80}>
            <JobList />
          </Spacer>

          <Spacer
            mr={isResponsiveMobile ? 10 : 100}
            ml={isResponsiveMobile ? 10 : 100}
          >
            <Row
              width={"100%"}
              justifyContent="space-between"
              flexDirection={isResponsiveTablet ? "column-reverse" : undefined}
              alignItems={isResponsiveTablet ? "center" : undefined}
            >
              <Conteiner width={isResponsiveMobile ? "70%" : 380}>
                <Spacer>
                  <Text
                    fontSize={35}
                    color="eigengrau"
                    fontFamily="Arial"
                    fontWeight="bold"
                  >
                    Working at Genius means flexibility, trust and meaningful
                    choices
                  </Text>
                  <Row justifyContent="center" width={"100%"}>
                    <Text fontSize={18} color="purpleNavy" opacity={"60%"}>
                      PTO Genius is disruptive and innovative company that
                      exists to improve the lives of employees around the world
                      by delivering transformative human capital solutions that
                      contribute substantially to our clients success.
                    </Text>
                  </Row>
                </Spacer>

                <Spacer mt={30} mb={30}>
                  <Button variant="contained" backgroundColor="mediumPurple">
                    <Text fontSize={12} color="wite">
                      Join PTO Genius
                    </Text>
                  </Button>
                </Spacer>
              </Conteiner>

              <Card
                width={isResponsiveMobile ? "70%" : 480}
                paddingLeft={isResponsiveMobile? 10 : 50}
                paddingRight={isResponsiveMobile? 10 : 50}
                paddingBottom={30}
                paddingTop={280}
                backgroundImage={backImage}
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

          <Spacer
            mr={isResponsiveMobile ? 30 : 100}
            ml={isResponsiveMobile ? 30 : 100}
            mt={80}
          >
            <Row
              width={"100%"}
              justifyContent="space-between"
              flexDirection={isResponsiveTablet ? "column" : undefined}
              alignItems={isResponsiveTablet ? "center" : undefined}
            >
              <Card
                width={isResponsiveMobile ? "70%" : 380}
                paddingLeft={60}
                paddingRight={50}
                paddingBottom={30}
                paddingTop={280}
                backgroundImage={image2}
              />

              <Conteiner width={isResponsiveMobile ? "70%" : 380}>
                <Spacer>
                  <Text
                    fontSize={35}
                    color="eigengrau"
                    fontFamily="Arial"
                    fontWeight="bold"
                  >
                    Working at Genius means flexibility, trust and meaningful
                    choices
                  </Text>
                  <Row justifyContent="center" width={"100%"}>
                    <Text fontSize={18} color="purpleNavy" opacity={"60%"}>
                      PTO Genius is disruptive and innovative company that
                      exists to improve the lives of employees around the world
                      by delivering transformative human capital solutions that
                      contribute substantially to our clients success.
                    </Text>
                  </Row>
                </Spacer>

                <Spacer mt={30} mb={30}>
                  <Button variant="contained" backgroundColor="mediumPurple">
                    <Text fontSize={12} color="wite">
                      Contact Us
                    </Text>
                  </Button>
                </Spacer>
              </Conteiner>
            </Row>
          </Spacer>
        </Content>
      </ScreenContent>

      <Spacer mt={50}>
        <Footer />
      </Spacer>
    </>
  );
};
