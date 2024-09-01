import { Box, Container } from "@chakra-ui/react";
import { useCurrentPos } from "../../lib/useCurrentPos";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import { getWeather } from "../../api";
import { WeatherSec } from "../../components/WeatherSec";
import { TopBtn } from "../../components/TopBtn";

export const Home = () => {
  // const [todos, setTodos] = useState(() => {});

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
              <TopBtn />
            </>
          )}
        </>
      )}
    </>
  );
};
