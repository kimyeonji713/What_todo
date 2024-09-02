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
import { useRef, useState } from "react";

export const MemoSec = ({ todos, setTodos }) => {
  const bg = useColorModeValue("#fff", "gray.900");
  const fontColor = useColorModeValue("gray.600", "#fff");
  const borderColor = useColorModeValue(
    "1px solid gray.600",
    "1px solid #585858"
  );

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = now.getDay();
  //   const hours = String(date.getHours()).padStart(2, "0");
  //   const minutes = String(date.getMinutes()).padStart(2, "0");
  //   const seconds = String(date.getSeconds()).padStart(2, "0");

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { todo: text } = data;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: text,
        date: `${year}년${month}월${date}일 `,
      },
    ]);

    reset();
  };
  //   ${hours}:${minutes}:${seconds}
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();
  const [currentId, setCurrentId] = useState();

  const onClickFinish = (id) => {
    setTodos(
      todos.map((todo) =>
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
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TabPanel>
      <Heading padding={"0 15px"}>
        <Box as="form" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("todo", {
              required: "빈 내용은 안돼요😣",
            })}
            placeholder="메모를 합시다!"
          />
        </Box>
      </Heading>
      {todos.length > 0 ? (
        <>
          {todos.map((data) => (
            <HStack
              key={data.id}
              borderRadius={20}
              h={"70px"}
              padding={"50px 15px"}
            >
              <Box
                w={"100%"}
                padding={"10px"}
                border={`1px solid #888`}
                borderRadius={"10px"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
                marginTop={"20px"}
              >
                <Checkbox
                  onChange={() => onClickFinish(data.id)}
                  colorScheme="pink"
                  size={"lg"}
                  isChecked={data.finish}
                >
                  <Box>
                    <Text fontSize={"18px"}>{data.date}</Text>
                    <Text fontSize={"15px"}>{data.title}</Text>
                  </Box>
                </Checkbox>
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
