import { Button, Flex, ModalFooter } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { iCreateCarAd, iStatusModalOptional } from "../../../interface";
import { useAuth } from "../../../context/webContext";
import formSchemaCarAd from "../../../schemas/annoucements";
import { useRegex } from "../../../context/regexInputs.context";

const FormCreateCarsAd = ({ onClose }: iStatusModalOptional) => {
  const { formattedPrice, price } = useRegex();

  const {
    getCarsBrands,
    brands,
    brandSelect,
    setBrandSelect,
    setModelSelect,
    getCarModels,
    onCreateCarAd,
    yearCreate,
    fuelCreate,
    fipeCreate,
    currentBrand,
    modelSelect,
    setFipeCreate,
    setFuelCreate,
    setYearCreate,
  } = useAuth();

  const [images, setImages] = useState<string[]>(["", ""]);
  const [coverImage, setCoverImage] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [km, setKm] = useState("");

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

  const handleChangeImage = (data: string, index: number) => {
    images[index] = data;
    setImages([...images]);
  };

  const inputValue = (data: string) => {
    setBrandSelect(data);
  };

  const onSubmitCreateAd = (data: iCreateCarAd) => {
    const newData = {
      ...data,
      fuel: fuelCreate,
      year: yearCreate,
      fipe: fipeCreate,
      published: true,
    };

    onCreateCarAd(newData);
    onClose!();
  };

  useEffect(() => {
    const modelInfo: any = currentBrand.filter(
      (element: any) => element.name == modelSelect
    );
    setFuelCreate(
      modelInfo[0]?.fuel == 1
        ? "Flex"
        : modelInfo[0]?.fuel == 2
        ? "Híbrido"
        : modelInfo[0]?.fuel == 3
        ? "Elétrico"
        : ""
    );
    setFipeCreate(modelInfo[0]?.value);
    setYearCreate(modelInfo[0]?.year);
  }, [modelSelect]);

  return (
    <Flex as={"form"} onSubmit={handleSubmit(onSubmitCreateAd)}>
      <Flex gap={"24px"} flexDir={"column"}>
        <Input
          id="brand"
          errorMessage={errors.brand?.message}
          label="Marca"
          type="text"
          placeholder="Mercedes Benz"
          register={register}
          variant="outline"
          list="listBrand"
          onClick={getCarsBrands}
          onChange={(e) => {
            inputValue(e.target.value);
          }}
          value={brandSelect}
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
          value={modelSelect}
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
            placeholder={yearCreate ? yearCreate : "2018"}
            label="Ano"
            type="text"
            register={register}
            isDisabled={true}
          />
          <Input
            id="fuel"
            errorMessage={errors.fuel?.message}
            placeholder={fuelCreate ? fuelCreate : "Gasolina / Etanol"}
            label="Combustível"
            type="text"
            register={register}
            isDisabled={true}
            defaultValue={fuelCreate ? fuelCreate : ""}
          />
        </Flex>
        <Flex gap={"14px"}>
          <Input
            id="km"
            errorMessage={errors.km?.message}
            placeholder="30.000"
            label="Quilometragem"
            type="number"
            register={register}
            onChange={(e) => setKm(e.target.value)}
            value={km}
          />
          <Input
            id="color"
            errorMessage={errors.color?.message}
            placeholder="Branco"
            label="Cor"
            type="text"
            register={register}
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
        </Flex>
        <Flex gap={"14px"} alignItems={"flex-end"}>
          <Input
            id="fipe"
            errorMessage={errors.fipe?.message}
            placeholder={fipeCreate ? fipeCreate : "0"}
            label="Preço Tabela FIPE"
            type="number"
            register={register}
            isDisabled={true}
          />
          <Input
            id="price"
            errorMessage={errors.price?.message}
            placeholder="R$ 50.000,00"
            label="Preço"
            type="text"
            register={register}
            onChange={(e) => formattedPrice(e.target.value)}
            value={price}
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
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Input
          id="cover_image"
          errorMessage={errors.cover_image?.message}
          placeholder="https://image.com"
          label="Imagem da Capa"
          type="text"
          register={register}
          onChange={(e) => setCoverImage(e.target.value)}
          value={coverImage}
        />
        <Flex flexDir={"column"} gap={"14px"}>
          {images.map((image, index) => (
            <Input
              id={`images_${index + 1}`}
              key={index + 1}
              placeholder="https://image.com"
              label={`${index + 1}° Imagem da galeria`}
              type="text"
              register={register}
              onChange={(e) => handleChangeImage(e.target.value, index)}
              value={image}
            />
          ))}
        </Flex>
        <ModalFooter flexDir={"column"} gap={"42px"}>
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
              type="submit"
            >
              Criar anúncio
            </Button>
          </Flex>
        </ModalFooter>
      </Flex>
    </Flex>
  );
};

export default FormCreateCarsAd;
