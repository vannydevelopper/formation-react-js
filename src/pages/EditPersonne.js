import React, {useState } from "react";
import "./EditPersonne.css"
import { Link } from "react-router-dom";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup, Row } from 'react-bootstrap';

export default function EditPersonne(){
        const [nom, setNom] = useState("")
        const [prenom, setPrenom] = useState("")
        const [telephone, setTelephone] = useState("")
        const [province, setProvince] = useState("")
        const [commune, setCommune] = useState("")
        const [quartier, setQuartier] = useState("")


        const handleSubmit = async () =>{
                try{
                        await axios.post("http://localhost:3000/personne/ajout",{
                                NOM : nom,
                                PRENOM : prenom,
                                TEL:telephone,
                                PROVINCE:province,
                                COMMUNE: commune ,
                                QUARTIER:quartier
                        });
                }
                catch(error){
                        console.log(error)
                }
                setTimeout(()=>("/"), 500)
        }
        
       
        return(
                <div className="form-container">
                <form className="container mt-3 mb-3">
                        <Row className="mb-3">
                                <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label>Nom</Form.Label>
                                        <Form.Control type="name" name="nom"  placeholder="Tapez votre nom" value={nom}  onChange={e => setNom(e.target.value)} className="form-control" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label>Prenom</Form.Label>
                                        <Form.Control type="name" name="prenom"  placeholder="Tapez votre prenom" value={prenom}  onChange={e => setPrenom(e.target.value)} className="form-control" />
                                </Form.Group>
                        </Row>
                        <Row className="mb-3">
                                <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                                        <Form.Label>Telephone</Form.Label>
                                        <InputGroup>
                                                <InputGroup.Text id="basic-addon1">+257</InputGroup.Text>
                                                <Form.Control aria-label="Mobile Number" type="number" aria-describedby="basic-addon1" className="form-control" name="telephone"  placeholder="Tapez votre telephone" value={telephone}  onChange={e => setTelephone(e.target.value)} />
                                        </InputGroup>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label>Province</Form.Label>
                                        <Form.Control type="name" name="province"  placeholder="Tapez votre province" value={province}  onChange={e => setProvince(e.target.value)} className="form-control" />
                                </Form.Group>
                        </Row>
                        <Row className="mb-3">
                                <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label>Commune</Form.Label>
                                        <Form.Control type="name" name="commune"  placeholder="Tapez votre commune" value={commune}  onChange={e => setCommune(e.target.value)} className="form-control" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                        <Form.Label>Quartier</Form.Label>
                                        <Form.Control type="name" name="quartier"  placeholder="Tapez votre quartier" value={quartier}  onChange={e => setQuartier(e.target.value)} className="form-control" />
                                </Form.Group>
                        </Row>
                        <Row className="mb-3">
                                <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                                        <button type="submit" onClick={handleSubmit} className="me-4 btn btn-success btn-lg btn-block">Enregistrer</button>
                                        <Link to="/">
                                                <button type="submit" className="me-4 btn btn-success btn-lg btn-block">Go back</button>
                                        </Link>
                                </Form.Group>
                        </Row>
                </form>
        </div>
        )
}