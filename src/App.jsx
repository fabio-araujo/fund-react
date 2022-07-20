import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./App.css";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#12- Contador" color="#424242">
        <Contador numeroInicial={10}></Contador>
      </Card>
      <Card titulo="#11- Componente Controlado" color="#E45F56">
        <Input></Input>
      </Card>
      <Card titulo="#10- Comunicação Indireta" color="#8bad39">
        <IndiretaPai></IndiretaPai>
      </Card>
      <Card titulo="#09- Comunicação Direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>
      <Card titulo="#08 - Condicional" color="#982395">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
        <UsuarioInfo usuario={{}}></UsuarioInfo>
      </Card>
      <Card titulo="#07 - Tabela Produtos" color="#004C65">
        <TabelaProdutos></TabelaProdutos>
      </Card>
      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>
      <Card titulo="#05 - Compontente Filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="Pedro"></FamiliaMembro>
          <FamiliaMembro nome="Ana"></FamiliaMembro>
          <FamiliaMembro nome="Gustavo"></FamiliaMembro>
        </Familia>
      </Card>
      <Card titulo="#04 - Aleatório" color="#FA6900">
        <Aleatorio min={1} max={100}></Aleatorio>
      </Card>
      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento></Fragmento>
      </Card>
      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
        <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3} />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
