import React, { useCallback, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { fetchApi } from "../helpers/fetchApi";
import Dropdown from 'react-bootstrap/Dropdown'
import { Modal, Button } from 'react-bootstrap';

export default function ListeExamen() {
        const [questionDetails, setQuestionDetails] = useState([])

        //Open modal
        const [openQuestionModal, setOpenQuestionModal] = useState(false);
        const handleCloseModal = () => setOpenQuestionModal(false);
        const handleShowModal = () => setOpenQuestionModal(true);

        const [idQuestionaire, setIdQuestionaire] = useState(null)
        const [allQuestion, setAllQuestion] = useState([])
        console.log(allQuestion)
        const [selectedReponse, setSelectedReponse] = useState(null)
        const [countQuestion, setCountQuestion] = useState(null)

        const handleShowQuestion = (rowData) => {
                handleShowModal()
                setIdQuestionaire(rowData.ID_EXAMEN_QUESTION)
        };

        const countNombreReponse = useCallback(
                async (id) => {
                        try {
                                const res = await fetchApi(`/examen/question/count/${id}`)
                                console.log(res.result)
                                setCountQuestion(res.result)
                        }
                        catch (error) {
                                console.log(error)
                        }
                }, [questionDetails]
        )


        const options = (rowData) => {
                return (
                        <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Action
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => handleShowQuestion(rowData)}>Voir Reponse</Dropdown.Item>
                                </Dropdown.Menu>
                        </Dropdown>
                );
        }


        const optionsCount = (rowData) => {
                countNombreReponse(rowData.ID_EXAMEN_QUESTION)
                return (
                        <button onClick={() => handleShowQuestion(rowData)}><div>{countQuestion}</div></button>

                )
        }

        useEffect(() => {
                (async () => {
                        try {
                                const response = await fetchApi("/examen/question")
                                setQuestionDetails(response.result[0].details)
                        }
                        catch (error) {
                                console.log(error)
                        }
                })()
        }, [])

        useEffect(() => {
                (async () => {
                        if (idQuestionaire) {
                                const res = await fetchApi(`/examen/question/reponse/${idQuestionaire}`)
                                setAllQuestion(res.result)
                        }
                })()
        }, [idQuestionaire])

        return (
                <div>
                        <h1>ListeExamen</h1>
                        <div>
                                <DataTable value={questionDetails} paginator rows={5} sortMode="multiple" rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                                        <Column field="QUESTION" header="QUESTION" style={{ width: '25%' }} sortable ></Column>
                                        <Column field="QUESTION_LANG" header="QUESTION_LANG" style={{ width: '25%' }} sortable ></Column>
                                        <Column field="NOTE" header="NOTE" style={{ width: '25%' }} sortable ></Column>
                                        <Column field="ID_EXAMEN_QUESTION" header="Reponse" style={{ width: '25%' }} body={optionsCount} showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} />
                                        <Column field="ID_EXAMEN_QUESTION" header="OPTIONS" style={{ minWidth: '6rem' }} body={options} showFilterMenu={false} filterMenuStyle={{ width: '14rem' }} />
                                </DataTable>
                        </div>
                        <Modal show={openQuestionModal} onHide={handleCloseModal}>
                                <Modal.Header closeButton>
                                        <Modal.Title>Statut</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                        <div>
                                                <DataTable value={allQuestion} tableStyle={{ minWidth: '50rem' }}>
                                                        <Column field="ARCESSION" header="#"></Column>
                                                        <Column field="REPONSE" header="REPONSE"></Column>
                                                </DataTable>
                                        </div>
                                        {/* <Form.Select name="REPONSE" id="" onChange={(e) => setSelectedReponse(e.target.value)} >
                                                <option>Séléctionner</option>
                                                {allQuestion.map((option) => {
                                                        return (
                                                                <option value={option.ID_QUESTION_REPONSE}> {option.REPONSE}</option>
                                                        );
                                                })}
                                        </Form.Select> */}
                                </Modal.Body>

                                <Modal.Footer>
                                        <Button variant="secondary" onClick={handleCloseModal}>
                                                Valider
                                        </Button>
                                        <Button variant="warning" onClick={handleCloseModal}>
                                                Close
                                        </Button>
                                </Modal.Footer>
                        </Modal>
                </div>
        )
}