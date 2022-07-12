export default (props) => {
    const {min, max} = props;
    const aleatorio = parseInt(Math.random() * (max - min) + min);
    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>Valor Mínimo: <b>{min}</b></p>
            <p>Valor Máximo: <b>{max}</b></p>
            <p>Número Aleatório: <b>{ aleatorio }</b></p>
        </div>
    )
}