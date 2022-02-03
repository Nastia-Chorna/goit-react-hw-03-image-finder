import { Oval } from "react-loader-spinner";
import { LoaderWrap } from "./Loader.styled";

const Loader = () => {
  return (
    <LoaderWrap>
      <Oval color="#00BFFF" height={80} width={80} />
    </LoaderWrap>
  );
};

export default Loader;