import React, { useState } from "react";
import {
  Card,
  Row,
  Text,
} from "../../components/ScreenRoot/ScreenContent";
import { statArray } from "../../constant/optional";
import { Spacer } from "../../components/Spacer/Spacer";
import { useResponsive } from "../../utils/hooks/useResponsive";
import { colors } from "../../utils/color/color";


export const ButtonCards: React.FC = () => {
  const [mouseOver, setMouseOver] = useState<number | string>("");

  const { isResponsiveMobile } = useResponsive();

  return (
    <>
      
        <Row width={"100%"} justifyContent={isResponsiveMobile ? 'center' :"space-between"}>
          {statArray.map((item, index) => (
            <Spacer mt={mouseOver === index ? 1 : 20} mb={10} ml={isResponsiveMobile ? 100 : 10}>
              <Card
                style={{
                  backgroundColor:
                    mouseOver === index ? colors.darkSlateBlue : undefined,
                }}
                width={ isResponsiveMobile? '80%' : 280}
                key={index}
                paddingTop={20}
                paddingLeft={20}
                paddingRight={20}
                paddingBottom={30}
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
    </>
  );
};