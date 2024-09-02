import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

export const DeleteBtn = ({
  isOpen,
  onClose,
  cancelRef,
  currentId,
  onClickDelete,
}) => {
  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader>삭제 확인</AlertDialogHeader>

          <AlertDialogBody>정말 삭제 하실껀가요?</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              취소
            </Button>

            <Button
              colorScheme="red"
              marginLeft={"20px"}
              onClick={() => {
                onClose();
                onClickDelete(currentId);
              }}
            >
              삭제
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
