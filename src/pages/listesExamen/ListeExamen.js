import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { fetchApi } from "../helpers/fetchApi";

export default function ListeExamen() {
        const [allQuestion, setAllQuestion] = useState([])
        console.log(allQuestion)

        useEffect(() => {
                (async () => {
                        try {
                                const response = await fetchApi("/examen/question")
                                setAllQuestion(response.result)
                        }
                        catch (error) {
                                console.log(error)
                        }
                })()
        }, [])

        return (
                <div>
                        <h1>ListeExamen</h1>
                        <div>
                                <DataTable value={allQuestion} paginator rows={5} sortMode="multiple" rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minWidth: '50rem' }}>
                                        <Column field="CODE" header="CODE" style={{ width: '25%' }} sortable ></Column>
                                        <Column field="details.QUESTION" header="QUESTION" style={{ width: '25%' }} sortable ></Column>
                                        <Column field="details.QUESTION_LANG" header="QUESTION_LANG" style={{ width: '25%' }} sortable ></Column>
                                        <Column field="details.NOTE" header="NOTE" style={{ width: '25%' }} sortable ></Column>
                                        <Column field="COTATION" header="COTATION" style={{ width: '25%' }} sortable ></Column>
                                        <Column field="details.IMAGE" header="IMAGE" style={{ width: '25%' }} sortable ></Column>
                                </DataTable>
                        </div>
                </div>
        )
}