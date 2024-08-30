import { Box } from "@chakra-ui/react";
import { useState } from "react";

export const Home = () => {
  const [todos, setTodos] = useState(() => {});
  return <Box maxW={"450px"} w={"100%"} minH={"100vh"}></Box>;
};
