import React, { useEffect, useState } from "react";
import axios from "axios"
import "./Home.css"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Row } from 'react-bootstrap';

export default function Home() {
        const [personnes, setPersonne] = useState([])

        const allData = async () => {
                const response = await axios.get("http://localhost:3000/personne");
                setPersonne(response.data)
        }

        const deletePersonne = (personne) => {
                console.log(personne)
                if (window.confirm("Voulez vraiment supprimer cette personne?")) {
                        axios.delete(`http://localhost:3000/personne/${personne.ID_PERSONNE}`)
                        setTimeout(() => allData(), 500)
                }
        }

        useEffect(() => {
                allData()
        }, [])
        return (
                <div style={{ marginTop: "150px" }}>
                        <form className="container mt-3 mb-3">
                                <Row className="mb-3">
                                        <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                                                <Link to="/map">
                                                        <button type="submit" className="me-4 btn btn-success btn-lg btn-block">Carte</button>
                                                </Link>

                                                <Link to="/addPersonne">
                                                        <button type="submit" className="me-4 btn btn-success btn-lg btn-block">Ajout Personne</button>
                                                </Link>
                                        </Form.Group>
                                </Row>
                        </form>



                        <table className="styled-table">
                                <thead>
                                        <tr>
                                                <th style={{ textAlign: "center" }}>Numero</th>
                                                <th style={{ textAlign: "center" }}>Nom</th>
                                                <th style={{ textAlign: "center" }}>Prenom</th>
                                                <th style={{ textAlign: "center" }}>Telephone</th>
                                                <th style={{ textAlign: "center" }}>Province</th>
                                                <th style={{ textAlign: "center" }}>Commune</th>
                                                <th style={{ textAlign: "center" }}>Quartier</th>
                                                <th style={{ textAlign: "center" }}>Options</th>
                                        </tr>
                                </thead>
                                <tbody>
                                        {personnes.map((personne, index) => {
                                                return (
                                                        <tr key={personne.ID_PERSONNE}>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>{personne.NOM}</td>
                                                                <td>{personne.PRENOM}</td>
                                                                <td>{personne.TEL}</td>
                                                                <td>{personne.PROVINCE}</td>
                                                                <td>{personne.COMMUNE}</td>
                                                                <td>{personne.QUARTIER}</td>
                                                                <td>
                                                                        <Row className="mb-3">
                                                                                <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                                                                                        <button type="submit" onClick={() => deletePersonne(personne)} className="me-4 btn btn-success btn-lg btn-block">Delete</button>
                                                                                </Form.Group>
                                                                                <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                                                                                        <Link to={`/update/${personne.ID_PERSONNE}`}>
                                                                                                <button type="submit" className="me-4 btn btn-success btn-lg btn-block">Edit</button>
                                                                                        </Link>
                                                                                </Form.Group>
                                                                                {/* <button type="submit" onClick={()=>alert(personne)} className="me-4 btn btn-success btn-lg btn-block">Edit</button> */}

                                                                                {/* <Form.Group controlId="formGridCheckbox" className="col col-sm-6">
                                                                                        <Link to={`/update`}>
                                                                                                <button type="submit" className="me-4 btn btn-success btn-lg btn-block">View</button>
                                                                                        </Link>
                                                                                </Form.Group> */}
                                                                        </Row>
                                                                </td>
                                                        </tr>
                                                )
                                        })}
                                </tbody>
                        </table>
                </div>
        )
}