import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import Header from "../../components/header";
import { Footer } from "../../components/footer";

export const Home = () => {
  return (
    <Box>
      <Header />
      <FormControl as={"form"}>
        <Button variant={"grey6"}>asd</Button>
      </FormControl>
    </Box>
  );
};
