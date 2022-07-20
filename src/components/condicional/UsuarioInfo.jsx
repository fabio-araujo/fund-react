import { unstable_renderSubtreeIntoContainer } from "react-dom";
import If, {Else} from "./if";
export default (props) => {
  const usuario = props.usuario || {};
  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}!</strong>
        <Else>
          Seja bem vindo <strong>Anonimo!</strong>
        </Else>
      </If>
    </div>
  );
};
