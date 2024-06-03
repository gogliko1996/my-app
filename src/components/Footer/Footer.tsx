import React from "react";
import { Conteiner, Row, Text } from "../ScreenRoot/ScreenContent";
import { Spacer } from "../Spacer/Spacer";
import { Button } from "../Button/Button";
import { colors } from "../../utils/color/color";
import styled from "styled-components";
import { useResponsive } from "../../utils/hooks/useResponsive";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import {
  footerCompani,
  footerSecurity,
  footerSoftware,
} from "../../constant/optional";
import { MenuButton } from "../MenuButton/MenuButton";
import AddIcon from "@mui/icons-material/Add";
import { FooterProps } from "./Footer.props";
import { useNavigation } from "../../utils/hooks/usenavigation";
import { screen } from "../../routes/constants";

export const Footer: React.FC<FooterProps> = ({noTitle = false}) => {
  const { isResponsiveMobile } = useResponsive();
  const { navigation } = useNavigation();

  return (
    <Conteiner width={"100%"} backgroundColor="darkSlateBlue">
      <Spacer mr={ isResponsiveMobile ? 25 : 120} ml={isResponsiveMobile ? 25 : 120} pt={50}>

        {!noTitle &&   <Row width={"100%"} justifyContent="space-between">
          <Conteiner>
            <Spacer mt={-25} mb={20}>
              <Text fontSize={25} fontWeight="bold" color="wite">
                Do More With Your Paid Time Off
              </Text>
              <Text fontSize={14} color="wite">
                You’re not getting the most from your PTO benefit.
              </Text>
            </Spacer>
          </Conteiner>

          <Row>
            <Spacer mb={20} mr={10} >
              <Button variant="contained" backgroundColor="darkSlateBlue" onClick={() => navigation(screen.aboutUs)}>
                <Text fontSize={10}>About us</Text>
              </Button>
            </Spacer>

            <Button variant="contained" backgroundColor="mediumPurple" onClick={() => navigation(screen.requestDemo)}>
              <Text fontSize={10}> Request a Demo</Text>
            </Button>
          </Row>
        </Row>}
       

        <Spacer mt={50} mb={isResponsiveMobile ? 0 : 50}>
          <Line />
        </Spacer>

        {!isResponsiveMobile ? (
          <Spacer>
            <Row width={"100%"} justifyContent="space-between">
              <Conteiner width={223}>
                <Spacer mt={-20}>
                  <Text fontWeight="bold" fontSize={24} color="wite">
                    Do more with your paid time off.
                  </Text>
                  <Text fontSize={14} opacity={"60%"} color="wite">
                    Reimagine Paid Time Off.
                  </Text>

                  <Spacer mt={130} mb={50}>
                    <Row alignItems="center">
                      <Spacer mr={7}>
                        <div
                          style={{
                            backgroundColor: "#fff",
                            width: 29,
                            height: 32,
                          }}
                        />
                      </Spacer>
                      <Spacer mr={50}>
                        <Row alignItems="center">
                          <Text
                            fontSize={20}
                            fontFamily="Arial"
                            fontWeight="bold"
                            color="wite"
                          >
                            PTO
                          </Text>
                          <Text fontSize={20} color="wite">
                            GENIUS
                          </Text>
                        </Row>
                      </Spacer>
                    </Row>
                    <Text fontSize={14} opacity={"50%"} color="wite">
                      Copyright © 2021 PTO Genius
                    </Text>
                  </Spacer>
                </Spacer>
              </Conteiner>

              <Conteiner width={142}>
                <Text fontSize={12} fontWeight="bold" color="wite">
                  Why PTO Genius?
                </Text>
                <div style={{ cursor: "pointer" }}>
                  <Text fontSize={14} opacity={"70%"} color="wite">
                    Overview
                  </Text>
                </div>
                <div style={{ cursor: "pointer" }}>
                  <Text fontSize={14} opacity={"70%"} color="wite">
                    Technology
                  </Text>
                </div>
                <Text fontSize={12} fontWeight="bold" color="wite">
                  Security & Trust
                </Text>
                {footerSecurity.map((item, index) => (
                  <div key={index} style={{ cursor: "pointer" }}>
                    <Text fontSize={14} opacity={"70%"} color="wite">
                      {item}
                    </Text>
                  </div>
                ))}
              </Conteiner>

              <Conteiner width={100}>
                <Text fontSize={12} fontWeight="bold" color="wite">
                  Our Software
                </Text>
                {footerSoftware.map((item, index) => (
                  <div key={index} style={{ cursor: "pointer" }}>
                    <Text fontSize={14} opacity={"70%"} color="wite">
                      {item}
                    </Text>
                  </div>
                ))}
              </Conteiner>

              <Conteiner width={120}>
                <Text fontSize={12} fontWeight="bold" color="wite">
                  Company
                </Text>
                {footerCompani.map((item, index) => (
                  <div key={index} style={{ cursor: "pointer" }}>
                    <Text fontSize={14} opacity={"70%"} color="wite">
                      {item}
                    </Text>
                  </div>
                ))}
              </Conteiner>

              <Conteiner width={179}>
                <Text fontSize={12} fontWeight="bold" color="wite">
                  Contact Us
                </Text>
                <Text fontSize={14} opacity={"70%"} color="wite">
                  78 South West 7th Street Miami, FL 33130
                </Text>
                <Text fontSize={14} opacity={"70%"} color="wite">
                  (833) 786-4364
                </Text>
                <Text fontSize={14} opacity={"70%"} color="wite">
                  hello@ptogenius.com
                </Text>

                <Spacer mt={30}>
                  <Row width={"100%"} justifyContent="space-between">
                    <FacebookIcon style={{ color: colors.wite }} />
                    <InstagramIcon style={{ color: colors.wite }} />
                    <LinkedInIcon style={{ color: colors.wite }} />
                    <PinterestIcon style={{ color: colors.wite }} />
                  </Row>
                </Spacer>
              </Conteiner>
            </Row>
          </Spacer>
        ) : (
          <Row width={"100%"} flexDirection="column">
            <MenuButton
              width={"100%"}
              justifyContent="space-between"
              icon={<AddIcon />}
              noOpacity
              color={colors.wite}
              text="Security & Trust"
              bodyText={footerSecurity}
            />

            <Spacer>
              <Line />
            </Spacer>
            <MenuButton
              width={"100%"}
              justifyContent="space-between"
              icon={<AddIcon />}
              noOpacity
              color={colors.wite}
              text="Our Software"
              bodyText={footerSoftware}
            />

            <Spacer>
              <Line />
            </Spacer>
            <MenuButton
              width={"100%"}
              justifyContent="space-between"
              icon={<AddIcon />}
              noOpacity
              color={colors.wite}
              text="Company"
              bodyText={footerCompani}
            />

            <Spacer mt={10} mb={10}>
              <Line />
            </Spacer>

            <Conteiner width={"100%"}>
              <Text fontSize={12} fontWeight="bold" color="wite">
                Contact Us
              </Text>
              <Text fontSize={14} opacity={"70%"} color="wite">
                78 South West 7th Street Miami, FL 33130
              </Text>
              <Text fontSize={14} opacity={"70%"} color="wite">
                (833) 786-4364
              </Text>
              <Text fontSize={14} opacity={"70%"} color="wite">
                hello@ptogenius.com
              </Text>

              <Spacer mt={30}>
                <Row width={"100%"} justifyContent="space-between">
                  <FacebookIcon style={{ color: colors.wite }} />
                  <InstagramIcon style={{ color: colors.wite }} />
                  <LinkedInIcon style={{ color: colors.wite }} />
                  <PinterestIcon style={{ color: colors.wite }} />
                </Row>
              </Spacer>
            </Conteiner>

            <Spacer mt={30}>
              <Line />
            </Spacer>

            <Row width={"100%"} justifyContent="center">
              <Spacer mt={20} mb={50}>
                <Row alignItems="center">
                  <Spacer mr={7}>
                    <div
                      style={{
                        backgroundColor: "#fff",
                        width: 29,
                        height: 32,
                      }}
                    />
                  </Spacer>
                  <Spacer mr={50}>
                    <Row alignItems="center">
                      <Text
                        fontSize={20}
                        fontFamily="Arial"
                        fontWeight="bold"
                        color="wite"
                      >
                        PTO
                      </Text>
                      <Text fontSize={20} color="wite">
                        GENIUS
                      </Text>
                    </Row>
                  </Spacer>
                </Row>
                <Text fontSize={14} opacity={"50%"} color="wite">
                  Copyright © 2021 PTO Genius
                </Text>
              </Spacer>
            </Row>
          </Row>
        )}
      </Spacer>
    </Conteiner>
  );
};

const Line = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.6;
  background-color: ${colors.russianViolet};
`;
