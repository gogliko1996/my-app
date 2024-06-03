import React from "react";
import { useNavigation } from "../../utils/hooks/usenavigation";
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
import { Button } from "../../components/Button/Button";
import { ImagDiv } from "./Home.style";
import { HorizontalScroll } from "../../components/HorizontalScroll/HorizontalScroll";
import { CardsComponents } from "./components/CardsComponents";
import { useResponsive } from "../../utils/hooks/useResponsive";
import { ProductComponent } from "./components/ProductComponent";
import calendarImage from "../../utils/image/https___images.ctfassets.net_dm4oa8qtogq0_4zcjeR2aU8qoUWJjH6sfnN_0e2f618327e24522bf1b66cde2da4884_timeboxed-schedule-digital.avif";
import image from "../../utils/image/digital-display-advertising-omni-channel-600nw-2286681953.jpg";
import { ForComponent } from "./components/ForComponet";
import { Integration } from "./components/Integration";
import { Supported } from "./components/Supported";
import { ImplemenTation } from "./components/ImplemenTation";
import { Slider } from "../../components/Slider/Slider";
import { Footer } from "../../components/Footer/Footer";
import { screen } from "../../routes/constants";

export const Home: React.FC = () => {
  const { navigation } = useNavigation();
  const { isResponsiveTablet, isResponsiveMobile } = useResponsive();

  return (
    <>
      <ScreenContent>
        <Content>
          <Header />
          <Spacer mt={80}>
            <Card
              height={680}
              backgroundColor="darkSlateBlue"
              paddingLeft={100}
              paddingRight={!isResponsiveTablet ? 0 : 100}
              paddingTop={!isResponsiveTablet ? 80 : 30}
            >
              <Row
                width={"100%"}
                justifyContent={isResponsiveTablet ? "center" : "space-between"}
              >
                <Row
                  width={400}
                  height={423}
                  justifyContent={isResponsiveTablet ? "center" : undefined}
                >
                  <Text
                    fontSize={54}
                    fontFamily="Arial"
                    fontWeight="bold"
                    color="wite"
                    textAlign={isResponsiveTablet ? "center" : undefined}
                  >
                    Easily Boost employee engagement
                  </Text>
                  <Text
                    fontSize={14}
                    color="wite"
                    textAlign={isResponsiveTablet ? "center" : undefined}
                  >
                    Increase job satisfaction, improve engagement, decrease
                    burnout and lower payroll liability by reimagining what
                    employees can do with their PTO.
                  </Text>

                  <Spacer mt={15}>
                    <Row
                      flexDirection={isResponsiveTablet ? "column" : undefined}
                    >
                      <Spacer mr={10} mb={20}>
                        <Button
                          variant="contained"
                          backgroundColor="MediumSlateBlue"
                          onClick={() => navigation(screen.newroom)}
                        >
                          <Text fontSize={10}>NewRoom</Text>
                        </Button>
                      </Spacer>

                      <Button variant="outlined" borderColor="MediumSlateBlue">
                        <Text fontSize={10} color="wite">
                          Watch Video
                        </Text>
                      </Button>
                    </Row>
                  </Spacer>
                </Row>

                {!isResponsiveTablet && (
                  <Spacer mt={45}>
                    <ImagDiv style={{ backgroundColor: "#fff", width: 450 }}>
                      <Image src={calendarImage} />
                    </ImagDiv>
                  </Spacer>
                )}
              </Row>
            </Card>
          </Spacer>

          <Spacer mt={80}>
            <HorizontalScroll />
          </Spacer>

          <Spacer mt={100}>
            <Text
              fontSize={45}
              textAlign="center"
              color="eigengrau"
              fontFamily="Arial"
              fontWeight="bold"
            >
              Benefits of PTO Genius
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

          <Spacer mt={60}>
            <CardsComponents />
          </Spacer>

          <Spacer mt={80}>
            <Text
              fontFamily="Arial"
              textAlign={isResponsiveMobile ? "center" : undefined}
              fontWeight="bold"
              fontSize={45}
              color="russianViolet"
            >
              Product Features
            </Text>
          </Spacer>

          <Spacer>
            <ProductComponent />
          </Spacer>

          <Spacer mt={100}>
            <ForComponent />
          </Spacer>

          <Spacer mt={100}>
            <Text
              fontSize={45}
              textAlign="center"
              color="eigengrau"
              fontFamily="Arial"
              fontWeight="bold"
            >
              Easy Turn-Key Integration
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

          <Spacer>
            <Integration />
          </Spacer>

          <Spacer mt={80}>
            <Supported />
          </Spacer>

          <Spacer mt={100}>
            <Text
              fontSize={45}
              textAlign="center"
              color="eigengrau"
              fontFamily="Arial"
              fontWeight="bold"
            >
              Implementation Timeline
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

          <Spacer mt={100} mb={isResponsiveMobile ? 80 : 0}>
            <ImplemenTation />
          </Spacer>

          <Spacer>
            <Card backgroundColor="darkSlateBlue">
              <Row width={"100%"}>
                <Conteiner
                  width={isResponsiveTablet ? "100%" : 668}
                  height={500}
                >
                  <Image
                    src={image}
                    borderBottomRightRadius={0}
                    borderTopRightRadius={0}
                  />
                </Conteiner>

                <Spacer mt={isResponsiveTablet ? 30 : 100} ml={20} mb={30}>
                  <Conteiner width={350}>
                    <Spacer>
                      <Text fontSize={25} fontWeight="bold" color="wite">
                        Insights: Debugging with product analytics
                      </Text>
                      <Spacer mb={50}>
                        <Text fontSize={14} color="wite">
                          As a product manager, deep-diving into problems like
                          high churn, bugs, and crashes is part of the job.
                        </Text>
                      </Spacer>
                      <Button
                        variant="contained"
                        backgroundColor="mediumPurple"
                      >
                        <Text fontSize={10} color="wite">
                          Request a Demo
                        </Text>
                      </Button>
                    </Spacer>
                  </Conteiner>
                </Spacer>
              </Row>
            </Card>
          </Spacer>

          <Spacer mt={77} mb={50}>
            <Text
              fontSize={45}
              color="eigengrau"
              fontFamily="Arial"
              fontWeight="bold"
            >
              Testimonial
            </Text>
          </Spacer>

          <Spacer mb={200}>
            <Slider />
          </Spacer>
        </Content>
      </ScreenContent>
      
      <Spacer>
        <Footer />
      </Spacer>
    </>
  );
};
