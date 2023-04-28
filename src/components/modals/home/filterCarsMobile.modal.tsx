import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Text,
  filter,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { contextHomeProvider } from "../../../context/homePage.context";

interface iStatusModal {
  isOpen: boolean;
  onClose(): void;
}


const ModalFilterMobile = ({ isOpen, onClose}: iStatusModal) => {
  
  const {
    brands, 
    colors, 
    fuels, 
    models, 
    years, 
    carAd, 
    setColors, 
    setFuels, 
    setModels, 
    setYears,
    setFuelSelected,
    setModelSelected,
    setYearSelected,
    setColorSelected,
    setBrandSelected,
    brandSelected,
    modelSelected,
    yearSelected,
    colorSelected,
    fuelSelected,
    filterCarList,
    filterCar
    
  } = useContext(contextHomeProvider)

  useEffect(() => {

    const filter = () => {
  
      const colorArr: string[] = []
      const modelArr: string[] = []
      let yaersArr: string[] = []
      const fuelArr:  string[] = []

      if(filterCar.length > 0){

        filterCar.forEach(car => {

          if(!colorArr.includes(car.color)){
            colorArr.push(car.color)
          }

          if(!modelArr.includes(car.model)){
            modelArr.push(car.model)
          }

          if(!yaersArr.includes(car.year)){
            yaersArr.push(car.year)
          }

          if(!fuelArr.includes(car.fuel)){
            fuelArr.push(car.fuel)
          }
        })

      }else{

        carAd.forEach(car => {
    
          if(!colorArr.includes(car.color)){
            colorArr.push(car.color)
          }
    
          if(!modelArr.includes(car.model)){
            modelArr.push(car.model)
          }
    
          if(!yaersArr.includes(car.year)){
            yaersArr.push(car.year)
          }
    
          if(!fuelArr.includes(car.fuel)){
            fuelArr.push(car.fuel)
          }
    
        })

      }
  
      
      const arrOrdered = yaersArr.sort((a,b) => +a - +b)
      yaersArr = arrOrdered
    
      setColors(colorArr)
      setFuels(fuelArr)
      setModels(modelArr)
      setYears(yaersArr)

      filterCarList()

    }

    filter()

  }, [
    isOpen, 
    colorSelected,
    yearSelected,
    brandSelected,
    modelSelected,
    fuelSelected
  ])

  return (
    <Drawer onClose={onClose}  isOpen={isOpen} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton marginTop="6px" />
        <Text
          color="grey.1"
          marginLeft="15px"
          marginTop="20px"
          fontWeight="600"
        >
          Filtro
        </Text>
        <DrawerBody>
          <Box marginLeft="-25px">
            <DrawerHeader>Marca</DrawerHeader>
            {
              brandSelected ?
                (
                  <Box marginLeft="30px">

                    <Text 
                      fontWeight="600" 
                      color="grey.3" 
                      key={brandSelected} 
                      onClick={() => {
                        setBrandSelected(brandSelected)
                        filterCarList()
                      }}
                    >
                      {brandSelected}
                    </Text>  

                  </Box>
                )
              :
                (
                  <Box marginLeft="30px">
                    {
                      brands.map((brand) => {
   
                        return(
                          <Text 
                            fontWeight="600" 
                            color="grey.3" 
                            key={brand.id} 
                            onClick={() => {
                              setBrandSelected(brand.name)
                              filterCarList()
                            }}
                          >
                            {brand.name}
                          </Text>
                        )

                      })
                    }
                  </Box>
                )
            }

          </Box>
          <Box marginLeft="-25px">
            <DrawerHeader>Modelo</DrawerHeader>
            {
              modelSelected ? 
                (
                  <Box marginLeft="30px">
                    <Text fontWeight="600" color="grey.3" key={modelSelected} onClick={() => {
                      setModelSelected(modelSelected)
                      filterCarList()
                    }}>
                      {modelSelected}
                    </Text>
                  </Box>
                )
              :
                
                (
                  <Box marginLeft="30px">
                    {
                      models.map((model, i) => {
                        return (
                          <Text fontWeight="600" color="grey.3" key={i} onClick={() => {setModelSelected(model)}}>
                            {model}
                          </Text>
                        )
                      })
                    }
                  </Box>
                )
            }
          </Box>
          <Box marginLeft="-25px">
            <DrawerHeader>Cor</DrawerHeader>
              {
                colorSelected ? 
                  (
                    <Box marginLeft="30px">
                      <Text fontWeight="600" color="grey.3" key={colorSelected} onClick={() => {setColorSelected(colorSelected)}}>
                        {colorSelected}
                      </Text>
                    </Box>
                  )
                :
                  (
                    <Box marginLeft="30px">
                      {
                        colors.map((color, i) => {
                             return (
                              <Text fontWeight="600" color="grey.3" key={i} onClick={() => {setColorSelected(color)}}>
                                {color}
                              </Text>
                            )
                        })
                      }
                    </Box>
                  )
              }
          </Box>
          <Box marginLeft="-25px">
            <DrawerHeader>Ano</DrawerHeader>
            {
              yearSelected ?
                <Box marginLeft="30px">
                  <Text 
                    fontWeight="600" 
                    color="grey.3" 
                    onClick={() => {setYearSelected(yearSelected)}}>
                    {yearSelected}
                  </Text>
                </Box>
              :
                (
                  <Box marginLeft="30px">
                    {
                      years.map((year, i) => {
                        return (
                          <Text fontWeight="600" color="grey.3" key={i} onClick={() => {setYearSelected(year)}}>
                            {year}
                          </Text>
                        )
                      })
                    }
                  </Box>
                )
            }
          </Box>
          <Box marginLeft="-25px">
            <DrawerHeader>Combustível</DrawerHeader>
            {
              fuelSelected ?
                (
                  <Box marginLeft="30px">
                    <Text fontWeight="600" color="grey.3" onClick={() => {setFuelSelected(fuelSelected)}}>
                      {fuelSelected}
                    </Text>
                  </Box>
                )
              :
                (
                  <Box marginLeft="30px">
                    {
                      fuels.map((fuel, i) => {
                        return (
                          <Text fontWeight="600" color="grey.3" key={i} onClick={() => {setFuelSelected(fuel)}}>
                            {fuel}
                          </Text>
                        )
                      })
                    }
                  </Box>
                )
            }
          </Box>
          <Box marginLeft="-25px" marginTop="35px">
            <DrawerHeader>KM</DrawerHeader>
            <Box marginLeft="30px" display="flex">
              <Input
                w="120px"
                marginRight="25px"
                borderRadius="0px"
                bgColor="grey.5"
                borderColor="grey.5"
                placeholder="Mínima"
                fontWeight="600"
                color="grey.1"
                focusBorderColor="grey.5"
                type="number"
              />
              <Input
                w="120px"
                borderRadius="0px"
                bgColor="grey.5"
                borderColor="grey.5"
                placeholder="Máxima"
                fontWeight="600"
                color="grey.1"
                focusBorderColor="grey.5"
                type="number"
              />
            </Box>
          </Box>
          <Box marginLeft="-25px" marginTop="35px">
            <DrawerHeader>Preço</DrawerHeader>
            <Box marginLeft="30px" display="flex">
              <Input
                w="120px"
                marginRight="25px"
                borderRadius="0px"
                bgColor="grey.5"
                borderColor="grey.5"
                placeholder="Mínimo"
                fontWeight="600"
                color="grey.1"
                focusBorderColor="grey.5"
                type="number"
              />

              <Input
                w="120px"
                borderRadius="0px"
                bgColor="grey.5"
                borderColor="grey.5"
                placeholder="Máximo"
                fontWeight="600"
                color="grey.1"
                focusBorderColor="grey.5"
                type="number"
              />
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            marginTop="40px"
            marginBottom="40px"
          >
            <Button
              bg={"brand.1"}
              color={"grey.10"}
              w={{
                base: "250px",
                sm: "60%",
                md: "350px",
                lg: "400px",
                xl: "350px",
              }}
              borderRadius="5px"
              fontWeight="600"
              _hover={{ background: "brand.2" }}
              padding="25px 0px 22px 0px"
            >
              Ver anúncios
            </Button>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ModalFilterMobile;
