import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/webContext";
import RoutesMain from "./routes";
import custonTheme from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={custonTheme}>
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
