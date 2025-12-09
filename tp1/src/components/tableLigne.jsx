function TableTr (  {data, onDelete} ) {
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.desc}</td>
            <td>{data.image}</td>
            <td>{data.pu}</td>
            <td>{data.qte}</td>
            <td>
                <button className="btnSupp" onClick={() => onDelete(data.id)}>supprimer</button>
            </td>
        </tr>
    )
}
export default TableTr;