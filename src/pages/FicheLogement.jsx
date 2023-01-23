import { useParams } from "react-router-dom";
import logings from "../data/logements.json";
// import Slider from "../components/Slider/Slider"

function FicheLogement ({title, pictures}) {
	const { logingId } = useParams();
	const loging = logings.find((loging) => loging.id === logingId);
		return (
			<div>
				<h1>{loging.title}</h1>
				{/* <Slider slides={loging.pictures}/> */}
			</div>
		)
}

export default FicheLogement