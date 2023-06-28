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

import {
        Card,
        Container,
        Row,
        Col
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
        const [allRequerants, setAllRequerants] = useState([])
        console.log(allRequerants)

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

                                                                </div>
                                                        </div>
                                                </Card.Header>
                                                <Card.Body>
                                                        <DataTable value={allRequerants} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                                                                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                                                                currentPageReportTemplate="{first} to {last} of {totalRecords}" >
                                                                <Column field="ID_REQUERENT" header="Name" style={{ width: '25%' }}></Column>
                                                                <Column field="NOM" header="NOM" style={{ width: '25%' }}></Column>
                                                                <Column field="PRENOM" header="PRENOM" style={{ width: '25%' }}></Column>
                                                                <Column field="LIEU_NAISSANCE" header="LIEU DE NAISSANCE" style={{ width: '25%' }}></Column>
                                                                <Column field="NOM_PERE" header="NOM DU PERE" style={{ width: '25%' }}></Column>
                                                                <Column field="NOM_MERE" header="NOM DE LA MERE" style={{ width: '25%' }}></Column>
                                                                <Column field="NATIONALITE" header="NATIONALITE" style={{ width: '25%' }}></Column>
                                                                <Column field="EMAIL" header="EMAIL" style={{ width: '25%' }}></Column>
                                                        </DataTable>
                                                </Card.Body>
                                        </Card>
                                </Col>
                        </Row>
                </Container>

        )
}