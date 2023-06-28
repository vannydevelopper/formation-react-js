import React from "react";
// import axios from "axios"
import "./Home.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";


// import { FilterMatchMode, FilterOperator } from 'primereact/api';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

// import { Button } from 'primereact/button';
// import { RadioButton } from "primereact/radiobutton";
// import { Calendar } from 'primereact/calendar';

// react-bootstrap components
import {
        Card,
        Container,
        Row,
        Col
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
        // const [personnes, setPersonne] = useState([])

        // const allData = async () => {
        //         const response = await axios.get("http://localhost:3000/personne");
        //         setPersonne(response.data)
        // }

        // const deletePersonne = (personne) => {
        //         console.log(personne)
        //         if (window.confirm("Voulez vraiment supprimer cette personne?")) {
        //                 axios.delete(`http://localhost:3000/personne/${personne.ID_PERSONNE}`)
        //                 setTimeout(() => allData(), 500)
        //         }
        // }

        // useEffect(() => {
        //         allData()
        // }, [])
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
                                                        <DataTable paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}
                                                                paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                                                                currentPageReportTemplate="{first} to {last} of {totalRecords}" >
                                                                <Column field="name" header="Name" style={{ width: '25%' }}></Column>
                                                                <Column field="country.name" header="Country" style={{ width: '25%' }}></Column>
                                                                <Column field="company" header="Company" style={{ width: '25%' }}></Column>
                                                                <Column field="representative.name" header="Representative" style={{ width: '25%' }}></Column>
                                                        </DataTable>
                                                </Card.Body>
                                        </Card>
                                </Col>
                        </Row>
                </Container>

        )
}