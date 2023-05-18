import { Button, Flex, ModalFooter } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { iCreateCarAd, iStatusModalOptional } from "../../../interface";
import { useAuth } from "../../../context/webContext";
import formSchemaCarAd from "../../../schemas/annoucements";

const FormCreateCarsAd = ({ onClose }: iStatusModalOptional) => {
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
  const [price, setPrice] = useState("");
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
      is_good_price: false,
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
            errorMessage={errors.year?.message}
            placeholder="2018"
            label="Ano"
            type="text"
            id="year"
            register={register}
            value={yearCreate ? yearCreate : ""}
          />
          <Input
            errorMessage={errors.fuel?.message}
            placeholder="Gasolina / Etanol"
            label="Combustível"
            type="text"
            id="fuel"
            register={register}
            value={fuelCreate ? fuelCreate : ""}
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
            onChange={(e) => setKm(e.target.value)}
            value={km}
          />
          <Input
            errorMessage={errors.color?.message}
            placeholder="Branco"
            label="Cor"
            type="text"
            id="color"
            register={register}
            onChange={(e) => setColor(e.target.value)}
            value={color}
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
            value={fipeCreate ? fipeCreate : 0}
          />
          <Input
            errorMessage={errors.price?.message}
            placeholder="R$ 50.000,00"
            label="Preço"
            type="number"
            id="price"
            register={register}
            onChange={(e) => setPrice(e.target.value)}
            value={price}
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
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Input
          errorMessage={errors.cover_image?.message}
          placeholder="https://image.com"
          label="Imagem da Capa"
          type="text"
          id="cover_image"
          register={register}
          onChange={(e) => setCoverImage(e.target.value)}
          value={coverImage}
        />
        <Flex flexDir={"column"} gap={"14px"}>
          {images.map((image, index) => (
            <Input
              key={index + 1}
              placeholder="https://image.com"
              label={`${index + 1}° Imagem da galeria`}
              type="text"
              id={`images_${index + 1}`}
              value={image}
              register={register}
              onChange={(e) => handleChangeImage(e.target.value, index)}
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
