import React from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  Conteiner,
  Content,
  Input,
  Row,
  ScreenContent,
  Select,
  Text,
} from "../../components/ScreenRoot/ScreenContent";
import { Spacer } from "../../components/Spacer/Spacer";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { colors } from "../../utils/color/color";
import { newRoomArray } from "../../constant/optional";
import { useResponsive } from "../../utils/hooks/useResponsive";
import { CangePage } from "../../components/CangePage/CangePage";
import PhoneIcon from "@mui/icons-material/Phone";
import styled from "styled-components";

export const Newroom: React.FC = () => {
  const location = useLocation();

  const { isResponsiveMobile, isResponsiveTablet } = useResponsive();

  return (
    <>
      <ScreenContent>
        <Content>
          <Header />

          <Spacer>
            <Row width={120} justifyContent="space-between">
              <Text>Home</Text>
              <Text color="darkSlateBlue">{location.pathname}</Text>
            </Row>
          </Spacer>

          <Spacer mt={-20}>
            <Text fontSize={45} fontWeight="bold" color="darkInttigo">
              Newsroom
            </Text>
          </Spacer>

          <Spacer>
            <Row>
              <Spacer mr={20}>
                <Button variant="contained" backgroundColor="mediumPurple">
                  <Text fontSize={10} color="wite">
                    Press Mentions
                  </Text>
                </Button>
              </Spacer>
              <Button variant="contained" backgroundColor="magnoliaWhite">
                <Text fontSize={10} color="mediumPurple">
                  Press Releases
                </Text>
              </Button>
            </Row>
          </Spacer>

          <Row
            width={"100%"}
            justifyContent={isResponsiveMobile ? "center" : "space-between"}
          >
            {newRoomArray.map((item, index) => (
              <Spacer mt={50} mb={50} key={index}>
                <Row>
                  <Conteiner>
                    <Card width={280} backgroundColor="magnoliaWhite">
                      <Row
                        width={280}
                        height={180}
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Text fontWeight="bold" fontSize={30}>
                          {item.logo}
                        </Text>
                      </Row>
                    </Card>
                    <Conteiner width={280}>
                      <Text fontWeight="bold" fontSize={18} color="darkInttigo">
                        {item.title}
                      </Text>
                      <Text color="purpleNavy" fontSize={14}>
                        {item.body}
                      </Text>
                    </Conteiner>
                  </Conteiner>
                </Row>

                <Spacer mt={20}>
                  <Card
                    width={150}
                    noShadow
                    border="1px solid"
                    borderColor="gray"
                    style={{ cursor: "pointer" }}
                  >
                    <Row
                      width={150}
                      height={32}
                      flexDirection="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Text fontSize={10} color="black">
                        Continue Reading
                      </Text>
                      <ChevronRightIcon
                        fontSize="small"
                        style={{ color: colors.black }}
                      />
                    </Row>
                  </Card>
                </Spacer>
              </Spacer>
            ))}
          </Row>

          <Spacer>
            <CangePage setNumber={3} />
          </Spacer>

          <Spacer mt={50}>
            <Row
              width={"100%"}
              justifyContent={isResponsiveMobile ? "center" : "space-between"}
              flexDirection={
                isResponsiveMobile
                  ? "column-reverse"
                  : isResponsiveTablet
                  ? "column-reverse"
                  : undefined
              }
              alignItems={
                isResponsiveMobile
                  ? "center"
                  : isResponsiveTablet
                  ? "center"
                  : undefined
              }
            >
              <Card width={isResponsiveMobile ? '90%' : 580} height={530} backgroundColor="ghostWhite">
                <Spacer
                  ml={isResponsiveMobile ? 30 : 100}
                  mt={80}
                  mr={isResponsiveMobile ? 30 : 100}
                >
                  <Text fontWeight="bold" fontSize={35} color="darkInttigo">
                    Press inquiries
                  </Text>
                  <Text fontSize={14} color="darkInttigo">
                    For all press inquires please reach out to us:
                  </Text>
                  <Row alignItems="center">
                    <Spacer mr={5}>
                      <PhoneIcon
                        fontSize="small"
                        style={{ color: colors.darkInttigo }}
                      />
                    </Spacer>
                    <Text fontSize={14} opacity={"50%"} color="darkInttigo">
                      (833) 786-4364
                    </Text>
                  </Row>

                  <Row alignItems="center">
                    <Spacer mr={5}>
                      <PhoneIcon
                        fontSize="small"
                        style={{ color: colors.darkInttigo }}
                      />
                    </Spacer>
                    <Text fontSize={14} opacity={"50%"} color="darkInttigo">
                      press@ptogenius.com
                    </Text>
                  </Row>

                  <Spacer mt={10} mb={60}>
                    <Line />
                  </Spacer>

                  <Text fontSize={14} opacity={"50%"} color="darkInttigo">
                    For more questions
                  </Text>

                  <Spacer mt={30}>
                    <Button variant="contained" backgroundColor="mediumPurple">
                      <Text fontSize={12}>Go to FAQ</Text>
                    </Button>
                  </Spacer>
                </Spacer>
              </Card>

              <Spacer mb={isResponsiveMobile ? 40 : undefined}>
                <Conteiner width={isResponsiveMobile ? '90%' : 380}>
                  <Spacer mt={-25} pl={10} pr={10}>
                    <Text fontSize={24} fontWeight="bold" color="darkInttigo">
                      For press inquiries or speaking engagements, please
                      contact us using the form.
                    </Text>

                    <Spacer>
                      <Conteiner>
                        <Spacer mb={-10}>
                          <Text
                            fontWeight="bold"
                            fontSize={14}
                            color="darkInttigo"
                          >
                            Work Email Address
                          </Text>
                        </Spacer>
                        <Input
                          width={"100%"}
                          type="email"
                          placeholder="Email Address"
                        />
                      </Conteiner>
                    </Spacer>

                    <Spacer>
                      <Conteiner>
                        <Spacer mb={-10}>
                          <Text
                            fontWeight="bold"
                            fontSize={14}
                            color="darkInttigo"
                          >
                            I’m looking for
                          </Text>
                        </Spacer>

                        <Select width={"100%"}>
                          <option value="Select">Select</option>
                          <option value="test1">test1</option>
                          <option value="test2">test2</option>
                          <option value="test3">test3</option>
                        </Select>
                      </Conteiner>
                    </Spacer>

                    <Spacer>
                      <Conteiner>
                        <Spacer mb={-10}>
                          <Text
                            fontWeight="bold"
                            fontSize={14}
                            color="darkInttigo"
                          >
                            Description
                          </Text>
                        </Spacer>
                        <Input
                          width={"100%"}
                          height={76}
                          type="text"
                          placeholder="field text"
                          placeholderTop={-15}
                          transform={50}
                        />
                      </Conteiner>
                    </Spacer>

                    <Spacer mt={30}>
                      <Button
                        width={80}
                        variant="contained"
                        backgroundColor="mediumPurple"
                      >
                        <Text fontSize={12}>Submit</Text>
                      </Button>
                    </Spacer>
                  </Spacer>
                </Conteiner>
              </Spacer>
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

const Line = styled.div`
  width: 100%;
  height: 1px;
  opacity: 50%;
  background-color: ${colors.gray};
`;
