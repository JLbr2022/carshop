import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Table, Modal, Form } from 'react-bootstrap';
import { IoTrashBinSharp } from 'react-icons/io5';
import { RiEditLine } from 'react-icons/ri';
import axios from 'axios';
import './CardataList.css';

function CardataList() {
    
    const [edit, setEdit] = useState({});
    const [show, setShow] = useState(false);  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();

    const [list, setList] = useState([{
        model:'',
        brand:'',
        year:'',
        price:''
    }])

    // Mostrando a lista de carros que estão na base de dados
    useEffect(() => {
        fetch('/cardata').then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setList(jsonRes));
    })
    
    // Deletando um registro 
    const onDelete = async (id) => {
        if(window.confirm("Tem certeza que vai excluir o registro?")) {
            const response = await axios.delete(`/${id}`)
        }                    
    }   
    
    // Editando um registro
    const handleEdit =  async (lista) => {
        setEdit(lista);
        handleShow()
    }       

    const handleChange = (e) => {
        const { name, value} = e.target;
        setEdit(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const saveEdit = () => {
        axios.put(`/${edit._id}`, edit)
        .then(res => console.log(res))
        .catch(err => console.log(err));

        handleClose();
        window.location.reload();
    }

    return (
        <div className="container">
            <div>
                <Button 
                    className="reg-button" 
                    variant="success" 
                    onClick={() => navigate("/Crud")}>
                    Registrar
                </Button>
            </div>
            <div className="title">
                <h1 >Lista de Carros</h1>
            </div>                
                
            <div className="table">                        
                <Table striped>            
                    <thead className="table-col">
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Modelo</th>
                            <th>Marca</th>
                            <th>Ano</th>
                            <th>Preço R$</th>
                            <th>Opções</th>
                        </tr>            
                    </thead>           
                    <tbody>             
                        {list.map(lista => {
                            return (
                                <tr key={lista._id}>
                                    <td></td>
                                    <td>{lista.id}</td>
                                    <td>{lista.model}</td> 
                                    <td>{lista.brand}</td>
                                    <td>{lista.year}</td>
                                    <td>{lista.price}</td>
                                    <td>
                                        <Button 
                                            className="form-buttom" 
                                            variant="outline-secondary" 
                                            onClick={() => handleEdit(lista)}>
                                            {<RiEditLine/>}
                                        </Button>                                                                     
                                        <Button 
                                            className="form-buttom" 
                                            variant="outline-danger" 
                                            onClick={() => onDelete(lista._id)}>
                                            {<IoTrashBinSharp/>}
                                        </Button>                                    
                                    </td>  
                                </tr> 
                            )                       
                        })}
                    </tbody>   
                </Table>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Editar registro</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                <Form.Control className="form-control" 
                                    placeholder="modelo"
                                    name="model" 
                                    value={edit.model ? edit.model:""}
                                    onChange={handleChange} />
                                <Form.Control className="form-control" 
                                    placeholder="marca"
                                    name="brand" 
                                    value={edit.brand ? edit.brand:""}
                                    onChange={handleChange} />
                                <Form.Control className="form-control" 
                                    placeholder="ano"
                                    name="year" 
                                    value={edit.year ? edit.year:""}
                                    onChange={handleChange} />
                                <Form.Control className="form-control" 
                                    placeholder="preço"
                                    name="price" 
                                    value={edit.price ? edit.price:""}
                                    onChange={handleChange} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="outline-success" onClick={saveEdit}>
                            Editar
                        </Button>
                        <Button variant="outline-secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>    
    )
}

export default CardataList;
 