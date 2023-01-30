import React from 'react'
import { useParams } from "react-router-dom";
import Carrousel from '../components/Carrousel/Carrousel';
import logings from "../data/logements.json";
// import { Redirect } from "react-router-dom";
// import Error from './pages/Error'

function FicheLogement ({title, pictures}) {
	const { logingId } = useParams();
	console.log (logingId)
	const loging = logings.find((loging) => loging.id === logingId);

	// { loging.id === !logingId ? <Redirect to={<Error />} /> : null }
	

		return (
			<div>
				<Carrousel images={loging.pictures} />
				<h1>{loging.title}</h1>
				<h2>{loging.location}</h2>
			</div>
		)
}

export default FicheLogement