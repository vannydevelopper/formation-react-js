import React, { useEffect, useState } from "react";
import axios from "axios"
import "./Home.css"
import { Link } from "react-router-dom";

export default function Home(){
        const [personnes, setPersonne] = useState([])

        const allData = async () =>{
                const response = await axios.get("http://localhost:3000/personne");
                setPersonne(response.data)
        }

        const deletePersonne = (personne) =>{
                console.log(personne)
                if(window.confirm("Voulez vraiment supprimer cette personne?")){
                        axios.delete(`http://localhost:3000/personne/${personne.ID_PERSONNE}`)
                        setTimeout(()=>allData(),500)
                }
        }

        useEffect(()=>{
                allData()
        },[])
        return(
                <div style={{marginTop:"150px"}}>
                        <Link to="/addPersonne">
                                <button className="btn btn-contact">Ajout Personne</button>
                        </Link>
                        
                        <table className="styled-table">
                                <thead>
                                        <tr>
                                                <th style={{textAlign:"center"}}>Numero</th>
                                                <th style={{textAlign:"center"}}>Nom</th>
                                                <th style={{textAlign:"center"}}>Prenom</th>
                                                <th style={{textAlign:"center"}}>Telephone</th>
                                                <th style={{textAlign:"center"}}>Province</th>
                                                <th style={{textAlign:"center"}}>Commune</th>
                                                <th style={{textAlign:"center"}}>Quartier</th>
                                                <th style={{textAlign:"center"}}>Options</th>
                                        </tr>
                                </thead>
                                <tbody>
                                        {personnes.map((personne, index)=>{
                                                return(
                                                        <tr key={personne.id}>
                                                                <th scope="row">{index+1}</th>
                                                                <td>{personne.NOM}</td>
                                                                <td>{personne.PRENOM}</td>
                                                                <td>{personne.TEL}</td>
                                                                <td>{personne.PROVINCE}</td>
                                                                <td>{personne.COMMUNE}</td>
                                                                <td>{personne.QUARTIER}</td>
                                                                <td>
                                                                        <Link to={`/update/${personne}`}>
                                                                                <button className="btn btn-edit">Edit</button>
                                                                        </Link>
                                                                        <button className="btn btn-delete" onClick={()=>deletePersonne(personne)}>Delete</button>
                                                                        <Link>
                                                                                <button className="btn btn-View">View</button>
                                                                        </Link>
                                                                </td>
                                                        </tr>
                                                )
                                        })}
                                </tbody>
                        </table>
                </div>
        )
}