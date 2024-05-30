import React from "react";
import { useNavigation } from "../../utils/hooks/usenavigation";
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
import { Button } from "../../components/Button/Button";
import styled from "styled-components";

export const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <ScreenContent>
      <Content>
        <Header />

        <Spacer mt={80}>
          <Card
            height={680}
            backgroundColor="darkSlateBlue"
            paddingLeft={100}
            paddingTop={80}
          >
            <Row width={"100%"} justifyContent="space-between">
              <Row width={400} height={423}>
                <Text
                  fontSize={54}
                  fontFamily="Arial"
                  fontWeight="bold"
                  color="wite"
                >
                  Easily Boost employee engagement
                </Text>
                <Text fontSize={14} color="wite">
                  Increase job satisfaction, improve engagement, decrease
                  burnout and lower payroll liability by reimagining what
                  employees can do with their PTO.
                </Text>

                <Spacer mt={15}>
                  <Row>
                    <Spacer mr={10}>
                      <Button
                        variant="contained"
                        backgroundColor="MediumSlateBlue"
                      >
                        <Text fontSize={10}>Request a Demo</Text>
                      </Button>
                    </Spacer>
                    <Button variant="outlined" borderColor="MediumSlateBlue">
                      <Text fontSize={10} color="wite">
                        Watch Video
                      </Text>
                    </Button>
                  </Row>
                </Spacer>
              </Row>

              <Spacer mt={45}>
                <ImagDiv style={{backgroundColor: '#fff'}}>
                    კფმეჯო
                </ImagDiv>
              </Spacer>
              
            </Row>
          </Card>

          <Text
            fontSize={54}
            textAlign="center"
            color="eigengrau"
            fontFamily="Arial"
            fontWeight="bold"
          >
            Benefits of PTO Genius
          </Text>
          <Row justifyContent='center' width={'100%'}>
            <Conteiner width={'65s%'}>

          <Text
            fontSize={18}
            textAlign="center"
            color='purpleNavy'
            opacity={'60%'}
            fontFamily="Arial"
          >
            Increase job satisfaction, improve engagement, decrease burnout and
            lower payroll liability by reimagining what employees can do with
            their PTO.
          </Text>
            </Conteiner>
            
          </Row>

        </Spacer>
      </Content>
    </ScreenContent>
  );
};


export const ImagDiv = styled.div`
  background-color: #fffff
  width: 450px;
  height: 555px;
  border-radius: 20px 0 20px 0;
`;