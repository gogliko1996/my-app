import React from "react";
import { Row, Text } from "../ScreenRoot/ScreenContent";
import { Spacer } from "../Spacer/Spacer";
import { MenuButton } from "../MenuButton/MenuButton";
import { Button } from "../Button/Button";
import { useResponsive } from "../../utils/hooks/useResponsive";
import { NavigationButton } from "../NavigationButton/NavigationButton";
import { options } from "../../constant/optional";
import { useNavigation } from "../../utils/hooks/usenavigation";
import { screen } from "../../routes/constants";

export const Header: React.FC = () => {
  const {navigation} = useNavigation()
  const { isResponsiveTablet, isResponsiveMobile } = useResponsive();

  return (
    <Row alignItems="center" justifyContent='space-between' width={'100%'}>

      <Row alignItems="center">
        <Spacer mr={7}>
          <div style={{ backgroundColor: "#000", width: 29, height: 32 }} />
        </Spacer>
        <Spacer mr={50}>
          <Row alignItems="center" onClick={() => navigation(screen.home)} style={{cursor: 'pointer'}}>
            <Text fontSize={20} fontFamily='Arial' fontWeight='bold' color='russianViolet'>PTO</Text>
            <Text fontSize={20} color='russianViolet'>GENIUS</Text>
          </Row>
        </Spacer>

        {!isResponsiveMobile && (
          <Row
            width={550}
            justifyContent="space-between"
            flexWrap="wrap"
            alignItems="center"
          >
            <MenuButton
              text="Discover"
              bodyText={["test1", "test2", "test3"]}
            />

            <Button variant="text" color="darkInttigo" width={71}>
              <Text
                color="darkInttigo"
                fontSize={12}
                fontFamily="unset"
                opacity={"60%"}
              >
                Employers
              </Text>
            </Button>
            <Button variant="text" color="darkInttigo" width={71}>
              <Text
                color="darkInttigo"
                fontSize={12}
                fontFamily="unset"
                opacity={"60%"}
              >
                Employees
              </Text>
            </Button>
            <Button variant="text" color="darkInttigo" width={71}>
              <Text
                color="darkInttigo"
                fontSize={12}
                fontFamily="unset"
                opacity={"60%"}
              >
                Plans
              </Text>
            </Button>

            <MenuButton
              text="Resources"
              bodyText={["test1", "test2", "test3"]}
            />
          </Row>
        )}
      </Row>

      {!isResponsiveTablet ? (
        <Spacer>
          <Row alignItems="center">
            <Button variant="text" color="darkInttigo">
              <Text
                color="darkInttigo"
                fontFamily="unset"
                opacity={"60%"}
                fontSize={12}
              >
                Sign in
              </Text>
            </Button>
            <Button
              variant="contained"
              color="wite"
              backgroundColor="mediumPurple"
            >
              <Text color="wite" fontSize={10} fontFamily="unset">
                Recquest a Demo
              </Text>
            </Button>
          </Row>
        </Spacer>
      ) : (
        <NavigationButton options={isResponsiveMobile ? options : ["Sign in", "Recquest a Demo",]} />
      )}
    </Row>
  );
};
