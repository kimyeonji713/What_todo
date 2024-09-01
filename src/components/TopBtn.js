import { Button, useColorModeValue } from "@chakra-ui/react";

export const TopBtn = () => {
  const bg = useColorModeValue("gray.600", "#fff");
  const fontColor = useColorModeValue("#fff", "gray.600");

  const topHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={topHandler}
      position={"fixed"}
      bottom={"20px"}
      right={"5%"}
      bgColor={bg}
      color={fontColor}
      w={"50px"}
      h={"50px"}
      zIndex={"10"}
    >
      TOP
    </Button>
  );
};
