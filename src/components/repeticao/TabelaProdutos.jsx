import produtos from "../../data/produtos";
import '../../styles/table.css'

export default (props) => {
  const produtosTable = produtos.map((produto, i) => {
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco.toFixed(2).replace('.',',')}</td>
      </tr>
    );
  });
  return (
    <table className='styled-table' >
      <thead>
        <tr>
          <th>ID</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>{produtosTable}</tbody>
    </table>
  );
};
