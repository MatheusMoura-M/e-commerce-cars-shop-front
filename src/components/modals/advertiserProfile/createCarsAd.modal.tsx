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
} from "@chakra-ui/react";
import { Input } from "../../form/input";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchemaCarAd from "../../../schemas/annoucements";
import {
  iCreateCarAd,
  iStatusModalCar,
} from "../../../interface/car.interface";
import "./style.css";
import { useAuth } from "../../../context/webContext";

export const ModalCreateCarAd = ({ isOpen, onClose }: iStatusModalCar) => {
  const [images, setImages] = useState<string[]>(["", ""]);
  const [modelInfoSelect, setModelInfoSelect] = useState<any>([]);
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [fipe, setFipe] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [km, setKm] = useState("");

  const {
    getCarsBrands,
    brands,
    brandSelect,
    currentBrand,
    modelSelect,
    setBrandSelect,
    setModelSelect,
    getCarModels,
    onCreateCarAd,
  } = useAuth();

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
    setYear(modelInfo[0]?.year);
  }, [modelSelect]);

  const onSubmitCreateAd = (data: iCreateCarAd) => {
    const newData = {
      ...data,
      fuel: fuel,
      year: year,
      fipe: fipe,
      published: true,
      is_good_price: false,
    };
    console.log(newData);
    onCreateCarAd(newData);
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
            <ModalBody>
              <Flex as={"form"} onSubmit={handleSubmit(onSubmitCreateAd)}>
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
                      value={year ? year : ""}
                    />
                    <Input
                      errorMessage={errors.fuel?.message}
                      placeholder="Gasolina / Etanol"
                      label="Combustível"
                      type="text"
                      id="fuel"
                      register={register}
                      value={fuel ? fuel : ""}
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
                      value={fipe ? fipe : 0}
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
                  <ModalFooter
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"42px"}
                  >
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
            </ModalBody>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
};
