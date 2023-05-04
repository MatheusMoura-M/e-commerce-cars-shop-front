import { Box, Text } from "@chakra-ui/react";

export const BrandFilter = ({
    brandSelected, 
    isFilter, 
    filterFieldsSelected, 
    setBrandSelected, 
    brands}: any) => {

    if(brandSelected && isFilter){
        return (
            <Box marginLeft="30px">
                <Text
                  fontWeight="600"
                  color="grey.3"
                  onClick={() => {
                      filterFieldsSelected();
                  }}
                  _hover={{color: "grey.2", transition: "0.3s"}}
                >
                    {brandSelected}
                </Text>
            </Box>
        )
    }else{

        return (

            brands.map((brand: string, i: number) => {

              return (
                <Box marginLeft="30px" key={i}>
                  <Text
                    fontWeight="600"
                    color="grey.3"
                    onClick={() => {
                        setBrandSelected(brand);
                        filterFieldsSelected()
                    
                    }}
                    _hover={{color: "grey.2", transition: "0.3s"}}
                  >
                      {brand}
                  </Text>
                </Box>
              );
            })
            
        )

    }

}

export const ModelFilter = ({
    modelSelected, 
    isFilter, 
    setModelSelected, 
    filterFieldsSelected, 
    models}: any) => {

    if(modelSelected && isFilter){

        return (
            <Box marginLeft="30px">
                <Text
                  fontWeight="600"
                  color="grey.3"
                  onClick={() => {
                    setModelSelected(modelSelected);
                    filterFieldsSelected()
                
                  }}
                  _hover={{color: "grey.2", transition: "0.3s"}}
                >
                  {modelSelected}
                </Text>
            </Box>
        )

    }else{

        return (
            <Box marginLeft="30px">
                {models.map((model: string, i: number) => {
                  return (
                    <Text
                      fontWeight="600"
                      color="grey.3"
                      key={i}
                      onClick={() => {
                        setModelSelected(model);
                        filterFieldsSelected()
                    
                      }}
                      _hover={{color: "grey.2", transition: "0.3s"}}
                    >
                      {model}
                    </Text>
                  );
                })}
            </Box>
        )

    }

}

export const ColorFilter = ({
    isFilter, 
    setColorSelected,
    colorSelected, 
    filterFieldsSelected, 
    colors}: any) => {

    if(colorSelected && isFilter){
        
        return (
            <Box marginLeft="30px">
              <Text
                fontWeight="600"
                color="grey.3"
                onClick={() => {
                  setColorSelected(colorSelected);
                  filterFieldsSelected()
              
                }}
                _hover={{color: "grey.2", transition: "0.3s"}}
              >
                {colorSelected}
              </Text>
            </Box>
        )

    }else{

        return (
            <Box marginLeft="30px">
              {colors.map((color: string, i: number) => {
                return (
                  <Text
                    fontWeight="600"
                    color="grey.3"
                    key={i}
                    onClick={() => {
                      setColorSelected(color);
                      filterFieldsSelected()
                  
                    }}
                    _hover={{color: "grey.2", transition: "0.3s"}}
                  >
                    {color}
                  </Text>
                );
              })}
            </Box>
        )

    }

}

export const YearFilter = ({
    yearSelected, 
    isFilter, 
    setYearSelected, 
    filterFieldsSelected, 
    years}: any) => {

        if(yearSelected && isFilter){

            return (
                <Box marginLeft="30px">
                  <Text
                    fontWeight="600"
                    color="grey.3"
                    onClick={() => {
                      setYearSelected(yearSelected);
                      filterFieldsSelected()
                  
                    }}
                    _hover={{color: "grey.2", transition: "0.3s"}}
                  >
                    {yearSelected}
                  </Text>
                </Box>
            )

            

        }else{

            return (
                <Box marginLeft="30px">
                  {years.map((year: string, i: number) => {
                    return (
                      <Text
                        fontWeight="600"
                        color="grey.3"
                        key={i}
                        onClick={() => {
                          setYearSelected(year);
                          filterFieldsSelected()
                      
                        }}
                        _hover={{color: "grey.2", transition: "0.3s"}}
                      >
                        {year}
                      </Text>
                    );
                  })}
                </Box>
            )

        }

}

export const FuelFilter = ({
    fuelSelected, 
    isFilter, 
    setFuelSelected, 
    filterFieldsSelected,
    fuels}: any) => {

    if(fuelSelected && isFilter){

        return (

            <Box marginLeft="30px">
              <Text
                fontWeight="600"
                color="grey.3"
                onClick={() => {
                  setFuelSelected(fuelSelected);
                  filterFieldsSelected()
              
                }}
                _hover={{color: "grey.2", transition: "0.3s"}}
              >
                {fuelSelected}
              </Text>
            </Box>

        )

    }else{

        return (
            <Box marginLeft="30px">
            {fuels.map((fuel: string, i: number) => {
                return (
                <Text
                    fontWeight="600"
                    color="grey.3"
                    key={i}
                    onClick={() => {
                    setFuelSelected(fuel);
                    filterFieldsSelected()
                
                    }}
                    _hover={{color: "grey.2", transition: "0.3s"}}
                >
                    {fuel}
                </Text>
                );
            })}
            </Box>
        )

    }

}

