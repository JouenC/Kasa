import landscape from "../assets/MaskGroup.svg"
import Card from "../components/Card/Card"

function Home () {
	return (
		<div>
			<div className="home">
				<img src={landscape} alt="paysage de mer"  className="home__landscape" />
				<div className="home__slogan">
					Chez vous, partout et ailleurs
				</div>
				
			</div>
			<div>
				<Card/>
			</div>
		</div>
	)
}

export default Home