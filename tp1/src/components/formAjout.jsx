import { useState } from 'react';
import './../App.css';

function FormAjout (){
    const [isFormActive, setIsFormActive] = useState(true);

    const close_form = () => {setIsFormActive(false)}

    return (
        <div className={`form-container  ${isFormActive ? 'active' : ''}`}>
            <button className="close-btn" type="button" onClick={close_form}>×</button>
            <form>
                <div className='form-group'>
                    <label htmlFor="form_desc">Description</label>
                    <input type="text" id="form_desc" />
                </div>
                <div className='form-group'>
                    <label htmlFor="form_image">image</label>
                    <input type="file" id="form_image" />
                </div>
                <div className='form-group'>
                    <label htmlFor="form_PU">Prix Unitaire</label>
                    <input type="text" id="form_PU" />
                </div>
                <div className='form-group'>
                    <label htmlFor="form_qte">Quntité</label>
                    <input type="text" id="form_qte" />
                </div>
                <input type="submit" value="Enregistrer" className='btnForm'  />
            </form>
        </div>
    )
}

export default FormAjout;