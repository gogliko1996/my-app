import React, { useState } from "react";
import {
  Card,
  Conteiner,
  Content,
  Input,
  Row,
  ScreenContent,
  Text,
} from "../../components/ScreenRoot/ScreenContent";
import { Header } from "../../components/Header/Header";
import { Spacer } from "../../components/Spacer/Spacer";
import { Footer } from "../../components/Footer/Footer";
import { Button } from "../../components/Button/Button";
import { useNavigation } from "../../utils/hooks/usenavigation";
import { useLocation } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { colors } from "../../utils/color/color";
import { useResponsive } from "../../utils/hooks/useResponsive";
import image from "../../utils/image/8RpVSDWY7iVsRB4vKfNKqK-1200-80.jpg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styled from "styled-components";
import { Modalize } from "../../components/Modalize/Modalize";
import CloseIcon from "@mui/icons-material/Close";

export const JobsDetails: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const { isResponsiveMobile } = useResponsive();
  const { goback } = useNavigation();
  const location = useLocation();
  const data = location.state;

  return (
    <>
      <ScreenContent>
        <Content>
          <Header />

          <Spacer>
            <Spacer>
              <Row width={300} alignItems="center">
                <Button variant="text" onClick={() => goback()}>
                  <Row alignItems="center">
                    <ChevronLeftIcon style={{ color: colors.black }} />
                    <Text color="black">Back</Text>
                  </Row>
                </Button>
                <Spacer mr={20}>
                  <Text>/Jobs</Text>
                </Spacer>
                <Text color="darkSlateBlue">{location.pathname}</Text>
              </Row>
            </Spacer>
          </Spacer>

          <Spacer mt={20}>
            <Row width={"100%"} justifyContent="space-between">
              <Spacer>
                <Conteiner width={isResponsiveMobile ? "100%" : 580}>
                  <Card
                    backgroundColor="ghostWhite"
                    width={100}
                    height={48}
                    paddingTop={0.01}
                    noShadow
                  >
                    <Text
                      textAlign="center"
                      fontWeight="bold"
                      fontSize={14}
                      color="MediumSlateBlue"
                    >
                      {data.jobsType}
                    </Text>
                  </Card>

                  <Spacer>
                    <Conteiner>
                      <Text fontSize={35} fontWeight="bold" color="darkInttigo">
                        Sourcing Intern
                      </Text>
                      <Spacer mb={20}>
                        <Text fontSize={14} color="purpleNavy">
                          Our mission at Netguru is to help entrepreneurs and
                          innovators shape the world through beautiful software.
                          We care about trust, taking ownership, and
                          transparency. As a Certified B Corporation®, we offer
                          a safe, inclusive and productive environment for all
                          team members, and we’re always open to feedback. If
                          you want to work from home and be a full time
                          employee, great! We want to create the right
                          opportunities for you.
                        </Text>
                      </Spacer>

                      <Card
                        width={"100%"}
                        height={383}
                        backgroundImage={image}
                      />

                      <Text fontSize={35} fontWeight="bold" color="darkInttigo">
                        Joining Netguru’s Talent Acquisition Team as a Sourcing
                        Intern means:
                      </Text>
                      <Spacer>
                        <Row alignItems="center" flexWrap="nowrap">
                          <CheckCircleIcon
                            fontSize="small"
                            style={{ color: colors.maximumBluePurple }}
                          />

                          <Text fontSize={14} color="darkInttigo">
                            Growing yourself and the people around you - you
                            will give and receive regular feedback in a team of
                            open-minded people who will always have your back,
                          </Text>
                        </Row>

                        <Row alignItems="center" flexWrap="nowrap">
                          <CheckCircleIcon
                            fontSize="small"
                            style={{ color: colors.maximumBluePurple }}
                          />

                          <Text fontSize={14} color="darkInttigo">
                            Room for experimenting and questioning the status
                            quo,
                          </Text>
                        </Row>

                        <Row alignItems="center" flexWrap="nowrap">
                          <CheckCircleIcon
                            fontSize="small"
                            style={{ color: colors.maximumBluePurple }}
                          />

                          <Text fontSize={14} color="darkInttigo">
                            Taking part in our weekly Creative Friday meetings -
                            to help you replenish your creative mind, share
                            knowledge and ideas, and get together :)
                          </Text>
                        </Row>

                        <Row alignItems="center" flexWrap="nowrap">
                          <CheckCircleIcon
                            fontSize="small"
                            style={{ color: colors.maximumBluePurple }}
                          />

                          <Text fontSize={14} color="darkInttigo">
                            Flexplace - having a lot of flexibility in terms of
                            working hours and location,
                          </Text>
                        </Row>
                      </Spacer>

                      <Text fontSize={35} fontWeight="bold" color="darkInttigo">
                        To help you understand your typical day, let us guide
                        you through your main responsibilities:
                      </Text>
                      <Spacer>
                        <Row alignItems="center" flexWrap="nowrap">
                          <CheckCircleIcon
                            fontSize="small"
                            style={{ color: colors.maximumBluePurple }}
                          />

                          <Text fontSize={14} color="darkInttigo">
                            Using creative search methods to find and attract
                            new talent on different social media platforms,
                          </Text>
                        </Row>

                        <Row alignItems="center" flexWrap="nowrap">
                          <CheckCircleIcon
                            fontSize="small"
                            style={{ color: colors.maximumBluePurple }}
                          />

                          <Text fontSize={14} color="darkInttigo">
                            Working predominantly on various technical
                            positions,
                          </Text>
                        </Row>

                        <Row alignItems="center" flexWrap="nowrap">
                          <CheckCircleIcon
                            fontSize="small"
                            style={{ color: colors.maximumBluePurple }}
                          />

                          <Text fontSize={14} color="darkInttigo">
                            Testing new platforms, new tools, and new techniques
                            to reach passive candidates,
                          </Text>
                        </Row>

                        <Row alignItems="center" flexWrap="nowrap">
                          <CheckCircleIcon
                            fontSize="small"
                            style={{ color: colors.maximumBluePurple }}
                          />

                          <Text fontSize={14} color="darkInttigo">
                            Effectively turning passive candidates into active
                            and engaged ones,
                          </Text>
                        </Row>
                      </Spacer>

                      <Text fontSize={14} color="darkInttigo">
                        If you need any disability-related adaptation at any
                        step of the recruitment process – simply let the
                        recruiter know! We'd be happy to help.
                      </Text>
                      <Spacer mt={50}>
                        <Text
                          fontSize={14}
                          fontWeight="bold"
                          color="darkInttigo"
                        >
                          We are waiting for new Sourcing Interns!
                        </Text>
                      </Spacer>

                      {isResponsiveMobile && (
                        <Button
                          width={"100%"}
                          variant="contained"
                          backgroundColor="mediumPurple"
                          onClick={() => setShowModal(true)}
                        >
                          <Text fontSize={14} fontWeight="bold" color="wite">
                            Apply Now
                          </Text>
                        </Button>
                      )}
                    </Conteiner>
                  </Spacer>
                </Conteiner>
              </Spacer>

              {!isResponsiveMobile && (
                <Conteiner width={320}>
                  <Spacer>
                    <Text fontSize={18} fontWeight="bold" color="darkInttigo">
                      Are you ready to join us on our journey? 🚀 Don't hold
                      back and apply!
                    </Text>
                  </Spacer>

                  <Spacer mb={-15}>
                    <Text fontSize={18} fontWeight="bold" color="darkInttigo">
                      Full name
                    </Text>
                  </Spacer>
                  <Input
                    width={"100%"}
                    type="text"
                    placeholder="Enter a Full Name"
                  />

                  <Spacer mb={-15}>
                    <Text fontSize={18} fontWeight="bold" color="darkInttigo">
                      Email Address
                    </Text>
                  </Spacer>
                  <Input
                    width={"100%"}
                    type="text"
                    placeholder="Enter a Email Address"
                  />

                  <Spacer mt={25} mb={50}>
                    <Card
                      noShadow
                      border="1px solid"
                      borderColor="gray"
                      height={60}
                      borderBottomLeftRadius={12}
                      borderBottomRightRadius={12}
                      borderTopLeftRadius={12}
                      borderTopRightRadius={12}
                      paddingLeft={5}
                      paddingRight={5}
                      paddingTop={8}
                    >
                      <Row width={"100%"} justifyContent="space-between">
                        <Text fontSize={14}>Upload CV / Resume</Text>
                        <FileInputWrapper>
                          <FileInputLabel htmlFor="fileUpload">
                            Select File
                          </FileInputLabel>
                          <HiddenFileInput type="file" id="fileUpload" />
                        </FileInputWrapper>
                      </Row>
                    </Card>
                  </Spacer>

                  <Button
                    width={"100%"}
                    variant="contained"
                    backgroundColor="mediumPurple"
                  >
                    <Text fontSize={14} fontWeight="bold" color="wite">
                      Apply Now
                    </Text>
                  </Button>
                </Conteiner>
              )}
            </Row>
          </Spacer>
        </Content>
      </ScreenContent>

      <Spacer mt={50}>
        <Footer />
      </Spacer>

      <Modalize isOpen={showModal} onClose={() => setShowModal(false)}>
        <Conteiner width={280}>
          <Row width={"100%"} justifyContent="space-between">
            <Spacer mt={-20}>
              <Conteiner width={250}>
                <Text fontSize={18} fontWeight="bold" color="darkInttigo">
                  Are you ready to join us on our journey? 🚀 Don't hold back
                  and apply!
                </Text>
              </Conteiner>
            </Spacer>
            <Conteiner onClick={() => setShowModal(false)}>
              <CloseIcon />
            </Conteiner>
          </Row>

          <Spacer>
            <Conteiner width={"100%"}>
              <Spacer mb={-15}>
                <Text fontSize={18} fontWeight="bold" color="darkInttigo">
                  Full name
                </Text>
              </Spacer>
              <Input
                width={"100%"}
                type="text"
                placeholder="Enter a Full Name"
              />

              <Spacer mb={-15}>
                <Text fontSize={18} fontWeight="bold" color="darkInttigo">
                  Email Address
                </Text>
              </Spacer>
              <Input
                width={"100%"}
                type="text"
                placeholder="Enter a Email Address"
              />

              <Spacer mt={25} mb={50}>
                <Card
                  noShadow
                  border="1px solid"
                  borderColor="gray"
                  height={60}
                  borderBottomLeftRadius={12}
                  borderBottomRightRadius={12}
                  borderTopLeftRadius={12}
                  borderTopRightRadius={12}
                  paddingLeft={5}
                  paddingRight={5}
                  paddingTop={8}
                >
                  <Row width={"100%"} justifyContent="space-between">
                    <Text fontSize={14}>Upload CV / Resume</Text>
                    <FileInputWrapper>
                      <FileInputLabel htmlFor="fileUpload">
                        Select File
                      </FileInputLabel>
                      <HiddenFileInput type="file" id="fileUpload" />
                    </FileInputWrapper>
                  </Row>
                </Card>
              </Spacer>

              <Button
                width={"100%"}
                variant="contained"
                backgroundColor="mediumPurple"
              >
                <Text fontSize={14} fontWeight="bold" color="wite">
                  Apply Now
                </Text>
              </Button>
            </Conteiner>
          </Spacer>
        </Conteiner>
      </Modalize>
    </>
  );
};

const FileInputWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

const FileInputLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  color: #9d71fd;
  background-color: #f2effe;
  border-radius: 4px;
  cursor: pointer;
`;

const HiddenFileInput = styled.input`
  display: none;
`;
