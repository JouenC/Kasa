import React from 'react'
import { useParams } from "react-router-dom";
import Carrousel from '../components/Carrousel/Carrousel';
import logings from "../data/logements.json";
import Error from '../pages/Error'
import Tags from "../components/Tag/Tag";
import DropDown from "../components/Dropdown/Dropdown";
import DropdownLi from "../components/Dropdown/DropdownLi";
import User from "../components/User/User";
import Rating from "../components/Rating/Rating";


function FicheLogement ({title, pictures}) {
	const { logingId } = useParams();
	const loging = logings.find((loging) => loging.id === logingId);

	if (loging) {
		return (
			<div className='ficheLogement'>
				<Carrousel images={loging.pictures} />
				<div className='element'>
					<div className='blockTitle'>
						<h1 className='element__title'>
							{loging.title}
						</h1>
						<h2 className='element__location'>
							{loging.location}
						</h2>
						<div className='element__tags'>
							{loging.tags.map((tag, index) => (
								<Tags key={index} tags={tag} />
							))}
						</div>
					</div>
					<div className='element__user'>
						<User host={loging.host.name} picture={loging.host.picture} />
						<div>
							<Rating rating={loging.rating} />
						</div>
					</div>
				</div>
				<div className='dropdownLoging'>
					<DropDown title="Description" content={loging.description} />
					<DropdownLi title="Équipements" content={loging.equipments} />
				</div>
			</div>
		)
} 	else {
		return (
			<Error/>)
}}

export default FicheLogement