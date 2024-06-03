import { useState } from "react";
import { Button } from "../../../components/Button/Button";
import {
  Card,
  Conteiner,
  Image,
  Row,
  Text,
} from "../../../components/ScreenRoot/ScreenContent";
import { Spacer } from "../../../components/Spacer/Spacer";
import { SwitchCont } from "../../../components/SwitchCont/SwitchCont";
import profileImage from "../../../utils/image/pexels-photo-771742.jpeg";
import { useResponsive } from "../../../utils/hooks/useResponsive";
import { HederScroll } from "../../../components/HederScroll/HederScroll";

const ButtonArray = ["Small Business", "Small Business", "Small Business"];

export const Integration: React.FC = () => {
  const [onClick, setOnClick] = useState<number>(0);

  const { isResponsiveMobile, isResponsiveTablet } = useResponsive();

  return (
    <Spacer mt={100}>
      <Spacer mb={50}>
        {isResponsiveMobile ? (
          <HederScroll array={ButtonArray} />
        ) : (
          <Row width={'100%'} justifyContent="center">
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
          </Row>
        )}
      </Spacer>

      <Row
        width={"100%"}
        justifyContent={isResponsiveMobile ? "center" : "space-between"}
      >
        {!isResponsiveTablet && (
          <Conteiner>
            <SwitchCont />
          </Conteiner>
        )}

        <Spacer mt={23}>
          <Card
            width={380}
            height={268}
            paddingLeft={40}
            paddingRight={40}
            backgroundColor="maximumBluePurple"
            border="2px solid"
            borderColor="mediumPurple"
          >
            <Row width={"100%"} alignItems="center" flexDirection="column">
              <Spacer mt={-50}>
                <Card width={86} height={86}>
                  <Image src={profileImage} />
                </Card>
              </Spacer>

              <Text
                textAlign="center"
                fontFamily="Arial"
                fontWeight="bold"
                fontSize={25}
                color="darkInttigo"
              >
                Lauren Robson
              </Text>
              <Text textAlign="center" fontSize={14} color="purpleNavy">
                HR Director
              </Text>
              <Text textAlign="center" fontSize={14} color="darkInttigo">
                “I want to lower PTO liability and keep my employess happy. I
                want to lower PTO liability.”
              </Text>
            </Row>
          </Card>
        </Spacer>

        <Conteiner>
          <SwitchCont />
        </Conteiner>
      </Row>
    </Spacer>
  );
};
