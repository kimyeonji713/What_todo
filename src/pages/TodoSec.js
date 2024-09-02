import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Checkbox,
  Heading,
  HStack,
  Input,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { DeleteBtn } from "../components/DeleteBtn";
import { MemoSec } from "./MemoSec";

export const TodoSec = ({ todos, setTodos }) => {
  const bg = useColorModeValue("#fff", "gray.900");
  const fontColor = useColorModeValue("gray.600", "#fff");

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = now.getDay();

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
    <Box
      maxW={"450px"}
      w={"100%"}
      minH={"100vh"}
      mx={"auto"}
      bgColor={bg}
      color={fontColor}
      padding={"10px 0"}
    >
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab w={"50%"} fontSize={"20px"}>
            TODO
          </Tab>
          <Tab w={"50%"} fontSize={"20px"}>
            MEMO
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="#FF0080"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
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
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    padding={"50px 15px"}
                  >
                    <Checkbox
                      onChange={() => onClickFinish(data.id)}
                      colorScheme="pink"
                      size={"lg"}
                      isChecked={data.finish}
                    >
                      <Box>
                        <Text fontSize={"18px"}>{data.title}</Text>
                        <Text fontSize={"15px"}>{data.date}</Text>
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
          <MemoSec todos={todos} setTodos={setTodos} />
        </TabPanels>
      </Tabs>
    </Box>
  );
};
