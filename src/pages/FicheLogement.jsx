import React from 'react'
import { useParams } from "react-router-dom";
import Carrousel from '../components/Carrousel/Carrousel';
import logings from "../data/logements.json";
// import { Redirect } from "react-router-dom";
// import Error from './pages/Error'
import Tags from "../components/Tag/Tag";
import DropDown from "../components/Dropdown/Dropdown";
import User from "../components/User/User";
import Rating from "../components/Rating/Rating";

function FicheLogement ({title, pictures}) {
	const { logingId } = useParams();
	console.log (logingId)
	const loging = logings.find((loging) => loging.id === logingId);

	// { loging.id === !logingId ? <Redirect to={<Error />} /> : null }
	

		return (
			<div>
				<Carrousel images={loging.pictures} />
				<h1 className='title'>{loging.title}</h1>
				<h2 className='location'>{loging.location}</h2>
				<div>
					{loging.tags.map((tag, index) => (
						<Tags key={index} tags={tag} />
					))}
				</div>
				<div><User host={loging.host.name} picture={loging.host.picture} /></div>
				<div><Rating rating={loging.rating} /></div>
				<div><DropDown title="Description" content={loging.description} /></div>
				<div><DropDown title="Équipements" content={loging.equipments} /></div>
			</div>
		)
}

export default FicheLogement