import "./../App.css";
import { useRef, useState } from 'react';
import TableTr from "./tableLigne";

function App2() {
    const descProd = useRef('');
    const imgProd = useRef('');
    const puProd = useRef('');
    const qteProd = useRef('');

    const [isFormActive, setIsFormActive] = useState(false);
    const [tableData, setTableData] = useState([])

    const close_form = () => {setIsFormActive(false)};
    const open_from = () => {setIsFormActive(true)};
    
    const addData = (newData) => {
        setTableData(prev => {
            const lastID = prev.length > 0
            ? prev[prev.length - 1].id
            : 0;

            const newDataWithId = {
            ...newData,
            id: lastID + 1
            };

            return [...prev, newDataWithId];
        });

        close_form();
    };


    const enregister_data = (e) => {
        e.preventDefault();

        const desc_data = descProd.current.value;
        const img_data = imgProd.current.files[0];
        const pu_data = puProd.current.value;
        const qte_data = qteProd.current.value;

        

        if (desc_data && img_data && pu_data && qte_data) {
            addData({desc: desc_data, image: img_data.name, pu: pu_data, qte: qte_data});
        }else{
            alert("Veuillez remplire tous les champs");
            return;
        }

        descProd.current.value = "";
        imgProd.current.value = "";
        puProd.current.value = "";
        qteProd.current.value = "";
        
    };

    const supp_produit = (id) => {
        setTableData(prev => prev.filter(item => item.id !== id))
    };


    return (
        <div>
            <div className="tableContainer">
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>description</th>
                            <th>image</th>
                            <th>Prix Unitaire</th>
                            <th>Quantité</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item) => (
                            <TableTr 
                                key={item.id} 
                                data={item}
                                onDelete = {supp_produit}
                            ></TableTr> 
                        ))}
                    </tbody>
                </table>
                <button type="button" className="btnAjt" onClick={open_from}>Ajouter</button>
            </div> 
            <div className={`form-container  ${isFormActive ? 'active' : ''}`}>
                <button className="close-btn" type="button" onClick={close_form}>×</button>
                <form onSubmit={enregister_data}>
                    <div className='form-group'>
                        <label htmlFor="form_desc">Description</label>
                        <input type="text" id="form_desc" ref={descProd} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="form_image">image</label>
                        <input type="file" id="form_image" ref={imgProd} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="form_PU">Prix Unitaire</label>
                        <input type="text" id="form_PU" ref={puProd} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor="form_qte">Quntité</label>
                        <input type="text" id="form_qte" ref={qteProd} />
                    </div>
                    <input type="submit" value="Enregistrer" className='btnForm' />
                </form>
            </div>
        </div>
    )
}

export default App2;