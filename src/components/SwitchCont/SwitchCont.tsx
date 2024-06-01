import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { Card, Conteiner, Row, Text } from "../ScreenRoot/ScreenContent";
import { Spacer } from "../Spacer/Spacer";
import { SwitchContArray } from "../../constant/optional";
import { useResponsive } from "../../utils/hooks/useResponsive";

export const SwitchCont: React.FC = () => {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const { isResponsiveMobile } = useResponsive();

  const switchClick = (index: number) => {
    setActiveIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  return (
    <>
      {SwitchContArray.map((item, index) => (
        <Spacer mt={20} key={index}>
          <Card
            width={isResponsiveMobile ? 380 : 280}
            height={80}
            paddingLeft={16}
            paddingRight={16}
            paddingTop={16}
            border="2px solid"
            borderColor={activeIndices.includes(index) ? 'mediumPurple' : "gray"}
            noShadow
          >
            <Row width={"100%"} alignItems="center" justifyContent="space-between">
              <Row>
                <Card
                  style={{ backgroundColor: item.color }}
                  width={48}
                  height={48}
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
                    onClick={() => switchClick(index)}
                    checked={activeIndices.includes(index)}
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
    backgroundColor: theme.palette.mode === "dark"
      ? "rgba(255,255,255,.35)"
      : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
