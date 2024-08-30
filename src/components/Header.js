import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export const Header = () => {
  const { toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(MoonIcon, SunIcon);
  const bg = useColorModeValue("#fff", "#000");
  const fontColor = useColorModeValue("gray.600", "#fff");

  return (
    <Box
      maxW={"450px"}
      w={"100%"}
      h={"80px"}
      bgColor={bg}
      mx={"auto"}
      position={"relative"}
    >
      <IconButton
        position={"absolute"}
        top={0}
        left={0}
        icon={<HamburgerIcon />}
        bgColor={bg}
        color={fontColor}
        fontSize={"18px"}
        fontWeight={"900"}
      />
      <Heading margin={"15px 20px"}>
        <Text textAlign={"center"} fontSize={"30px"} color={fontColor}>
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

      <IconButton
        bgColor={bg}
        color={fontColor}
        fontSize={"18px"}
        onClick={toggleColorMode}
        variant={"ghost"}
        aria-label="Toggle dark mode"
        icon={<Icon />}
        position={"absolute"}
        top={0}
        right={0}
      />
    </Box>
  );
};
