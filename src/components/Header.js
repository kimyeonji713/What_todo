import { Container, Heading, Text } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Container maxW={"450px"} h={"50px"} bgColor={"#fff"}>
      <Heading margin={"15px 20px"}>
        <Text textAlign={"center"} fontSize={"30px"} color={"gray.600"}>
          뭐하셈? 적으셈!
        </Text>
        <Text
          textAlign={"center"}
          fontSize={"14px"}
          fontWeight={"300"}
          margin={"5px 0"}
        >
          &copy; KimYeonJI 2024
        </Text>
      </Heading>
    </Container>
  );
};
