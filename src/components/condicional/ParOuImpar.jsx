export default props => {
    const isPar = props.numero % 2 === 0;
    return (
        <div>
            <span>{ isPar ? 'Par' : 'Impar'}</span>             
        </div>
    )
}