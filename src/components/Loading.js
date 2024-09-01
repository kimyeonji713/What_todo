import { AbsoluteCenter, Box, useColorModeValue } from "@chakra-ui/react";
import { PulseLoader } from "react-spinners";

export const Loading = () => {
  const bg = useColorModeValue("gray.600", "#fff");

  return (
    <Box
      maxW={450}
      mx="auto"
      minH={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      bgColor={bg}
    >
      <AbsoluteCenter p="1" axis="both">
        <PulseLoader color={bg} />
      </AbsoluteCenter>
    </Box>
  );
};
