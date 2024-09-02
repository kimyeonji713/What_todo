import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

export const WeatherSec = ({ tempData }) => {
  const bg = useColorModeValue("#fff", "gray.900");
  const fontColor = useColorModeValue("gray.600", "#fff");

  return (
    <Box maxW={"450px"} w={"100%"} mx={"auto"} bgColor={bg}>
      <Link to={routes.weather}>
        <Box
          w={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Heading marginLeft={"15px"} color={fontColor}>
            <Text fontSize={"25px"} marginBottom={"10px"}>
              오늘의
            </Text>
            <Text fontSize={"40px"}>날씨는?</Text>
          </Heading>
          <Box
            w={"30%"}
            mx={"auto"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Image
              w={"100%"}
              src={`https://openweathermap.org/img/wn/${tempData.weather[0].icon}@2x.png`}
            />
            <Text fontSize={"16px"} fontWeight={"300"} color={fontColor}>
              {tempData.weather[0].description}
            </Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};
