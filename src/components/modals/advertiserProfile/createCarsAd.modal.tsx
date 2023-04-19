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
  Flex,
  Textarea,
} from "@chakra-ui/react";
import { Input } from "../../form/input";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchemaCarAd from "../../../schemas/annoucements";
import { iCreateCarAd } from "../../../interface/car.interface";

interface iStatusModalCar {
  isOpen: boolean;
  onClose(): void;
}

export const ModalCreateCarAd = ({ isOpen, onClose }: iStatusModalCar) => {
  const [images, setImages] = useState<string[]>(["", ""]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCreateCarAd>({
    resolver: yupResolver(formSchemaCarAd),
  });

  const AddInputImage = () => {
    setImages([...images, ""]);
  };

  const handleChangeImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    images[index] = e.target.value;
    console.log(images);
    setImages([...images]);
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
              <Input
                errorMessage={errors.brand?.message}
                label="Marca"
                type="text"
                id="brand"
                placeholder="Mercedes Benz"
                register={register}
                variant="outline"
              />
              <Input
                errorMessage={errors.model?.message}
                placeholder="A 200 CGI ADVANCE SEDAN"
                label="Modelo"
                type="text"
                id="model"
                register={register}
              />
              <Flex gap={"14px"}>
                <Input
                  errorMessage={errors.year?.message}
                  placeholder="2018"
                  label="Ano"
                  type="text"
                  id="year"
                  register={register}
                />
                <Input
                  errorMessage={errors.fuel?.message}
                  placeholder="Gasolina / Etanol"
                  label="Combustível"
                  type="text"
                  id="fuel"
                  register={register}
                />
              </Flex>
              <Flex gap={"14px"}>
                <Input
                  errorMessage={errors.km?.message}
                  placeholder="30.000"
                  label="Quilometragem"
                  type="text"
                  id="km"
                  register={register}
                />
                <Input
                  errorMessage={errors.color?.message}
                  placeholder="Branco"
                  label="Cor"
                  type="text"
                  id="color"
                  register={register}
                />
              </Flex>
              <Flex gap={"14px"} alignItems={"flex-end"}>
                <Input
                  errorMessage={errors.fipe?.message}
                  placeholder="R$ 48.000,00"
                  label="Preço Tabela FIPE"
                  type="text"
                  id="fipe"
                  register={register}
                  isDisabled={true}
                />
                <Input
                  errorMessage={errors.price?.message}
                  placeholder="R$ 50.000,00"
                  label="Preço"
                  type="text"
                  id="price"
                  register={register}
                />
              </Flex>
              <Input
                errorMessage={errors.description?.message}
                placeholder="Descreva detalhes do carro aqui..."
                h={"80px"}
                label="Descrição"
                type="text"
                id="description"
                register={register}
              />
              <Input
                errorMessage={errors.cover_image?.message}
                placeholder="https://image.com"
                label="Imagem da Capa"
                type="text"
                id="cover_image"
                register={register}
              />
              <Flex flexDirection={"column"} gap={"14px"}>
                {images.map((image, index) => (
                  <Input
                    key={index + 1}
                    placeholder="https://image.com"
                    label={`${index + 1}° Imagem da galeria`}
                    type="text"
                    id={`images_${index + 1}`}
                    value={image}
                    register={register}
                    onChange={(e) => handleChangeImage(e, index)}
                  />
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
