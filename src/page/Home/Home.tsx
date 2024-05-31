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
import calendarImage from '../../utils/image/https___images.ctfassets.net_dm4oa8qtogq0_4zcjeR2aU8qoUWJjH6sfnN_0e2f618327e24522bf1b66cde2da4884_timeboxed-schedule-digital.avif'
import { ForComponent } from "./components/ForComponet";
import { Integration } from "./components/Integration";

export const Home: React.FC = () => {
  const { navigate } = useNavigation();
  const { isResponsiveTablet, isResponsiveMobile } = useResponsive();

  return (
    <ScreenContent>
      <Content>
        <Header />

        <Spacer mt={80}>
          <Card
            height={680}
            backgroundColor="darkSlateBlue"
            paddingLeft={100}
            paddingRight={!isResponsiveTablet ? 0 : 100}
            paddingTop={!isResponsiveTablet? 80 : 30}
          >
            <Row
              width={"100%"}
              justifyContent={isResponsiveTablet ? "center" : "space-between"}
            >
              <Row width={400} height={423} justifyContent={isResponsiveTablet? 'center' : undefined} >
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
                    flexDirection={isResponsiveTablet? 'column' : undefined}
                    
                  >
                    <Spacer mr={10} mb={20}>
                      <Button
                        variant="contained"
                        backgroundColor="MediumSlateBlue"
                      >
                        <Text fontSize={10}>Request a Demo</Text>
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
                    <Image src={calendarImage}/>
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
                Increase job satisfaction, improve engagement, decrease burnout
                and lower payroll liability by reimagining what employees can do
                with their PTO.
              </Text>
            </Conteiner>
          </Row>
        </Spacer>

        <Spacer mt={60}>
          <CardsComponents />
        </Spacer>

        <Spacer mt={80}>
            <Text fontFamily='Arial' textAlign={isResponsiveMobile ? 'center' : undefined} fontWeight='bold' fontSize={45} color='russianViolet'>Product Features</Text>
        </Spacer>

        <Spacer>
            <ProductComponent/>
        </Spacer>

        <Spacer mt={80}>
            <ForComponent/>
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
                Increase job satisfaction, improve engagement, decrease burnout and lower payroll liability by reimagining what employees can do with their PTO.
              </Text>
            </Conteiner>
          </Row>
        </Spacer>

        <Spacer>
        <Integration/>
        </Spacer>

      </Content>
    </ScreenContent>
  );
};
