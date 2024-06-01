import React from "react";
import {
  Card,
  Conteiner,
  Content,
  Image,
  Row,
  ScreenContent,
  Text,
} from "../../../components/ScreenRoot/ScreenContent";
import { useLocation } from "react-router-dom";
import { Header } from "../../../components/Header/Header";
import { Spacer } from "../../../components/Spacer/Spacer";
import { Footer } from "../../../components/Footer/Footer";
import { Button } from "../../../components/Button/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { colors } from "../../../utils/color/color";
import { useNavigation } from "../../../utils/hooks/usenavigation";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useResponsive } from "../../../utils/hooks/useResponsive";
import styled from "styled-components";

export const IntegrationPagedetails: React.FC = () => {
  const { isResponsiveMobile, isResponsiveTablet } = useResponsive();
  const location = useLocation();
  const { goback } = useNavigation();
  const detal = location.state;

  return (
    <>
      <ScreenContent>
        <Content>
          <Header />

          <Spacer>
            <Button variant="text" onClick={() => goback()}>
              <Row alignItems="center">
                <ChevronLeftIcon style={{ color: colors.black }} />
                <Text color="black">Back</Text>
              </Row>
            </Button>
          </Spacer>

          <Spacer mt={10}>
            <Row
              width={"100%"}
              justifyContent={isResponsiveTablet ? "center" : "space-between"}
              flexDirection={isResponsiveTablet ? 'column' : undefined}
              alignItems={isResponsiveTablet ? 'center' : undefined}
            >
              <Conteiner width={isResponsiveMobile ? '60%' : 577}>
                <Row>
                  <Card
                    width={48}
                    height={48}
                    borderBottomLeftRadius={12}
                    borderBottomRightRadius={12}
                    borderTopLeftRadius={12}
                    borderTopRightRadius={12}
                  >
                    <Image src={detal.icon} />
                  </Card>
                  <Conteiner width={"40%"}>
                    <Spacer mt={-10} ml={10}>
                      <Spacer mb={-10}>
                        <Text
                          fontSize={16}
                          fontWeight="bold"
                          color="darkInttigo"
                        >
                          {detal.title}
                        </Text>
                      </Spacer>
                      <Text fontSize={12} color="purpleNavy">
                        {detal.tip}
                      </Text>
                    </Spacer>
                  </Conteiner>
                </Row>
                <Text fontSize={18} fontWeight="bold" color="darkInttigo">
                  A new, better way to manage your workforce
                </Text>

                <Text fontSize={12} opacity={"60%"} color="purpleNavy">
                  {detal.details}
                </Text>

                <Spacer mt={20} mb={20}>
                  <Text fontSize={12} opacity={"60%"} color="purpleNavy">
                    {detal.details1}
                  </Text>
                </Spacer>

                <Spacer mb={20}>
                  <Text fontSize={12} opacity={"60%"} color="purpleNavy">
                    {detal.details2}
                  </Text>
                </Spacer>
              </Conteiner>


              <Conteiner width={isResponsiveMobile ? '60%' : 380}>
                <Spacer>
                  <Text fontSize={18} fontWeight="bold" color="darkInttigo">
                    A new, better way to manage your workforce
                  </Text>
                </Spacer>

                <Text fontSize={12} opacity={"60%"} color="purpleNavy">
                  We’re on a mission to eliminate the administrative work of
                  running a company. We believe that people should focus on the
                  hard stuff—the things that only people can do—and that
                  software should manage the rest.
                </Text>

                <Text fontSize={12} fontWeight="bold" color="darkInttigo">
                  Website
                </Text>

                <Text fontSize={12} opacity={"60%"} color="purpleNavy">
                  https://www.rippling.com
                </Text>

                <Text fontSize={12} fontWeight="bold" color="darkInttigo">
                  Tax agencies
                </Text>

                <Text fontSize={12} opacity={"60%"} color="purpleNavy">
                  taxagencies@rippling.com
                </Text>

                <Text fontSize={12} fontWeight="bold" color="darkInttigo">
                  Insurance carriers
                </Text>

                <Text fontSize={12} opacity={"60%"} color="purpleNavy">
                  carriers@rippling.com
                </Text>

                <Text fontSize={12} fontWeight="bold" color="darkInttigo">
                  Contact
                </Text>

                <Text fontSize={12} opacity={"60%"} color="purpleNavy">
                  https://www.rippling.com/contact
                </Text>

                <Spacer mt={30} mb={50}>
                  <Button
                    width={277}
                    variant="contained"
                    backgroundColor="mediumPurple"
                  >
                    <Row alignItems="center">
                      <Text fontSize={12} color="wite">
                        Request a Rippling Integration
                      </Text>
                      <ChevronRightIcon
                        fontSize="small"
                        style={{ color: colors.wite }}
                      />
                    </Row>
                  </Button>
                </Spacer>
              </Conteiner>
            </Row>
          </Spacer>
        </Content>
      </ScreenContent>

      <Spacer>
        <Footer />
      </Spacer>
    </>
  );
};

const Line = styled.div`
  width: 1000%;
  height: 20px;
  opacity: 0.6;
  background-color: ${colors.black};
`;
