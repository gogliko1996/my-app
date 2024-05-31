import React from "react";
import { Spacer } from "../Spacer/Spacer";
import { Text } from "../ScreenRoot/ScreenContent";
const scroolNameArray = [
  "SAMSUNG",
  "INTEL",
  "MICROSOFT",
  "GOLDMAN",
  "SONI",
  "BOENIG",
  "APPl",
];

export const HorizontalScroll: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        overflowX: "scroll",
        
      }}
    >
      {scroolNameArray.map((item, index) => (
        <Spacer key={index} mr={50}>
          <Text color="gray" fontSize={20} fontFamily="Arial" fontWeight="bold">
            {item}
          </Text>
        </Spacer>
      ))}
    </div>
  );
};
