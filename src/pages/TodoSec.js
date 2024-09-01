import { Box, Heading, Input, Text, useColorModeValue } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const TodoSec = ({ todos, setTodos }) => {
  const bg = useColorModeValue("#fff", "gray.900");
  const fontColor = useColorModeValue("gray.600", "#fff");

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDay();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { todo: text } = data;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: text,
        date: `${year}년${month}월${day}일`,
      },
    ]);

    reset();
  };

  return (
    <Box
      maxW={"450px"}
      w={"100%"}
      h={"600px"}
      mx={"auto"}
      marginTop={"20px"}
      bgColor={bg}
      color={fontColor}
    >
      <Text fontSize={"20px"} marginLeft={"15px"}>
        TODO
      </Text>

      <Heading padding={"0 15px"}>
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("todo", {
              required: "빈 내용은 안돼요😣",
            })}
            placeholder="내용을 적어주세요."
          />
        </Box>
      </Heading>
    </Box>
  );
};
