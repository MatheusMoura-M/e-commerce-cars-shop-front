import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Textarea,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

interface iStatusModalCar {
  isOpen: boolean;
  onClose(): void;
}

export const ModalCreateCarAd = ({ isOpen, onClose }: iStatusModalCar) => {
  const [images, setImages] = useState([]);

  const AddInputImage = () => {
    setImages([...images, ""]);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"16px"} color={"grey.1"}>
            Criar Anúncio
          </ModalHeader>
          <Flex flexDirection={"column"} pl={"15px"}>
            <ModalHeader
              fontFamily={"inter"}
              fontSize={"14px"}
              color={"grey.1"}
            >
              Informações do veículo
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody display={"flex"} gap={"24px"} flexDirection={"column"}>
              <FormControl>
                <FormLabel
                  fontFamily={"inter"}
                  fontSize={"14px"}
                  color={"grey.1"}
                >
                  Marca
                </FormLabel>
                <Input
                  placeholder="Mercedes Benz"
                  color={"grey.3"}
                  fontFamily={"inter"}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  fontFamily={"inter"}
                  fontSize={"14px"}
                  color={"grey.1"}
                >
                  Modelo
                </FormLabel>
                <Input
                  placeholder="A 200 CGI ADVANCE SEDAN"
                  color={"grey.3"}
                  fontFamily={"inter"}
                  fontSize={"16px"}
                />
              </FormControl>
              <Flex gap={"14px"}>
                <FormControl>
                  <FormLabel
                    fontFamily={"inter"}
                    fontSize={"14px"}
                    color={"grey.1"}
                  >
                    Ano
                  </FormLabel>
                  <Input
                    placeholder="2018"
                    color={"grey.3"}
                    fontFamily={"inter"}
                    fontSize={"16px"}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontFamily={"inter"}
                    fontSize={"14px"}
                    color={"grey.1"}
                  >
                    Combustível
                  </FormLabel>
                  <Input
                    placeholder="Gasolina / Etanol"
                    color={"grey.3"}
                    fontFamily={"inter"}
                    fontSize={"16px"}
                  />
                </FormControl>
              </Flex>
              <Flex gap={"14px"}>
                <FormControl>
                  <FormLabel
                    fontFamily={"inter"}
                    fontSize={"14px"}
                    color={"grey.1"}
                  >
                    Quilometragem
                  </FormLabel>
                  <Input
                    placeholder="30.000"
                    color={"grey.3"}
                    fontFamily={"inter"}
                    fontSize={"16px"}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontFamily={"inter"}
                    fontSize={"14px"}
                    color={"grey.1"}
                  >
                    Cor
                  </FormLabel>
                  <Input
                    placeholder="Branco"
                    color={"grey.3"}
                    fontFamily={"inter"}
                    fontSize={"16px"}
                  />
                </FormControl>
              </Flex>
              <Flex gap={"14px"}>
                <FormControl>
                  <FormLabel
                    fontFamily={"inter"}
                    fontSize={"14px"}
                    color={"grey.1"}
                  >
                    Preço tabela FIPE
                  </FormLabel>
                  <Input
                    placeholder="R$ 48.000,00"
                    color={"grey.3"}
                    fontFamily={"inter"}
                    fontSize={"16px"}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontFamily={"inter"}
                    fontSize={"14px"}
                    color={"grey.1"}
                  >
                    Preço
                  </FormLabel>
                  <Input
                    placeholder="R$ 50.000,00"
                    color={"grey.3"}
                    fontFamily={"inter"}
                    fontSize={"16px"}
                  />
                </FormControl>
              </Flex>
              <FormControl>
                <FormLabel
                  fontFamily={"inter"}
                  fontSize={"14px"}
                  color={"grey.1"}
                >
                  Descrição
                </FormLabel>
                <Textarea
                  placeholder="Descreva detalhes do carro aqui..."
                  color={"grey.3"}
                  fontFamily={"inter"}
                  h={"80px"}
                  wrap="hard"
                  resize={"none"}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  fontFamily={"inter"}
                  fontSize={"14px"}
                  color={"grey.1"}
                >
                  Imagem da Capa
                </FormLabel>
                <Input
                  placeholder="https://image.com"
                  color={"grey.3"}
                  fontFamily={"inter"}
                  fontSize={"16px"}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  fontFamily={"inter"}
                  fontSize={"14px"}
                  color={"grey.1"}
                >
                  1° Imagem da galeria
                </FormLabel>
                <Input
                  placeholder="https://image.com"
                  color={"grey.3"}
                  fontFamily={"inter"}
                  fontSize={"16px"}
                />
              </FormControl>
              <FormControl>
                <FormLabel
                  fontFamily={"inter"}
                  fontSize={"14px"}
                  color={"grey.1"}
                >
                  2° Imagem da galeria
                </FormLabel>
                <Input
                  placeholder="https://image.com"
                  color={"grey.3"}
                  fontFamily={"inter"}
                  fontSize={"16px"}
                />
              </FormControl>
              <Flex flexDirection={"column"} gap={"14px"}>
                {images.map((image, index) => (
                  <FormControl key={index}>
                    <FormLabel
                      fontFamily={"inter"}
                      fontSize={"14px"}
                      color={"grey.1"}
                    >
                      {`${index + 3}° Imagem da galeria`}
                    </FormLabel>
                    <Input
                      placeholder="https://image.com"
                      color={"grey.3"}
                      fontFamily={"inter"}
                      fontSize={"16px"}
                      value={image}
                      id={`image-${index + 3}`}
                    />
                  </FormControl>
                ))}
              </Flex>
            </ModalBody>
          </Flex>

          <ModalFooter display={"flex"} flexDirection={"column"} gap={"42px"}>
            <Flex w={"100%"} pl={"15px"}>
              <Button
                variant={"brand2"}
                fontSize={{ base: "10px", xs1: "14px" }}
                w={"315px"}
                borderRadius={"4px"}
                onClick={AddInputImage}
              >
                Adicionar campo para imagem da galeria
              </Button>
            </Flex>
            <Flex w={"100%"} justifyContent={"flex-end"}>
              <Button
                mr={3}
                onClick={onClose}
                variant={"grey1"}
                color={"grey.2"}
                fontSize={"16px"}
                fontFamily={"inter"}
                borderRadius={"4px"}
              >
                Cancelar
              </Button>
              <Button
                variant="brand6"
                w={"193px"}
                fontFamily={"inter"}
                fontSize={"16px"}
                borderRadius={"4px"}
              >
                Criar anúncio
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
