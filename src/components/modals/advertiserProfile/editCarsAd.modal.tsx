import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Box,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { Input } from "../../form/input";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { iCarUpdate, iStatusModalCar } from "../../../interface/car.interface";
import "./style.css";
import { useAuth } from "../../../context/webContext";
import { ModalVerifyDelete } from "./verifyDelete.modal";
import formSchemaCarUpdateAd from "../../../schemas/annoucements/updateCar.schema";

export const ModalEditCarAd = ({ isOpen, onClose }: iStatusModalCar) => {
  const {
    getCarsBrands,
    brands,
    brandSelect,
    currentBrand,
    modelSelect,
    setBrandSelect,
    setModelSelect,
    getCarModels,
    onUpdateCarAd,
    selectedCar,
  } = useAuth();

  const [images, setImages] = useState(["", ""]);
  const [modelInfoSelect, setModelInfoSelect] = useState<any>([]);
  const [brand, setBrand] = useState("");
  const [brandBool, setBrandBool] = useState(false);
  const [model, setModel] = useState("");
  const [modelBool, setModelBool] = useState(false);
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [fipe, setFipe] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [coverImageBool, setCoverImageBool] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionBool, setDescriptionBool] = useState(false);
  const [price, setPrice] = useState("");
  const [priceBool, setPriceBool] = useState(false);
  const [color, setColor] = useState("");
  const [colorBool, setColorBool] = useState(false);
  const [km, setKm] = useState("");
  const [kmBool, setKmBool] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCarUpdate>({
    resolver: yupResolver(formSchemaCarUpdateAd),
  });

  const AddInputImage = () => {
    setImages([...images, ""]);
  };

  const handleChangeImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    images[index] = e.target.value;
    setImages([...images]);
  };

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrandSelect(e.target.value);
  };

  useEffect(() => {
    const modelInfo: any = currentBrand.filter(
      (element: any) => element.name == modelSelect
    );
    setModelInfoSelect(modelInfo);
    setFuel(
      modelInfo[0]?.fuel == 1
        ? "Flex"
        : modelInfo[0]?.fuel == 2
        ? "Híbrido"
        : modelInfo[0]?.fuel == 3
        ? "Elétrico"
        : ""
    );
    setFipe(modelInfo[0]?.value);
    console.log(modelInfo[0]?.value);
    setYear(modelInfo[0]?.year);
  }, [modelSelect]);

  const onSubmitEditAd = (data: iCarUpdate) => {
    const newData = {
      ...data,
      fuel: selectedCar.fuel,
      year: selectedCar.year,
      fipe: selectedCar.fipe,
      published: true,
    };
    console.log(newData);
    onUpdateCarAd(newData, selectedCar.id);
    onClose();
  };

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          console.log("oi");
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={"16px"} color={"grey.1"}>
            Editar Anúncio
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
            <ModalBody>
              <Flex as={"form"} onSubmit={handleSubmit(onSubmitEditAd)}>
                <Flex display={"flex"} gap={"24px"} flexDirection={"column"}>
                  <Input
                    errorMessage={errors.brand?.message}
                    label="Marca"
                    type="text"
                    id="brand"
                    placeholder="Mercedes Benz"
                    register={register}
                    variant="outline"
                    list="listBrand"
                    onClick={getCarsBrands}
                    onChange={(e) => {
                      inputValue(e);
                      setBrandBool(true);
                    }}
                    value={brandBool ? brand : selectedCar.brand}
                  />
                  <datalist id="listBrand">
                    {brands.map((element: any, index: any) => (
                      <option value={element} key={index}>
                        {element}
                      </option>
                    ))}
                  </datalist>
                  <Input
                    errorMessage={errors.model?.message}
                    placeholder="A 200 CGI ADVANCE SEDAN"
                    label="Modelo"
                    type="text"
                    id="model"
                    register={register}
                    list="listModels"
                    onChange={(e) => {
                      getCarModels();
                      setModelSelect(e.target.value);
                      setModelBool(true);
                    }}
                    onClick={(e) => {
                      getCarModels();
                      setModelSelect((e.target as HTMLInputElement).value);
                    }}
                    value={modelBool ? model : selectedCar.model}
                  />
                  <datalist id="listModels">
                    {currentBrand.map((element: any, index: any) => (
                      <option value={element.name} key={index}>
                        {element.name}
                      </option>
                    ))}
                  </datalist>
                  <Flex gap={"14px"}>
                    <Input
                      errorMessage={errors.year?.message}
                      placeholder="2018"
                      label="Ano"
                      type="text"
                      id="year"
                      register={register}
                      defaultValue={selectedCar.year}
                    />
                    <Input
                      errorMessage={errors.fuel?.message}
                      placeholder="Gasolina / Etanol"
                      label="Combustível"
                      type="text"
                      id="fuel"
                      register={register}
                      defaultValue={selectedCar.fuel}
                    />
                  </Flex>
                  <Flex gap={"14px"}>
                    <Input
                      errorMessage={errors.km?.message}
                      placeholder="30.000"
                      label="Quilometragem"
                      type="number"
                      id="km"
                      register={register}
                      onChange={(e) => {
                        setKm(e.target.value);
                        setKmBool(true);
                      }}
                      value={kmBool ? km : selectedCar.km}
                    />
                    <Input
                      errorMessage={errors.color?.message}
                      placeholder="Branco"
                      label="Cor"
                      type="text"
                      id="color"
                      register={register}
                      onChange={(e) => {
                        setColor(e.target.value);
                        setColorBool(true);
                      }}
                      value={colorBool ? color : selectedCar.color}
                    />
                  </Flex>
                  <Flex gap={"14px"} alignItems={"flex-end"}>
                    <Input
                      errorMessage={errors.fipe?.message}
                      placeholder="R$ 48.000,00"
                      label="Preço Tabela FIPE"
                      type="number"
                      id="fipe"
                      register={register}
                      isDisabled={true}
                      value={selectedCar?.fipe}
                    />
                    <Input
                      errorMessage={errors.price?.message}
                      placeholder="R$ 50.000,00"
                      label="Preço"
                      type="number"
                      id="price"
                      register={register}
                      onChange={(e) => {
                        setPrice(e.target.value);
                        setPriceBool(true);
                      }}
                      value={priceBool ? price : selectedCar.price}
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
                    onChange={(e) => {
                      setDescription(e.target.value);
                      setDescriptionBool(true);
                    }}
                    value={
                      descriptionBool ? description : selectedCar.description
                    }
                  />
                  <Box as="div">
                    <Heading as="h3" fontSize="1rem" fontWeight="500">
                      Publicado
                    </Heading>
                  </Box>
                  <Box display="flex" justifyContent="space-between" as="div">
                    <Button
                      color={isActive ? "grey.0" : "grey.10"}
                      border="2px"
                      borderColor={isActive ? "grey.4" : "brand.1"}
                      bg={isActive ? "grey.10" : "brand.1"}
                      width="48%"
                      borderRadius="4px"
                      fontSize="0.875rem"
                      _focus={{ backgroundColor: "brand.1" }}
                      onClick={() => setIsActive(false)}
                    >
                      Sim
                    </Button>
                    <Button
                      color={!isActive ? "grey.0" : "grey.10"}
                      border="2px"
                      borderColor={!isActive ? "grey.4" : "brand.1"}
                      bg={!isActive ? "grey.10" : "brand.1"}
                      width="48%"
                      borderRadius="4px"
                      fontSize="0.875rem"
                      _focus={{ backgroundColor: "brand.1" }}
                      onClick={() => setIsActive(true)}
                    >
                      Não
                    </Button>
                  </Box>
                  <Input
                    errorMessage={errors.cover_image?.message}
                    placeholder="https://image.com"
                    label="Imagem da Capa"
                    type="text"
                    id="cover_image"
                    register={register}
                    onChange={(e) => {
                      setCoverImage(e.target.value);
                      setCoverImageBool(true);
                    }}
                    value={
                      coverImageBool ? coverImage : selectedCar.cover_image
                    }
                  />
                  <Flex flexDirection={"column"} gap={"14px"}>
                    {images.map((image, index) => (
                      <Input
                        key={index + 1}
                        placeholder="https://image.com"
                        label={`${index + 1}° Imagem da galeria`}
                        type="text"
                        id={`images_${index + 1}`}
                        register={register}
                        onChange={(e) => handleChangeImage(e, index)}
                        value={image}
                      />
                    ))}
                  </Flex>
                  <ModalFooter
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"42px"}
                    w={"100%"}
                    paddingInlineStart={"0px"}
                    paddingInlineEnd={"0px"}
                  >
                    <Flex w={"100%"}>
                      <Button
                        variant={"brand2"}
                        fontSize={{ base: "10px", xs1: "14px" }}
                        w={"315px"}
                        borderRadius={"4px"}
                        onClick={AddInputImage}
                        justifySelf={"flex-start"}
                      >
                        Adicionar campo para imagem da galeria
                      </Button>
                    </Flex>
                    <Flex w={"100%"} justifyContent={"flex-end"}>
                      <Button
                        mr={3}
                        onClick={onDeleteOpen}
                        variant={"grey1"}
                        color={"grey.2"}
                        fontSize={"16px"}
                        fontFamily={"inter"}
                        borderRadius={"4px"}
                        w={"55%"}
                      >
                        Excluir Anuncio
                      </Button>
                      <Button
                        variant="brand6"
                        w={"45%"}
                        fontFamily={"inter"}
                        fontSize={"16px"}
                        borderRadius={"4px"}
                        type="submit"
                      >
                        Salvar Alteracoes
                      </Button>
                    </Flex>
                  </ModalFooter>
                </Flex>
              </Flex>
            </ModalBody>
          </Flex>
        </ModalContent>
      </Modal>
      <ModalVerifyDelete
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
        onEditClose={onClose}
      />
    </>
  );
};
