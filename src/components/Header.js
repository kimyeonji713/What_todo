import { MoonIcon, QuestionOutlineIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PiPencilCircleLight } from "react-icons/pi";

export const Header = () => {
  const { toggleColorMode } = useColorMode();
  const Icon = useColorModeValue(MoonIcon, SunIcon);
  const bg = useColorModeValue("#fff", "gray.900");
  const fontColor = useColorModeValue("gray.600", "#fff");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      maxW={"450px"}
      w={"100%"}
      h={"80px"}
      bgColor={bg}
      mx={"auto"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Button onClick={onOpen} bgColor={bg}>
        <QuestionOutlineIcon />
      </Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={fontColor}>정보</ModalHeader>
          <ModalCloseButton color={fontColor} />
          <ModalBody>
            <Text
              textAlign={"center"}
              fontSize={"14px"}
              fontWeight={"300"}
              margin={"5px 0"}
              color={fontColor}
            >
              &copy; KimYeonJI 2024
            </Text>
            <Text
              textAlign={"center"}
              fontSize={"14px"}
              fontWeight={"300"}
              margin={"5px 0"}
              display={"flex"}
              justifyContent={"center"}
              color={fontColor}
            >
              github:
              <Link to="https://github.com/kimyeonji713/What_todo">
                <Text color={fontColor} marginLeft={"5px"}>
                  https://github.com/kimyeonji713/What_todo
                </Text>
              </Link>
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>닫기</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Box fontSize={"35px"} color={fontColor}>
          <PiPencilCircleLight />
        </Box>
        <Heading textAlign={"center"} fontSize={"16px"} color={fontColor}>
          <Text>뭐하셈?</Text>
          <Text marginTop={"-5px"}>적으셈!</Text>
        </Heading>
      </Box>

      <IconButton
        bgColor={bg}
        color={fontColor}
        fontSize={"18px"}
        onClick={toggleColorMode}
        variant={"ghost"}
        aria-label="Toggle dark mode"
        icon={<Icon />}
      />
    </Box>
  );
};
