import React, { useEffect, useState } from "react";
import {
  Card,
  Conteiner,
  Content,
  Image,
  Input,
  Row,
  ScreenContent,
  Text,
} from "../../components/ScreenRoot/ScreenContent";
import { Header } from "../../components/Header/Header";
import { Spacer } from "../../components/Spacer/Spacer";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "../../components/Button/Button";
import { useLocation } from "react-router-dom";
import { supportedarray, SupportedarrayType } from "../../constant/optional";
import { useResponsive } from "../../utils/hooks/useResponsive";
import { CangePage } from "../../components/CangePage/CangePage";
import { useNavigation } from "../../utils/hooks/usenavigation";
import { screen } from "../../routes/constants";

const bottonArray = ["All", "HRIS", "PEO", "Other"];

export const IntegrationPage: React.FC = () => {
  const [click, setClick] = useState<number>(0);
  const [array, setArray] = useState<SupportedarrayType>(supportedarray);
  const [cangePage, setCangePage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");

  const location = useLocation();
  const { navigation } = useNavigation();
  const { isResponsiveTablet, isResponsiveMobile } = useResponsive();

  useEffect(() => {
    if (cangePage === 1 && !search) {
      const sliceSupportedarray = supportedarray.slice(
        0,
        isResponsiveMobile ? 8 : 15
      );
      setArray(sliceSupportedarray);
    }
    if (cangePage === 2 && !search) {
      const sliceSupportedarray = supportedarray.slice(
        isResponsiveMobile ? 8 : 11,
        15
      );
      setArray(sliceSupportedarray);
    }
  }, [cangePage, search, isResponsiveMobile]);

  useEffect(() => {
    if (search) {
      const filterSupportedArray = supportedarray?.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setArray(filterSupportedArray);
    }
  }, [search]);

  return (
    <>
      <ScreenContent>
        <Content>
          <Header />

          <Spacer>
            <Row width={180} justifyContent="space-between">
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
            <Row
              width={"100%"}
              justifyContent="space-between"
              flexDirection={isResponsiveMobile ? "column-reverse" : undefined}
              alignItems={isResponsiveMobile ? "center" : undefined}
            >
              <Row>
                {bottonArray.map((item, index) => (
                  <Spacer mr={10} key={index}>
                    <Button
                      onClick={() => setClick(index)}
                      width={48}
                      height={40}
                      variant="contained"
                      backgroundColor={
                        click === index ? "mediumPurple" : "magnoliaWhite"
                      }
                    >
                      <Text
                        fontSize={10}
                        color={click === index ? "wite" : "mediumPurple"}
                      >
                        {item}
                      </Text>
                    </Button>
                  </Spacer>
                ))}
              </Row>

              <Spacer mb={isResponsiveMobile ? 20 : undefined}>
                <Input
                  type="search"
                  placeholder="    Serch"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Spacer>
            </Row>
          </Spacer>

          <Spacer mt={50}>
            <Row
              width={"100%"}
              justifyContent={isResponsiveMobile ? "center" : "space-between"}
            >
              {array?.map((item, index) => (
                <Conteiner width={400} key={index}>
                  <Spacer
                    mr={isResponsiveMobile ? 10 : isResponsiveTablet ? 50 : 50}
                    mb={50}
                  >
                    <Row>
                      <Card
                        width={48}
                        height={48}
                        borderBottomLeftRadius={12}
                        borderBottomRightRadius={12}
                        borderTopLeftRadius={12}
                        borderTopRightRadius={12}
                      >
                        <Image src={item.icon} />
                      </Card>
                      <Conteiner width={"40%"}>
                        <Spacer mt={-10} ml={10}>
                          <Spacer mb={-10}>
                            <Text
                              fontSize={16}
                              fontWeight="bold"
                              color="darkInttigo"
                            >
                              {item.title}
                            </Text>
                          </Spacer>
                          <Text fontSize={12} color="purpleNavy">
                            {item.tip}
                          </Text>
                        </Spacer>
                      </Conteiner>
                    </Row>

                    <Spacer>
                      <Text fontSize={14} opacity={"60%"} color="darkInttigo">
                        {item.body}
                      </Text>
                    </Spacer>

                    <Spacer ml={-35}>
                      <Button
                        onClick={() =>
                          navigation(screen.integrationPagedetails, item)
                        }
                      >
                        <Text fontSize={12} opacity={"60%"} color="darkInttigo">
                          Read More
                        </Text>
                      </Button>
                    </Spacer>
                  </Spacer>
                </Conteiner>
              ))}
            </Row>
          </Spacer>
          {!search && (
            <Spacer>
              <CangePage setNumber={2} onCange={(a) => setCangePage(a)} />
            </Spacer>
          )}
        </Content>
      </ScreenContent>

      <Spacer>
        <Footer />
      </Spacer>
    </>
  );
};
