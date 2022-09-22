import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import Formulario from '../Formulario/Formulario';
import './CardataCreate.css'

function CardataCreate() {
    const navigate = useNavigate();

    const [create, setCreate] = useState({
        model:'',
        brand:'',
        year:'',
        price:''
    }); 
    
    // Criando um novo registro
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.reset();

        const newCardata = {
            model: create.model,
            brand: create.brand,
            year: create.year,
            price: create.price
        }
        axios.post('http://localhost:4000/create', newCardata); 
        navigate('/Crud/cardata');  

    }

    return (
        <div>
            <Formulario/>             
        </div>         
          
    )    
}

export default CardataCreate;