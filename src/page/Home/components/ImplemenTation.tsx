import React from "react";
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
import { useResponsive } from "../../../utils/hooks/useResponsive";
import CircleIcon from "@mui/icons-material/Circle";

export const ImplemenTation: React.FC = () => {
  const { isResponsiveweb, isResponsiveMobile, isResponsiveTablet } =
    useResponsive();

  return (
    <Row
      width={"100%"}
      justifyContent={isResponsiveweb ? "center" : "space-between"}
    >
      <Conteiner width={600} height={590}>
        <Spacer mt={-50}>
          <Text
            fontSize={45}
            fontFamily="Arial"
            fontWeight="bold"
            color="russianViolet"
          >
            Training and Education
          </Text>
          <Text
            fontSize={18}
            fontFamily="Arial"
            fontWeight="bold"
            color="russianViolet"
          >
            Duration: 2 - 4 Weeks
          </Text>
          <Text fontSize={14} color="russianViolet">
            Nullam ultricies luctus elit in facilisis. Etiam in elit mauris.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Aenean euismod orci tristique, pharetra massa
            at, condimentum tellus. Nullam ultricies luctus elit in facilisis.
            Etiam in elit mauris. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Aenean
          </Text>
          <Text fontSize={14} color="russianViolet">
            euismod orci tristique, pharetra massa at, condimentum tellus.
            Nullam ultricies luctus elit in facilisis. Etiam in elit mauris.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Aenean euismod orci tristique, pharetra massa
            at, condimentum tellus. Nullam ultricies luctus elit in facilisis.
            Etiam in elit mauris. Vestibulum ante ipsum primis in
          </Text>
          <Text fontSize={14} color="russianViolet">
            faucibus orci luctus et ultrices posuere cubilia curae; Aenean
            euismod orci tristique, pharetra massa at, condimentum tellus.
          </Text>
        </Spacer>
      </Conteiner>

      <Conteiner width={isResponsiveTablet ? "65%" : 450} height={590}>
        <Spacer ml={10}>
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

          <Spacer mt={26}>
            <Line />
          </Spacer>

          <Spacer>
            <Spacer mt={20}>
              <Text fontSize={12} fontWeight="bold" color="darkInttigo">
                Key Activities
              </Text>
            </Spacer>

            <Row alignItems="center">
              <Spacer mr={5}>
                <CircleIcon style={{ fontSize: 10 }} />
              </Spacer>
              <Text fontSize={14} color="darkInttigo">
                High Churn
              </Text>
            </Row>

            <Row alignItems="center">
              <Spacer mr={5}>
                <CircleIcon style={{ fontSize: 10 }} />
              </Spacer>
              <Text fontSize={14} color="darkInttigo">
                High Employee Burnout
              </Text>
            </Row>

            <Row alignItems="center">
              <Spacer mr={5}>
                <CircleIcon style={{ fontSize: 10 }} />
              </Spacer>
              <Text fontSize={14} color="darkInttigo">
                Reduce Employee Churn
              </Text>
            </Row>

            <Row alignItems="center">
              <Spacer mr={5}>
                <CircleIcon style={{ fontSize: 10 }} />
              </Spacer>
              <Text fontSize={14} color="darkInttigo">
                Lower Employee Related Costs
              </Text>
            </Row>

            <Spacer mt={20}>
              <Text fontSize={12} fontWeight="bold" color="darkInttigo">
                Metrics
              </Text>
            </Spacer>

            <Row alignItems="center">
              <Spacer mr={5}>
                <CircleIcon style={{ fontSize: 10 }} />
              </Spacer>
              <Text fontSize={14} color="darkInttigo">
                Completion Percent
              </Text>
            </Row>
          </Spacer>
        </Spacer>
      </Conteiner>
    </Row>
  );
};

const Line = styled.div`
  width: 90%;
  height: 1px;
  opacity: 0.6;
  background-color: ${colors.russianViolet};
`;
