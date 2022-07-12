export default function (props) {
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  const notaInt = Math.ceil(props.nota);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <b>{props.aluno}</b>
        tem nota
        <b>{notaInt} </b>e foi
        <b> {status} </b>
      </p>
    </div>
  );
}
