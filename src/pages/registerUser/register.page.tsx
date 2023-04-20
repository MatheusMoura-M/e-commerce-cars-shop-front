import { Box } from "@chakra-ui/react"
import { ContainerPage } from "./style"
import Header from "../../components/navBar"
import FormRegisterUser from "../../components/form/formRegister/formRegister"
import { Footer } from "../../components/footer"

const RegisterUserPage = () => {
    return (
        <ContainerPage>
            <Box>
                <Header />
                <FormRegisterUser />
                <Footer />
            </Box>
        </ContainerPage>
    )
}

export default RegisterUserPage
