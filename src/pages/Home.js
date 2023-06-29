import React, { useEffect, useState } from "react";
// import axios from "axios"
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";


import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { fetchApi } from "./helpers/fetchApi"
import Dropdown from 'react-bootstrap/Dropdown'

import {
        Card,
        Container,
        Row,
        Col
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
        const [allRequerants, setAllRequerants] = useState([])


        const options = (rowData) => {
                return (
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Dropdown Button
                        </Dropdown.Toggle>
        
                        <Dropdown.Menu>
                            {/* <Dropdown.Item>Activer</Dropdown.Item> */}
                            <Dropdown.Item href="/update">Modifier</Dropdown.Item>
                            {/* <Dropdown.Item onClick={() => deleteRequerant(rowData.ID_REQUERENT)}> Supprimer</Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>
                );
            }

        useEffect(() => {
                (async () => {
                        try {
                                const response = await fetchApi("/auth/users")
                                setAllRequerants(response.result)
                        }
                        catch (error) {
                                console.log(error)
                        }
                })()
        }, [])

        return (
                <Container fluid>
                        <Row>
                                <Col md="12">
                                        <Card className="strpied-tabled-with-hover">
                                                <Card.Header>
                                                        <div className="row">
                                                                <div className="col-md-10">
                                                                </div>
                                                                <div className="col-md-2">
                                                                        <Link to="/addPersonne">
                                                                                <button type="button" className="btn-fill btn btn-primary" >Nouvelle</button>
                                                                        </Link>
                                                                        <Link to="/listeExo">
                                                                                <button type="button" className="btn-fill btn btn-primary" ></button>
                                                                        </Link>
                                                                </div>
                                                        </div>
                                                </Card.Header>
                                                <Card.Body>
                                                        {/* <div style={{ marginTop: "150px" }}> */}
                                                                <DataTable value={allRequerants} paginator rows={5} sortMode="multiple" rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                                                                        <Column field="CNI" header="CNI" style={{ width: '25%' }} sortable ></Column>
                                                                        <Column field="CODE_REQUERANT" header="CODE REQUERANT" style={{ width: '25%' }} sortable ></Column>
                                                                        <Column field="NOM" header="CNI" style={{ width: '25%' }} sortable ></Column>
                                                                        <Column field="PRENOM" header="CNI" style={{ width: '25%' }} sortable ></Column>
                                                                        <Column field="NOM_PERE" header="NOM PERE" style={{ width: '25%' }} sortable ></Column>
                                                                        <Column field="NOM_MERE" header="MERE" style={{ width: '25%' }} sortable ></Column>
                                                                        <Column field="DATE_NAISSANCE" header="DATENAISSANCE" style={{ width: '25%' }} sortable ></Column>
                                                                        <Column field="LIEU_NAISSANCE" header="LIEU NAISSANCE" style={{ width: '25%' }} sortable ></Column>
                                                                        <Column field="NATIONALITE" header="NATIONALITE" style={{ width: '25%' }} sortable ></Column>
                                                                        <Column field="ID_REQUERENT" header="OPTIONS" style={{ minWidth: '6rem' }} body={options} showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} />
                                                                </DataTable>
                                                        {/* </div> */}
                                                </Card.Body>
                                        </Card>
                                </Col>
                        </Row>
                </Container>

        )
}