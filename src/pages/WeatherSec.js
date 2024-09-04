import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

export const WeatherSec = ({ tempData }) => {
  const bg = useColorModeValue("#fff", "gray.900");
  const fontColor = useColorModeValue("gray.600", "#fff");

  return (
    <Box maxW={"450px"} w={"100%"} mx={"auto"} padding={"10px 0"} bgColor={bg}>
      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mx={"auto"}
      >
        <Heading w={"50%"} marginLeft={"30px"} color={fontColor}>
          <Text fontSize={"25px"} marginBottom={"10px"}>
            오늘의
          </Text>
          <Text fontSize={"40px"}>날씨는?</Text>
        </Heading>
        <Box
          w={"50%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text
            fontSize={"40px"}
            fontWeight={400}
            color={fontColor}
            marginBottom={"-20px"}
          >
            {Math.round(tempData.main.temp)} <span>°</span>
          </Text>
          <Box
            marginLeft={"-25px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              w={"35%"}
              src={`https://openweathermap.org/img/wn/${tempData.weather[0].icon}@2x.png`}
            />
            <Text
              marginLeft={"5px"}
              fontSize={"14px"}
              fontWeight={"300"}
              color={fontColor}
            >
              {tempData.weather[0].description}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
