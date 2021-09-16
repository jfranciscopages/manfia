import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Select,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialogOverlay,
  useColorModeValue,
  AlertDialogCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import useCheckoutForm from "../hooks/useCheckoutForm";
function CheckoutButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { handleSubmit, setNameValue, setAdressValue, setPaymentValue } =
    useCheckoutForm();
  return (
    <>
      <Button onClick={onOpen}>Finalizar Compra</Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <Flex
          maxH={"92vh"}
          align={"center"}
          justify={"center"}
          bg={useColorModeValue("gray.50", "gray.800")}
        >
          <AlertDialogContent>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              <Stack
                spacing={4}
                w={"full"}
                maxW={"md"}
                bg={useColorModeValue("white", "gray.700")}
                rounded={"xl"}
                boxShadow={"lg"}
                p={6}
                my={12}
              >
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
                  Detalles de compra
                </Heading>
                <FormControl id="nombreApellido">
                  <FormLabel>Nombre y Apellido</FormLabel>
                  <Input
                    type="title"
                    onChange={(e) => setNameValue(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl id="Domicilio">
                  <FormLabel>Domicilio</FormLabel>
                  <Input
                    type="title"
                    onChange={(e) => setAdressValue(e.target.value)}
                    required
                  />
                </FormControl>

                <FormControl
                  id="pago"
                  onChange={(e) => setPaymentValue(e.target.value)}
                  required
                >
                  <FormLabel>Medio de Pago</FormLabel>
                  <Select
                    placeholder="Seleccione el medio de pago"
                    size="md"
                    id="mediosdepago"
                  >
                    <option value="Mercado Pago">Mercado Pago</option>
                    <option value="Tarjeta de Crédito">
                      Tarjeta de Crédito
                    </option>
                    <option value="Tarjeta de Débito">Tarjeta de Débito</option>
                  </Select>
                </FormControl>

                <Stack spacing={6}></Stack>
              </Stack>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                onClick={handleSubmit}
                bg={"teal"}
                color={"white"}
                _hover={{
                  bg: "black",
                }}
              >
                Submit
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </Flex>
      </AlertDialog>
    </>
  );
}

export default CheckoutButton;
