import React, { useEffect, useState } from "react";
import {
  Card,
  Conteiner,
  Content,
  Input,
  Row,
  ScreenContent,
  Text,
} from "../../components/ScreenRoot/ScreenContent";
import { Header } from "../../components/Header/Header";
import { Spacer } from "../../components/Spacer/Spacer";
import { Footer } from "../../components/Footer/Footer";
import styled from "styled-components";
import { colors } from "../../utils/color/color";
import { anbanArray, mapArray } from "../../constant/optional";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { HederScroll } from "../../components/HederScroll/HederScroll";




export const LawsLandingPages: React.FC = () => {
  const lastelement = mapArray[mapArray.length - 1];
  const [mapArrays, setMapArrays] = useState(mapArray)
  const [search, setSearch] = useState<string>("");


  useEffect(() => {
    if (search) {
      const filterSupportedArray = mapArrays?.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setMapArrays(filterSupportedArray);
    }else{
      setMapArrays(mapArray)
    }
  }, [search]);

  const position = { lat: 53.54992, lng: 10.00678 };

  return (
    <>
      <ScreenContent>
        <Content>
          <Header />

          <Spacer mt={100}>
            <Spacer>
              <Row justifyContent="center" width={"100%"}>
                <Card width={119} noShadow backgroundColor="ghostWhite">
                  <Text
                    fontSize={10}
                    textAlign="center"
                    color="purpleNavy"
                    fontWeight="bold"
                  >
                    Legal & Compliance
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
              Does your state have a law banning Use-it-or-lose-it policies?
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
                  PDeciding whether you want to provide paid time off (PTO) is
                  something you need to do before you hire an employee.
                </Text>
              </Conteiner>
            </Row>
          </Spacer>

          <Spacer>
            <Card height={720} noShadow border="1px solid" borderColor="gray">
              <APIProvider apiKey={"AIzaSyBls62eVDgW4AKNBiSo9IlfQKOgaPsnC-s"}>
                <Map defaultCenter={position} defaultZoom={10} >
                  <Marker position={position} />
                </Map>
              </APIProvider>
            </Card>
          </Spacer>

          <Spacer mb={20} mt={20} >
            <Row width={'100%'} justifyContent='space-between'>
              <Conteiner width={'60%'}>

              <HederScroll array={anbanArray}  slidesPerView={20}/>
              </Conteiner>
                <Input
                  type="search"
                  placeholder="    Serch"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
            </Row>
              </Spacer>

          <Spacer mt={50}>
            {mapArrays.map((item, index) => (
              <Spacer key={index} mt={20}>
                <Row width={"100%"} justifyContent="space-between">
                  <Spacer mb={20}>
                    <Text
                      fontSize={25}
                      textAlign="center"
                      color="eigengrau"
                      fontFamily="Arial"
                      fontWeight="bold"
                    >
                      {item.title}
                    </Text>
                  </Spacer>
                  <Conteiner width={"70%"}>
                    <Text
                      fontSize={14}
                      textAlign="center"
                      color="purpleNavy"
                      opacity={"60%"}
                      fontFamily="Arial"
                    >
                      {item.body}
                    </Text>
                  </Conteiner>
                </Row>
                <Spacer>
                  <Line />
                </Spacer>
              </Spacer>
            ))}
          </Spacer>

          <Spacer mt={50}>
            <Card noShadow border="1px solid" borderColor="gray">
              <Conteiner>
                <Row
                  width={"100%"}
                  justifyContent="space-between"
                  flexWrap="nowrap"
                >
                  <Card
                    width={"50%"}
                    borderBottomLeftRadius={0}
                    borderBottomRightRadius={0}
                    borderTopRightRadius={0}
                    noShadow
                    border="1px solid"
                    borderColor="gray"
                    backgroundColor="ghostWhite"
                  >
                    <Text fontSize={18} textAlign="center">
                      LawsLandingPages
                    </Text>
                  </Card>
                  <Card
                    width={"50%"}
                    borderBottomLeftRadius={0}
                    borderBottomRightRadius={0}
                    borderTopLeftRadius={0}
                    noShadow
                    border="1px solid"
                    borderColor="gray"
                    backgroundColor="ghostWhite"
                  >
                    <Text fontSize={18} textAlign="center">
                      Does the State Have a Law Banning Use-It-or-Lose-It
                      Policies?
                    </Text>
                  </Card>
                </Row>
                {mapArray.map((item, indx) => (
                  <Row
                    width={"100%"}
                    justifyContent="space-between"
                    flexWrap="nowrap"
                  >
                    <Card
                      width={"50%"}
                      borderTopLeftRadius={0}
                      borderBottomLeftRadius={
                        lastelement.title === item.title ? 20 : 0
                      }
                      borderBottomRightRadius={0}
                      borderTopRightRadius={0}
                      paddingLeft={20}
                      noShadow
                      border="1px solid"
                      borderColor="gray"
                    >
                      <Text fontSize={18}>{item.title}</Text>
                    </Card>
                    <Card
                      width={"50%"}
                      borderTopRightRadius={0}
                      borderBottomLeftRadius={0}
                      borderBottomRightRadius={
                        lastelement.title === item.title ? 20 : 0
                      }
                      borderTopLeftRadius={0}
                      paddingLeft={20}
                      noShadow
                      border="1px solid"
                      borderColor="gray"
                    >
                      <Row alignItems="center">
                        {item.rightWrong === "no" ? (
                          <DoNotDisturbIcon color="error" fontSize="small" />
                        ) : (
                          <CheckCircleOutlineIcon
                            color="success"
                            fontSize="small"
                          />
                        )}

                        <Spacer ml={10}>
                          <Text
                            fontSize={18}
                            color={item.rightWrong === "no" ? "red" : "green"}
                          >
                            {item.rightWrong}
                          </Text>
                        </Spacer>
                      </Row>
                    </Card>
                  </Row>
                ))}
              </Conteiner>
            </Card>
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
  opacity: 0.6;
  background-color: ${colors.russianViolet};
`;
