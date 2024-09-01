import { Box, Container } from "@chakra-ui/react";
import { useCurrentPos } from "../../lib/useCurrentPos";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { getWeather } from "../../api";
import { TopBtn } from "../../components/TopBtn";
import { useEffect, useState } from "react";
import { WeatherSec } from "../WeatherSec";
import { TodoSec } from "../TodoSec";

export const Home = () => {
  const [todos, setTodos] = useState(() => {
    const registTodo = localStorage.getItem("todos");
    return registTodo ? JSON.parse(registTodo) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, []);

  const { lat, lon } = useCurrentPos();

  const { data, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });

  console.log(data);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle title={"Home"} />
          {data && (
            <>
              <WeatherSec tempData={data} />
              <TodoSec todos={todos} setTodos={setTodos} />
              <TopBtn />
            </>
          )}
        </>
      )}
    </>
  );
};
