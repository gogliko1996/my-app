import React from "react";
import { jobsArray } from "../../../constant/optional";
import { Spacer } from "../../../components/Spacer/Spacer";
import {
  Card,
  Conteiner,
  Row,
  Text,
} from "../../../components/ScreenRoot/ScreenContent";
import { useResponsive } from "../../../utils/hooks/useResponsive";
import { Button } from "../../../components/Button/Button";
import { useNavigation } from "../../../utils/hooks/usenavigation";
import { screen } from "../../../routes/constants";

export const JobList: React.FC = () => {
  const { isResponsiveMobile } = useResponsive();
  const {navigation} = useNavigation()

  const splicejobsArray = isResponsiveMobile ? jobsArray.splice(0,2) : jobsArray

  return (
    <>
      <Spacer mb={25}>
        <Text fontWeight="bold" fontSize={35} color="eigengrau">
          4 Jobs Available
        </Text>
      </Spacer>
      {splicejobsArray.map((item, index) => (
        <Spacer mb={20} key={index}>
          <Card
            noShadow
            border="1px solid"
            borderColor="gray"
            paddingBottom={30}
            paddingLeft={30}
            paddingRight={30}
            paddingTop={15}
          >
            <Row width={"100%"} justifyContent="space-between" flexDirection={isResponsiveMobile ? 'column' : undefined}>
              <Spacer mb={20}>
                <Row
                  width={isResponsiveMobile ? 250 : 180}
                  justifyContent="space-between"
                >
                  <Conteiner>
                    <Spacer mb={30}>
                      <Text fontSize={16} fontWeight="bold">
                        {item.Title}
                      </Text>
                    </Spacer>

                    <Spacer mb={20}>
                      <Text fontSize={12} opacity={"60%"}>
                        {item.jobsType}
                      </Text>
                    </Spacer>
                  </Conteiner>

                  <Card
                    backgroundColor="honeydew"
                    width={71}
                    height={38}
                    noShadow
                  >
                    <Text
                      textAlign="center"
                      fontWeight="bold"
                      fontSize={12}
                      color="emeraldGreen"
                    >
                      Ongoing
                    </Text>
                  </Card>
                </Row>
              </Spacer>

              <Spacer mb={20}>
                <Conteiner>
                  <Spacer mb={30}>
                    <Text fontSize={16} fontWeight="bold">
                      {item.location}
                    </Text>
                  </Spacer>
                  <Text fontSize={12} opacity={"60%"}>
                    {item.locationType}
                  </Text>
                </Conteiner>
              </Spacer>

              <Button
                variant="contained"
                width={190}
                backgroundColor="mediumPurple"
                onClick={() => navigation(screen.jobsDetails, item)}
              >
                <Text fontSize={14} fontWeight="bold" color="wite">
                  Apply now
                </Text>
              </Button>
            </Row>
          </Card>
        </Spacer>
      ))}
    </>
  );
};
