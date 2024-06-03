import React, { useState } from "react";
import {
  Card,
  Conteiner,
  Image,
  Row,
  Text,
} from "../../../components/ScreenRoot/ScreenContent";
import { Spacer } from "../../../components/Spacer/Spacer";
import image from "../../../utils/image/pexels-photo-771742.jpeg";
import styled from "styled-components";
import { colors } from "../../../utils/color/color";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "../../../components/Button/Button";
import { useResponsive } from "../../../utils/hooks/useResponsive";
import { HederScroll } from "../../../components/HederScroll/HederScroll";

const ButtonArray = ["Small Business", "Small Business", "Small Business"];

export const ForComponent: React.FC = () => {
  const [onClick, setOnClick] = useState<number>(0);
  const { isResponsiveweb, isResponsiveMobile, isResponsiveTablet } =
    useResponsive();

  return (
    <Card
      backgroundColor="ghostWhite"
      paddingTop={80}
      paddingLeft={isResponsiveMobile ? 10 : 50}
      paddingRight={isResponsiveMobile ? 10 : 50}
      height={isResponsiveMobile ? 1500 : undefined}
    >
      <Row
        width={"100%"}
        justifyContent={isResponsiveweb ? "center" : "space-between"}
      >
        <Conteiner width={isResponsiveMobile ? "100%" : 600} height={590}>
          <Spacer mt={-50}>
            <Text
              fontSize={45}
              fontFamily="Arial"
              fontWeight="bold"
              color="russianViolet"
            >
              For Companies of all sizes
            </Text>
            {isResponsiveMobile && (
            <Conteiner width={"100%"}>
              <Spacer mb={20}>
                <HederScroll array={ButtonArray} />
              </Spacer>
            </Conteiner>

            )}

            <Text
              fontSize={18}
              fontFamily="Arial"
              fontWeight="bold"
              color="russianViolet"
            >
              Nullam ultricies luctus elit in facilisis. Etiam in elit mauris.
            </Text>
            <Text fontSize={14} color="russianViolet">
              Nullam ultricies luctus elit in facilisis. Etiam in elit mauris.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Aenean euismod orci tristique, pharetra
              massa at, condimentum tellus. Nullam ultricies luctus elit in
              facilisis. Etiam in elit mauris. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Aenean
            </Text>
            <Text fontSize={14} color="russianViolet">
              euismod orci tristique, pharetra massa at, condimentum tellus.
              Nullam ultricies luctus elit in facilisis. Etiam in elit mauris.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Aenean euismod orci tristique, pharetra
              massa at, condimentum tellus. Nullam ultricies luctus elit in
              facilisis. Etiam in elit mauris. Vestibulum ante ipsum primis in
            </Text>
            <Text fontSize={14} color="russianViolet">
              faucibus orci luctus et ultrices posuere cubilia curae; Aenean
              euismod orci tristique, pharetra massa at, condimentum tellus.
            </Text>
          </Spacer>
        </Conteiner>

        <Conteiner width={isResponsiveMobile ? "100%" : 450} height={590}>
          <Spacer ml={10}>
            {!isResponsiveMobile && (
              <Row>
                {ButtonArray.map((item, index) => (
                  <Spacer key={index} mr={20} mb={40}>
                    <Button
                      width={120}
                      height={40}
                      variant={onClick === index ? "contained" : "outlined"}
                      backgroundColor={
                        onClick === index ? "mediumPurple" : undefined
                      }
                      onClick={() => setOnClick(index)}
                    >
                      <Text
                        fontSize={10}
                        color={onClick === index ? undefined : "darkSlateBlue"}
                      >
                        {item}
                      </Text>
                    </Button>
                  </Spacer>
                ))}
              </Row>
            )}

            <Row>
              <Card width={92} height={92}>
                <Image src={image} />
              </Card>

              <Conteiner width={300}>
                <Spacer ml={26} mt={-10}>
                  <Text fontSize={14} color="purpleNavy">
                    “I want to lower PTO liability and keep my employess happy.”
                  </Text>

                  <Spacer mt={-5} mb={-5}>
                    <Text fontSize={12} fontWeight="bold" color="darkInttigo">
                      James Hamilton
                    </Text>
                  </Spacer>

                  <Text fontSize={12} color="purpleNavy">
                    HR Manager
                  </Text>
                </Spacer>
              </Conteiner>
            </Row>

            <Spacer mt={26} mb={40}>
              <Line />
            </Spacer>

            <Spacer>
              <Row alignItems="center">
                {!isResponsiveMobile && (
                  <CheckCircleIcon
                    fontSize="small"
                    style={{ color: colors.maximumBluePurple }}
                  />
                )}
                <Text fontSize={14} color="darkInttigo">
                  High Churn
                </Text>
              </Row>

              <Row alignItems="center">
                {!isResponsiveMobile && (
                  <CheckCircleIcon
                    fontSize="small"
                    style={{ color: colors.maximumBluePurple }}
                  />
                )}
                <Text fontSize={14} color="darkInttigo">
                  High Employee Burnout
                </Text>
              </Row>

              <Row alignItems="center">
                {!isResponsiveMobile && (
                  <CheckCircleIcon
                    fontSize="small"
                    style={{ color: colors.maximumBluePurple }}
                  />
                )}

                <Text fontSize={14} color="darkInttigo">
                  Reduce Employee Churn
                </Text>
              </Row>

              <Row alignItems="center">
                {!isResponsiveMobile && (
                  <CheckCircleIcon
                    fontSize="small"
                    style={{ color: colors.maximumBluePurple }}
                  />
                )}
                <Text fontSize={14} color="darkInttigo">
                  Lower Employee Related Costs
                </Text>
              </Row>
            </Spacer>
          </Spacer>
        </Conteiner>
      </Row>
    </Card>
  );
};

const Line = styled.div`
  width: 90%;
  height: 1px;
  opacity: 0.6;
  background-color: ${colors.russianViolet};
`;
