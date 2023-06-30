import React, { useEffect, useState } from "react";
import "./EditPersonne.css"
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, InputGroup, Row } from 'react-bootstrap';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { fetchApi } from "./helpers/fetchApi"
import { Dropdown } from 'primereact/dropdown';



export default function EditPersonne() {
        const [nom, setNom] = useState("")
        const [prenom, setPrenom] = useState("")
        const [date, setDate] = useState("")
        const [lieuNaissance, setLieuNaissance] = useState("")
        const [nomPere, setNomPere] = useState("")
        const [nomMere, setNomMere] = useState("")
        const [nationalite, setNationalite] = useState("")
        const [cni, setCni] = useState("")
        const [telephone, setTelephone] = useState("")
        const [email, setEmail] = useState("")

        //dropdown Provinces
        const [allProvinces, setAllProvinces] = useState([])
        const [selectedProvinces, setSelectedProvinces] = useState(null);

        //dropdown Communes
        const [allCommunes, setAllCommunes] = useState([])
        const [selectedCommunes, setSelectedCommunes] = useState(null);

        //dropdown Zones
        const [allZones, setAllZones] = useState([])
        const [selectedZones, setSelectedZones] = useState(null);

        //dropdown Collines
        const [allCollines, setAllCollines] = useState([])
        const [selectedCollines, setSelectedCollines] = useState(null);

        //dropdown Type de demandes
        const [typesDemandes, setTypesDemandes] = useState([])
        const [selectedTypesDemandes, setSelectedTypesDemandes] = useState(null);

        const [images, setImages] = useState(null);
        const onImageChange = (event) => {

                if (event.target.files && event.target.files[0]) {
                        let img = event.target.files[0];
                        setImages(img)
                }
        }


        const [imagesCni, setImagesCni] = useState(null);
        const onImageCniChange = (event) => {
                if (event.target.files && event.target.files[0]) {
                        let img = event.target.files[0];
                        // setImagesCni(URL.createObjectURL(img))
                        setImagesCni(img)
                }
        }




        const navigate = useNavigate()

        const handleSubmit = async (e) => {
                console.log("hello")
                try {
                        e.preventDefault()

                        const form = new FormData()
                        form.append('NOM', nom)
                        form.append('PRENOM', prenom)
                        form.append('DATE_NAISSANCE', date)
                        form.append('LIEU_NAISSANCE', lieuNaissance)
                        form.append('NOM_PERE', nomPere)
                        form.append('NOM_MERE', nomMere)
                        form.append('NATIONALITE', nationalite)
                        form.append('CNI', cni)
                        form.append('TYPE_CNI', 5646)
                        form.append('STATUS', 1)
                        form.append('TYPE_DEMANDE_PERMIS', selectedTypesDemandes.ID_TYPE_DEMANDE_PERMIS)

                        form.append('PROVINCE_ID', selectedProvinces.PROVINCE_ID)
                        form.append('COMMUNE_ID', selectedCommunes.COMMUNE_ID)
                        form.append('ZONE_ID', selectedZones.ZONE_ID)
                        form.append('COLLINE_ID', selectedCollines.COLLINE_ID)

                        form.append('EMAIL', email)
                        form.append('TELEPHONE', telephone)
                        form.append('PHOTO_PASSPORT', images)
                        form.append('PHOTOCOPIE_CNI', imagesCni)

                        console.log(form)

                        const userData = await fetchApi("/auth/users", {
                                method: "POST",
                                body: form
                        })



                        // const userData = await fetchApi("/auth/users", {
                        //         method: "POST",
                        //         headers: { "Content-Type": "application/json" },
                        //         body: JSON.stringify({
                        //                 NOM: nom,
                        //                 // CODE_REQUERANT: 45,
                        //                 PRENOM: prenom,
                        //                 DATE_NAISSANCE: date,
                        //                 LIEU_NAISSANCE: lieuNaissance,
                        //                 NOM_PERE: nomPere,
                        //                 NOM_MERE: nomMere,
                        //                 NATIONALITE: nationalite,
                        //                 CNI: cni,
                        //                 TYPE_CNI: 5646,
                        //                 STATUS: 1,
                        //                 // ID_ECOLE_THEORIE,
                        //                 // ID_ECOLE_PRATIQUE,
                        //                 // EMPRUNTE_CODE,
                        //                 // APTITUDE_PHYSIQUE,
                        //                 TYPE_DEMANDE_PERMIS: selectedTypesDemandes.ID_TYPE_DEMANDE_PERMIS,
                        //                 // ATTESTATION_PERTE,
                        //                 // LETTRE_SOUS_COUVERT,
                        //                 PROVINCE_ID: selectedProvinces.PROVINCE_ID,
                        //                 COMMUNE_ID: selectedCommunes.COMMUNE_ID,
                        //                 ZONE_ID: selectedZones.ZONE_ID,
                        //                 COLLINE_ID: selectedCollines.COLLINE_ID,
                        //                 EMAIL: email,
                        //                 TELEPHONE: telephone,
                        //                 PHOTO_PASSPORT:images,
                        //                 PHOTOCOPIE_CNI:imagesCni
                        //         }),

                        // });
                        navigate('/')
                } catch (error) {
                        console.log(error)
                }

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
                                        <form className="container mt-3 mb-3" onSubmit={handleSubmit}>
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
                                                                <Form.Control type="name" name="province" placeholder="Tapez votre province" value={date} onChange={e => setDate(e.target.value)} className="form-control" />
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
                                                <div>
                                                        <img src={images} />
                                                        <h1>Photo passport</h1>
                                                        <input type="file" name="myImage" onChange={onImageChange} />
                                                </div>

                                                <div>
                                                        <img src={imagesCni} />
                                                        <h1>Photo carte d'identite</h1>
                                                        <input type="file" name="myImage" onChange={onImageCniChange} />
                                                </div>

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
                                                <button type="buttton" className="me-4 btn btn-success btn-lg btn-block">Enregistrer</button>
                                                <Row className="mb-3">
                                                        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">

                                                                <Link to="/">
                                                                        <button type="submit" className="me-4 btn btn-success btn-lg btn-block">Go back</button>
                                                                </Link>
                                                        </Form.Group>
                                                </Row>


                                        </form>
                                </div>
                        </Container>
                </>

        )
}


