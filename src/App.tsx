import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/lexend/400.css";
import "@fontsource/lexend/500.css";
import "@fontsource/lexend/600.css";

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
