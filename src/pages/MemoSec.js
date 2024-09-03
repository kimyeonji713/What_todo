import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Heading,
  HStack,
  Input,
  TabPanel,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteBtn } from "../components/DeleteBtn";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

export const MemoSec = () => {
  const bg = useColorModeValue("#fff", "gray.900");
  const fontColor = useColorModeValue("gray.600", "#fff");
  const borderColor = useColorModeValue(
    "1px solid #E9EFEC",
    "1px solid #585858"
  );

  const [todos_2, setTodos_2] = useState(() => {
    const registTodo = localStorage.getItem("todos");
    return registTodo ? JSON.parse(registTodo) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos_2));
  }, [todos_2]);

  const now = new Date();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  // const hours = String(now.getHours()).padStart(2, "0");
  // const minutes = String(now.getMinutes()).padStart(2, "0");
  // const seconds = String(now.getSeconds()).padStart(2, "0");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit_2 = (data) => {
    const { todo: text } = data;
    setTodos_2([
      ...todos_2,
      {
        id: Date.now(),
        title: text,
        date: `${month}.${date} `,
      },
    ]);

    reset();
  };
  //   ${hours}:${minutes}:${seconds}
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [currentId, setCurrentId] = useState();

  const onClickFinish = (id) => {
    setTodos_2(
      todos_2.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              finish: !todo.finish,
            }
          : todo
      )
    );
  };

  const onClickDelete = (id) => {
    setTodos_2(todos_2.filter((todo) => todo.id !== id));
  };

  return (
    <TabPanel>
      <Heading padding={"0 15px"}>
        <Box as="form" onSubmit={handleSubmit(onSubmit_2)}>
          <Input
            {...register("todo", {
              required: "빈 내용은 안돼요😣",
            })}
            placeholder="메모를 합시다!"
          />
        </Box>
      </Heading>
      {todos_2.length > 0 ? (
        <>
          {todos_2.map((data) => (
            <HStack
              key={data.id}
              borderRadius={20}
              minH={"70px"}
              padding={"5px 15px"}
            >
              <Box
                w={"100%"}
                padding={"10px"}
                border={borderColor}
                borderRadius={"10px"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                marginTop={"20px"}
              >
                <Box
                  onChange={() => onClickFinish(data.id)}
                  // colorScheme="pink"
                  size={"lg"}
                  isChecked={data.finish}
                  display={"flex"}
                >
                  <Box
                    minW={"50px"}
                    h={"50px"}
                    color={"#D63484"}
                    bgColor={"#FFE6E6"}
                    borderRadius={"50%"}
                    marginRight={"15px"}
                  >
                    <Text
                      fontSize={"17px"}
                      textAlign={"center"}
                      lineHeight={"50px"}
                      fontWeight={"600"}
                    >
                      {data.date}
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize={"16px"}>{data.title}</Text>
                  </Box>
                </Box>
                <DeleteIcon
                  color={"red.500"}
                  opacity={"0.7"}
                  cursor={"pointer"}
                  onClick={() => {
                    onOpen(setCurrentId(data.id));
                  }}
                />
              </Box>
            </HStack>
          ))}
        </>
      ) : (
        <Box
          textAlign={"center"}
          marginTop={"80px"}
          fontSize={"18px"}
          color={"#999"}
        >
          <Text>뭐하셈!</Text>
          <Text> 빨리 적으셈!</Text>
        </Box>
      )}

      <DeleteBtn
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        currentId={currentId}
        onClickDelete={onClickDelete}
      />
    </TabPanel>
  );
};
