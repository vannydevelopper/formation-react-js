import React, { useState } from "react";
import "./EditPersonne.css"
import { Link, useParams } from "react-router-dom";
import axios from "axios"

export default function EditPersonne(){
        const [nom, setNom] = useState("")
        const [prenom, setPrenom] = useState("")
        const [telephone, setTelephone] = useState("")
        const [province, setProvince] = useState("")
        const [commune, setCommune] = useState("")
        const [quartier, setQuartier] = useState("")

        const {personne} = useParams()
        console.log(personne)

      

        const handleSubmit = async () =>{
                try{
                        await axios.post("http://localhost:3000/personne/ajout",{
                                NOM : nom,
                                PRENOM : prenom,
                                TEL:telephone,
                                PROVINCE:province,
                                COMMUNE: commune ,
                                QUARTIER:quartier
                        });
                }
                catch(error){
                        console.log(error)
                }
                setTimeout(()=>("/"), 500)
        }

        
       
        return(
                <div style={{marginTop:"100px"}}>
                        <form
                                style={{
                                        margin:"auto",
                                        padding:"15px",
                                        maxWidth:"400px",
                                        alignContent:"center",
                                        alignItems:"center",
                                        justifyContent:"center"
                                }}
                                onSubmit={handleSubmit}
                        >
                                <label htmlFor="name">Nom</label>
                                <input
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        placeholder="Tapez votre nom"
                                        value={nom}
                                        onChange={e => setNom(e.target.value)}
                                />
                                 <label htmlFor="name">Prenom</label>
                                <input
                                        type="text"
                                        id="prenom"
                                        name="prenom"
                                        placeholder="Tapez votre prenom"
                                        value={prenom}
                                        onChange={e => setPrenom(e.target.value)}
                                />
                                 <label htmlFor="name">Telephone</label>
                                <input
                                        type="number"
                                        id="telephone"
                                        name="telephone"
                                        placeholder="Tapez votre telephone"
                                        value={telephone}
                                        onChange={e => setTelephone(e.target.value)}
                                />
                                 <label htmlFor="name">Province</label>
                                <input
                                        type="text"
                                        id="province"
                                        name="province"
                                        placeholder="Tapez votre province"
                                        value={province}
                                        onChange={e => setProvince(e.target.value)}
                                />
                                 <label htmlFor="name">Commune</label>
                                <input
                                        type="text"
                                        id="commune"
                                        name="commune"
                                        placeholder="Tapez votre commune"
                                        value={commune}
                                        onChange={e => setCommune(e.target.value)}
                                />
                                 <label htmlFor="name">Quartier</label>
                                <input
                                        type="text"
                                        id="quartier"
                                        name="quartier"
                                        placeholder="Tapez votre quartier"
                                        value={quartier}
                                        onChange={e => setQuartier(e.target.value)}
                                />
                                <input type="submit" value="save"/>
                                <Link to="/">
                                        <input type="submit" value="Go Back"/>
                                </Link>

                        </form>
                </div>
        )
}