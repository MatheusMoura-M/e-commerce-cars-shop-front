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

import { ToastContainer } from "react-toastify";
import HomePageContext from "./context/homePage.context";
import RegexInputs from "./context/regexInputs.context";

import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <ChakraProvider theme={custonTheme}>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <AuthProvider>
        <HomePageContext>
          <RegexInputs>
            <RoutesMain />
          </RegexInputs>
        </HomePageContext>
      </AuthProvider>
      <ToastContainer />
    </ChakraProvider>
  );
}

export default App;
