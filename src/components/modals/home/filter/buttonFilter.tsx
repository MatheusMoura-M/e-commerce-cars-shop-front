import { Box, Button } from "@chakra-ui/react"

export const ButtonFilterMobile = ({
    isFilter, 
    onClose, 
    setIsClearButton, 
    isClearButton,
    clearFilter}: any) => {

    if(!isFilter || isFilter && !isClearButton){
        return (
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
                onClick={() => {
                  onClose()
                  setIsClearButton(true)
                }}
              >
                Ver anúncios
              </Button>
            </Box>
          )
 
    }else{

        return (
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
                onClick={() => {
                  clearFilter()
                  setIsClearButton(false)
                }}
              >
                Limpar Filtros
              </Button>
            </Box>
        )
    }

}
export const ButtonFilter = ({
    isFilter, 
    onlyInputFilter, 
    clearFilter}: any) => {

    if(isFilter && !onlyInputFilter){
        return (
            <Box
                display="flex"
                justifyContent="center"
                marginTop="70px"
                marginBottom="40px"
                w="100%"
            >
                <Button
                bg={"brand.1"}
                color={"grey.10"}
                w="250px"
                borderRadius="5px"
                fontWeight="600"
                _hover={{ background: "brand.2" }}
                padding="25px 0px 22px 0px"
                onClick={() => {
                    clearFilter()
                }}
                >
                Limpar Filtros
                </Button>
            </Box>
        )
          
 
    }else{

        return null
        
    }

}
