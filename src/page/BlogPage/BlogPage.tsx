import React, { useState } from "react";
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
import image from "../../utils/image/pngtree-landscape-jpg-wallpapers-free-download-image_2573540.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { colors } from "../../utils/color/color";
import { useNavigation } from "../../utils/hooks/usenavigation";
import { screen } from "../../routes/constants";
import { useResponsive } from "../../utils/hooks/useResponsive";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "../../components/Button/Button";
import { ButtonArray, newsPaperArray } from "../../constant/optional";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { NewsPaper, SecundNewsPaper } from "./components/NewsPaper";
import { CangePage } from "../../components/CangePage/CangePage";

export const BlogPage: React.FC = () => {
  const [onClick, setOnClick] = useState<number>(0);
  const sliceNewsPaperArray = newsPaperArray.slice(0, 2);

  const { navigation } = useNavigation();
  const { isResponsiveMobile, isResponsiveweb } = useResponsive();
  return (
    <>
      <ScreenContent>
        <Content>
          <Header />
        </Content>
      </ScreenContent>
      <Spacer mb={isResponsiveMobile ? 650 : undefined}>
        <Conteiner
          width={"100%"}
          height={isResponsiveMobile ? 400 : undefined}
          backgroundColor="darkghostWhite"
        >
          <Spacer
            ml={isResponsiveMobile ? 20 : 130}
            mr={isResponsiveMobile ? 30 : 130}
            pt={50}
            pb={50}
          >
            <Row
              width={"100%"}
              justifyContent="space-between"
              flexDirection={isResponsiveweb ? "column-reverse" : undefined}
              alignItems={isResponsiveweb ? "center" : undefined}
            >
              <Spacer>
                <Conteiner width={isResponsiveMobile ? "70" : 380}>
                  <Spacer mt={50}>
                    <Card
                      noShadow
                      width={150}
                      height={50}
                      backgroundColor="magnoliaWhite"
                    >
                      <Row
                        width={"100%"}
                        height={50}
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="row"
                      >
                        <Text
                          color="MediumSlateBlue"
                          fontWeight="bold"
                          fontSize={14}
                        >
                          Featured Article
                        </Text>
                      </Row>
                    </Card>
                    <Text fontSize={45} fontWeight="bold" color="darkInttigo">
                      Debugging with product analytics
                    </Text>

                    <Text fontSize={14} color="purpleNavy">
                      As a product manager, deep-diving into problems like high
                      churn, bugs, and crashes is part of the job.
                    </Text>

                    <Spacer mt={40}>
                      <Card
                        width={139}
                        noShadow
                        border="1px solid"
                        borderColor="gray"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigation(screen.articleDetail)}
                      >
                        <Row
                          width={150}
                          height={48}
                          flexDirection="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Text fontSize={10} color="black">
                            Read More
                          </Text>
                          <ChevronRightIcon
                            fontSize="small"
                            style={{ color: colors.black }}
                          />
                        </Row>
                      </Card>
                    </Spacer>
                  </Spacer>
                </Conteiner>
              </Spacer>

              <Card
                width={isResponsiveMobile ? "90%" : 680}
                height={466}
                backgroundImage={image}
              ></Card>
            </Row>
          </Spacer>
        </Conteiner>
      </Spacer>

      <ScreenContent>
        <Content>
          <Spacer mb={30}>
            <Text fontSize={28} fontWeight="bold" color="darkInttigo">
              Recent Articles
            </Text>
          </Spacer>

          <Row width={"100%"} justifyContent="space-between">
            {isResponsiveMobile ? (
              <Conteiner width={600}>
                <Swiper spaceBetween={5} slidesPerView={4}>
                  {ButtonArray.map((item, index) => (
                    <SwiperSlide>
                      <Spacer key={index} mr={20} mb={40}>
                        <Button
                          width={105}
                          height={48}
                          variant="contained"
                          backgroundColor={
                            onClick === index ? "mediumPurple" : "magnoliaWhite"
                          }
                          onClick={() => setOnClick(index)}
                        >
                          <Text
                            fontSize={10}
                            color={onClick === index ? "wite" : "mediumPurple"}
                          >
                            {item}
                          </Text>
                        </Button>
                      </Spacer>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Conteiner>
            ) : (
              <Row>
                {ButtonArray.map((item, index) => (
                  <Spacer key={index} mr={20} mb={40}>
                    <Button
                      width={105}
                      height={48}
                      variant="contained"
                      backgroundColor={
                        onClick === index ? "mediumPurple" : "magnoliaWhite"
                      }
                      onClick={() => setOnClick(index)}
                    >
                      <Text
                        fontSize={10}
                        color={onClick === index ? "wite" : "mediumPurple"}
                      >
                        {item}
                      </Text>
                    </Button>
                  </Spacer>
                ))}
              </Row>
            )}

            <Input type="search" />
          </Row>

          <Spacer mt={30}>
            <NewsPaper />
          </Spacer>

          <Spacer>
            {!isResponsiveMobile && (
              <Row width={"100%"} justifyContent="space-between">
                {sliceNewsPaperArray.map((item, index) => (
                  <Spacer key={index}>
                    <Card
                      width={530}
                      height={500}
                      backgroundImage={item.image}
                      paddingLeft={30}
                      paddingRight={30}
                      paddingTop={280}
                    >
                      <Spacer>
                        <Text color="wite" fontWeight="bold" fontSize={12}>
                          {item.type}
                        </Text>
                        <Text fontSize={25} fontWeight="bold" color="wite">
                          {item.title}
                        </Text>

                        <Text fontSize={14} color='wite'>
                          {item.body}
                        </Text>

                        <Spacer ml={-35} mb={30}>
                          <Button onClick={() => navigation(screen.articleDetail, item.image)}>
                            <Text fontSize={12} opacity={"60%"} color="wite">
                              Read More
                            </Text>
                          </Button>
                        </Spacer>
                      </Spacer>
                    </Card>
                  </Spacer>
                ))}
              </Row>
            )}
          </Spacer>

          {!isResponsiveMobile && (
            <Spacer mt={50} mb={50}>
              <SecundNewsPaper />
            </Spacer>
          )}

          <Spacer>
            {!isResponsiveMobile && (
              <Row width={"100%"} justifyContent="space-between">
                {sliceNewsPaperArray.map((item, index) => (
                  <Spacer key={index}>
                    <Card
                      width={530}
                      height={500}
                      backgroundImage={item.image}
                      paddingLeft={30}
                      paddingRight={30}
                      paddingTop={280}
                    >
                      <Spacer>
                        <Text color="wite" fontWeight="bold" fontSize={12}>
                          {item.type}
                        </Text>
                        <Text fontSize={25} fontWeight="bold" color="wite">
                          {item.title}
                        </Text>

                        <Text fontSize={14} opacity={"70%"} color="wite">
                          {item.body}
                        </Text>

                        <Spacer ml={-35} mb={30}>
                          <Button onClick={() => navigation(screen.articleDetail, item.image)}>
                            <Text fontSize={12} opacity={"60%"} color="wite">
                              Read More
                            </Text>
                          </Button>
                        </Spacer>
                      </Spacer>
                    </Card>
                  </Spacer>
                ))}
              </Row>
            )}
          </Spacer>

          <Spacer mt={50}>
            <NewsPaper />
          </Spacer>

          <Spacer mt={50}>
            <CangePage setNumber={3} />
          </Spacer>
        </Content>
      </ScreenContent>

      <Spacer mt={50}>
        <Footer />
      </Spacer>
    </>
  );
};
