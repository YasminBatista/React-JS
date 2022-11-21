export { default as AdmMessagePage} from "./Message"
export { default as AdmMessageStorePage} from "./Message/store"
import { fromUnixTime } from "date-fns";
import * as S from "./styles";

const Adm = () => {
    return(
     <S.Adm>
         Área administrativa
     </S.Adm>
    );
};

export default Adm;