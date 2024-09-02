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
          <ModalHeader>정보</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              textAlign={"center"}
              fontSize={"14px"}
              fontWeight={"300"}
              margin={"5px 0"}
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
            >
              github:
              <Link to="https://github.com/kimyeonji713/What_todo">
                <Text marginLeft={"5px"}>
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
      <Heading textAlign={"center"} fontSize={"30px"} color={fontColor}>
        뭐하셈? 적으셈!
      </Heading>

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
