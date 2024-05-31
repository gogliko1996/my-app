import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { Card, Conteiner, Row, Text } from "../ScreenRoot/ScreenContent";
import { Spacer } from "../Spacer/Spacer";
import { SwitchContProps } from "./SwitchCont.props";

export const SwitchCont: React.FC<SwitchContProps> = ({opionals}) => {

  const [clickSwitc, setclickSwitc] = useState<boolean>(false);

  const switcClick = () => {
    setclickSwitc(!clickSwitc);
  };

  if (!opionals) {
    return;
  }
  return (
    <>
      {opionals.map((item, index) => (
        <Spacer mt={20} key={index}>
        <Card
          width={280}
          height={80}
          paddingLeft={16}
          paddingRight={16}
          paddingTop={16}
          border="1px solid"
          borderColor="gray"
          noShadow
        >
          <Row
            width={"100%"}
            alignItems="center"
            justifyContent="space-between"
          >
            <Row>
              <Card
                width={48}
                height={48}
                backgroundColor={item.color}
                borderBottomLeftRadius={12}
                borderBottomRightRadius={12}
                borderTopLeftRadius={12}
                borderTopRightRadius={12}
              ></Card>
              <Conteiner>
                <Spacer mt={-10} ml={10}>
                  <Spacer mb={-10}>
                    <Text fontSize={16} fontWeight="bold" color="darkInttigo">
                      {item.title}
                    </Text>
                  </Spacer>
                  <Text fontSize={12} color="purpleNavy">
                    {item.body}
                  </Text>
                </Spacer>
              </Conteiner>
            </Row>

            <Spacer mt={-5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <AntSwitch
                  onClick={() => switcClick()}
                  defaultChecked={false}
                  inputProps={{ "aria-label": "ant design" }}
                />
              </Stack>
            </Spacer>
          </Row>
        </Card>
        </Spacer>
      ))}
    </>
  );
};

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
