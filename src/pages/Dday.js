import {
  Box,
  Checkbox,
  Heading,
  HStack,
  Input,
  TabPanel,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { DeleteBtn } from "../components/DeleteBtn";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
export const Dday = ({ todos, setTodos }) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { todo: text } = data;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: text,
        date: `${year}년${month}월${date}일`,
      },
    ]);

    reset();
  };

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
      <Text fontSize={"20px"} marginLeft={"15px"}>
        D-DAY
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
      {todos.length > 0 ? (
        <>
          {todos.map((data) => (
            <HStack
              key={data.id}
              borderRadius={20}
              h={"70px"}
              p={"15px"}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Checkbox
                onChange={() => onClickFinish(data.id)}
                colorScheme="pink"
                size={"lg"}
                isChecked={data.finish}
              >
                <Box>
                  <Text>{data.title}</Text>
                  <Text>{data.date}</Text>
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
