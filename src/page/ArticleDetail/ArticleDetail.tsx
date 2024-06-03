import React from "react";
import { colors } from "../../utils/color/color";
import styled from "styled-components";
import {
  Card,
  Conteiner,
  Content,
  Row,
  ScreenContent,
  Text,
} from "../../components/ScreenRoot/ScreenContent";
import { Header } from "../../components/Header/Header";
import { Spacer } from "../../components/Spacer/Spacer";
import { useResponsive } from "../../utils/hooks/useResponsive";
import { Button } from "../../components/Button/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useNavigation } from "../../utils/hooks/usenavigation";
import { Footer } from "../../components/Footer/Footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import image from "../../utils/image/8RpVSDWY7iVsRB4vKfNKqK-1200-80.jpg";
import CircleIcon from "@mui/icons-material/Circle";
import { NewsPaper } from "../BlogPage/components/NewsPaper";
import { useLocation } from "react-router-dom";

export const ArticleDetail: React.FC = () => {
  const { isResponsiveMobile, isResponsiveweb } = useResponsive();
  const { goback } = useNavigation();
  const location = useLocation();
  const getImage = location.state;

  return (
    <>
      <ScreenContent>
        <Content>
          <Header />
        </Content>
      </ScreenContent>

      <Spacer mb={300}>
        <Conteiner width={"100%"} height={555} backgroundColor="darkghostWhite">
          <Spacer
            ml={isResponsiveMobile ? 20 : 130}
            mr={isResponsiveMobile ? 30 : 130}
            pt={50}
            pb={50}
          >
            <Row width={"100%"} justifyContent="space-between">
              <Spacer>
                <Button variant="text" onClick={() => goback()}>
                  <Row alignItems="center">
                    <ChevronLeftIcon style={{ color: colors.black }} />
                    <Text color="black">Back</Text>
                  </Row>
                </Button>
              </Spacer>

              <Spacer>
                <Conteiner width={isResponsiveMobile ? "70" : 780}>
                  <Spacer mt={50}>
                    <Text
                      color="MediumSlateBlue"
                      fontWeight="bold"
                      fontSize={14}
                    >
                      PRODUCT ANALYTICS
                    </Text>
                    <Text fontSize={35} fontWeight="bold" color="darkInttigo">
                      Debugging with product analytics
                    </Text>
                    <Card
                      noShadow
                      width={"100%"}
                      height={575}
                      backgroundImage={getImage ? getImage : image}
                    />
                  </Spacer>
                </Conteiner>
              </Spacer>

              {!isResponsiveweb && (
                <Spacer>
                  <Conteiner>
                    <FacebookIcon
                      style={{ color: colors.gray, fontSize: 50 }}
                    />

                    <Spacer mt={12} mb={12}>
                      <InstagramIcon
                        style={{ color: colors.gray, fontSize: 50 }}
                      />
                    </Spacer>

                    <LinkedInIcon
                      style={{ color: colors.gray, fontSize: 50 }}
                    />

                    <Spacer mt={12} mb={12}>
                      <PinterestIcon
                        style={{ color: colors.gray, fontSize: 50 }}
                      />
                    </Spacer>
                  </Conteiner>
                </Spacer>
              )}
            </Row>
          </Spacer>
        </Conteiner>
      </Spacer>

      <ScreenContent>
        <Content>
          <Row width={"100%"} justifyContent="center">
            <Spacer ml={!isResponsiveMobile ? 100 : undefined}>
              <Conteiner width={isResponsiveMobile ? "70" : 780}>
                <Text fontSize={25} fontWeight="bold" color="darkInttigo">
                  How to choose the right customer for your photo business?
                </Text>

                <Text fontSize={14} opacity={"70%"} color="purpleNavy">
                  Direct repair of aneurysm, pseudoaneurysm, or excision
                  (partial or total) and graft insertion, with or without patch
                  graft; for aneurysm, pseudoaneurysm, and associated occlusive
                  disease, abdominal aorta Whether through games that exploded
                  onto the scene to become global sensations like “Royal Match”
                  from Istanbul’s Dream Games, or social apps like Clubhouse,
                  which opened up fascinating conversations to everyone this
                  summer, many of the year’s most popular apps and games found
                  new and creative ways to bring people everywhere together.
                  Apps like Bumble and EatOkra were recently honored among the
                  2021 App Store Awards winners for delivering best-in-class app
                  experiences, embodying the year’s trend of connection.,
                </Text>

                <Text fontSize={14} opacity={"70%"} color="purpleNavy">
                  Direct repair of aneurysm, pseudoaneurysm, or excision
                  (partial or total) and graft insertion, with or without patch
                  graft; for aneurysm, pseudoaneurysm, and associated occlusive
                  disease, abdominal aorta Whether through games that exploded
                  onto the scene to become global sensations like “Royal Match”
                  from Istanbul’s Dream Games, or social apps like Clubhouse,
                  which opened up fascinating conversations to everyone this
                  summer, many of the year’s most popular apps and games found
                  new and creative ways to bring people everywhere together.
                  Apps like Bumble and EatOkra were recently honored among the
                  2021 App Store Awards winners for delivering best-in-class app
                  experiences, embodying the year’s trend of connection.,
                </Text>

                <Text fontSize={25} fontWeight="bold" color="darkInttigo">
                  ING choisit Leo Burnett pour sa communication:
                </Text>

                <Spacer>
                  <Row alignItems="center">
                    <Spacer mr={5}>
                      <CircleIcon style={{ fontSize: 10 }} />
                    </Spacer>
                    <Text fontSize={14} color="darkInttigo">
                      Whether through games that exploded onto the.
                    </Text>
                  </Row>

                  <Row alignItems="center">
                    <Spacer mr={5}>
                      <CircleIcon style={{ fontSize: 10 }} />
                    </Spacer>
                    <Text fontSize={14} color="darkInttigo">
                      Apps like Bumble and EatOkra
                    </Text>
                  </Row>

                  <Row alignItems="center">
                    <Spacer mr={5}>
                      <CircleIcon style={{ fontSize: 10 }} />
                    </Spacer>
                    <Text fontSize={14} color="darkInttigo">
                      2021 App Store Awards winners for delivering
                    </Text>
                  </Row>
                </Spacer>

                <Spacer>
                  <Text fontSize={25} fontWeight="bold" color="darkInttigo">
                    Under the pressure of society telling us how to dress and
                    what to be, I think we lost ourselves a long time ago. This
                    is very important for the way we feel.
                  </Text>
                </Spacer>

                <Spacer>
                  <Line />
                </Spacer>

                <Spacer>
                  <Text fontSize={14} opacity={"70%"} color="purpleNavy">
                    Direct repair of aneurysm, pseudoaneurysm, or excision
                    (partial or total) and graft insertion, with or without
                    patch graft; for aneurysm, pseudoaneurysm, and associated
                    occlusive disease, abdominal aorta Whether through games
                    that exploded onto the scene to become global sensations
                    like “Royal Match” from Istanbul’s Dream Games, or social
                    apps like Clubhouse, which opened up fascinating
                    conversations to everyone this summer, many of the year’s
                    most popular apps and games found new and creative ways to
                    bring people everywhere together. Apps like Bumble and
                    EatOkra were recently honored among the 2021 App Store
                    Awards winners for delivering best-in-class app experiences,
                    embodying the year’s trend of connection.,
                  </Text>
                  <Text fontSize={14} opacity={"70%"} color="purpleNavy">
                    Direct repair of aneurysm, pseudoaneurysm, or excision
                    (partial or total) and graft insertion, with or without
                    patch graft; for aneurysm, pseudoaneurysm, and associated
                    occlusive disease, abdominal aorta Whether through games
                    that exploded onto the scene to become global sensations
                    like “Royal Match” from Istanbul’s Dream Games, or social
                    apps like Clubhouse, which opened up fascinating
                    conversations to everyone this summer, many of the year’s
                    most popular apps and games found new and creative ways to
                    bring people everywhere together. Apps like Bumble and
                    EatOkra were recently honored among the 2021 App Store
                    Awards winners for delivering best-in-class app experiences,
                    embodying the year’s trend of connection.,
                  </Text>
                  <Text fontSize={14} opacity={"70%"} color="purpleNavy">
                    Direct repair of aneurysm, pseudoaneurysm, or excision
                    (partial or total) and graft insertion, with or without
                    patch graft; for aneurysm, pseudoaneurysm, and associated
                    occlusive disease, abdominal aorta Whether through games
                    that exploded onto the scene to become global sensations
                    like “Royal Match” from Istanbul’s Dream Games, or social
                    apps like Clubhouse, which opened up fascinating
                    conversations to everyone this summer, many of the year’s
                    most popular apps and games found new and creative ways to
                    bring people everywhere together. Apps like Bumble and
                    EatOkra were recently honored among the 2021 App Store
                    Awards winners for delivering best-in-class app experiences,
                    embodying the year’s trend of connection.,
                  </Text>
                  <Text fontSize={14} opacity={"70%"} color="purpleNavy">
                    Direct repair of aneurysm, pseudoaneurysm, or excision
                    (partial or total) and graft insertion, with or without
                    patch graft; for aneurysm, pseudoaneurysm, and associated
                    occlusive disease, abdominal aorta Whether through games
                    that exploded onto the scene to become global sensations
                    like “Royal Match” from Istanbul’s Dream Games, or social
                    apps like Clubhouse, which opened up fascinating
                    conversations to everyone this summer, many of the year’s
                    most popular apps and games found new and creative ways to
                    bring people everywhere together. Apps like Bumble and
                    EatOkra were recently honored among the 2021 App Store
                    Awards winners for delivering best-in-class app experiences,
                    embodying the year’s trend of connection.,
                  </Text>
                </Spacer>

                <Spacer>
                  <LineGray />
                </Spacer>
              </Conteiner>
            </Spacer>
          </Row>
          <Spacer mt={50}>
            <Text fontSize={25} fontWeight="bold" color="darkInttigo">
              Choose your own adventure. Pick from our unrelated articles...
            </Text>
            <NewsPaper />
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
  height: 3px;
  opacity: 0.6;
  background-color: #25d1db;
`;
const LineGray = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.6;
  background-color: ${colors.gray};
`;
