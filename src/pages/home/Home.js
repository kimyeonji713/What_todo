import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getUltraWeather, getWeather } from "../../api";
import { useCurrentPos } from "../../lib/useCurrentPos";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const [todos, setTodos] = useState(() => {});
  const { data, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });

  return <Box maxW={"450px"} w={"100%"} minH={"100vh"}></Box>;
};
