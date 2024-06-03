import React, { useState } from "react";
import {
  Card,
  Image,
  Row,
  Text,
} from "../../../components/ScreenRoot/ScreenContent";
import { statArray, statArrayTitle } from "../../../constant/optional";
import { Spacer } from "../../../components/Spacer/Spacer";
import { useResponsive } from "../../../utils/hooks/useResponsive";
import { colors } from "../../../utils/color/color";
import backImage from "../../../utils/image/goal-setting-theory-person-writes-on-board-presenting-to-team.webp";
import profilImage from "../../../utils/image/pexels-photo-771742.jpeg";
import CircleIcon from "@mui/icons-material/Circle";
import { MenuButton } from "../../../components/MenuButton/MenuButton";
import { HederScroll } from "../../../components/HederScroll/HederScroll";
import { Chart } from "../../../components/Chart/Cart";

export const CardsComponents: React.FC = () => {
  const [mouseOver, setMouseOver] = useState<number | string>("");

  const { isResponsiveMobile, isResponsiveweb } = useResponsive();

  return (
    <>
      {!isResponsiveMobile && (
        <Row width={"100%"} justifyContent={"space-between"}>
          {statArray.map((item, index) => (
            <Spacer mt={mouseOver === index ? 1 : 20} mb={10} mr={10}>
              <Card
                style={{
                  backgroundColor:
                    mouseOver === index ? colors.darkSlateBlue : undefined,
                }}
                width={280}
                height={229}
                key={index}
                paddingTop={20}
                paddingLeft={20}
                paddingRight={20}
                onMouseOver={() => setMouseOver(index)}
                onMouseOut={() => setMouseOver("")}
              >
                <Spacer>
                  <Text
                    style={{
                      color: mouseOver === index ? colors.wite : undefined,
                    }}
                    fontSize={18}
                    fontFamily="Arial"
                    fontWeight="bold"
                    color="eigengrau"
                    textAlign="center"
                  >
                    {item.title}
                  </Text>
                  <Spacer mt={40}>
                    <Text
                      style={{
                        color: mouseOver === index ? colors.wite : undefined,
                      }}
                      textAlign="center"
                      fontSize={14}
                      color="purpleNavy"
                    >
                      {item.body}
                    </Text>
                  </Spacer>
                </Spacer>
              </Card>
            </Spacer>
          ))}
        </Row>
      )}

      <Spacer mt={20}>
        <Row
          width={"100%"}
          justifyContent={isResponsiveweb ? "center" : "space-between"}
        >
          <Card
            backgroundColor="magnoliaWhite"
            width={!isResponsiveweb ? 780 : "100%"}
            paddingLeft={isResponsiveMobile ? 15 : 50}
            paddingRight={isResponsiveMobile ? 15 : 50}
            paddingTop={50}
          >
            <Spacer>
              {isResponsiveMobile && <HederScroll array={statArrayTitle} />}

              <Text
                color="darkInttigo"
                textAlign="center"
                fontFamily="Arial"
                fontWeight="bold"
                fontSize={36}
              >
                Nullam ultricies luctus elit in facilisis. Etiam in elit mauris.
              </Text>
              <Text textAlign="center" fontSize={18} color="purpleNavy">
                Increase job satisfaction, improve engagement, decrease burnout
                and lower payroll liability by reimagining what employees can do
                with their PTO.
              </Text>

              <Spacer mt={50}>
                <Card
                  noShadow
                  // height={ isResponsiveMobile ? 490 : 393}
                  backgroundColor="wite"
                  borderBottomLeftRadius={0}
                  borderBottomRightRadius={0}
                  paddingLeft={30}
                  paddingTop={20}
                  paddingRight={30}
                >
                  <Spacer>
                    <Spacer mb={-20}>
                      <Text fontSize={18} fontWeight="bold" color="darkInttigo">
                        Historical
                      </Text>
                    </Spacer>

                    <Row
                      width={"100%"}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Row
                        width={270}
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Spacer mr={3}>
                          <CircleIcon
                            style={{ fontSize: 10, color: colors.mediumPurple }}
                          />
                        </Spacer>
                        <Text fontSize={12} color="darkInttigo">
                          Lisa Mathewson
                        </Text>
                        <Spacer mr={3}>
                          <CircleIcon
                            style={{ fontSize: 10, color: colors.gray }}
                          />
                        </Spacer>
                        <Text fontSize={12} color="darkInttigo">
                          Company Average
                        </Text>
                      </Row>

                      <MenuButton
                        text="Company Average"
                        color={colors.darkInttigo}
                        bodyText={["test1", "test2"]}
                      />
                    </Row>
                    <Chart/>
                  </Spacer>
                </Card>
              </Spacer>
            </Spacer>
          </Card>

          {!isResponsiveweb && (
            <Card
              width={380}
              height={690}
              paddingLeft={20}
              paddingRight={20}
              paddingTop={345}
              backgroundImage={backImage}
            >
              <Spacer>
                <Spacer mb={-16} ml={15}>
                  <Card width={100} height={100}>
                    <Image src={profilImage} />
                  </Card>
                </Spacer>

                <Card
                  width={340}
                  height={206}
                  paddingLeft={15}
                  paddingRight={15}
                  paddingBottom={10}
                  paddingTop={10}
                  backgroundColor="wite"
                >
                  <Spacer>
                    <Text
                      color="russianViolet"
                      fontFamily="Arial"
                      fontWeight="bold"
                      fontSize={18}
                    >
                      We like to think this offers our clients a unique
                      combination — service they can depend on, with the freedom
                      to collaborate at scale.
                    </Text>

                    <Spacer mt={35} mb={-5}>
                      <Text
                        fontFamily="Arial"
                        fontSize={14}
                        fontWeight="bold"
                        color="darkSlateBlue"
                      >
                        Tim Cook
                      </Text>
                    </Spacer>
                    <Text fontFamily="Arial" fontSize={12} color="Rhythm">
                      HR Manager
                    </Text>
                  </Spacer>
                </Card>
              </Spacer>
            </Card>
          )}
        </Row>
      </Spacer>
    </>
  );
};
