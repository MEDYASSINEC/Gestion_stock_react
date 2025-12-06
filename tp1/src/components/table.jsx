import "./../App.css";
import TableTr from "./tableLigne";

function ProductTable() {
    return (
        <div className="tableContainer">
            <table className="table">
                <thead>
                    <th>id</th>
                    <th>description</th>
                    <th>image</th>
                    <th>Prix Unitaire</th>
                    <th>Quantité</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    <TableTr></TableTr>
                    <TableTr></TableTr>
                    <TableTr></TableTr>
                </tbody>
            </table>
            <button type="button" className="btnAjt">Ajouter</button>
        </div>
    )
}

export default ProductTable;