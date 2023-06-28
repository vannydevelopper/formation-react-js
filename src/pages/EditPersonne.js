import React, { useState } from "react";
import "./EditPersonne.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, InputGroup, Row, Modal, Button } from 'react-bootstrap';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";



export default function EditPersonne() {
        const [nom, setNom] = useState("")
        const [prenom, setPrenom] = useState("")
        const [telephone, setTelephone] = useState("")
        const [province, setProvince] = useState("")
        const [commune, setCommune] = useState("")
        const [quartier, setQuartier] = useState("")


        //Select Province
        const [openProvinceModal, setOpenProvinceModal] = useState(false);
        const handleCloseProvince = () => setOpenProvinceModal(false);
        const handleShowProvince = () => setOpenProvinceModal(true);

         //Select Commune
         const [openCommuneModal, setOpenCommuneModal] = useState(false);
         const handleCloseCommune = () => setOpenCommuneModal(false);
         const handleShowCommune = () => setOpenCommuneModal(true);

          //Select Zone
          const [openZoneModal, setOpenZoneModal] = useState(false);
          const handleCloseZone = () => setOpenZoneModal(false);
          const handleShowZone = () => setOpenZoneModal(true);

          //Select Colline
          const [openCollineModal, setOpenCollineModal] = useState(false);
          const handleCloseColline = () => setOpenCollineModal(false);
          const handleShowColline = () => setOpenCollineModal(true);

        const navigate = useNavigate()


        const handleSubmit = () => {
                axios.post('http://localhost:3000/personne/ajout', {
                        NOM: nom,
                        PRENOM: prenom,
                        TEL: telephone,
                        PROVINCE: province,
                        COMMUNE: commune,
                        QUARTIER: quartier
                })
                navigate('/')
        }



        return (
                <>
                        <Container fluid>
                                <div className="form-container">
                                        <form className="container mt-3 mb-3">
                                                <Row className="mb-3">
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label>Nom</Form.Label>
                                                                <Form.Control type="name" name="nom" placeholder="Tapez votre nom" value={nom} onChange={e => setNom(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label>Prenom</Form.Label>
                                                                <Form.Control type="name" name="prenom" placeholder="Tapez votre prenom" value={prenom} onChange={e => setPrenom(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label>Date de naissance </Form.Label>
                                                                <Form.Control type="name" name="province" placeholder="Tapez votre province" value={province} onChange={e => setProvince(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label>Lieu de naissance</Form.Label>
                                                                <Form.Control type="name" name="province" placeholder="Tapez votre province" value={province} onChange={e => setProvince(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label>Nom du pere</Form.Label>
                                                                <Form.Control type="name" name="commune" placeholder="Tapez votre commune" value={commune} onChange={e => setCommune(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label> Nom de la mere</Form.Label>
                                                                <Form.Control type="name" name="quartier" placeholder="Tapez votre quartier" value={quartier} onChange={e => setQuartier(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label>Nationalite</Form.Label>
                                                                <Form.Control type="name" name="nom" placeholder="Tapez votre nom" value={nom} onChange={e => setNom(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label>Cni</Form.Label>
                                                                <Form.Control type="name" name="prenom" placeholder="Tapez votre prenom" value={prenom} onChange={e => setPrenom(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                        <Form.Group controlId="formBasicMobile" className="col col-sm-6">
                                                                <Form.Label>Telephone</Form.Label>
                                                                <InputGroup>
                                                                        <InputGroup.Text id="basic-addon1">+257</InputGroup.Text>
                                                                        <Form.Control aria-label="Mobile Number" type="number" aria-describedby="basic-addon1" className="form-control" name="telephone" placeholder="Tapez votre telephone" value={telephone} onChange={e => setTelephone(e.target.value)} />
                                                                </InputGroup>
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label> Type cni</Form.Label>
                                                                <Form.Control type="name" name="province" placeholder="Tapez votre province" value={province} onChange={e => setProvince(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label> Status</Form.Label>
                                                                <Form.Control type="name" name="commune" placeholder="Tapez votre commune" value={commune} onChange={e => setCommune(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6" onClick={handleShowProvince}>
                                                                <Form.Label>Province</Form.Label>
                                                                <Form.Control type="name" name="quartier" placeholder="Tapez votre quartier" value={quartier} onChange={e => setQuartier(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6" onClick={handleShowCommune}>
                                                                <Form.Label>Commune</Form.Label>
                                                                <Form.Control type="name" name="commune" placeholder="Tapez votre commune" value={commune} onChange={e => setCommune(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6" onClick={handleShowZone}>
                                                                <Form.Label>Zone</Form.Label>
                                                                <Form.Control type="name" name="quartier" placeholder="Tapez votre quartier" value={quartier} onChange={e => setQuartier(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6" onClick={handleShowColline}>
                                                                <Form.Label>Colline</Form.Label>
                                                                <Form.Control type="name" name="commune" placeholder="Tapez votre commune" value={commune} onChange={e => setCommune(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                                                                <button type="buttton" onClick={handleSubmit} className="me-4 btn btn-success btn-lg btn-block">Enregistrer</button>
                                                                <Link to="/">
                                                                        <button type="submit" className="me-4 btn btn-success btn-lg btn-block">Go back</button>
                                                                </Link>
                                                        </Form.Group>
                                                </Row>
                                                

                                        </form>
                                         {/* <!-- Modal Province --> */}
                                        <Modal show={openProvinceModal} onHide={handleCloseProvince}>
                                                <Modal.Header closeButton>
                                                        <Modal.Title>Province</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                        
                                                        <Button variant="primary" type="submit" block>
                                                                Valider
                                                        </Button>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleCloseProvince}>
                                                                Close Modal
                                                        </Button>
                                                </Modal.Footer>
                                        </Modal>

                                         {/* <!-- Modal Commune --> */}
                                         <Modal show={openCommuneModal} onHide={handleCloseCommune}>
                                                <Modal.Header closeButton>
                                                        <Modal.Title>Commune</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                        
                                                        <Button variant="primary" type="submit" block>
                                                                Valider
                                                        </Button>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleCloseCommune}>
                                                                Close Modal
                                                        </Button>
                                                </Modal.Footer>
                                        </Modal>

                                        {/* <!-- Modal Zone --> */}
                                        <Modal show={openZoneModal} onHide={handleCloseZone}>
                                                <Modal.Header closeButton>
                                                        <Modal.Title>Zone</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                        
                                                        <Button variant="primary" type="submit" block>
                                                                Valider
                                                        </Button>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleCloseZone}>
                                                                Close Modal
                                                        </Button>
                                                </Modal.Footer>
                                        </Modal>

                                        {/* <!-- Modal Colline --> */}
                                        <Modal show={openCollineModal} onHide={handleCloseColline}>
                                                <Modal.Header closeButton>
                                                        <Modal.Title>Colline</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                        
                                                        <Button variant="primary" type="submit" block>
                                                                Valider
                                                        </Button>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleCloseColline}>
                                                                Close Modal
                                                        </Button>
                                                </Modal.Footer>
                                        </Modal>
                                </div>
                        </Container>
                </>

        )
}


