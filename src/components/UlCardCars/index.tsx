import { Flex } from "@chakra-ui/react";
import { iProviderProps } from "../../@types";

export const UlCardCars = ({ children }: iProviderProps) => {
  return (
    <Flex
      as={"ul"}
      overflowX={{ base: "scroll", lg2m: "hidden" }}
      flexWrap={{ lg2m: "wrap" }}
      justifyContent={{ lg2m: "flex-start" }}
      alignItems={{ lg2m: "flex-start" }}
      ml={{ lg2m: 130 }}
      w={{ base: "97.5%", xl2m: 1190 }}
      m={"60px 0px 0px 15px"}
      pb={{ base: "10px", lg2m: 0 }}
      sx={{
        "::-webkit-scrollbar": {
          w: "10px",
          h: "12px",
        },
        "::-webkit-scrollbar-track": {
          bg: "grey.3",
          borderRadius: "10px",
          w: "10px",
        },
        "::-webkit-scrollbar-thumb": {
          bg: "grey.4",
          borderRadius: "24px",
        },
      }}
    >
      {children}
    </Flex>
  );
};
