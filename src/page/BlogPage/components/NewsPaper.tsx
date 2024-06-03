import React from "react";
import {
  Card,
  Conteiner,
  Row,
  Text,
} from "../../../components/ScreenRoot/ScreenContent";
import { newsPaperArray } from "../../../constant/optional";
import { Spacer } from "../../../components/Spacer/Spacer";
import { Button } from "../../../components/Button/Button";
import { useResponsive } from "../../../utils/hooks/useResponsive";
import styled from "styled-components";
import { colors } from "../../../utils/color/color";
import image from "../../../utils/image/media_13dd2e08ba5c251123874919fb8c2a70d003d7249.jpeg";
import image1 from "../../../utils/image/depositphotos_11843630-stock-photo-jpg-key-shows-image-format.jpg";
import image2 from "../../../utils/image/digital-display-advertising-omni-channel-600nw-2286681953.jpg";
import { useNavigation } from "../../../utils/hooks/usenavigation";
import { screen } from "../../../routes/constants";

export const NewsPaper: React.FC = () => {
  const { isResponsiveMobile } = useResponsive();
  const { navigation } = useNavigation();

  return (
    <>
      <Row
        width={"100%"}
        justifyContent="space-between"
        flexDirection={isResponsiveMobile ? "column" : undefined}
        alignItems={isResponsiveMobile ? "center" : undefined}
      >
        {newsPaperArray.map((item, index) => (
          <Conteiner width={isResponsiveMobile ? '80%' : 379} key={index}>
            <Card height={ 279} backgroundImage={item.image}></Card>
            <Text color="MediumSlateBlue" fontWeight="bold" fontSize={12}>
              {item.type}
            </Text>
            <Text fontSize={25} fontWeight="bold" color="darkInttigo">
              {item.title}
            </Text>

            <Text fontSize={14} opacity={"70%"} color="purpleNavy">
              {item.body}
            </Text>

            <Spacer ml={-35} mb={30}>
              <Button onClick={() => navigation(screen.articleDetail, item.image)}>
                <Text fontSize={12} opacity={"60%"} color="darkInttigo">
                  Read More
                </Text>
              </Button>
            </Spacer>

            <Spacer mb={30}>
              <Line />
            </Spacer>
          </Conteiner>
        ))}
      </Row>
    </>
  );
};

export const SecundNewsPaper: React.FC = () => {
  const { isResponsiveMobile } = useResponsive();
  const { navigation } = useNavigation();

  return (
    <>
      <Row
        width={"100%"}
        justifyContent="space-between"
        flexDirection={isResponsiveMobile ? "column" : undefined}
        alignItems={isResponsiveMobile ? "center" : undefined}
      >
        <Conteiner width={379}>
          <Card height={279} backgroundImage={image}></Card>
          <Text color="MediumSlateBlue" fontWeight="bold" fontSize={12}>
            PRODUCT ANALYTICS
          </Text>
          <Text fontSize={25} fontWeight="bold" color="darkInttigo">
            ING choisit Leo Burnett pour sa communication...
          </Text>

          <Text fontSize={14} opacity={"70%"} color="purpleNavy">
            As a product manager, deep-diving into problems like high churn,
            bugs, and crashes is part of the job. As a product manager,
            deep-diving into...
          </Text>

          <Spacer ml={-35} mb={30}>
            <Button onClick={() => navigation(screen.articleDetail, image)}>
              <Text fontSize={12} opacity={"60%"} color="darkInttigo">
                Read More
              </Text>
            </Button>
          </Spacer>

          <Spacer mb={30}>
            <Line />
          </Spacer>
        </Conteiner>

        <Spacer>
          <Card
            paddingLeft={30}
            paddingRight={30}
            paddingTop={30}
            width={380}
            height={550}
            backgroundImage={image2}
          >
            <Conteiner>
              <Spacer>
                <Text fontSize={25} fontWeight="bold" color='wite'>
                  ING choisit Leo Burnett pour sa communication...
                </Text>
              </Spacer>

              <Spacer mt={320}>
                <Button
                  variant="contained"
                  backgroundColor="mediumPurple"
                  width={"100%"}
                >
                  <Text fontSize={14} fontWeight="bold" color="wite">
                    Submit Request
                  </Text>
                </Button>
              </Spacer>
            </Conteiner>
          </Card>
        </Spacer>

        <Conteiner width={379}>
          <Card height={279} backgroundImage={image1}></Card>
          <Text color="MediumSlateBlue" fontWeight="bold" fontSize={12}>
            PRODUCT ANALYTICS
          </Text>
          <Text fontSize={25} fontWeight="bold" color="darkInttigo">
            ING choisit Leo Burnett pour sa communication...
          </Text>

          <Text fontSize={14} opacity={"70%"} color="purpleNavy">
            As a product manager, deep-diving into problems like high churn,
            bugs, and crashes is part of the job. As a product manager,
            deep-diving into...
          </Text>

          <Spacer ml={-35} mb={30}>
            <Button onClick={() => navigation(screen.articleDetail, image2)}>
              <Text fontSize={12} opacity={"60%"} color="darkInttigo">
                Read More
              </Text>
            </Button>
          </Spacer>

          <Spacer mb={30}>
            <Line />
          </Spacer>
        </Conteiner>
      </Row>
    </>
  );
};

const Line = styled.div`
  width: 90%;
  height: 1px;
  opacity: 0.6;
  background-color: ${colors.gray};
`;
