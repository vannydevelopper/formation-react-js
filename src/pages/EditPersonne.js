import React, { useEffect, useState } from "react";
import "./EditPersonne.css"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, InputGroup, Row, Modal, Button } from 'react-bootstrap';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { fetchApi } from "./helpers/fetchApi"
import { Dropdown } from 'primereact/dropdown';



export default function EditPersonne() {
        const [nom, setNom] = useState("")
        const [prenom, setPrenom] = useState("")
        // const [date, setDate] = useState("")
        const [lieuNaissance, setLieuNaissance] = useState("")
        const [nomPere, setNomPere] = useState("")
        const [nomMere, setNomMere] = useState("")
        const [nationalite, setNationalite] = useState("")
        const [cni, setCni] = useState("")
        const [telephone, setTelephone] = useState("")
        const [email, setEmail] = useState("")


        const [allProvinces, setAllProvinces] = useState([])
        const [selectedProvinces, setSelectedProvinces] = useState(null);

        const [allCommunes, setAllCommunes] = useState([])
        const [selectedCommunes, setSelectedCommunes] = useState(null);

        const [allZones, setAllZones] = useState([])
        const [selectedZones, setSelectedZones] = useState(null);

        const [allCollines, setAllCollines] = useState([])
        const [selectedCollines, setSelectedCollines] = useState(null);

        const [typesDemandes, setTypesDemandes] = useState([])
        const [selectedTypesDemandes, setSelectedTypesDemandes] = useState(null);


        //Select Province
        const [openProvinceModal, setOpenProvinceModal] = useState(false);
        const handleCloseProvince = () => setOpenProvinceModal(false);
        // const handleShowProvince = () => setOpenProvinceModal(true);

        //Select Commune
        const [openCommuneModal, setOpenCommuneModal] = useState(false);
        const handleCloseCommune = () => setOpenCommuneModal(false);
        // const handleShowCommune = () => setOpenCommuneModal(true);

        //Select Zone
        const [openZoneModal, setOpenZoneModal] = useState(false);
        const handleCloseZone = () => setOpenZoneModal(false);
        // const handleShowZone = () => setOpenZoneModal(true);

        //Select Colline
        const [openCollineModal, setOpenCollineModal] = useState(false);
        const handleCloseColline = () => setOpenCollineModal(false);
        // const handleShowColline = () => setOpenCollineModal(true);

        const navigate = useNavigate()


        const handleSubmit = () => {
                axios.post('http://localhost:3000/personne/ajout', {
                        // NOM: nom,
                        // PRENOM: prenom,
                        // TEL: telephone,
                        // PROVINCE: province,
                        // COMMUNE: commune,
                        // QUARTIER: quartier
                })
                navigate('/')
        }

        useEffect(() => {
                (async () => {
                        try {
                                const response = await fetchApi("/requerant/identite/type_demande")
                                setTypesDemandes(response.result)
                        }
                        catch (error) {
                                console.log(error)
                        }
                })()
        }, [])


        useEffect(() => {
                (async () => {
                        try {
                                const response = await fetchApi("/requerant/identite/provinces")
                                setAllProvinces(response.result)
                        }
                        catch (error) {
                                console.log(error)
                        }
                })()
        }, [])

        useEffect(() => {
                (async () => {
                        try {
                                if (selectedProvinces) {
                                        const response = await fetchApi(`/requerant/identite/communes/${selectedProvinces.PROVINCE_ID}`)
                                        setAllCommunes(response.result)
                                }

                        }
                        catch (error) {
                                console.log(error)
                        }
                })()
        }, [selectedProvinces])

        useEffect(() => {
                (async () => {
                        try {
                                if (selectedCommunes) {
                                        const response = await fetchApi(`/requerant/identite/zones/${selectedCommunes.COMMUNE_ID}`)
                                        setAllZones(response.result)
                                }

                        }
                        catch (error) {
                                console.log(error)
                        }
                })()
        }, [selectedProvinces, selectedCommunes])

        useEffect(() => {
                (async () => {
                        try {
                                if (selectedZones) {
                                        const response = await fetchApi(`/requerant/identite/collines/${selectedZones.ZONE_ID}`)
                                        setAllCollines(response.result)
                                }

                        }
                        catch (error) {
                                console.log(error)
                        }
                })()
        }, [selectedProvinces, selectedCommunes, selectedZones])





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
                                                                <Form.Control type="name" name="province" placeholder="Tapez votre province" className="form-control" />
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label>Lieu de naissance</Form.Label>
                                                                <Form.Control type="name" name="province" placeholder="Tapez votre province" value={lieuNaissance} onChange={e => setLieuNaissance(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label>Nom du pere</Form.Label>
                                                                <Form.Control type="name" name="commune" placeholder="Tapez votre commune" value={nomPere} onChange={e => setNomPere(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label> Nom de la mere</Form.Label>
                                                                <Form.Control type="name" name="quartier" placeholder="Tapez votre quartier" value={nomMere} onChange={e => setNomMere(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                </Row>
                                                <Row className="mb-3">
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label>Nationalite</Form.Label>
                                                                <Form.Control type="name" name="nom" placeholder="Tapez votre nom" value={nationalite} onChange={e => setNationalite(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                        <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                                                                <Form.Label>Cni</Form.Label>
                                                                <Form.Control type="name" name="prenom" placeholder="Tapez votre prenom" value={cni} onChange={e => setCni(e.target.value)} className="form-control" />
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
                                                                <Form.Label> Email</Form.Label>
                                                                <Form.Control type="name" name="province" placeholder="Tapez votre province" value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
                                                        </Form.Group>
                                                </Row>
                                                <Form.Label> Types demandes</Form.Label>
                                                <div className="card flex justify-content-center">
                                                        <Dropdown value={selectedTypesDemandes} onChange={(e) => setSelectedTypesDemandes(e.value)} options={typesDemandes} optionLabel="DESCRIPTION_DEMANDE"
                                                                placeholder="Select a City" className="w-full md:w-14rem" />
                                                </div>
                                                <Form.Label> Province</Form.Label>
                                                <div className="card flex justify-content-center">
                                                        <Dropdown value={selectedProvinces} onChange={(e) => setSelectedProvinces(e.value)} options={allProvinces} optionLabel="PROVINCE_NAME"
                                                                placeholder="Select a City" className="w-full md:w-14rem" />
                                                </div>

                                                <Form.Label> Communes</Form.Label>
                                                <div className="card flex justify-content-center">
                                                        <Dropdown value={selectedCommunes} onChange={(e) => setSelectedCommunes(e.value)} options={allCommunes} optionLabel="COMMUNE_NAME"
                                                                placeholder="Select a City" className="w-full md:w-14rem" />
                                                </div>

                                                <Form.Label> Zones</Form.Label>
                                                <div className="card flex justify-content-center">
                                                        <Dropdown value={selectedZones} onChange={(e) => setSelectedZones(e.value)} options={allZones} optionLabel="ZONE_NAME"
                                                                placeholder="Select a City" className="w-full md:w-14rem" />
                                                </div>
                                                <Form.Label> Collines</Form.Label>
                                                <div className="card flex justify-content-center">
                                                        <Dropdown value={selectedCollines} onChange={(e) => setSelectedCollines(e.value)} options={allCollines} optionLabel="COLLINE_NAME"
                                                                placeholder="Select a City" className="w-full md:w-14rem" />
                                                </div>
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
                                                        {/* <div className="col-md-6">
                                                                <div className="input-group">
                                                                        <div className="input-group-prepend">
                                                                                <label className="input-group-text" for="inputGroupSelect01">Choisir</label>
                                                                        </div>
                                                                        <select className="custom-select" value={selectedProvinces} onChange={(e) => onHandleChange(e)} name="PROVINCE_NAME" id="PROVINCE_ID">
                                                                                {allProvinces.map((option) => {
                                                                                        return (
                                                                                                <option key={option.PROVINCE_ID} value={option.PROVINCE_NAME}>
                                                                                                        {option.PROVINCE_NAME}
                                                                                                </option>
                                                                                        );
                                                                                })}

                                                                        </select>
                                                                </div>

                                                        </div> */}
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


