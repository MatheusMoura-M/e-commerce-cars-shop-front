import { Box, Button, Flex, Heading, ModalFooter } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { iCarUpdate, iStatusModalOptional } from "../../../interface";
import { useAuth } from "../../../context/webContext";
import formSchemaCarUpdateAd from "../../../schemas/annoucements/updateCar.schema";
import { useRegex } from "../../../context/regexInputs.context";

const FormEditCarsAd = ({
  onClose,
  isOpen,
  onDeleteOpen,
}: iStatusModalOptional) => {
  const { formattedPrice, price } = useRegex();

  const {
    getCarsBrands,
    brands,
    currentBrand,
    setBrandSelect,
    setModelSelect,
    getCarModels,
    onUpdateCarAd,
    selectedCar,
    isBool,
    onCreateImageCar,
    setFipeEdit,
    setFuelEdit,
    setYearEdit,
  } = useAuth();

  const [images, setImages] = useState(["", ""]);
  const [coverImage, setCoverImage] = useState("");
  const [coverImageBool, setCoverImageBool] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionBool, setDescriptionBool] = useState(false);
  const [priceBool, setPriceBool] = useState(false);
  const [color, setColor] = useState("");
  const [colorBool, setColorBool] = useState(false);
  const [km, setKm] = useState("");
  const [kmBool, setKmBool] = useState(false);
  const [isActive, setIsActive] = useState(false);

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

  const handleChangeImage = (data: string, index: number) => {
    images[index] = data;
    setImages([...images]);
  };

  const inputValue = (data: string) => {
    setBrandSelect(data);
  };

  useEffect(() => {
    const modelInfo: any = currentBrand.filter((element: any) => {
      element.name === selectedCar.model;
    });
    setFuelEdit(
      modelInfo[0]?.fuel == 1
        ? "Flex"
        : modelInfo[0]?.fuel == 2
        ? "Híbrido"
        : modelInfo[0]?.fuel == 3
        ? "Elétrico"
        : ""
    );
    setFipeEdit(modelInfo[0]?.value);
    setYearEdit(modelInfo[0]?.year);
  }, [selectedCar.model, isBool]);

  useEffect(() => {
    selectedCar.published ? setIsActive(true) : setIsActive(false);
  }, [isOpen]);

  type variationOptions = {
    [key: string]: string | boolean;
  };

  const onSubmitEditAd = (data: iCarUpdate) => {
    const newData: variationOptions = {
      ...data,
      fuel: selectedCar.fuel,
      year: selectedCar.year,
      fipe: selectedCar.fipe,
      published: isActive,
    };

    for (let elem in newData) {
      if (elem.includes("images") && newData[elem] !== "") {
        const newObj = { image_url: newData[elem] };
        onCreateImageCar(newObj, selectedCar.id);
      }
    }

    onUpdateCarAd(newData, selectedCar.id);
    onClose!();
  };

  return (
    <Flex as={"form"} onSubmit={handleSubmit(onSubmitEditAd)}>
      <Flex gap={"24px"} flexDir={"column"}>
        <Input
          id="brand"
          errorMessage={errors.brand?.message}
          label="Marca"
          type="text"
          placeholder={selectedCar.brand}
          register={register}
          variant="outline"
          list="listBrand"
          onClick={getCarsBrands}
          onChange={(e) => {
            inputValue(e.target.value);
          }}
          value={""}
        />
        <datalist id="listBrand">
          {brands.map((element: any, index: any) => (
            <option value={element} key={index}>
              {element}
            </option>
          ))}
        </datalist>
        <Input
          id="model"
          errorMessage={errors.model?.message}
          placeholder="A 200 CGI ADVANCE SEDAN"
          label="Modelo"
          type="text"
          register={register}
          list="listModels"
          onChange={(e) => {
            getCarModels();
            setModelSelect(e.target.value);
          }}
          onClick={(e) => {
            getCarModels();
            setModelSelect((e.target as HTMLInputElement).value);
          }}
          value={""}
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
            id="year"
            errorMessage={errors.year?.message}
            placeholder="2018"
            label="Ano"
            type="text"
            register={register}
            defaultValue={selectedCar.year}
          />
          <Input
            id="fuel"
            errorMessage={errors.fuel?.message}
            placeholder="Gasolina / Etanol"
            label="Combustível"
            type="text"
            register={register}
            defaultValue={selectedCar.fuel}
          />
        </Flex>
        <Flex gap={"14px"}>
          <Input
            id="km"
            className="km_class"
            errorMessage={errors.km?.message}
            placeholder="30.000"
            label="Quilometragem"
            type="number"
            register={register}
            onChange={(e) => {
              setKm(e.target.value);
              setKmBool(true);
            }}
            value={kmBool ? km : selectedCar ? selectedCar.km : ""}
          />
          <Input
            id="color"
            errorMessage={errors.color?.message}
            placeholder="Branco"
            label="Cor"
            type="text"
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
            id="fipe"
            errorMessage={errors.fipe?.message}
            placeholder="R$ 48.000,00"
            label="Preço Tabela FIPE"
            type="number"
            register={register}
            isDisabled={true}
            value={selectedCar?.fipe}
          />
          <Input
            id="price"
            errorMessage={errors.price?.message}
            placeholder="R$ 50.000,00"
            label="Preço"
            type="text"
            register={register}
            onChange={(e) => {
              formattedPrice(e.target.value);
              setPriceBool(true);
            }}
            value={priceBool ? price : selectedCar.price}
          />
        </Flex>
        <Input
          id="description"
          errorMessage={errors.description?.message}
          placeholder="Descreva detalhes do carro aqui..."
          h={"80px"}
          label="Descrição"
          type="text"
          register={register}
          onChange={(e) => {
            setDescription(e.target.value);
            setDescriptionBool(true);
          }}
          value={descriptionBool ? description : selectedCar.description}
        />
        <Box>
          <Heading as="h3" fontSize="1rem" fontWeight="500">
            Publicado
          </Heading>
        </Box>
        <Flex justifyContent="space-between">
          <Button
            color={!isActive ? "grey.0" : "grey.10"}
            border="2px"
            borderColor={!isActive ? "grey.4" : "brand.1"}
            bg={!isActive ? "grey.10" : "brand.1"}
            w="48%"
            borderRadius="4px"
            fontSize="0.875rem"
            _focus={{ bg: "brand.1" }}
            onClick={() => setIsActive(true)}
          >
            Sim
          </Button>
          <Button
            color={isActive ? "grey.0" : "grey.10"}
            border="2px"
            borderColor={isActive ? "grey.4" : "brand.1"}
            bg={isActive ? "grey.10" : "brand.1"}
            w="48%"
            borderRadius="4px"
            fontSize="0.875rem"
            _focus={{ bg: "brand.1" }}
            onClick={() => {
              setIsActive(false);
            }}
          >
            Não
          </Button>
        </Flex>
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
          value={coverImageBool ? coverImage : selectedCar.cover_image}
        />
        <Flex flexDir={"column"} gap={"14px"}>
          {images.map((image, index) => (
            <Input
              key={index + 1}
              placeholder="https://image.com"
              label={`${index + 1}° Imagem da galeria`}
              type="text"
              id={`images_${index + 1}`}
              register={register}
              onChange={(e) => handleChangeImage(e.target.value, index)}
              value={image}
            />
          ))}
        </Flex>
        <ModalFooter flexDir={"column"} gap={"42px"} w={"100%"} px={0}>
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
  );
};

export default FormEditCarsAd;
