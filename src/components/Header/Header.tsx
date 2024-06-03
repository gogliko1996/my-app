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
import { HeaderProps } from "./Header.props";

export const Header: React.FC<HeaderProps> = (props) => {
  const { noTitle = false } = props;

  const { navigation } = useNavigation();
  const { isResponsiveTablet, isResponsiveMobile } = useResponsive();

  const responsNavigate = (props: string) => {
    if (props === "Blog") {
      navigation(screen.blogPage);
    }

    if (props === "Recquest a Demo") {
      navigation(screen.requestDemo);
    }
    if (props === "NewRoom") {
      navigation(screen.newroom);
    }
    if (props === "Jobs") {
      navigation(screen.jobs);
    }
  };

  return (
    <Row alignItems="center" justifyContent="space-between" width={"100%"}>
      <Row alignItems="center">
        <Spacer mr={7}>
          <div style={{ backgroundColor: "#000", width: 29, height: 32 }} />
        </Spacer>
        <Spacer mr={50}>
          <Row
            alignItems="center"
            onClick={() => navigation(screen.home)}
            style={{ cursor: "pointer" }}
          >
            <Text
              fontSize={20}
              fontFamily="Arial"
              fontWeight="bold"
              color="russianViolet"
            >
              PTO
            </Text>
            <Text fontSize={20} color="russianViolet">
              GENIUS
            </Text>
          </Row>
        </Spacer>

        {!noTitle && !isResponsiveMobile && (
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

            <Button
              variant="text"
              color="darkInttigo"
              width={71}
              onClick={() => navigation(screen.blogPage)}
            >
              <Text
                color="darkInttigo"
                fontSize={12}
                fontFamily="unset"
                opacity={"60%"}
              >
                Blog
              </Text>
            </Button>
            <Button variant="text" color="darkInttigo" width={71} onClick={() => navigation(screen.newroom)}>
              <Text
                color="darkInttigo"
                fontSize={12}
                fontFamily="unset"
                opacity={"60%"}
              >
                NewRoom
              </Text>
            </Button>
            <Button variant="text" color="darkInttigo" width={71} onClick={() => navigation(screen.jobs)}>
              <Text
                color="darkInttigo"
                fontSize={12}
                fontFamily="unset"
                opacity={"60%"}
              >
                Jobs
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
            {!noTitle && (
              <Button
                variant="contained"
                color="wite"
                backgroundColor="mediumPurple"
                onClick={() => navigation(screen.requestDemo)}
              >
                <Text color="wite" fontSize={10} fontFamily="unset">
                  Recquest a Demo
                </Text>
              </Button>
            )}
          </Row>
        </Spacer>
      ) : (
        <NavigationButton
          options={
            isResponsiveMobile ? options : ["Sign in", "Recquest a Demo"]
          }
          getTitle={(e) => responsNavigate(e)}
        />
      )}
    </Row>
  );
};
