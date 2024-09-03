import { Box, Text } from "@chakra-ui/react";
import { Link, Route } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <Box maxW={"450px"} w={"100%"} minH={"100vh"} mx={"auto"} bgColor={"#fff"}>
      <Text
        padding={"60% 31% 5% 31%"}
        fontSize={"80px"}
        fontWeight={"900"}
        letterSpacing={10}
        color={"#D63484"}
      >
        404
      </Text>
      <Link to={"/"}>
        <Text
          fontSize={"15px"}
          color="#939185"
          textDecoration={"underline"}
          textAlign={"center"}
        >
          메인으로 가기
        </Text>
      </Link>
    </Box>
  );
};
