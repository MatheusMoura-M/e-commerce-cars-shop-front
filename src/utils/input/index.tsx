import { ReactNode } from "react";
import { useAuth } from "../../context/webContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Box } from "@chakra-ui/react";
import { iShowPass } from "../../@types";

const showPassword = ({ showPass }: iShowPass): ReactNode => {
  const { value, show, setShow, setPassType } = useAuth();

  if (value !== "" && showPass) {
    const whichEye =
      show === false ? (
        <AiFillEyeInvisible size={22} color="#030303" />
      ) : (
        <AiFillEye size={22} color="#030303" />
      );
    const passType = show === false ? "text" : "password";

    return (
      <Box
        className="showPass"
        onClick={() => {
          setShow(!show);
          setPassType(passType);
        }}
        role="button"
      >
        {whichEye}
      </Box>
    );
  }
};

export default showPassword;
