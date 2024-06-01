import React, { useEffect, useState } from "react";
import { Card, Row, Text } from "../ScreenRoot/ScreenContent";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Spacer } from "../Spacer/Spacer";
import { CangePageProps } from "./cangePage.props";

export const CangePage: React.FC<CangePageProps> = (props) => {
     const {setNumber, onCange} = props

  const [numbers, setNumbers] = useState<number[]>([]);
  const [numberClick, setNumberClick] = useState<number>(0)

  const fillArray = (number: number) => {
    const newArray = Array.from({ length: number }, (_, i) => i + 1);
    setNumbers(newArray);
  };

  useEffect(() => {
    onCange && onCange(numberClick + 1)
  },[numberClick])


  useEffect(() => {
    fillArray(setNumber);
  }, [setNumber]);

  return (
    <Row width={"100%"} justifyContent="center">
      <Row>
        <Spacer mr={20}>
          <Card
            width={38}
            height={38}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
            noShadow
            border="1px solid"
            borderColor="gray"
            onClick={() => numberClick > 0 && setNumberClick(numberClick - 1)}
          >
            <Row
              width={38}
              height={38}
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <ChevronLeftIcon />
            </Row>
          </Card>
        </Spacer>

        {numbers.map((item, index) => (
          <Spacer ml={10}>
            <Card
              width={38}
              height={38}
              borderBottomLeftRadius={10}
              borderBottomRightRadius={10}
              borderTopLeftRadius={10}
              borderTopRightRadius={10}
              noShadow
              backgroundColor={numberClick === index ? 'mediumPurple' : 'wite'}
              border="1px solid"
              borderColor="gray"
              onClick={() => setNumberClick(index) }
            >
              <Row
                width={38}
                height={38}
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <Text color={numberClick === index ? 'wite' : 'black' } fontSize={12}>{item.toString()}</Text>
              </Row>
            </Card>
          </Spacer>
        ))}

        <Spacer ml={20}>
          <Card
            width={38}
            height={38}
            borderBottomLeftRadius={10}
            borderBottomRightRadius={10}
            borderTopLeftRadius={10}
            borderTopRightRadius={10}
            noShadow
            border="1px solid"
            borderColor="gray"
             onClick={() => numberClick < numbers.length - 1 && setNumberClick(numberClick + 1)}
          >
            <Row
              width={38}
              height={38}
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
            >
              <ChevronRightIcon />
            </Row>
          </Card>
        </Spacer>
      </Row>
    </Row>
  );
};
